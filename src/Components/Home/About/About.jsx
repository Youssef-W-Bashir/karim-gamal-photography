import photographerImg from "../../../assets/imagePhotographer.PNG";

export default function About() {
  return (
    <>
      <section
        id="about"
        className="relative overflow-hidden bg-black px-6 py-28 text-white md:px-12"
      >
        {/* Background Glow */}
        <div className="absolute left-[-120px] top-20 h-72 w-72 rounded-full bg-accent opacity-20 blur-3xl"></div>
        <div className="absolute z-0 bottom-0 right-[-100px] h-80 w-80 rounded-full bg-accent opacity-15 blur-3xl"></div>
        <div className="absolute z-0 -bottom-5 right-[650px] h-80 w-80 rounded-full bg-accent opacity-15 blur-3xl"></div>
        <div className="absolute top-0 right-0 h-80 w-80 rounded-full bg-accent opacity-15 blur-3xl"></div>

        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
          {/* Image Side */}
          <div className="relative group">
            <div className="absolute inset-0 rounded-[32px] bg-accent opacity-20 blur-2xl transition-all duration-500 group-hover:opacity-30"></div>

            <div className="relative overflow-hidden rounded-[32px] border border-white/10">
              <img
                src={photographerImg}
                alt="Photographer"
                className="h-[500px] md:h-[600px] w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            {/* Floating Card */}
            <div className="absolute bottom-6 left-6 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur-xl">
              <h3 className="text-2xl font-bold">4+</h3>
              <p className="text-sm text-white/70">Years Of Experience</p>
            </div>
          </div>

          {/* Content Side */}
          <div className="z-10">
            <p className="mb-3 tracking-[0.3em] text-accent uppercase text-sm">
              About Me
            </p>

            <h2 className="mb-6 text-4xl font-bold leading-tight md:text-5xl">
              Capturing Stories Through{" "}
              <span className="text-accent">Light & Emotion</span>
            </h2>

            <p className="mb-6 text-lg leading-relaxed text-white/70">
              I’m a photographer focused on turning real moments into cinematic
              memories. My work blends emotion, storytelling, and visual
              aesthetics to create photos that feel timeless.
            </p>

            <p className="mb-10 text-lg leading-relaxed text-white/60">
              Whether it’s portraits, fashion, or lifestyle photography, I
              always aim to capture authentic energy and meaningful details in
              every frame.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-5">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-3.5 md:p-5 text-center backdrop-blur-xl">
                <h3 className="text-2xl md:text-3xl font-bold text-accent">
                  500+
                </h3>
                <p className="mt-2 text-xs md:text-sm text-white/60">
                  Projects
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-3.5 md:p-5 text-center backdrop-blur-xl">
                <h3 className="text-2xl md:text-3xl font-bold text-accent">
                  1120+
                </h3>
                <p className="mt-2 text-xs md:text-sm text-white/60">Clients</p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-3.5 md:p-5 text-center backdrop-blur-xl">
                <h3 className="text-2xl md:text-3xl font-bold text-accent">
                  25K
                </h3>
                <p className="mt-2 text-xs md:text-sm text-white/60">
                  Photos Taken
                </p>
              </div>
            </div>

            {/* Button */}
            <a
              href="https://wa.me/201200465039?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D9%8B.%20%D8%A7%D8%B1%D9%8A%D8%AF%20%D8%A7%D9%84%D8%AD%D8%AC%D8%B2%20%D9%85%D8%B9%D9%83%20%D8%A7%D9%84%D8%A7%D9%86"
              className="inline-block mt-10 z-50 rounded-full border border-accent px-8 py-3 text-sm font-medium tracking-wide text-accent transition-all duration-300 hover:bg-accent hover:text-black hover:shadow-[0_0_30px_var(--accent)]"
            >
              Let’s Work Together{" "}
              <i className="fa-brands fa-whatsapp text-lg"></i>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
