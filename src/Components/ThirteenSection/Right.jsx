import React, { useEffect, useState } from "react";

const Right = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch("/Thirteen.json")
      .then((res) => res.json())
      .then((data) => setVideos(data));
  }, []);
  return (
    <div className="grid grid-cols-2 gap-6">
      {videos.map((video) => (
        <div key={video.id} className="bg-black h-84 overflow-hidden group">
          <a
            href={video.link}
            target="_blank"
            rel="noopener noreferrer"
            className="relative block"
          >
            <div className="overflow-hidden ">
              <img
                src={video.thumbnail}
                alt="Your alt text"
                className="w-full h-auto transform transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="64"
              height="64"
              viewBox="0 0 64 64"
              fill="red"
              className="absolute top-3 left-3 size-8"
            >
              <circle cx="32" cy="32" r="32" fill="red" />
              <polygon points="26,20 26,44 46,32" fill="white" />
            </svg>
          </a>
          <div className="ml-3 mt-3 space-y-3 px-2 pb-4">
            <p className="text-xl font-bold text-white hover:text-yellow-400">
              {video.title}
            </p>
            <p className="text-sm text-gray-400">{video.time}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Right;
