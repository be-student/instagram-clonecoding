import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../common/Input';
import Button from '../common/Button';
import { useAuthStore } from '../../hook/useAuthStore';

interface LoginFormProps {
  darkMode?: boolean;
}

const LoginForm: React.FC<LoginFormProps> = ({ darkMode = false }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginSuccess, setLoginSuccess] = useState(false);  // Used to show success message
  
  const { login, isLoggedIn } = useAuthStore();
  const navigate = useNavigate();

  const isButtonDisabled = !email || !password;

  useEffect(() => {
    // Redirect to home page if already logged in
    if (isLoggedIn) {
      navigate('/');
    }
  }, [isLoggedIn, navigate]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    login(email, password);
    setLoginSuccess(true);
    console.log('Login successful:', { email, password });
    
    // Optional: Navigate after a short delay to show success message
    setTimeout(() => {
      navigate('/');
    }, 1500);
  };

  return (
    <div className="w-full max-w-[350px]">
      <div className={`${darkMode ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border-gray-300'} border px-10 py-8 text-center space-y-4 rounded-sm`}>
        <h1 className="text-5xl font-normal mb-4" style={{ fontFamily: '"Billabong", "Grand Hotel", cursive', color: darkMode ? '#fff' : '#000' }}>Instagram</h1>
        <form onSubmit={handleSubmit} className="space-y-1.5">
          <Input
            type="text"
            placeholder="전화번호, 사용자 이름 또는 이메일"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-label="전화번호, 사용자 이름 또는 이메일"
            className={`text-xs h-9 ${darkMode ? 'bg-gray-700 text-white border-gray-600 placeholder-gray-400' : 'bg-gray-50 text-black'} mb-1.5`}
          />
          <Input
            type="password"
            placeholder="비밀번호"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            aria-label="비밀번호"
            className={`text-xs h-9 ${darkMode ? 'bg-gray-700 text-white border-gray-600 placeholder-gray-400' : 'bg-gray-50 text-black'}`}
          />
          <div className="mt-2">
            <Button 
              type="submit" 
              disabled={isButtonDisabled || loginSuccess} 
              className="bg-blue-500 hover:bg-blue-600 font-bold py-1 h-8 flex items-center justify-center">
              {loginSuccess ? '로그인 성공!' : '로그인'}
            </Button>
          </div>
          
          {loginSuccess && (
            <div className="mt-2 text-green-600 text-xs font-semibold">
              로그인 성공! 홈페이지로 이동합니다...
            </div>
          )}
        </form>

        <div className="flex items-center my-3">
          <div className={`flex-grow border-t ${darkMode ? 'border-gray-700' : 'border-gray-300'}`}></div>
          <span className={`px-4 text-xs font-medium ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>또는</span>
          <div className={`flex-grow border-t ${darkMode ? 'border-gray-700' : 'border-gray-300'}`}></div>
        </div>

        <button className={`text-sm font-semibold ${darkMode ? 'text-blue-300' : 'text-[#385185]'} flex items-center justify-center w-full`}>
          <span className="inline-block w-4 h-4 mr-2 text-center">
            <svg fill="#385185" viewBox="0 0 24 24" className="w-full h-full">
              <path d="M20.007 3H3.993A.993.993 0 003 3.993v16.014c0 .549.445.993.993.993h8.621v-6.97H10.27V11.31h2.346V9.31c0-2.325 1.42-3.591 3.494-3.591.993 0 1.847.073 2.096.106v2.43h-1.438c-1.128 0-1.346.537-1.346 1.324v1.734h2.69l-.35 2.717h-2.34V21h4.587a.993.993 0 00.993-.993V3.993A.993.993 0 0020.007 3z" />
            </svg>
          </span>
          Facebook으로 로그인
        </button>

        <div className="mt-3">
          <a href="#" className={`text-xs ${darkMode ? 'text-blue-300' : 'text-[#00376b]'} hover:underline`}>
            비밀번호를 잊으셨나요?
          </a>
        </div>
      </div>

      <div className={`${darkMode ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border-gray-300'} border p-4 text-center mt-3 rounded-sm`}>
        <p className="text-sm">
          계정이 없으신가요?{' '}
          <a href="#" className={`font-semibold ${darkMode ? 'text-blue-400' : 'text-[#0095f6]'} hover:underline`}>
            가입하기
          </a>
        </p>
      </div>
      
      <div className="mt-4 text-center">
        <p className={`text-sm ${darkMode ? 'text-gray-300' : ''}`}>앱을 다운로드하세요.</p>
        <div className="flex justify-center space-x-2 mt-4">
          <a href="#" className="block">
            <img 
              src="https://static.cdninstagram.com/rsrc.php/v3/yr/r/fDjwyLC88oO.png" 
              alt="App Store에서 다운로드" 
              className="h-10"
            />
          </a>
          <a href="#" className="block">
            <img 
              src="https://static.cdninstagram.com/rsrc.php/v3/yv/r/_UbeIRgTpG-.png" 
              alt="Google Play에서 다운로드" 
              className="h-10"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
