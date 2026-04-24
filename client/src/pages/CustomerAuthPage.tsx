import React, { useState } from 'react';
import { useLocation } from 'wouter';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useAuth } from '@/context/AuthContext';
import { Loader2, User, UserPlus, Mail, Phone, Lock, ArrowRight, Globe } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function CustomerAuthPage() {
  const [, setLocation] = useLocation();
  const { login, register } = useAuth();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [activeTab, setActiveTab] = useState('login');

  // Login form state
  const [loginIdentifier, setLoginIdentifier] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  // Register form state
  const [regName, setRegName] = useState('');
  const [regPhone, setRegPhone] = useState('');
  const [regPassword, setRegPassword] = useState('');

  const handleSocialLogin = async (provider: 'google' | 'apple') => {
    setLoading(true);
    setError('');
    
    try {
      // في التطبيق الحقيقي، هنا سيتم استدعاء SDK الخاص بـ Google أو Apple
      // للحصول على التوكن والمعلومات. للتبسيط في هذا النموذج، سنقوم بمحاكاة ذلك.
      const mockSocialData = {
        provider,
        socialId: `mock_${provider}_${Math.random().toString(36).substr(2, 9)}`,
        email: `user_${provider}@example.com`,
        name: `مستخدم ${provider === 'google' ? 'جوجل' : 'آبل'}`,
      };

      const response = await fetch('/api/auth/social-login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(mockSocialData),
      });

      const result = await response.json();

      if (result.success) {
        localStorage.setItem('token', result.token);
        localStorage.setItem('user', JSON.stringify(result.user));
        toast({
          title: "تم تسجيل الدخول",
          description: `مرحباً بك، تم الدخول عبر ${provider === 'google' ? 'Google' : 'Apple ID'} بنجاح`,
        });
        window.location.href = '/';
      } else {
        setError(result.message);
      }
    } catch (error) {
      setError(`خطأ في تسجيل الدخول عبر ${provider}. يرجى المحاولة مرة أخرى.`);
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const result = await login(loginIdentifier, loginPassword);
      if (result.success) {
        toast({
          title: "تم تسجيل الدخول",
          description: "مرحباً بك مجدداً في واصل",
        });
        setLocation('/');
      } else {
        setError(result.message);
      }
    } catch (error) {
      setError('خطأ في تسجيل الدخول. يرجى المحاولة مرة أخرى.');
    } finally {
      setLoading(false);
    }
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const result = await register({
        name: regName,
        phone: regPhone,
        password: regPassword,
        username: regPhone, // Use phone as username for simplicity as requested
      });

      if (result.success) {
        toast({
          title: "تم إنشاء الحساب",
          description: "مرحباً بك في واصل، تم إنشاء حسابك بنجاح",
        });
        setLocation('/');
      } else {
        setError(result.message);
      }
    } catch (error) {
      setError('خطأ في إنشاء الحساب. يرجى المحاولة مرة أخرى.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4 py-12" dir="rtl">
      <div className="mb-8 text-center">
        <div className="text-5xl md:text-6xl mb-4 flex justify-center font-black">
          <span className="text-[#ec3714]">واصل</span>
        </div>
        <p className="text-muted-foreground font-bold">لخدمات التوصيل</p>
      </div>

      <Card className="w-full max-w-md border-none shadow-2xl rounded-[2rem] overflow-hidden">
        <CardHeader className="space-y-1 bg-white pb-8">
          <div className="flex items-center gap-2 mb-4">
            <Button variant="ghost" size="icon" onClick={() => setLocation('/')} className="h-10 w-10 rounded-full hover:bg-gray-100 transition-colors">
              <ArrowRight className="h-6 w-6" />
            </Button>
            <CardTitle className="text-3xl font-black">حسابي</CardTitle>
          </div>
          <CardDescription className="text-base font-medium">
            سجل دخولك أو أنشئ حساباً جديداً لتجربة تسوق رائعة
          </CardDescription>
        </CardHeader>
        <CardContent className="bg-white px-8 pb-10">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-10 bg-gray-100 p-1.5 rounded-2xl h-14">
              <TabsTrigger 
                value="login" 
                className="rounded-xl data-[state=active]:bg-white data-[state=active]:shadow-md font-black text-base transition-all"
              >
                <User className="w-5 h-5 ml-2" />
                دخول
              </TabsTrigger>
              <TabsTrigger 
                value="register" 
                className="rounded-xl data-[state=active]:bg-white data-[state=active]:shadow-md font-black text-base transition-all"
              >
                <UserPlus className="w-5 h-5 ml-2" />
                تسجيل
              </TabsTrigger>
            </TabsList>

            {error && (
              <Alert variant="destructive" className="mb-6 rounded-none border-2">
                <AlertDescription className="font-bold">{error}</AlertDescription>
              </Alert>
            )}

            <TabsContent value="login">
              <form onSubmit={handleLogin} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="login-id" className="font-bold">اسم المستخدم أو رقم الهاتف</Label>
                  <div className="relative">
                    <User className="absolute right-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      id="login-id"
                      value={loginIdentifier}
                      onChange={(e) => setLoginIdentifier(e.target.value)}
                      placeholder="أدخل اسم المستخدم أو الهاتف"
                      required
                      className="pr-10 h-14 rounded-xl border-gray-200 focus-visible:ring-primary focus-visible:border-primary transition-all text-lg"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="login-pass" className="font-bold">كلمة المرور</Label>
                  <div className="relative">
                    <Lock className="absolute right-3 top-4 h-5 w-5 text-gray-400" />
                    <Input
                      id="login-pass"
                      type="password"
                      value={loginPassword}
                      onChange={(e) => setLoginPassword(e.target.value)}
                      placeholder="أدخل كلمة المرور"
                      required
                      className="pr-10 h-14 rounded-xl border-gray-200 focus-visible:ring-primary focus-visible:border-primary transition-all text-lg"
                    />
                  </div>
                </div>
                <Button 
                  type="submit" 
                  className="w-full h-14 rounded-xl font-black text-xl mt-6 bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/20 transition-all active:scale-95" 
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <Loader2 className="ml-2 h-4 w-4 animate-spin" />
                      جاري تسجيل الدخول...
                    </>
                  ) : (
                    'تسجيل الدخول'
                  )}
                </Button>
                
                <div className="relative my-8">
                  <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t border-gray-200" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-white px-4 text-gray-500 font-bold">أو</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <Button 
                    type="button"
                    variant="outline"
                    onClick={() => handleSocialLogin('google')}
                    className="h-14 rounded-xl font-bold flex items-center justify-center gap-2 border-2 hover:bg-gray-50 transition-all active:scale-95"
                  >
                    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                    </svg>
                    Google
                  </Button>
                  <Button 
                    type="button"
                    variant="outline"
                    onClick={() => handleSocialLogin('apple')}
                    className="h-14 rounded-xl font-bold flex items-center justify-center gap-2 border-2 hover:bg-gray-50 transition-all active:scale-95"
                  >
                    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
                      <path d="M17.05 20.28c-.98.95-2.05 1.61-3.19 1.61-1.12 0-1.52-.69-2.82-.69-1.31 0-1.78.67-2.83.67-1.07 0-2.22-.72-3.3-1.78-2.21-2.16-3.41-6.17-3.41-8.98 0-4.43 2.76-6.78 5.4-6.78 1.41 0 2.45.87 3.23.87.77 0 1.96-.92 3.51-.92 1.3 0 2.53.51 3.36 1.45-3.08 1.84-2.58 6.04.49 7.28-1.01 2.51-2.48 5.32-3.44 6.27zm-3.05-15.65c0-1.77 1.48-3.21 3.28-3.21.19 0 .38.01.56.04-.15 1.88-1.58 3.32-3.35 3.32-.19 0-.39-.02-.57-.05-.12.01-.24.01-.35.01-.13 0-.25-.01-.37-.01z"/>
                    </svg>
                    Apple
                  </Button>
                </div>

                <Button 
                  type="button"
                  variant="outline"
                  onClick={() => {
                    localStorage.setItem('is_guest', 'true');
                    window.location.reload();
                  }}
                  className="w-full h-14 rounded-xl font-black text-xl border-2 hover:bg-gray-50 transition-all active:scale-95"
                >
                  الدخول كزائر
                </Button>
              </form>
            </TabsContent>

            <TabsContent value="register">
              <form onSubmit={handleRegister} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="reg-name" className="font-bold">الاسم بالكامل</Label>
                  <div className="relative">
                    <User className="absolute right-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      id="reg-name"
                      value={regName}
                      onChange={(e) => setRegName(e.target.value)}
                      placeholder="مثال: محمد علي"
                      required
                      className="pr-10 h-12 rounded-none border-2 focus-visible:ring-primary"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="reg-phone" className="font-bold">رقم الهاتف</Label>
                  <div className="relative">
                    <Phone className="absolute right-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      id="reg-phone"
                      type="tel"
                      value={regPhone}
                      onChange={(e) => setRegPhone(e.target.value)}
                      placeholder="77XXXXXXX"
                      required
                      className="pr-10 h-12 rounded-none border-2 focus-visible:ring-primary text-left"
                      dir="ltr"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="reg-pass" className="font-bold">كلمة المرور</Label>
                  <div className="relative">
                    <Lock className="absolute right-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      id="reg-pass"
                      type="password"
                      value={regPassword}
                      onChange={(e) => setRegPassword(e.target.value)}
                      placeholder="اختر كلمة مرور"
                      required
                      className="pr-10 h-12 rounded-none border-2 focus-visible:ring-primary"
                    />
                  </div>
                </div>
                <Button 
                  type="submit" 
                  className="w-full h-14 rounded-xl font-black text-xl mt-6 bg-secondary hover:bg-secondary/90 text-white shadow-lg shadow-secondary/20 transition-all active:scale-95" 
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <Loader2 className="ml-2 h-4 w-4 animate-spin" />
                      جاري إنشاء الحساب...
                    </>
                  ) : (
                    'إنشاء حساب جديد'
                  )}
                </Button>
              </form>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
      
      <p className="mt-8 text-sm text-muted-foreground max-w-xs text-center">
        بتسجيلك في واصل، أنت توافق على شروط الخدمة وسياسة الخصوصية الخاصة بنا.
      </p>
    </div>
  );
}
