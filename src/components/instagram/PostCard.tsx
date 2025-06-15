import React from 'react';

interface PostCardProps {
  username: string;
  location?: string;
  timeAgo: string;
  imageUrl: string;
  likes: number;
  caption: string;
  comments: number;
}

const PostCard: React.FC<PostCardProps> = ({ 
  username, location, timeAgo, imageUrl, likes, caption, comments
}) => {
  return (
    <article className="border border-gray-200 mb-6 bg-white">
      {/* 게시물 헤더 */}
      <div className="flex items-center justify-between p-3">
        <div className="flex items-center">
          <img 
            src={`https://randomuser.me/api/portraits/${username === 'hani_fav' ? 'women/67' : 'men/91'}.jpg`}
            alt={username} 
            className="w-8 h-8 rounded-full mr-3"
          />
          <div>
            <div className="flex items-center">
              <span className="font-bold text-[14px] text-[#262626] mr-1">{username}</span>
              <svg className="w-3 h-3 text-blue-500 ml-[2px]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
              </svg>
            </div>
            {location && <p className="text-[12px] text-[#8e8e8e]">{location}</p>}
          </div>
        </div>
        <button className="text-[#262626] mr-3">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
            <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
          </svg>
        </button>
      </div>
      
      {/* 게시물 이미지 */}
      <div className="my-3">
        <img 
          src={imageUrl} 
          alt="Post image"
          className="w-full object-cover"
        />
      </div>
      
      {/* 게시물 액션 */}
      <div className="p-3">
        <div className="flex justify-between mb-2">
          <div className="flex">
            <button className="mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#262626]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </button>
            <button className="mx-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#262626]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </button>
            <button className="mx-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#262626]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
              </svg>
            </button>
          </div>
          <button>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#262626]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
            </svg>
          </button>
        </div>
        
        {/* 좋아요 */}
        <p className="font-semibold text-[14px] mb-2">좋아요 {likes.toLocaleString()}개</p>
        
        {/* 캡션 */}
        <p className="text-[14px] mb-1 leading-5">
          <span className="font-semibold mr-1 text-[#262626]">{username}</span>
          <span className="text-[#262626]">{caption}</span>
        </p>
        
        {/* 댓글 보기 */}
        <button className="text-[#8e8e8e] text-[14px] mb-2 font-normal">댓글 {comments}개 모두 보기</button>
        
        {/* 날짜 */}
        <p className="text-[11px] text-[#8e8e8e] uppercase mb-3 tracking-tight">{timeAgo}</p>
        
        {/* 댓글 입력창 */}
        <div className="flex items-center border-t pt-3">
          <button className="mr-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#262626]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </button>
          <input 
            type="text" 
            placeholder="댓글 달기..."
            className="flex-1 border-none outline-none text-[14px] focus:ring-0"
          />
          <button className="text-[#0095f6] font-semibold text-[14px]">게시</button>
        </div>
      </div>
    </article>
  );
};

export default PostCard;
