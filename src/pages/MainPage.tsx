import React from 'react';

const MainPage: React.FC = () => {
  return (
    <div className="flex bg-white min-h-screen font-sans">
      {/* Left Sidebar */}
      <aside className="w-60 border-r border-gray-300 h-screen flex flex-col px-3 py-8 fixed">
        {/* Instagram Logo */}
        <div className="mb-8 px-3">
          <h1 className="text-2xl font-serif" style={{ fontFamily: '"Billabong", "Grand Hotel", cursive' }}>Instagram</h1>
        </div>
        
        {/* Navigation Items */}
        <nav className="flex-1">
          <ul className="space-y-1">
            {/* Home */}
            <li>
              <a href="#" className="flex items-center px-3 py-3 rounded-lg hover:bg-gray-100 transition-all duration-200">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                <span className="text-sm font-medium">홈</span>
              </a>
            </li>
            
            {/* Search */}
            <li>
              <a href="#" className="flex items-center px-3 py-3 rounded-lg hover:bg-gray-100 transition-all duration-200">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <span className="text-sm font-medium">검색</span>
              </a>
            </li>
            
            {/* Explore */}
            <li>
              <a href="#" className="flex items-center px-3 py-3 rounded-lg hover:bg-gray-100 transition-all duration-200">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-sm font-medium">탐색 탭</span>
              </a>
            </li>
            
            {/* Reels */}
            <li>
              <a href="#" className="flex items-center px-3 py-3 rounded-lg hover:bg-gray-100 transition-all duration-200">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                <span className="text-sm font-medium">릴스</span>
              </a>
            </li>
            
            {/* Messages */}
            <li>
              <a href="#" className="flex items-center px-3 py-3 rounded-lg hover:bg-gray-100 transition-all duration-200">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
                <span className="text-sm font-medium">메시지</span>
              </a>
            </li>
            
            {/* Notifications */}
            <li>
              <a href="#" className="flex items-center px-3 py-3 rounded-lg hover:bg-gray-100 transition-all duration-200">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                <span className="text-sm font-medium">알림</span>
              </a>
            </li>
            
            {/* Create */}
            <li>
              <a href="#" className="flex items-center px-3 py-3 rounded-lg hover:bg-gray-100 transition-all duration-200">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                <span className="text-sm font-medium">만들기</span>
              </a>
            </li>
            
            {/* Profile */}
            <li>
              <a href="#" className="flex items-center px-3 py-3 rounded-lg hover:bg-gray-100 transition-all duration-200">
                <img src="https://via.placeholder.com/28" className="h-7 w-7 rounded-full mr-4" alt="Profile" />
                <span className="text-sm font-medium">프로필</span>
              </a>
            </li>
          </ul>
        </nav>
        
        {/* Bottom links */}
        <div className="mt-auto">
          {/* Threads */}
          <a href="#" className="flex items-center px-3 py-3 rounded-lg hover:bg-gray-100 transition-all duration-200">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <span className="text-sm font-medium">Threads</span>
          </a>
          
          {/* More */}
          <a href="#" className="flex items-center px-3 py-3 rounded-lg hover:bg-gray-100 transition-all duration-200">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <span className="text-sm font-medium">더 보기</span>
          </a>
        </div>
      </aside>
      
      {/* Main content area with feed and right sidebar */}
      <main className="flex-1 ml-60 flex justify-center py-8">
        {/* Feed Content */}
        <div className="w-[470px] px-4">
          {/* Stories */}
          <div className="flex space-x-4 overflow-x-auto pb-4 mb-6">
            {/* Story 1 */}
            <div className="flex flex-col items-center">
              <div className="w-[66px] h-[66px] rounded-full p-[3px] bg-gradient-to-tr from-yellow-400 to-fuchsia-600">
                <img 
                  src="https://via.placeholder.com/66" 
                  alt="gyucoder"
                  className="rounded-full border-2 border-white w-full h-full object-cover"
                />
              </div>
              <span className="text-xs mt-1">gyucoder</span>
            </div>
            
            {/* Story 2 */}
            <div className="flex flex-col items-center">
              <div className="w-[66px] h-[66px] rounded-full p-[3px] bg-gradient-to-tr from-yellow-400 to-fuchsia-600">
                <img 
                  src="https://via.placeholder.com/66" 
                  alt="hani_fav"
                  className="rounded-full border-2 border-white w-full h-full object-cover"
                />
              </div>
              <span className="text-xs mt-1">hani_fav</span>
            </div>
            
            {/* Story 3 */}
            <div className="flex flex-col items-center">
              <div className="w-[66px] h-[66px] rounded-full p-[3px] bg-gradient-to-tr from-yellow-400 to-fuchsia-600">
                <img 
                  src="https://via.placeholder.com/66" 
                  alt="yuxxee"
                  className="rounded-full border-2 border-white w-full h-full object-cover"
                />
              </div>
              <span className="text-xs mt-1">yuxxee</span>
            </div>
            
            {/* Story 4 */}
            <div className="flex flex-col items-center">
              <div className="w-[66px] h-[66px] rounded-full p-[3px] bg-gradient-to-tr from-yellow-400 to-fuchsia-600">
                <img 
                  src="https://via.placeholder.com/66" 
                  alt="lou_stxx"
                  className="rounded-full border-2 border-white w-full h-full object-cover"
                />
              </div>
              <span className="text-xs mt-1">lou_stxx</span>
            </div>
            
            {/* Story 5 */}
            <div className="flex flex-col items-center">
              <div className="w-[66px] h-[66px] rounded-full p-[3px] border-2 border-gray-200">
                <img 
                  src="https://via.placeholder.com/66" 
                  alt="kiu_six"
                  className="rounded-full border-2 border-white w-full h-full object-cover"
                />
              </div>
              <span className="text-xs mt-1">kiu_six</span>
            </div>
          </div>
          
          {/* Posts */}
          <div className="space-y-6">
            {/* Post 1 */}
            <article className="border border-gray-200 rounded-lg overflow-hidden bg-white mb-6">
              {/* Post Header */}
              <div className="flex items-center justify-between p-3">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-full overflow-hidden">
                    <img 
                      src="https://via.placeholder.com/32" 
                      alt="gyucoder"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="flex items-center">
                      <p className="text-sm font-semibold">gyucoder</p>
                      <span className="mx-1 text-sm">•</span>
                      <span className="text-xs text-gray-500">1일</span>
                    </div>
                    <p className="text-xs text-gray-500">숭실대(Soongsil University)</p>
                  </div>
                </div>
                <button className="text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                  </svg>
                </button>
              </div>
              
              {/* Post Image */}
              <img 
                src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                alt="Campus photo"
                className="w-full object-cover"
              />
              
              {/* Post Actions */}
              <div className="p-3">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-4">
                    <button>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </button>
                    <button>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                    </button>
                    <button>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                      </svg>
                    </button>
                  </div>
                  <button>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                    </svg>
                  </button>
                </div>
                
                {/* Likes */}
                <div className="mb-2">
                  <p className="text-sm font-semibold">좋아요 123개</p>
                </div>
                
                {/* Caption */}
                <div className="mb-2">
                  <p className="text-sm">
                    <span className="font-semibold">gyucoder</span> 오늘 졸업식 끝나고 찍은 사진! 드디어 졸업이다 🎓
                  </p>
                </div>
                
                {/* Comments */}
                <div className="mb-2">
                  <p className="text-sm text-gray-500">댓글 21개 모두 보기</p>
                </div>
                
                {/* Add Comment */}
                <div className="flex items-center mt-3 border-t border-gray-200 pt-3">
                  <input 
                    type="text" 
                    placeholder="댓글 달기..."
                    className="flex-1 text-sm border-none focus:ring-0 outline-none"
                  />
                  <button className="text-blue-500 font-semibold text-sm">게시</button>
                </div>
              </div>
            </article>
            
            {/* Additional posts would go here */}
          </div>
        </div>
        
        {/* Right Sidebar - User Profile and Suggestions */}
        <div className="w-[320px] px-4 ml-8 hidden lg:block">
          {/* User Profile */}
          <div className="flex items-center mb-6">
            <img 
              src="https://via.placeholder.com/44" 
              alt="Profile"
              className="w-11 h-11 rounded-full mr-4"
            />
            <div className="flex-1">
              <p className="text-sm font-semibold">songeunwo</p>
              <p className="text-sm text-gray-500">졭은우</p>
            </div>
            <button className="text-xs font-semibold text-blue-500">
              전환
            </button>
          </div>
          
          {/* Suggestions Header */}
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm font-semibold text-gray-500">회원님을 위한 추천</span>
            <button className="text-xs font-semibold">모두 보기</button>
          </div>
          
          {/* Suggestions List */}
          <div className="space-y-3">
            {/* Suggestion 1 */}
            <div className="flex items-center">
              <img 
                src="https://via.placeholder.com/36" 
                alt="Profile"
                className="w-9 h-9 rounded-full mr-3"
              />
              <div className="flex-1">
                <p className="text-sm font-semibold">hwank_mobydicck</p>
                <p className="text-xs text-gray-500">회원님을 위한 추천</p>
              </div>
              <button className="text-xs font-semibold text-blue-500">
                팔로우
              </button>
            </div>
            
            {/* Suggestion 2 */}
            <div className="flex items-center">
              <img 
                src="https://via.placeholder.com/36" 
                alt="Profile"
                className="w-9 h-9 rounded-full mr-3"
              />
              <div className="flex-1">
                <p className="text-sm font-semibold">yoondgu</p>
                <p className="text-xs text-gray-500">회원님을 위한 추천</p>
              </div>
              <button className="text-xs font-semibold text-blue-500">
                팔로우
              </button>
            </div>
            
            {/* Suggestion 3 */}
            <div className="flex items-center">
              <img 
                src="https://via.placeholder.com/36" 
                alt="Profile"
                className="w-9 h-9 rounded-full mr-3"
              />
              <div className="flex-1">
                <p className="text-sm font-semibold">presentbong1</p>
                <p className="text-xs text-gray-500">새 계정</p>
              </div>
              <button className="text-xs font-semibold text-blue-500">
                팔로우
              </button>
            </div>
            
            {/* Suggestion 4 */}
            <div className="flex items-center">
              <img 
                src="https://via.placeholder.com/36" 
                alt="Profile"
                className="w-9 h-9 rounded-full mr-3"
              />
              <div className="flex-1">
                <p className="text-sm font-semibold">chalna300</p>
                <p className="text-xs text-gray-500">새 계정</p>
              </div>
              <button className="text-xs font-semibold text-blue-500">
                팔로우
              </button>
            </div>
            
            {/* Suggestion 5 */}
            <div className="flex items-center">
              <img 
                src="https://via.placeholder.com/36" 
                alt="Profile"
                className="w-9 h-9 rounded-full mr-3"
              />
              <div className="flex-1">
                <p className="text-sm font-semibold">mini_0509</p>
                <p className="text-xs text-gray-500">회원님이 팔로우합니다</p>
              </div>
              <button className="text-xs font-semibold text-blue-500">
                팔로우
              </button>
            </div>
          </div>
          
          {/* Footer Links */}
          <div className="mt-6">
            <div className="flex flex-wrap text-xs text-gray-400 mb-4">
              <a href="#" className="mr-2 mb-1 hover:underline">정보</a>
              <a href="#" className="mr-2 mb-1 hover:underline">도움말</a>
              <a href="#" className="mr-2 mb-1 hover:underline">프레스</a>
              <a href="#" className="mr-2 mb-1 hover:underline">API</a>
              <a href="#" className="mr-2 mb-1 hover:underline">일자리</a>
              <a href="#" className="mr-2 mb-1 hover:underline">개인정보처리방침</a>
              <a href="#" className="mr-2 mb-1 hover:underline">위치</a>
              <a href="#" className="mr-2 mb-1 hover:underline">언어</a>
            </div>
            <p className="text-xs text-gray-400">&copy; 2025 INSTAGRAM FROM META</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MainPage;