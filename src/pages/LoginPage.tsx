import React, { useState, useEffect } from 'react';
import LoginForm from '../components/auth/LoginForm';

const LoginPage: React.FC = () => {
  // Dark mode state based on browser preference
  const [darkMode, setDarkMode] = useState(false);

  // Check system preference on component mount and update when it changes
  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    
    // Set initial value
    setDarkMode(prefersDark.matches);
    
    // Add listener for changes
    const mediaListener = (e: MediaQueryListEvent) => {
      setDarkMode(e.matches);
    };
    
    prefersDark.addEventListener('change', mediaListener);
    
    // Clean up listener
    return () => {
      prefersDark.removeEventListener('change', mediaListener);
    };
  }, []);
  return (
    <div className={`relative flex flex-col items-center min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
      {/* Main content vertically centered */}
      <div className="flex-grow flex items-center justify-center w-full">
        <main className="flex flex-row items-center justify-center w-full max-w-[935px] px-8 py-8">
          {/* Left side: Phone Image */}
          <div className="hidden md:block mr-8">
            <div className="w-[380px] h-[581px] relative overflow-hidden">
              {/* Phone mockup with Instagram screenshots */}
              <img 
                src="/instagram-screenshot.png" 
                alt="Instagram app screenshot" 
                className="w-full h-full object-contain"
                onError={(e) => {
                  // Fallback to a different image if the first one fails
                  e.currentTarget.src = "https://static.cdninstagram.com/images/instagram/xig/homepage/phones/home-phones.png";
                }}
              />
            </div>
          </div>

          {/* Right side: Login Form */}
          <LoginForm darkMode={darkMode} />
        </main>
      </div>

      {/* Footer fixed at bottom */}
      {/* No manual dark mode toggle - using system preference */}

      <footer className={`w-full py-3 text-xs ${darkMode ? 'text-gray-400 border-gray-700' : 'text-gray-400 border-gray-200'} text-center border-t`}>
        <div className="max-w-[935px] mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-1.5 mb-2">
            <a href="#" className="text-xs">Meta</a>
            <a href="#" className="text-xs">소개</a>
            <a href="#" className="text-xs">블로그</a>
            <a href="#" className="text-xs">채용 정보</a>
            <a href="#" className="text-xs">도움말</a>
            <a href="#" className="text-xs">API</a>
            <a href="#" className="text-xs">개인정보처리방침</a>
            <a href="#" className="text-xs">약관</a>
            <a href="#" className="text-xs">위치</a>
            <a href="#" className="text-xs">Instagram Lite</a>
            <a href="#" className="text-xs">Threads</a>
          </div>
          <div className="text-xs">
            © 2023 Instagram from Meta
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LoginPage;
