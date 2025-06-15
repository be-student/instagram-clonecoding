import React from 'react';

interface StoryProps {
  username: string;
  imageUrl: string;
  isViewed: boolean;
}

const StorySection: React.FC = () => {
  // 스토리 데이터
  const stories: StoryProps[] = [
    { username: "gyucoder", imageUrl: "https://via.placeholder.com/66", isViewed: false },
    { username: "hani_fav", imageUrl: "https://via.placeholder.com/66", isViewed: true },
    { username: "koitalima", imageUrl: "https://via.placeholder.com/66", isViewed: false },
    { username: "dev_song", imageUrl: "https://via.placeholder.com/66", isViewed: false },
    { username: "junrunnr", imageUrl: "https://via.placeholder.com/66", isViewed: true },
    { username: "minki_j", imageUrl: "https://via.placeholder.com/66", isViewed: false },
    { username: "hikinglife", imageUrl: "https://via.placeholder.com/66", isViewed: false },
    { username: "coder_kr", imageUrl: "https://via.placeholder.com/66", isViewed: false }
  ];

  return (
    <div className="flex gap-4 overflow-x-auto pb-4 mb-6 my-6">
      {stories.map((story, index) => (
        <div key={index} className="flex flex-col items-center">
          <div className={`w-[66px] h-[66px] rounded-full p-[3px] ${story.isViewed ? 'border-2 border-gray-200' : 'bg-gradient-to-tr from-[#f09433] to-[#bc1888]'}`}>
            <img 
              src={story.imageUrl} 
              alt={story.username}
              className="rounded-full border-2 border-white w-[56px] h-[56px] object-cover"
            />
          </div>
          <span className="text-xs mt-1 text-center">{story.username}</span>
        </div>
      ))}
    </div>
  );
};

export default StorySection;
