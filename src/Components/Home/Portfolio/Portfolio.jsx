import React, { useContext } from "react";
import style from "./Portfolio.module.css";
import { FilterImgContext } from "../../../Context/FilterImgContext";
import { Link } from "react-router-dom";
import CategoryNav from "../../Shared/CategoryNav/CategoryNav";
import ImageGrid from "../../Shared/ImageGrid/ImageGrid";

export default function Portfolio() {
  let { categories, setActiveMedia, filteredImages, setActiveCategory } =
    useContext(FilterImgContext);

  let limited = filteredImages.slice(0, 8);

  return (
    <>
      {/* animated text */}
      <div className="w-full overflow-hidden bg-black py-5">
        <div className={`flex ${style.animateMarquee} shrink-0`}>
          {[...Array(3)].map((_, index) => (
            <div key={index} className="flex min-w-fit shrink-0 items-center">
              {categories.map((word, index) => (
                <span
                  key={index}
                  className={`mx-4 md:mx-8 tracking-wide text-2xl md:text-4xl font-black uppercase ${index % 2 === 0 ? "text-white drop-shadow-[0_0_8px_white]" : "text-accent drop-shadow-[0_0_8px_#c9a277]"}`}
                >
                  {word}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <section id="portfolio" className="bg-black py-16 pt-24 relative">
        <div className="px-3 md:px-6">
          <div className="relative w-full flex items-center justify-center">
            <h2 className="absolute inset-0 flex items-center justify-center text-6xl md:text-7xl font-black text-[#c9a277]/10 uppercase">
              Portfolio
            </h2>

            <h3 className="relative text-4xl font-bold text-white uppercase tracking-[0.15em] my-4">
              Portfolio
            </h3>
          </div>
          <div className="max-w-7xl mx-auto grid lg:grid-cols-5 gap-14 items-center relative">
            <div className="absolute left-[-150px] top-28 h-[350px] w-[350px] rounded-full bg-[#c9a227]/40 blur-[120px]"></div>

            <div className="absolute top-[50px] right-[480px] h-[300px] w-[300px] rounded-full bg-[#c9a227]/30 blur-[140px]"></div>

            {/* Video */}
            <div className="lg:col-span-2 z-10">
              <video
                className="w-full h-[450px] md:h-[650px] object-cover"
                muted
                autoPlay
                loop
                controls
              >
                <source
                  src="https://res.cloudinary.com/dkxt2ew0f/video/upload/q_auto/v1779738202/lv_0_20260525220944_pmoket.mp4"
                  type="video/mp4"
                />
              </video>
            </div>

            {/* Content */}
            <div className="space-y-7 lg:col-span-3 z-10">
              <span className="uppercase tracking-[3px] text-sm font-semibold text-accent">
                Videography
              </span>

              <h2 className="text-4xl lg:text-5xl leading-tight font-serif text-white">
                Relive Your Wedding Day
              </h2>

              <p className="text-gray-400 text-lg leading-9 max-w-xl">
                We create breathtaking cinematic masterpieces that will
                transport you back to the very moment you said, "I do".
              </p>

              <Link
                onClick={() => {
                  setActiveMedia("videos");
                  setActiveCategory("weddings");
                  setTimeout(() => {
                    window.scrollTo(0, 0);
                  }, 0);
                }}
                to="gallery"
                className="bg-accent inline-block border border-accent rounded-[2px] hover:bg-transparent hover:text-accent px-10 py-4 uppercase tracking-[2px] text-sm font-semibold text-black"
              >
                More Videos
              </Link>
            </div>
          </div>
        </div>

        {/* Gallary */}
        <div className="flex items-center justify-center gap-5 mt-10 mb-5">
          <span className="h-[2px] w-14 md:w-20 bg-accent"></span>

          <h2 className="text-xl md:text-4xl font-black uppercase text-white tracking-[0.18em] drop-shadow-[0_0_8px_#c9a277]">
            Mini Gallary
          </h2>
          <span className="h-[2px] w-14 md:w-20 bg-accent"></span>
        </div>

        {/* CategoryNav */}
        <CategoryNav top="top-[50px] md:top-[90px]" />

        <Link
          onClick={() =>
            setTimeout(() => {
              window.scrollTo(0, 0);
            }, 0)
          }
          to="gallery"
          className="block w-fit z-[5] sm:z-10 lg:z-30 ml-auto mb-3 me-3 md:me-6 sticky top-[160px] sm:top-[130px] md:top-[165px] lg:top-[110px] border border-[#c9a227]/50 bg-[#c9a227]/30 px-4 md:px-6 py-2 md:font-semibold text-xs md:text-sm uppercase tracking-[0.25em] text-white hover:bg-accent hover:text-black"
        >
          Show More
        </Link>

        {/* ImageGrid */}
        <div className="px-3 md:px-6">
          <ImageGrid limited={limited} />
        </div>
      </section>
    </>
  );
}
