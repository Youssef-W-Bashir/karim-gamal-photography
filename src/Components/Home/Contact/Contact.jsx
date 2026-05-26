import photographerImg from "../../../assets/imagePhotographer.PNG";

export default function Contact() {
  return (
    <>
      <div className="relative bg-[#0a0a0a] py-6 overflow-hidden">
        <div className="absolute inset-0 flex items-center">
          <div className="w-[200%] h-[60px] sm:h-[80px] bg-[#c9a277]/[0.04] -rotate-2 -ml-[50%]" />
        </div>

        <div className="absolute inset-0 flex items-center">
          <div className="w-[200%] h-[1px] bg-[#c9a277]/20 rotate-1 -ml-[50%]" />
        </div>

        <div className="relative z-10 text-center">
          <span className="text-[#c9a277]/60 text-[10px] tracking-[0.5em] uppercase">
            <i className="fa-solid fa-star"></i>
          </span>
        </div>
      </div>

      <section
        id="contact"
        className="relative bg-black py-16 sm:py-28 overflow-hidden"
      >
        {/* Background accents */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#c9a277]/[0.03] rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#c9a277]/[0.02] rounded-full blur-[100px]"></div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="text-accent text-xs tracking-[0.3em] uppercase">
              Contact Me
            </span>
            <h2 className="mt-4 text-4xl sm:text-5xl font-light text-white tracking-wide">
              The <span className="text-accent font-normal">Photographer</span>
            </h2>
            <div className="mt-4 w-16 h-[1px] bg-[#c9a277]/40 mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Profile Image */}
            <div className="lg:col-span-2">
              <div className="relative aspect-[3/4] overflow-hidden rounded-sm">
                <img
                  src={photographerImg}
                  alt="Photographer Portrait"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 border border-[#c9a277]/20"></div>
                {/* Corner accents */}
                <div className="absolute top-4 left-4 w-8 h-8 border-t border-l border-[#c9a277]"></div>
                <div className="absolute bottom-4 right-4 w-8 h-8 border-b border-r border-[#c9a277]"></div>
              </div>

              {/* Name below image */}
              <div className="mt-6 text-center lg:text-left">
                <h3 className="text-white text-xl tracking-wide">
                  Karim Gamal
                </h3>
                <p className="text-accent text-xs tracking-[0.2em] uppercase mt-1">
                  Creative Photography
                </p>
              </div>
            </div>

            {/* Info Content */}
            <div className="lg:col-span-3 space-y-10">
              {/* Bio */}
              <div>
                <h4 className="text-accent text-sm tracking-[0.2em] uppercase mb-4">
                  Biography
                </h4>
                <p className="text-gray-400 text-sm leading-[1.8]">
                  With over 8 years of experience capturing life's most precious
                  moments, I specialize in wedding photography, engagement
                  sessions, and luxury events. My approach blends documentary
                  storytelling with fine art aesthetics, creating timeless
                  images that evoke emotion and preserve memories for
                  generations.
                </p>
              </div>

              {/* Experience Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                {[
                  { number: "4+", label: "Years Experience" },
                  { number: "500+", label: "Projects Done" },
                  { number: "1120+", label: "Clients" },
                  { number: "25K+", label: "Photos Taken" },
                ].map((stat, index) => (
                  <div key={index} className="text-center lg:text-left">
                    <span className="text-accent text-2xl sm:text-3xl font-light">
                      {stat.number}
                    </span>
                    <p className="text-gray-600 text-xs tracking-wide mt-1 uppercase">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>

              {/* Equipment */}
              <div>
                <h4 className="text-accent text-sm tracking-[0.2em] uppercase mb-4">
                  Gear & Equipment
                </h4>
                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    "Canon R6 M3 / Canon R5",
                    "Canon Lens Rf",
                    "Profoto Lighting Systems",
                    "DJI Ronin Stabilizer",
                    "DJI Mavic 3 Pro Drone",
                    "Professional Editing Suite",
                  ].map((gear, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 text-gray-400 text-sm"
                    >
                      <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                      {gear}
                    </div>
                  ))}
                </div>
              </div>

              {/* Services Offered */}
              <div>
                <h4 className="text-accent text-sm tracking-[0.2em] uppercase mb-4">
                  Services
                </h4>
                <div className="space-y-3">
                  {[
                    {
                      title: "Full Day Coverage",
                      desc: "Complete event documentation from preparation to reception",
                    },
                    {
                      title: "Photo & Video Packages",
                      desc: "Combined photography and cinematography services",
                    },
                    {
                      title: "Album Design & Printing",
                      desc: "Premium handcrafted albums with worldwide shipping",
                    },
                  ].map((service, index) => (
                    <div
                      key={index}
                      className="group flex items-start gap-4 p-4 border border-white/5 hover:border-[#c9a277]/20 rounded-sm"
                    >
                      <div className="w-8 h-8 flex items-center justify-center border border-[#c9a277]/30 text-accent text-xs mt-0.5">
                        <i className="fa-solid fa-star"></i>
                      </div>
                      <div>
                        <h5 className="text-white text-sm group-hover:text-accent">
                          {service.title}
                        </h5>
                        <p className="text-gray-600 text-xs mt-1 leading-relaxed">
                          {service.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Info */}
              <div className="pt-6 border-t border-white/5">
                <h4 className="text-accent text-sm tracking-[0.2em] uppercase mb-6">
                  Get In Touch
                </h4>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <span className="text-gray-600 text-xs tracking-[0.2em] uppercase block mb-2">
                      Phone / WhatsApp
                    </span>
                    <span className="text-white text-sm hover:text-accent">
                      +20 120 046 5039
                    </span>
                  </div>
                  <div>
                    <span className="text-gray-600 text-xs tracking-[0.2em] uppercase block mb-2">
                      Email
                    </span>
                    <span className="text-white text-sm hover:text-accent">
                      karim.12elseidy@gmail.com
                    </span>
                  </div>
                  <div>
                    <span className="text-gray-600 text-xs tracking-[0.2em] uppercase block mb-2">
                      Photography Location
                    </span>
                    <span className="text-white text-sm hover:text-accent">
                      Any Where
                    </span>
                  </div>
                  <div>
                    <span className="text-gray-600 text-xs tracking-[0.2em] uppercase block mb-2">
                      Working Hours
                    </span>
                    <span className="text-white text-sm">All Days</span>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex flex-wrap gap-3 pt-4">
                {[
                  {
                    name: "Instagram",
                    url: "https://www.instagram.com/karim___gamal_ph?igsh=cDNiNmI3dW03MG84&utm_source=qr",
                  },
                  {
                    name: "Facebook",
                    url: "https://www.facebook.com/share/1J43bgDroB/",
                  },
                  {
                    name: "WhatsApp",
                    url: "https://wa.me/201200465039?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D9%8B.%20%D8%A7%D8%B1%D9%8A%D8%AF%20%D8%A7%D9%84%D8%AD%D8%AC%D8%B2%20%D9%85%D8%B9%D9%83%20%D8%A7%D9%84%D8%A7%D9%86",
                  },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    className="px-5 py-2.5 border border-white/10 text-gray-400 text-xs tracking-[0.15em] uppercase rounded-full hover:border-[#c9a277]/40 hover:text-accent hover:bg-[#c9a277]/5"
                  >
                    {social.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
