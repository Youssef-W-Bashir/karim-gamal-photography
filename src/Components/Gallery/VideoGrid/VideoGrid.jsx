import { useState } from "react";
import { videos } from "../../../data/videos";

export default function VideoGrid() {
  const [loadedVideos, setLoadedVideos] = useState({});

  return (
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {videos.map((video, index) => (
          <div
            key={index}
            className={`group relative ${video.category === "reels" ? "aspect-[3/5]" : "aspect-[5/3]"} bg-[#111] overflow-hidden rounded-sm`}
          >
            {/* Loader */}
            {!loadedVideos[index] && (
              <div className="absolute inset-0 flex items-center justify-center bg-[#222]">
                <div className="w-10 h-10 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
              </div>
            )}

            {/* Video */}
            <video
              controls
              preload="metadata"
              playsInline
              poster={video.poster}
              onCanPlay={() =>
                setLoadedVideos((prev) => ({
                  ...prev,
                  [index]: true,
                }))
              }
              className={`w-full h-full object-cover ${
                loadedVideos[index] ? "opacity-100" : "opacity-0"
              }`}
            >
              <source src={video.src} type="video/mp4" />
            </video>

            {/* Category */}
            <div className="absolute top-3 left-3 z-20">
              <span className="px-3 py-1 text-[10px] tracking-[0.2em] uppercase bg-black/60 backdrop-blur-sm text-accent border border-white/10 rounded-full">
                {video.category}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
