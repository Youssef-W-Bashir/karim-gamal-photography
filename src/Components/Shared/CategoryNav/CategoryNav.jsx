import { useContext } from "react";
import { FilterImgContext } from "../../../Context/FilterImgContext";

export default function CategoryNav({ top }) {
  const { activeCategory, setActiveCategory, categories } =
    useContext(FilterImgContext);

  return (
    <div
      className={`sticky ${top} z-10 bg-[#0a0a0a]/80 backdrop-blur-sm border-b border-white/[0.03]`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center flex-wrap gap-2 sm:gap-4 py-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 sm:px-6 py-2 text-xs sm:text-sm tracking-[0.1em] uppercase rounded-full border transition-all duration-300 ${
                activeCategory === category
                  ? "bg-[#c9a227]/10 border-[#c9a227]/40 text-[#c9a227] shadow-[0_0_20px_rgba(201,162,119,0.1)]"
                  : "border-white/10 text-gray-500 hover:border-[#c9a227]/20 hover:text-gray-300"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
