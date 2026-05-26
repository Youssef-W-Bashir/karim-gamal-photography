import { useContext } from "react";
import { FilterImgContext } from "../../../Context/FilterImgContext";

export default function MediaNav() {
  const { activeMedia, setActiveMedia, setActiveCategory } =
    useContext(FilterImgContext);

  let mediaTypes = [
    { id: "photos", label: "Photos" },
    { id: "videos", label: "Videos" },
  ];

  return (
    <div className="sticky -top-3 z-30 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center py-4">
          {mediaTypes.map((media) => (
            <button
              key={media.id}
              onClick={() => {
                setActiveMedia(media.id);
                setActiveCategory("weddings");
              }}
              className={`relative px-3 sm:px-12 py-3 text-sm sm:text-base tracking-[0.15em] uppercase ${
                activeMedia === media.id
                  ? "text-[#c9a227]"
                  : "text-gray-500 hover:text-gray-300"
              }`}
            >
              {media.label}
              {activeMedia === media.id && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-[2px] bg-[#c9a227]" />
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
