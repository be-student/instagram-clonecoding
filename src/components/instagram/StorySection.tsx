import React from 'react';

interface StoryProps {
  username: string;
  imageUrl: string;
  isViewed: boolean;
}

const StorySection: React.FC = () => {
  // 샘플 데이터
  const stories: StoryProps[] = [
    { username: 'your_story', imageUrl: 'https://randomuser.me/api/portraits/men/32.jpg', isViewed: false },
    { username: 'gyucoder', imageUrl: 'https://randomuser.me/api/portraits/men/91.jpg', isViewed: false },
    { username: 'hani_fav', imageUrl: 'https://randomuser.me/api/portraits/women/67.jpg', isViewed: false },
    { username: 'ryeong_0o', imageUrl: 'https://randomuser.me/api/portraits/women/22.jpg', isViewed: false },
    { username: 'sol_min', imageUrl: 'https://randomuser.me/api/portraits/men/45.jpg', isViewed: true },
    { username: 'developer..', imageUrl: 'https://randomuser.me/api/portraits/women/79.jpg', isViewed: true },
    { username: 'codelove_', imageUrl: 'https://randomuser.me/api/portraits/men/57.jpg', isViewed: true },
    { username: 'winterfell', imageUrl: 'https://randomuser.me/api/portraits/women/12.jpg', isViewed: true },
  ];
  
  return (
    <div className="flex overflow-x-auto mt-[24px] mb-[24px]" style={{ gap: '16px' }}>
      {stories.map((story, index) => (
        <div key={index} className="flex flex-col items-center justify-center px-2">
          <div className={`w-[66px] h-[66px] rounded-full p-[2px] ${story.isViewed ? 'border-2 border-gray-200' : ''}`} 
            style={{ 
              background: story.isViewed ? '' : 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)',
            }}>
            <div className="bg-white rounded-full p-[2px] w-full h-full">
              <img 
                src={story.imageUrl} 
                alt={story.username} 
                className="w-[56px] h-[56px] rounded-full object-cover" 
              />
            </div>
          </div>
          <span className="text-[12px] mt-1 text-center truncate w-16">{story.username}</span>
        </div>
      ))}
    </div>
  );
};

export default StorySection;
