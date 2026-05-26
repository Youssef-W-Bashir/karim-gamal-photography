import style from "./HeroSection.module.css";
import HeroImg from "../../../assets/HeroImg.jpg";

export default function HeroSection() {
  return (
    <>
      <div
        id="home"
        className="w-full h-screen bg-center bg-cover bg-fixed"
        style={{ backgroundImage: `url(${HeroImg})` }}
      >
        <div className="overlay p-4 mx-auto bg-black/40 h-full">
          <p className="uppercase scale-y-150 font-firaSans tracking-[3px] text-center ps-4 mt-28 md:mt-32 drop-shadow-glow animate-gold-pulse relative text-accent text-xs sm:text-sm md:text-base lg:text-lg after:content-[''] after:absolute after:left-0 after:bottom-2 after:w-3 md:after:w-8 after:h-[2px] after:bg-accent before:content-[''] before:absolute before:right-0 before:bottom-2 before:w-3 md:before:w-8 before:h-[2px] before:bg-accent">
            fine art photography
          </p>

          <h2 className="font-playwriteNO text-center text-3xl md:text-6xl font-semibold text-white mt-10 md:mt-8">
            Karim Gamal
          </h2>

          <p className="uppercase mt-8 mb-8 md:mt-16 tracking-widest [-webkit-text-stroke:1.5px_#c9a227] text-transparent scale-y-150 text-3xl md:text-7xl text-center italic font-extrabold font-notoSerif">
            photographer
          </p>

          <p className="uppercase text-2xl md:text-5xl animate-gold-pulse tracking-wider text-white text-center font-permanentMarker">
            capture every <br /> precious moment
          </p>

          <a href="#about" className="btns">
            <button className="uppercase text-base md:text-lg mt-7 md:mt-8 mx-auto block bg-accent text-white rounded-[1px] py-1.5 px-6 md:px-7 border-2 border-accent hover:bg-transparent hover:tracking-[3.5px] group">
              about me{" "}
              <i className="fa-solid fa-arrow-right-long group-hover:translate-x-1 group-hover:rotate-90"></i>
            </button>
          </a>

          <div className="scroll overflow-hidden mx-auto mt-14 md:mt-8 border-[2px] border-accent w-6 h-14 px-1 py-1 rounded-full ">
            <div
              className={`${style.scrollBall} w-3 h-3 rounded-full bg-accent`}
            ></div>
          </div>
          <span className="text-center block mt-2 md:mt-0 scale-y-75 tracking-[3px] text-accent">
            scroll
          </span>
        </div>
      </div>
    </>
  );
}
