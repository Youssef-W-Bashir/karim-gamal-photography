import { createContext, useState } from "react";
import { images } from "../data/images";

export let FilterImgContext = createContext(null);

export default function FilterImgContextProvider({ children }) {
  // للصور
  const [activeCategory, setActiveCategory] = useState("weddings");
  const [activeMedia, setActiveMedia] = useState("photos");

  const categories = ["weddings", "engagements", "projects"];

  const filteredImages = images.filter(
    (img) => img.category === activeCategory,
  );

  return (
    <FilterImgContext.Provider
      value={{
        activeCategory,
        setActiveCategory,
        activeMedia,
        setActiveMedia,
        filteredImages,
        categories,
      }}
    >
      {children}
    </FilterImgContext.Provider>
  );
}
