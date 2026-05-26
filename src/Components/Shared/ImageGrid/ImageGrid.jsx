import { useContext, useState, useEffect } from "react";
import { FilterImgContext } from "../../../Context/FilterImgContext";

export default function ImageGrid({ limited, id, activeCategory }) {
  let { filteredImages } = useContext(FilterImgContext);

  const [openModal, setOpenModal] = useState(false);
  const [indexImage, setIndexImage] = useState(null);

  const [loadingImages, setLoadingImages] = useState({});
  const [modalLoading, setModalLoading] = useState(true);

  // pagination loading
  const [pageLoading, setPageLoading] = useState(false);

  useEffect(() => {
    if (openModal) {
      setModalLoading(true);
    }
  }, [indexImage, openModal]);

  // pagination setting
  let itemsPerPage = 16;
  let [currentPage, setCurrentPage] = useState(1);

  let totalPages = Math.ceil(limited.length / itemsPerPage);
  let safePage = Math.min(currentPage, totalPages) || 1;
  let indexOfLastItem = safePage * itemsPerPage;
  let indexOfFirstItem = indexOfLastItem - itemsPerPage;
  let currentImages = limited.slice(indexOfFirstItem, indexOfLastItem);

  // reset الصفحة لما الـ category يتغير
  useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory]);

  // لما بيتغير الصفحة نبدأ الـ loader
  const [firstOpenPage, setFirstOpenPage] = useState(true);
  useEffect(() => {
    if (firstOpenPage) {
      setFirstOpenPage(false);
      return;
    }

    setPageLoading(true);
    setLoadingImages({});

    document.getElementById("gallerySc")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, [currentPage]);

  // لما صورة تخلص تتحمل نشوف هل كل الصور خلصت
  const handleImageLoad = (index) => {
    setLoadingImages((prev) => {
      const updated = { ...prev, [index]: true };
      if (Object.keys(updated).length >= currentImages.length) {
        setPageLoading(false);
      }
      return updated;
    });
  };

  let imageNum = indexImage + 1;

  return (
    <>
      <div id={id} className="max-w-7xl mx-auto scroll-mt-44 md:scroll-mt-32">
        {/* الباجينيشن */}
        {limited.length > itemsPerPage && (
          <div className="flex justify-center items-center gap-3 my-6">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              className="px-4 py-2 border border-white/10 text-gray-300 hover:text-accent"
            >
              Prev
            </button>

            <div className="flex md:gap-3">
              {Array.from({ length: totalPages }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPage(index + 1)}
                  className={`px-3 py-1 border ${
                    safePage === index + 1
                      ? "border-accent text-accent"
                      : "border-white/10 text-gray-400"
                  }`}
                >
                  {index + 1}
                </button>
              ))}
            </div>

            <button
              onClick={() =>
                setCurrentPage((prev) => (prev < totalPages ? prev + 1 : prev))
              }
              className="px-4 py-2 border border-white/10 text-gray-300 hover:text-accent"
            >
              Next
            </button>
          </div>
        )}

        {/* Page loader */}
        {pageLoading && (
          <div className="flex justify-center items-center py-32">
            <div className="w-10 h-10 border-2 border-gray-500 border-t-accent rounded-full animate-spin" />
          </div>
        )}

        {/* images grid */}
        <div
          className={`columns-2 lg:columns-3 xl:columns-4 gap-4 sm:gap-6 space-y-4 sm:space-y-6 transition-opacity duration-300 ${
            pageLoading
              ? "opacity-0 pointer-events-none h-0 overflow-hidden"
              : "opacity-100"
          }`}
        >
          {currentImages.map((image, index) => (
            <div
              key={index}
              onClick={() => {
                setOpenModal(true);
                setIndexImage(indexOfFirstItem + index);
              }}
              className="group relative break-inside-avoid overflow-hidden rounded-sm bg-[#111]"
            >
              <div className="relative w-full overflow-hidden bg-[#1a1a1a]">
                {!loadingImages[index] && (
                  <div className="absolute inset-0 animate-pulse bg-[#222]" />
                )}

                <img
                  src={image.src}
                  alt={image.category}
                  loading="lazy"
                  onLoad={() => handleImageLoad(index)}
                  className={`w-full h-auto object-cover scale-110 group-hover:scale-125 ${
                    loadingImages[index]
                      ? "opacity-100 blur-0"
                      : "opacity-0 blur-sm"
                  }`}
                />

                {index === 0 && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20 pointer-events-none">
                    <div className="flex flex-col items-center gap-2">
                      <i className="fa-solid fa-magnifying-glass-plus text-white/70 text-2xl"></i>
                      <span className="text-white/70 text-[10px] tracking-widest uppercase">
                        Click to view
                      </span>
                    </div>
                  </div>
                )}
              </div>

              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 flex items-end">
                <div className="w-full p-4 sm:p-6 translate-y-full group-hover:translate-y-0">
                  <div className="flex items-center justify-between">
                    <span className="text-accent text-[10px] md:text-xs tracking-[0.2em] uppercase">
                      {image.category}
                    </span>
                    <div className="w-8 h-[1px] bg-[#c9a227]/50" />
                  </div>
                </div>
              </div>

              <div className="absolute top-0 right-0 w-12 h-12 opacity-0 group-hover:opacity-100">
                <div className="absolute top-3 right-3 w-6 h-[1px] bg-accent" />
                <div className="absolute top-3 right-3 w-[1px] h-6 bg-accent" />
              </div>
            </div>
          ))}
        </div>

        {filteredImages.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-600 tracking-widest text-base md:text-lg">
              No images Now <br /> SoOoOoOoOoOoN !!!!!
            </p>
          </div>
        )}

        {/* الباجينيشن */}
        {limited.length > itemsPerPage && (
          <div className="flex justify-center items-center gap-3 my-6">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              className="px-4 py-2 border border-white/10 text-gray-300 hover:text-accent"
            >
              Prev
            </button>

            <div className="flex md:gap-3">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`px-3 py-1 border ${
                    safePage === i + 1
                      ? "border-accent text-accent"
                      : "border-white/10 text-gray-400"
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>

            <button
              onClick={() =>
                setCurrentPage((prev) => (prev < totalPages ? prev + 1 : prev))
              }
              className="px-4 py-2 border border-white/10 text-gray-300 hover:text-accent"
            >
              Next
            </button>
          </div>
        )}
      </div>

      {/* Modal */}
      {openModal && (
        <div className="fixed inset-0 z-[80] bg-black/80 backdrop-blur-sm flex items-center justify-center">
          <div
            onClick={() => setOpenModal(false)}
            className="z-[90] w-full h-screen absolute"
          />
          <button
            onClick={() => {
              setOpenModal(false);
              setIndexImage(null);
            }}
            className="absolute z-[100] top-4 right-4 w-10 h-10 flex items-center justify-center text-gray-400 hover:text-accent"
          >
            <i className="fa-solid fa-xmark text-xl"></i>
          </button>

          <button
            onClick={() => {
              if (indexImage === 0) {
                setIndexImage(limited.length - 1);
              } else {
                setIndexImage(indexImage - 1);
              }
            }}
            className="absolute z-[110] left-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center text-gray-400 hover:text-accent"
          >
            <i className="fa-solid fa-chevron-left"></i>
          </button>

          <button
            onClick={() => {
              if (indexImage < limited.length - 1) {
                setIndexImage(indexImage + 1);
              } else {
                setIndexImage(0);
              }
            }}
            className="absolute z-[110] right-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center text-gray-400 hover:text-accent"
          >
            <i className="fa-solid fa-chevron-right"></i>
          </button>

          <div className="relative z-[100] max-w-5xl max-h-[85vh] w-full mx-4 flex items-center justify-center">
            <div className="relative flex items-center justify-center">
              {modalLoading && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-10 h-10 border-2 border-gray-500 border-t-transparent rounded-full animate-spin"></div>
                </div>
              )}

              <img
                src={limited[indexImage]?.src}
                loading="lazy"
                alt=""
                onLoad={() => setModalLoading(false)}
                className={`max-w-full max-h-[80vh] object-contain transition-all duration-300 ${
                  modalLoading ? "opacity-0 blur-sm" : "opacity-100 blur-0"
                }`}
              />
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-4 bg-black">
              <div className="flex justify-between max-w-5xl mx-auto">
                <span className="text-accent text-xs uppercase">
                  {limited[indexImage]?.category}
                </span>
                <span className="text-gray-400 text-xs">
                  {imageNum} / {limited.length}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
