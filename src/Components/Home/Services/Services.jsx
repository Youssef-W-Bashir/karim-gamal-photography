import { useContext } from "react";
import { Link } from "react-router-dom";
import { FilterImgContext } from "../../../Context/FilterImgContext";

export default function Services() {
  const { setActiveCategory, setActiveMedia } = useContext(FilterImgContext);

  return (
    <>
      <div className="overflow-hidden">
        <video
          className="w-full h-52 md:h-96 object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source
            src="https://res.cloudinary.com/dkxt2ew0f/video/upload/q_auto/v1779738089/lv_0_20260525220439_itkrkv.mp4"
            type="video/mp4"
          />
        </video>
      </div>

      <section
        id="services"
        className="relative overflow-hidden bg-black py-28 text-white"
      >
        {/* SERVICE ONE */}
        <div className="services relative">
          {/* Background Glow */}
          <div className="absolute left-[-150px] top-0 h-[350px] w-[350px] rounded-full bg-[#c9a227]/15 blur-[120px]"></div>

          <div className="absolute bottom-[-120px] right-[-120px] h-[400px] w-[400px] rounded-full bg-[#c9a227]/10 blur-[140px]"></div>

          <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">
            {/* LEFT */}
            <div>
              <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#c9a227]">
                Service one
              </p>

              <h2 className="mb-6 text-5xl relative font-light leading-tight md:text-6xl capitalize">
                weddings
                <div className="absolute bottom-[-120px] right-[-120px] h-[400px] w-[400px] rounded-full bg-[#c9a227]/10 blur-[140px]"></div>
              </h2>

              <div className="mb-10 h-[1px] w-40 bg-[#c9a227]" />

              <p className="mb-6 text-lg leading-9 text-gray-300">
                We understand that your wedding and engagement are
                once-in-a-lifetime moments filled with love, joy, and treasured
                memories.
              </p>

              <p className="relative leading-8 text-gray-400 hidden sm:block">
                We’re passionate about capturing the essence of your unique love
                story and turning it into a timeless collection of photographs.
                From your initial engagement to your eagerly anticipated wedding
                day, we are committed to preserving every precious moment along
                the way.
              </p>
              <div className="absolute bottom-[-120px] right-[-120px] h-[300px] w-[300px] rounded-full bg-[#c9a227]/10 blur-[140px]"></div>

              <Link
                to="gallery"
                onClick={() => {
                  setActiveMedia("photos");
                  setActiveCategory("weddings");
                  setTimeout(() => {
                    window.scrollTo(0, 0);
                  }, 0);
                }}
                className="mt-5 inline-block md:mt-10 border border-[#c9a227]/50 bg-[#c9a227]/10 px-8 py-4 text-sm uppercase tracking-[0.25em] text-white transition duration-300 hover:bg-accent hover:text-black"
              >
                More Pictures
              </Link>
            </div>

            {/* right */}
            <div className="relative">
              {/* Decorative Border */}
              <div className="absolute -left-5 -top-5 h-full w-full rounded-[30px] border border-[#c9a227]/30"></div>

              {/* Main Image */}
              <div className="relative overflow-hidden rounded-[30px] border border-white/10 bg-white/5">
                <img
                  src="https://res.cloudinary.com/dkxt2ew0f/image/upload/q_auto/v1779751342/wedding_mpdnbm.jpg"
                  alt=""
                  className="h-[500px] md:h-[650px] w-full object-cover"
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>

                {/* Glass Card */}
                <div className="absolute bottom-6 left-6 rounded-2xl border border-white/10 bg-black/40 px-6 py-5 backdrop-blur-md">
                  <p className="text-xs uppercase tracking-[0.3em] text-[#c9a227]">
                    Karim Gamal
                  </p>

                  <h3 className="mt-2 text-2xl font-light">
                    Creative Photography
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SERVICE TWO */}
        <div className="services mt-14 relative">
          {/* Background Glow */}
          <div className="absolute left-[-150px] top-0 h-[350px] w-[350px] rounded-full bg-[#c9a227]/15 blur-[120px]"></div>

          <div className="absolute bottom-[-120px] right-[-120px] h-[400px] w-[400px] rounded-full bg-[#c9a227]/10 blur-[140px]"></div>

          <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">
            {/* LEFT */}
            <div className="relative order-2 lg:order-1">
              {/* Decorative Border */}
              <div className="absolute -left-5 -top-5 h-full w-full rounded-[30px] border border-[#c9a227]/30"></div>

              {/* Main Image */}
              <div className="relative overflow-hidden rounded-[30px] border border-white/10 bg-white/5">
                <img
                  src="https://res.cloudinary.com/dkxt2ew0f/image/upload/v1779731087/DXsCFt0jSTn_JPG__28_uxcazz.jpg"
                  alt=""
                  className="h-[500px] md:h-[650px] w-full object-cover"
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>

                {/* Glass Card */}
                <div className="absolute bottom-6 left-6 rounded-2xl border border-white/10 bg-black/40 px-6 py-5 backdrop-blur-md">
                  <p className="text-xs uppercase tracking-[0.3em] text-[#c9a227]">
                    Karim Gamal
                  </p>

                  <h3 className="mt-2 text-2xl font-light">
                    Creative Photography
                  </h3>
                </div>
              </div>
            </div>

            {/* right */}
            <div className="order-1 lg:order-2">
              <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#c9a227]">
                Service Two
              </p>

              <h2 className="mb-6 text-5xl relative font-light leading-tight md:text-6xl capitalize">
                engagements
                <div className="absolute bottom-[-120px] right-[-120px] h-[400px] w-[400px] rounded-full bg-[#c9a227]/10 blur-[140px]"></div>
              </h2>

              <div className="mb-10 h-[1px] w-40 bg-[#c9a227]" />

              <p className="mb-6 text-lg leading-9 text-gray-300">
                We specialize in helping you capture the essence of your
                personality and story through elegant portrait photography.
              </p>

              <p className="relative leading-8 text-gray-400 hidden sm:block">
                Whether you're building a personal brand or preserving memories,
                we create cinematic visuals with luxury aesthetics and timeless
                editing styles.
              </p>
              <div className="absolute bottom-[-120px] right-[-120px] h-[300px] w-[300px] rounded-full bg-[#c9a227]/10 blur-[140px]"></div>

              <Link
                to="gallery"
                onClick={() => {
                  setActiveMedia("photos");
                  setActiveCategory("engagements");
                  setTimeout(() => {
                    window.scrollTo(0, 0);
                  }, 0);
                }}
                className="mt-5 inline-block md:mt-10 border border-[#c9a227]/50 bg-[#c9a227]/10 px-8 py-4 text-sm uppercase tracking-[0.25em] text-white transition duration-300 hover:bg-accent hover:text-black"
              >
                More Pictures
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
