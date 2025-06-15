import React from 'react';

const Sidebar: React.FC = () => {
  return (
    <aside className="w-[250px] border-r border-gray-300 h-screen flex flex-col py-8 fixed">
      {/* Instagram Logo */}
      <div className="mb-8 ml-6 mt-[32px]">
        <h1 className="text-2xl font-serif" style={{ fontFamily: '"Billabong", "Grand Hotel", cursive' }}>Instagram</h1>
      </div>
      
      {/* Navigation Items */}
      <nav className="flex-1 ml-6">
        <ul className="space-y-6">
          {/* Home */}
          <li>
            <a href="#" className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-[#262626]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              <span className="text-[14px] text-[#262626] font-normal">홈</span>
            </a>
          </li>
          
          {/* Search */}
          <li>
            <a href="#" className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-[#262626]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <span className="text-[14px] text-[#262626] font-normal">검색</span>
            </a>
          </li>
          
          {/* Explore */}
          <li>
            <a href="#" className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-[#262626]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-[14px] text-[#262626] font-normal">탐색 탭</span>
            </a>
          </li>
          
          {/* Reels */}
          <li>
            <a href="#" className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-[#262626]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              <span className="text-[14px] text-[#262626] font-normal">릴스</span>
            </a>
          </li>
          
          {/* Messages */}
          <li>
            <a href="#" className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-[#262626]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
              <span className="text-[14px] text-[#262626] font-normal">메시지</span>
            </a>
          </li>
          
          {/* Notifications */}
          <li>
            <a href="#" className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-[#262626]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              <span className="text-[14px] text-[#262626] font-normal">알림</span>
            </a>
          </li>
          
          {/* Create */}
          <li>
            <a href="#" className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-[#262626]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-[14px] text-[#262626] font-normal">만들기</span>
            </a>
          </li>
          
          {/* Profile */}
          <li>
            <a href="#" className="flex items-center">
              <img src="https://randomuser.me/api/portraits/men/32.jpg" className="w-6 h-6 rounded-full mr-3" alt="profile" />
              <span className="text-[14px] text-[#262626] font-normal">프로필</span>
            </a>
          </li>
        </ul>
      </nav>
      
      {/* Bottom menu - Fixed at bottom */}
      <div className="mt-auto mb-6 ml-6">
        {/* Threads */}
        <a href="#" className="flex items-center mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-[#262626]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
          </svg>
          <span className="text-[14px] text-[#262626] font-normal">Threads</span>
        </a>

        {/* More */}
        <a href="#" className="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-[#262626]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <span className="text-[14px] text-[#262626]">더 보기</span>
        </a>
      </div>
    </aside>
  );
};

export default Sidebar;