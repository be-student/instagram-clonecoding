import React from 'react';
import Sidebar from '../components/instagram/Sidebar';
import StorySection from '../components/instagram/StorySection';
import PostCard from '../components/instagram/PostCard';
import SuggestionsPanel from '../components/instagram/SuggestionsPanel';
import ChatButton from '../components/instagram/ChatButton';

const MainPage: React.FC = () => {
  return (
    <div className="flex bg-white min-h-screen max-w-[1440px] mx-auto font-sans">
      {/* 좌측 사이드바 (18%) */}
      <Sidebar />

      {/* 메인 콘텐츠 영역 */}
      <main className="flex-1 ml-[250px] flex justify-center py-8">
        {/* 중앙 피드 (56%) */}
        <div className="w-[468px] px-4">
          {/* 스토리 섹션 */}
          <StorySection />
          
          {/* 게시물 리스트 */}
          <div className="space-y-6">
            <PostCard 
              username="gyucoder"
              location="숭실대(Soongsil University)"
              timeAgo="1일"
              imageUrl="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              likes={123}
              caption="오늘 졸업식 끝나고 찍은 사진! 드디어 졸업이다 🎓"
              comments={21}
            />
            
            <PostCard 
              username="hani_fav"
              timeAgo="3시간"
              imageUrl="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1020&q=80"
              likes={456}
              caption="새 앨범 준비 중 📀 🎵 곧 찾아갑니다!"
              comments={89}
            />
          </div>
        </div>
        
        {/* 우측 영역 (22-25%) */}
        <SuggestionsPanel />
      </main>
      
      {/* 채팅 버튼 */}
      <ChatButton />
    </div>
  );
};

export default MainPage;
