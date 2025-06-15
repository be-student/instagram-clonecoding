import React from 'react';

interface SuggestionProps {
  username: string;
  description: string;
  imageUrl: string;
}

const SuggestionsPanel: React.FC = () => {
  // 추천 계정 데이터
  const suggestions: SuggestionProps[] = [
    { username: "hwani_instabyck", description: "회원님을 위한 추천", imageUrl: "https://randomuser.me/api/portraits/men/34.jpg" },
    { username: "presenibong1", description: "회원님을 팔로우합니다", imageUrl: "https://randomuser.me/api/portraits/women/79.jpg" },
    { username: "chaina300", description: "인기", imageUrl: "https://randomuser.me/api/portraits/women/81.jpg" },
    { username: "mini__0609", description: "instagram 신규가입", imageUrl: "https://randomuser.me/api/portraits/men/54.jpg" },
    { username: "skystarkmk", description: "회원님을 팔로우합니다", imageUrl: "https://randomuser.me/api/portraits/women/33.jpg" }
  ];

  return (
    <div className="w-[300px] ml-6 hidden lg:block">
      {/* 사용자 프로필 */}
      <div className="flex items-center justify-between pb-4 mt-8">
        <div className="flex items-center">
          <img 
            src="https://randomuser.me/api/portraits/men/91.jpg" 
            alt="Your Profile" 
            className="w-[44px] h-[44px] rounded-full mr-3"
          />
          <div>
            <h4 className="font-bold text-[14px] text-[#262626]">gyucoder</h4>
            <p className="text-[14px] text-[#8e8e8e]">송규</p>
          </div>
        </div>
        <button className="text-[12px] font-bold text-[#0095f6]">전환</button>
      </div>
      
      {/* 추천 헤더 */}
      <div className="flex justify-between items-center mb-4">
        <span className="text-sm font-semibold text-gray-500">회원님을 위한 추천</span>
        <button className="text-xs font-semibold">모두 보기</button>
      </div>
      
      {/* 추천 리스트 */}
      <div className="space-y-4">
        {suggestions.map((suggestion, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center">
              <img 
                src={suggestion.imageUrl} 
                alt={suggestion.username} 
                className="w-9 h-9 rounded-full mr-3"
              />
              <div>
                <h4 className="font-semibold text-sm">{suggestion.username}</h4>
                <p className="text-xs text-gray-500">{suggestion.description}</p>
              </div>
            </div>
            <button className="text-xs font-semibold text-[#0095f6]">팔로우</button>
          </div>
        ))}
      </div>
      
      {/* 푸터 링크 */}
      <div className="mt-6">
        <div className="flex flex-wrap text-[11px] text-[#c7c7c7] mb-3">
          <a href="#" className="mr-1">소개 ·</a>
          <a href="#" className="mr-1">도움말 ·</a>
          <a href="#" className="mr-1">홍보 센터 ·</a>
          <a href="#" className="mr-1">API ·</a>
          <a href="#" className="mr-1">채용 정보 ·</a>
          <a href="#" className="mr-1">개인정보처리방침 ·</a>
          <a href="#" className="mr-1">약관 ·</a>
          <a href="#" className="mr-1">위치 ·</a>
          <a href="#" className="mr-1">언어 ·</a>
          <a href="#" className="mr-1">Meta Verified</a>
        </div>
        <p className="text-[11px] text-[#c7c7c7]">&copy; 2025 INSTAGRAM FROM META</p>
      </div>
    </div>
  );
};

export default SuggestionsPanel;
