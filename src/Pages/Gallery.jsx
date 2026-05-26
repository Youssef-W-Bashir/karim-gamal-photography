import { useContext } from "react";
import { FilterImgContext } from "../Context/FilterImgContext";
import { Link } from "react-router-dom";
import KGLogo from "../assets/KG_Logo.png";
import MediaNav from "../Components/Gallery/MediaNav/MediaNav";
import CategoryNav from "../Components/Shared/CategoryNav/CategoryNav";
import ImageGrid from "../Components/Shared/ImageGrid/ImageGrid";
import VideoGrid from "../Components/Gallery/VideoGrid/VideoGrid";

export default function Gallery() {
  const { activeMedia, activeCategory, filteredImages } =
    useContext(FilterImgContext);

  let limited = filteredImages;

  return (
    <div className="min-h-screen bg-[#0a0a0a] relative">
      {/* خلفية */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#c9a227]/[0.03] rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#c9a227]/[0.02] rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#c9a227]/[0.015] rounded-full blur-[150px]" />
      </div>

      {/* Sticky Buttons Container */}
      <div className="sticky top-[10px] z-40 pointer-events-none">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          {/* Back Button */}
          <Link
            to="/"
            onClick={() =>
              setTimeout(() => {
                window.scrollTo(0, 0);
              }, 0)
            }
            className="pointer-events-auto rounded-full group relative overflow-hidden border border-[#c9a227]/40 bg-[#0a0a0a]/80 backdrop-blur-sm w-10 h-10 sm:w-auto sm:h-auto sm:px-5 sm:py-2.5 flex items-center justify-center text-accent hover:text-black"
          >
            <span className="relative z-10">
              <i className="fa-solid fa-arrow-left text-sm sm:text-base sm:hidden"></i>
              <span className="hidden sm:inline text-xs sm:text-sm uppercase tracking-[0.25em] font-semibold">
                Back
              </span>
            </span>
            <div className="absolute inset-0 bg-accent transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
          </Link>

          {/* Back to Home Button */}
          <Link
            to="/"
            onClick={() =>
              setTimeout(() => {
                window.scrollTo(0, 0);
              }, 0)
            }
            className="pointer-events-auto group relative overflow-hidden border border-[#c9a227]/40 bg-[#0a0a0a]/80 backdrop-blur-sm px-4 sm:px-6 py-2 sm:py-2.5 text-xs sm:text-sm uppercase tracking-[0.25em] text-accent hover:text-black"
          >
            <span className="relative z-10 font-semibold">Home</span>
            <div className="absolute inset-0 bg-accent transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
          </Link>
        </div>
      </div>

      {/* container */}
      <div className="relative">
        {/* Header */}
        <header className="pt-3 pb-8 px-4 sm:px-6 lg:px-8 text-center">
          <img
            src={KGLogo}
            alt="KGLogo"
            className="w-1/4 md:w-36 mx-auto mb-3"
          />
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-[0.2em] text-white uppercase">
            Main <span className="text-accent font-normal">Gallery</span>
          </h1>
          <div className="mt-4 w-24 h-[1px] bg-[#c9a227]/40 mx-auto" />
          <p className="mt-6 text-gray-500 text-sm sm:text-base tracking-widest uppercase max-w-2xl mx-auto">
            Capturing moments that last forever
          </p>
        </header>

        {/* Navigation */}
        <MediaNav />
        {activeMedia === "photos" && <CategoryNav top="top-[60px]" />}

        {/* Content */}
        <main className="pt-5 px-4 sm:px-6 lg:px-8 xl:px-12 pb-20">
          {activeMedia === "photos" ? (
            <ImageGrid
              id={"gallerySc"}
              limited={limited}
              activeCategory={activeCategory}
            />
          ) : (
            <VideoGrid />
          )}
        </main>
      </div>
    </div>
  );
}
