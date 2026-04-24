import { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { 
  Users, UserPlus, UserCog, Calendar, Clock, 
  Edit, Trash2, Eye, CheckCircle, XCircle, 
  History, ShieldCheck, Banknote as BanknoteIcon,
  Briefcase as BriefcaseIcon, FileText as FileTextIcon,
  Phone as PhoneIcon, Mail as MailIcon, MapPin as MapPinIcon,
  Shield, Key, Lock, EyeOff,
  Truck, TrendingUp, DollarSign, Link, BarChart3, ArrowLeft
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog';
import { Textarea } from '@/components/ui/textarea';
import { DatePicker } from '@/components/ui/date-picker';
import { useToast } from '@/hooks/use-toast';
import { apiRequest } from '@/lib/queryClient';
import { formatCurrency } from '@/lib/utils';

interface Employee {
  id: string;
  name: string;
  email: string;
  phone: string;
  position: 'admin' | 'manager' | 'support' | 'accountant' | 'hr' | 'developer' | 'marketing' | 'sales' | 'operations' | 'logistics';
  department: string;
  branch: string;
  salary: number;
  hireDate: string;
  status: 'active' | 'inactive' | 'on_leave' | 'terminated';
  permissions: string[];
  attendanceRate: number;
  performanceScore: number;
  lastActive: string;
  address: string;
  emergencyContact: string;
  documents: string[];
}

interface Attendance {
  id: string;
  employeeId: string;
  employeeName: string;
  checkIn: string;
  checkOut: string;
  date: string;
  status: 'present' | 'absent' | 'late' | 'early_leave' | 'on_leave';
  hoursWorked: number;
  notes: string;
}

interface LeaveRequest {
  id: string;
  employeeId: string;
  employeeName: string;
  type: 'annual' | 'sick' | 'emergency' | 'unpaid';
  startDate: string;
  endDate: string;
  duration: number;
  status: 'pending' | 'approved' | 'rejected';
  reason: string;
  submittedAt: string;
}

// مكوّن إدارة المشرفين الفرعيين
function SubAdminsPanel() {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [showDialog, setShowDialog] = useState(false);
  const [editingSubAdmin, setEditingSubAdmin] = useState<any>(null);
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({
    name: '', phone: '', email: '', username: '', password: '',
    permissions: [] as string[], isActive: true
  });

  const allPermissions = [
    { key: 'manage_orders', label: 'إدارة الطلبات' },
    { key: 'manage_drivers', label: 'إدارة السائقين' },
    { key: 'manage_menu', label: 'إدارة المنتجات' },
    { key: 'manage_categories', label: 'إدارة التصنيفات' },
    { key: 'manage_customers', label: 'إدارة المستخدمين' },
    { key: 'manage_coupons', label: 'إدارة الكوبونات' },
    { key: 'manage_settings', label: 'إدارة الإعدادات' },
    { key: 'view_reports', label: 'عرض التقارير' },
  ];

  const { data: subAdmins, isLoading } = useQuery<any[]>({
    queryKey: ['/api/admin/sub-admins'],
  });

  const createMutation = useMutation({
    mutationFn: async (data: typeof form) => {
      const response = await apiRequest('POST', '/api/admin/sub-admins', data);
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/admin/sub-admins'] });
      toast({ title: 'تم إضافة المشرف بنجاح' });
      setShowDialog(false);
      resetForm();
    },
    onError: (err: any) => toast({ title: 'خطأ', description: err.message || 'فشل في إضافة المشرف', variant: 'destructive' }),
  });

  const updateMutation = useMutation({
    mutationFn: async ({ id, data }: { id: string; data: any }) => {
      const response = await apiRequest('PUT', `/api/admin/sub-admins/${id}`, data);
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/admin/sub-admins'] });
      toast({ title: 'تم تحديث المشرف بنجاح' });
      setShowDialog(false);
      resetForm();
    },
    onError: (err: any) => toast({ title: 'خطأ', description: err.message || 'فشل في التحديث', variant: 'destructive' }),
  });

  const deleteMutation = useMutation({
    mutationFn: async (id: string) => {
      const response = await apiRequest('DELETE', `/api/admin/sub-admins/${id}`);
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/admin/sub-admins'] });
      toast({ title: 'تم حذف المشرف' });
    },
    onError: () => toast({ title: 'خطأ في الحذف', variant: 'destructive' }),
  });

  const resetForm = () => {
    setForm({ name: '', phone: '', email: '', username: '', password: '', permissions: [], isActive: true });
    setEditingSubAdmin(null);
    setShowPassword(false);
  };

  const openEdit = (sub: any) => {
    setEditingSubAdmin(sub);
    const perms = typeof sub.permissions === 'string' ? JSON.parse(sub.permissions || '[]') : (sub.permissions || []);
    setForm({ name: sub.name, phone: sub.phone || '', email: sub.email || '', username: sub.username || '', password: '', permissions: perms, isActive: sub.isActive });
    setShowDialog(true);
  };

  const togglePermission = (key: string) => {
    setForm(prev => ({
      ...prev,
      permissions: prev.permissions.includes(key)
        ? prev.permissions.filter(p => p !== key)
        : [...prev.permissions, key]
    }));
  };

  const handleSubmit = () => {
    if (!form.name.trim()) return toast({ title: 'الاسم مطلوب', variant: 'destructive' });
    if (!form.phone.trim()) return toast({ title: 'رقم الهاتف مطلوب', variant: 'destructive' });
    if (!editingSubAdmin && !form.password) return toast({ title: 'كلمة المرور مطلوبة', variant: 'destructive' });
    if (editingSubAdmin) {
      const data: any = { name: form.name, phone: form.phone, email: form.email, username: form.username, permissions: form.permissions, isActive: form.isActive };
      if (form.password) data.password = form.password;
      updateMutation.mutate({ id: editingSubAdmin.id, data });
    } else {
      createMutation.mutate(form);
    }
  };

  if (isLoading) return <div className="py-8 text-center text-muted-foreground">جاري التحميل...</div>;

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="flex items-center gap-2"><Shield className="w-5 h-5" />إدارة المشرفين الفرعيين</CardTitle>
            <CardDescription>منح صلاحيات لوحة التحكم لأعضاء الفريق</CardDescription>
          </div>
          <Button onClick={() => { resetForm(); setShowDialog(true); }} className="gap-2">
            <UserPlus className="w-4 h-4" />
            إضافة مشرف
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        {!subAdmins || subAdmins.length === 0 ? (
          <div className="text-center py-12 text-muted-foreground">
            <Shield className="w-12 h-12 mx-auto mb-4 opacity-20" />
            <p>لا يوجد مشرفون فرعيون حتى الآن</p>
            <p className="text-sm">أضف مشرفين لمنحهم صلاحيات محددة في لوحة التحكم</p>
          </div>
        ) : (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>الاسم</TableHead>
                <TableHead>الهاتف</TableHead>
                <TableHead>الصلاحيات</TableHead>
                <TableHead>الحالة</TableHead>
                <TableHead>الإجراءات</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {subAdmins.map((sub: any) => {
                const perms = typeof sub.permissions === 'string' ? JSON.parse(sub.permissions || '[]') : (sub.permissions || []);
                return (
                  <TableRow key={sub.id}>
                    <TableCell>
                      <div className="font-medium">{sub.name}</div>
                      {sub.email && <div className="text-xs text-muted-foreground">{sub.email}</div>}
                    </TableCell>
                    <TableCell>{sub.phone}</TableCell>
                    <TableCell>
                      <div className="flex flex-wrap gap-1">
                        {perms.length === 0 ? (
                          <span className="text-xs text-muted-foreground">لا صلاحيات</span>
                        ) : perms.slice(0, 3).map((p: string) => (
                          <Badge key={p} variant="secondary" className="text-xs">
                            {allPermissions.find(ap => ap.key === p)?.label || p}
                          </Badge>
                        ))}
                        {perms.length > 3 && <Badge variant="outline" className="text-xs">+{perms.length - 3}</Badge>}
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant={sub.isActive ? 'default' : 'secondary'}>
                        {sub.isActive ? 'نشط' : 'معطل'}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline" onClick={() => openEdit(sub)}>
                          <Edit className="w-3 h-3" />
                        </Button>
                        <AlertDialog>
                          <AlertDialogTrigger asChild>
                            <Button size="sm" variant="outline" className="text-red-500 hover:text-red-700">
                              <Trash2 className="w-3 h-3" />
                            </Button>
                          </AlertDialogTrigger>
                          <AlertDialogContent>
                            <AlertDialogHeader>
                              <AlertDialogTitle>حذف المشرف</AlertDialogTitle>
                              <AlertDialogDescription>هل أنت متأكد من حذف "{sub.name}"؟ لا يمكن التراجع عن هذا الإجراء.</AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                              <AlertDialogCancel>إلغاء</AlertDialogCancel>
                              <AlertDialogAction className="bg-red-600 hover:bg-red-700" onClick={() => deleteMutation.mutate(sub.id)}>
                                حذف
                              </AlertDialogAction>
                            </AlertDialogFooter>
                          </AlertDialogContent>
                        </AlertDialog>
                      </div>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        )}
      </CardContent>

      <Dialog open={showDialog} onOpenChange={(open) => { setShowDialog(open); if (!open) resetForm(); }}>
        <DialogContent className="max-w-lg rtl">
          <DialogHeader>
            <DialogTitle>{editingSubAdmin ? 'تعديل المشرف' : 'إضافة مشرف جديد'}</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-2">
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1.5">
                <Label>الاسم <span className="text-red-500">*</span></Label>
                <Input value={form.name} onChange={(e) => setForm(p => ({ ...p, name: e.target.value }))} placeholder="اسم المشرف" />
              </div>
              <div className="space-y-1.5">
                <Label>رقم الهاتف <span className="text-red-500">*</span></Label>
                <Input value={form.phone} onChange={(e) => setForm(p => ({ ...p, phone: e.target.value }))} placeholder="967xxxxxxxx" />
              </div>
              <div className="space-y-1.5">
                <Label>البريد الإلكتروني</Label>
                <Input type="email" value={form.email} onChange={(e) => setForm(p => ({ ...p, email: e.target.value }))} placeholder="اختياري" />
              </div>
              <div className="space-y-1.5">
                <Label>كلمة المرور {!editingSubAdmin && <span className="text-red-500">*</span>}</Label>
                <div className="relative">
                  <Input
                    type={showPassword ? 'text' : 'password'}
                    value={form.password}
                    onChange={(e) => setForm(p => ({ ...p, password: e.target.value }))}
                    placeholder={editingSubAdmin ? "اتركها فارغة للإبقاء" : "كلمة مرور قوية"}
                    className="pl-9"
                  />
                  <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute left-2 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground">
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <Label className="flex items-center gap-2"><Key className="w-4 h-4" />الصلاحيات</Label>
              <div className="grid grid-cols-2 gap-2 border rounded-lg p-3">
                {allPermissions.map(({ key, label }) => (
                  <div key={key} className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id={`perm-${key}`}
                      checked={form.permissions.includes(key)}
                      onChange={() => togglePermission(key)}
                      className="rounded"
                    />
                    <label htmlFor={`perm-${key}`} className="text-sm cursor-pointer">{label}</label>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="sub-admin-active"
                checked={form.isActive}
                onChange={(e) => setForm(p => ({ ...p, isActive: e.target.checked }))}
                className="rounded"
              />
              <label htmlFor="sub-admin-active" className="text-sm cursor-pointer">الحساب نشط</label>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => { setShowDialog(false); resetForm(); }}>إلغاء</Button>
            <Button onClick={handleSubmit} disabled={createMutation.isPending || updateMutation.isPending}>
              {(createMutation.isPending || updateMutation.isPending) ? 'جاري الحفظ...' : (editingSubAdmin ? 'حفظ التغييرات' : 'إضافة المشرف')}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </Card>
  );
}

export default function AdminHRManagement() {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [searchTerm, setSearchTerm] = useState('');
  const [departmentFilter, setDepartmentFilter] = useState<string>('all');
  const [branchFilter, setBranchFilter] = useState<string>('all');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(null);
  const [showEmployeeDialog, setShowEmployeeDialog] = useState(false);
  const [activeTab, setActiveTab] = useState('employees');
  const [showAttendanceDialog, setShowAttendanceDialog] = useState(false);
  const [showLeaveDialog, setShowLeaveDialog] = useState(false);
  
  const [employeeForm, setEmployeeForm] = useState({
    name: '',
    email: '',
    phone: '',
    position: 'admin' as Employee['position'],
    department: 'management',
    branch: 'الفرع الرئيسي',
    salary: '',
    hireDate: new Date(),
    address: '',
    emergencyContact: '',
    permissions: ['view_dashboard', 'manage_orders']
  });

  const [attendanceForm, setAttendanceForm] = useState({
    employeeId: '',
    status: 'present' as Attendance['status'],
    notes: '',
    date: new Date()
  });

  const [leaveForm, setLeaveForm] = useState({
    employeeId: '',
    type: 'annual' as LeaveRequest['type'],
    startDate: new Date(),
    endDate: new Date(),
    reason: ''
  });

  // جلب الموظفين
  const { data: employees } = useQuery<Employee[]>({
    queryKey: ['/api/admin/employees'],
  });

  // جلب الحضور
  const { data: attendanceRecords } = useQuery<Attendance[]>({
    queryKey: ['/api/admin/attendance'],
  });

  // جلب طلبات الإجازة
  const { data: leaveRequests } = useQuery<LeaveRequest[]>({
    queryKey: ['/api/admin/leave-requests'],
  });

  // إضافة موظف جديد
  const addEmployeeMutation = useMutation({
    mutationFn: async (data: typeof employeeForm) => {
      const response = await apiRequest('POST', '/api/admin/employees', data);
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/admin/employees'] });
      toast({ title: 'تم إضافة الموظف بنجاح' });
      setShowEmployeeDialog(false);
      resetEmployeeForm();
    },
  });

  // تسجيل حضور
  const addAttendanceMutation = useMutation({
    mutationFn: async (data: typeof attendanceForm) => {
      const response = await apiRequest('POST', '/api/admin/attendance', data);
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/admin/attendance'] });
      toast({ title: 'تم تسجيل الحضور بنجاح' });
      setShowAttendanceDialog(false);
    },
  });

  // طلب إجازة
  const addLeaveMutation = useMutation({
    mutationFn: async (data: typeof leaveForm) => {
      const response = await apiRequest('POST', '/api/admin/leave-requests', data);
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/admin/leave-requests'] });
      toast({ title: 'تم إرسال طلب الإجازة بنجاح' });
      setShowLeaveDialog(false);
    },
  });

  // تحديث حالة طلب إجازة
  const updateLeaveStatusMutation = useMutation({
    mutationFn: async ({ id, status }: { id: string, status: string }) => {
      const response = await apiRequest('PUT', `/api/admin/leave-requests/${id}`, { status });
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/admin/leave-requests'] });
      toast({ title: 'تم تحديث حالة الطلب بنجاح' });
    },
  });

  const resetEmployeeForm = () => {
    setEmployeeForm({
      name: '',
      email: '',
      phone: '',
      position: 'admin',
      department: 'management',
      salary: '',
      hireDate: new Date(),
      address: '',
      emergencyContact: '',
      permissions: ['view_dashboard', 'manage_orders']
    });
  };

  return (
    <div className="p-6 space-y-6 bg-gray-50/50 min-h-screen rtl">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">إدارة الموارد البشرية</h1>
          <p className="text-gray-500 mt-1">إدارة شؤون الموظفين، الحضور، والإجازات</p>
        </div>
        <Button onClick={() => setShowEmployeeDialog(true)} className="gap-2">
          <UserPlus className="w-4 h-4" />
          إضافة موظف جديد
        </Button>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList className="grid w-full grid-cols-5 lg:w-[750px]">
          <TabsTrigger value="employees" className="gap-1 text-xs">
            <Users className="w-3 h-3" />
            الموظفين
          </TabsTrigger>
          <TabsTrigger value="attendance" className="gap-1 text-xs">
            <Clock className="w-3 h-3" />
            الحضور
          </TabsTrigger>
          <TabsTrigger value="leave" className="gap-1 text-xs">
            <Calendar className="w-3 h-3" />
            الإجازات
          </TabsTrigger>
          <TabsTrigger value="payroll" className="gap-1 text-xs">
            <BanknoteIcon className="w-3 h-3" />
            الرواتب
          </TabsTrigger>
          <TabsTrigger value="sub-admins" className="gap-1 text-xs">
            <Shield className="w-3 h-3" />
            المشرفون
          </TabsTrigger>
        </TabsList>

        <TabsContent value="employees">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>قائمة الموظفين</CardTitle>
                  <CardDescription>إدارة بيانات وصلاحيات الموظفين</CardDescription>
                </div>
                <div className="flex gap-2">
                  <Input 
                    placeholder="بحث عن موظف..." 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-64"
                  />
                  <Select value={departmentFilter} onValueChange={setDepartmentFilter}>
                    <SelectTrigger className="w-40">
                      <SelectValue placeholder="القسم" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">جميع الأقسام</SelectItem>
                      <SelectItem value="management">الإدارة</SelectItem>
                      <SelectItem value="it">تقنية المعلومات</SelectItem>
                      <SelectItem value="marketing">التسويق</SelectItem>
                      <SelectItem value="sales">المبيعات</SelectItem>
                      <SelectItem value="operations">العمليات</SelectItem>
                      <SelectItem value="support">الدعم الفني</SelectItem>
                      <SelectItem value="accounting">المحاسبة</SelectItem>
                      <SelectItem value="hr">الموارد البشرية</SelectItem>
                      <SelectItem value="logistics">الخدمات اللوجستية</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select value={branchFilter} onValueChange={setBranchFilter}>
                    <SelectTrigger className="w-40">
                      <SelectValue placeholder="الفرع" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">جميع الفروع</SelectItem>
                      <SelectItem value="main">الفرع الرئيسي</SelectItem>
                      <SelectItem value="north">فرع الشمال</SelectItem>
                      <SelectItem value="south">فرع الجنوب</SelectItem>
                      <SelectItem value="east">فرع الشرق</SelectItem>
                      <SelectItem value="west">فرع الغرب</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>الموظف</TableHead>
                    <TableHead>القسم / المنصب</TableHead>
                    <TableHead>الفرع</TableHead>
                    <TableHead>الحالة</TableHead>
                    <TableHead>تاريخ التعيين</TableHead>
                    <TableHead>الراتب</TableHead>
                    <TableHead className="text-left">إجراءات</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {employees?.filter(emp => {
                    const matchesSearch = emp.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                                        emp.email.toLowerCase().includes(searchTerm.toLowerCase());
                    const matchesDept = departmentFilter === 'all' || emp.department === departmentFilter;
                    const matchesBranch = branchFilter === 'all' || emp.branch === branchFilter;
                    return matchesSearch && matchesDept && matchesBranch;
                  }).map((employee) => (
                    <TableRow key={employee.id}>
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary">
                            {employee.name[0]}
                          </div>
                          <div>
                            <div className="font-medium">{employee.name}</div>
                            <div className="text-xs text-gray-500">{employee.email}</div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="capitalize">{employee.department}</div>
                        <div className="text-xs text-gray-500 capitalize">{employee.position}</div>
                      </TableCell>
                      <TableCell>
                        <div className="text-sm">{employee.branch}</div>
                      </TableCell>
                      <TableCell>
                        <Badge variant={employee.status === 'active' ? 'default' : 'secondary'}>
                          {employee.status === 'active' ? 'نشط' : employee.status === 'on_leave' ? 'في إجازة' : 'غير نشط'}
                        </Badge>
                      </TableCell>
                      <TableCell>{new Date(employee.hireDate).toLocaleDateString('ar-YE')}</TableCell>
                      <TableCell>{formatCurrency(employee.salary)}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Button variant="ghost" size="icon"><Eye className="w-4 h-4" /></Button>
                          <Button variant="ghost" size="icon"><Edit className="w-4 h-4" /></Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="attendance">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>سجل الحضور والإنصراف</CardTitle>
                <CardDescription>تتبع حضور وانصراف الموظفين يومياً</CardDescription>
              </div>
              <Button onClick={() => setShowAttendanceDialog(true)} variant="outline" className="gap-2">
                <Clock className="w-4 h-4" />
                تسجيل حضور يدوي
              </Button>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>الموظف</TableHead>
                    <TableHead>التاريخ</TableHead>
                    <TableHead>وقت الحضور</TableHead>
                    <TableHead>وقت الإنصراف</TableHead>
                    <TableHead>الحالة</TableHead>
                    <TableHead>ساعات العمل</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {attendanceRecords?.map((record) => {
                    const employee = employees?.find(e => e.id === record.employeeId);
                    return (
                      <TableRow key={record.id}>
                        <TableCell className="font-medium">{employee?.name || 'موظف سابق'}</TableCell>
                        <TableCell>{new Date(record.date).toLocaleDateString('ar-YE')}</TableCell>
                        <TableCell>{record.checkIn ? new Date(record.checkIn).toLocaleTimeString('ar-YE') : '-'}</TableCell>
                        <TableCell>{record.checkOut ? new Date(record.checkOut).toLocaleTimeString('ar-YE') : '-'}</TableCell>
                        <TableCell>
                          <Badge variant={record.status === 'present' ? 'default' : 'destructive'}>
                            {record.status === 'present' ? 'حاضر' : record.status === 'absent' ? 'غائب' : 'متأخر'}
                          </Badge>
                        </TableCell>
                        <TableCell>{record.hoursWorked || 0} ساعة</TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="leave">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>طلبات الإجازة</CardTitle>
                <CardDescription>مراجعة والموافقة على طلبات إجازات الموظفين</CardDescription>
              </div>
              <Button onClick={() => setShowLeaveDialog(true)} variant="outline" className="gap-2">
                <Calendar className="w-4 h-4" />
                تقديم طلب إجازة
              </Button>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>الموظف</TableHead>
                    <TableHead>نوع الإجازة</TableHead>
                    <TableHead>من</TableHead>
                    <TableHead>إلى</TableHead>
                    <TableHead>السبب</TableHead>
                    <TableHead>الحالة</TableHead>
                    <TableHead className="text-left">إجراءات</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {leaveRequests?.map((request) => {
                    const employee = employees?.find(e => e.id === request.employeeId);
                    return (
                      <TableRow key={request.id}>
                        <TableCell className="font-medium">{employee?.name || 'موظف سابق'}</TableCell>
                        <TableCell>
                          {request.type === 'annual' ? 'سنوية' : request.type === 'sick' ? 'مرضية' : 'طارئة'}
                        </TableCell>
                        <TableCell>{new Date(request.startDate).toLocaleDateString('ar-YE')}</TableCell>
                        <TableCell>{new Date(request.endDate).toLocaleDateString('ar-YE')}</TableCell>
                        <TableCell className="max-w-[200px] truncate">{request.reason}</TableCell>
                        <TableCell>
                          <Badge variant={request.status === 'approved' ? 'default' : request.status === 'pending' ? 'outline' : 'destructive'}>
                            {request.status === 'approved' ? 'مقبولة' : request.status === 'pending' ? 'قيد الانتظار' : 'مرفوضة'}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          {request.status === 'pending' && (
                            <div className="flex gap-2">
                              <Button 
                                size="sm" 
                                variant="outline" 
                                className="text-green-600 hover:text-green-700"
                                onClick={() => updateLeaveStatusMutation.mutate({ id: request.id, status: 'approved' })}
                              >
                                <CheckCircle className="w-4 h-4" />
                              </Button>
                              <Button 
                                size="sm" 
                                variant="outline" 
                                className="text-destructive"
                                onClick={() => updateLeaveStatusMutation.mutate({ id: request.id, status: 'rejected' })}
                              >
                                <XCircle className="w-4 h-4" />
                              </Button>
                            </div>
                          )}
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="payroll">
          <div className="space-y-6">
            {/* إحصائيات الرواتب */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-blue-100 rounded-lg">
                      <BanknoteIcon className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">إجمالي رواتب الموظفين</p>
                      <p className="text-lg font-bold text-blue-600">
                        {formatCurrency((employees || []).reduce((s, e) => s + (e.salary || 0), 0))}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-green-100 rounded-lg">
                      <Users className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">عدد الموظفين النشطين</p>
                      <p className="text-lg font-bold text-green-600">
                        {(employees || []).filter(e => e.status === 'active').length}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-orange-100 rounded-lg">
                      <Truck className="h-5 w-5 text-orange-600" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">تكاليف السائقين</p>
                      <p className="text-lg font-bold text-orange-600">مرتبطة بالتوصيل</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-purple-100 rounded-lg">
                      <TrendingUp className="h-5 w-5 text-purple-600" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">التكلفة الإجمالية</p>
                      <p className="text-lg font-bold text-purple-600">
                        {formatCurrency((employees || []).reduce((s, e) => s + (e.salary || 0), 0))}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* جدول رواتب الموظفين */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>مسير رواتب الموظفين</CardTitle>
                    <CardDescription>رواتب الشهر الحالي للموظفين المسجلين في النظام</CardDescription>
                  </div>
                  <Button variant="outline" size="sm" className="gap-2">
                    <BanknoteIcon className="w-4 h-4" />
                    تصدير كشف الرواتب
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                {!employees || employees.length === 0 ? (
                  <div className="text-center py-10 text-muted-foreground">
                    <Users className="h-12 w-12 mx-auto mb-3 opacity-30" />
                    <p>لا يوجد موظفون مسجلون بعد</p>
                    <p className="text-sm mt-1">أضف موظفين من تبويب "الموظفين" لعرض مسير الرواتب</p>
                  </div>
                ) : (
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>الموظف</TableHead>
                        <TableHead>القسم</TableHead>
                        <TableHead>المنصب</TableHead>
                        <TableHead>الراتب الأساسي</TableHead>
                        <TableHead>بدل الحضور</TableHead>
                        <TableHead>الإجمالي</TableHead>
                        <TableHead>الحالة</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {(employees || []).filter(e => e.status === 'active').map((emp) => {
                        const attendanceBonus = emp.attendanceRate >= 95 ? (emp.salary * 0.1) : 0;
                        const total = emp.salary + attendanceBonus;
                        return (
                          <TableRow key={emp.id}>
                            <TableCell>
                              <div>
                                <p className="font-medium">{emp.name}</p>
                                <p className="text-xs text-muted-foreground">{emp.phone}</p>
                              </div>
                            </TableCell>
                            <TableCell>{emp.department}</TableCell>
                            <TableCell>{emp.position}</TableCell>
                            <TableCell className="font-medium">{formatCurrency(emp.salary)}</TableCell>
                            <TableCell className="text-green-600">
                              {attendanceBonus > 0 ? `+${formatCurrency(attendanceBonus)}` : '-'}
                            </TableCell>
                            <TableCell className="font-bold text-blue-600">{formatCurrency(total)}</TableCell>
                            <TableCell>
                              <Badge variant="outline" className="bg-green-50 text-green-700">مكتمل</Badge>
                            </TableCell>
                          </TableRow>
                        );
                      })}
                    </TableBody>
                  </Table>
                )}
              </CardContent>
            </Card>

            {/* ربط مع الأقسام الأخرى */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card className="border-blue-200 hover:border-blue-400 transition-colors cursor-pointer">
                <CardContent className="p-5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-3 bg-blue-50 rounded-lg">
                        <Truck className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <p className="font-semibold">إدارة السائقين</p>
                        <p className="text-sm text-muted-foreground">رواتب وعمولات السائقين</p>
                      </div>
                    </div>
                    <ArrowLeft className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <div className="mt-3 pt-3 border-t">
                    <p className="text-xs text-muted-foreground">يتضمن: رسوم التوصيل + الحوافز</p>
                    <Button 
                      variant="link" 
                      className="p-0 h-auto text-blue-600 text-xs"
                      onClick={() => window.location.href = '/admin/drivers'}
                    >
                      الانتقال إلى إدارة السائقين ←
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-green-200 hover:border-green-400 transition-colors cursor-pointer">
                <CardContent className="p-5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-3 bg-green-50 rounded-lg">
                        <DollarSign className="h-6 w-6 text-green-600" />
                      </div>
                      <div>
                        <p className="font-semibold">التقارير المالية</p>
                        <p className="text-sm text-muted-foreground">تكاليف الموارد البشرية</p>
                      </div>
                    </div>
                    <ArrowLeft className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <div className="mt-3 pt-3 border-t">
                    <p className="text-xs text-muted-foreground">رواتب الموظفين ضمن نفقات المنصة</p>
                    <Button 
                      variant="link" 
                      className="p-0 h-auto text-green-600 text-xs"
                      onClick={() => window.location.href = '/admin/financial-reports'}
                    >
                      الانتقال إلى التقارير المالية ←
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-purple-200 hover:border-purple-400 transition-colors cursor-pointer">
                <CardContent className="p-5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-3 bg-purple-50 rounded-lg">
                        <BarChart3 className="h-6 w-6 text-purple-600" />
                      </div>
                      <div>
                        <p className="font-semibold">أداء الفرق</p>
                        <p className="text-sm text-muted-foreground">مؤشرات الأداء والكفاءة</p>
                      </div>
                    </div>
                    <ArrowLeft className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <div className="mt-3 pt-3 border-t">
                    <p className="text-xs text-muted-foreground">تقارير الطلبات وتقييمات السائقين</p>
                    <Button 
                      variant="link" 
                      className="p-0 h-auto text-purple-600 text-xs"
                      onClick={() => window.location.href = '/admin/detailed-reports'}
                    >
                      عرض تقارير الأداء ←
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="sub-admins">
          <SubAdminsPanel />
        </TabsContent>
      </Tabs>

      <Dialog open={showEmployeeDialog} onOpenChange={setShowEmployeeDialog}>
        <DialogContent className="max-w-2xl rtl">
          <DialogHeader>
            <DialogTitle>إضافة موظف جديد</DialogTitle>
            <CardDescription>أدخل بيانات الموظف الجديد لتعيينه في النظام</CardDescription>
          </DialogHeader>
          <div className="grid grid-cols-2 gap-4 py-4">
            <div className="space-y-2">
              <Label>الاسم الكامل</Label>
              <Input 
                value={employeeForm.name}
                onChange={(e) => setEmployeeForm({...employeeForm, name: e.target.value})}
              />
            </div>
            <div className="space-y-2">
              <Label>البريد الإلكتروني</Label>
              <Input 
                type="email"
                value={employeeForm.email}
                onChange={(e) => setEmployeeForm({...employeeForm, email: e.target.value})}
              />
            </div>
            <div className="space-y-2">
              <Label>رقم الهاتف</Label>
              <Input 
                value={employeeForm.phone}
                onChange={(e) => setEmployeeForm({...employeeForm, phone: e.target.value})}
              />
            </div>
            <div className="space-y-2">
              <Label>المنصب</Label>
              <Select 
                value={employeeForm.position}
                onValueChange={(v: Employee['position']) => setEmployeeForm({...employeeForm, position: v})}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="admin">مدير نظام</SelectItem>
                  <SelectItem value="manager">مدير قسم</SelectItem>
                  <SelectItem value="support">موظف دعم</SelectItem>
                  <SelectItem value="accountant">محاسب</SelectItem>
                  <SelectItem value="hr">موظف موارد بشرية</SelectItem>
                  <SelectItem value="developer">مطور برمجيات</SelectItem>
                  <SelectItem value="marketing">مسوق</SelectItem>
                  <SelectItem value="sales">مندوب مبيعات</SelectItem>
                  <SelectItem value="operations">موظف عمليات</SelectItem>
                  <SelectItem value="logistics">موظف لوجستيات</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>القسم</Label>
              <Select 
                value={employeeForm.department}
                onValueChange={(v) => setEmployeeForm({...employeeForm, department: v})}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="management">الإدارة</SelectItem>
                  <SelectItem value="it">تقنية المعلومات</SelectItem>
                  <SelectItem value="marketing">التسويق</SelectItem>
                  <SelectItem value="sales">المبيعات</SelectItem>
                  <SelectItem value="operations">العمليات</SelectItem>
                  <SelectItem value="support">الدعم الفني</SelectItem>
                  <SelectItem value="accounting">المحاسبة</SelectItem>
                  <SelectItem value="hr">الموارد البشرية</SelectItem>
                  <SelectItem value="logistics">الخدمات اللوجستية</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>الفرع</Label>
              <Select 
                value={employeeForm.branch}
                onValueChange={(v) => setEmployeeForm({...employeeForm, branch: v})}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="الفرع الرئيسي">الفرع الرئيسي</SelectItem>
                  <SelectItem value="فرع الشمال">فرع الشمال</SelectItem>
                  <SelectItem value="فرع الجنوب">فرع الجنوب</SelectItem>
                  <SelectItem value="فرع الشرق">فرع الشرق</SelectItem>
                  <SelectItem value="فرع الغرب">فرع الغرب</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>الراتب الأساسي</Label>
              <Input 
                type="number"
                value={employeeForm.salary}
                onChange={(e) => setEmployeeForm({...employeeForm, salary: e.target.value})}
              />
            </div>
            <div className="space-y-2">
              <Label>تاريخ التعيين</Label>
              <DatePicker 
                date={employeeForm.hireDate}
                setDate={(date) => setEmployeeForm({...employeeForm, hireDate: date || new Date()})}
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowEmployeeDialog(false)}>إلغاء</Button>
            <Button onClick={() => addEmployeeMutation.mutate(employeeForm)}>إضافة الموظف</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog open={showAttendanceDialog} onOpenChange={setShowAttendanceDialog}>
        <DialogContent className="rtl">
          <DialogHeader>
            <DialogTitle>تسجيل حضور يدوي</DialogTitle>
            <CardDescription>تسجيل حالة حضور موظف لتاريخ محدد</CardDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label>الموظف</Label>
              <Select value={attendanceForm.employeeId} onValueChange={(v) => setAttendanceForm({...attendanceForm, employeeId: v})}>
                <SelectTrigger>
                  <SelectValue placeholder="اختر الموظف" />
                </SelectTrigger>
                <SelectContent>
                  {employees?.map(emp => (
                    <SelectItem key={emp.id} value={emp.id}>{emp.name}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>الحالة</Label>
              <Select value={attendanceForm.status} onValueChange={(v: Attendance['status']) => setAttendanceForm({...attendanceForm, status: v})}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="present">حاضر</SelectItem>
                  <SelectItem value="absent">غائب</SelectItem>
                  <SelectItem value="late">متأخر</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>ملاحظات</Label>
              <Textarea 
                value={attendanceForm.notes}
                onChange={(e) => setAttendanceForm({...attendanceForm, notes: e.target.value})}
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowAttendanceDialog(false)}>إلغاء</Button>
            <Button onClick={() => addAttendanceMutation.mutate(attendanceForm)}>تسجيل</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog open={showLeaveDialog} onOpenChange={setShowLeaveDialog}>
        <DialogContent className="rtl">
          <DialogHeader>
            <DialogTitle>تقديم طلب إجازة</DialogTitle>
            <CardDescription>إضافة طلب إجازة جديد للموظف</CardDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label>الموظف</Label>
              <Select value={leaveForm.employeeId} onValueChange={(v) => setLeaveForm({...leaveForm, employeeId: v})}>
                <SelectTrigger>
                  <SelectValue placeholder="اختر الموظف" />
                </SelectTrigger>
                <SelectContent>
                  {employees?.map(emp => (
                    <SelectItem key={emp.id} value={emp.id}>{emp.name}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>من تاريخ</Label>
                <DatePicker 
                  date={leaveForm.startDate}
                  setDate={(d) => setLeaveForm({...leaveForm, startDate: d || new Date()})}
                />
              </div>
              <div className="space-y-2">
                <Label>إلى تاريخ</Label>
                <DatePicker 
                  date={leaveForm.endDate}
                  setDate={(d) => setLeaveForm({...leaveForm, endDate: d || new Date()})}
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label>السبب</Label>
              <Textarea 
                value={leaveForm.reason}
                onChange={(e) => setLeaveForm({...leaveForm, reason: e.target.value})}
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowLeaveDialog(false)}>إلغاء</Button>
            <Button onClick={() => addLeaveMutation.mutate(leaveForm)}>تقديم الطلب</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
