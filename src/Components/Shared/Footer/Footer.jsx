import style from "./Footer.module.css";

export default function Footer() {
  return (
    <>
      <footer className="bg-[#0a0a0a] border-t border-[#c9a277]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-9 md:py-11 text-center">
          {/* Logo */}
          <h3 className="text-white text-xl md:text-2xl tracking-[0.15em] uppercase mb-2">
            Karim <span className="text-accent">Gamal</span>
          </h3>
          <p className="text-gray-600 text-xs tracking-[0.2em] uppercase mb-6">
            Photography
          </p>

          {/* Social Icons */}
          <div className="flex justify-center gap-4 mb-8">
            {[
              {
                name: <i className="fa-brands fa-instagram"></i>,
                url: "https://www.instagram.com/karim___gamal_ph?igsh=cDNiNmI3dW03MG84&utm_source=qr",
              },
              {
                name: <i className="fa-brands fa-facebook"></i>,
                url: "https://www.facebook.com/share/1J43bgDroB/",
              },
              {
                name: <i className="fa-brands fa-whatsapp"></i>,
                url: "https://wa.me/201200465039?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D9%8B.%20%D8%A7%D8%B1%D9%8A%D8%AF%20%D8%A7%D9%84%D8%AD%D8%AC%D8%B2%20%D9%85%D8%B9%D9%83%20%D8%A7%D9%84%D8%A7%D9%86",
              },
            ].map((social, index) => (
              <a
                key={index}
                href={social.url}
                className="w-9 h-9 text-lg border border-white/10 flex items-center justify-center text-gray-500 text-[10px] tracking-wider hover:border-[#c9a277]/40 hover:text-accent"
              >
                {social.name}
              </a>
            ))}
          </div>

          {/* Contact Line */}
          <div className="flex items-center justify-center gap-4 text-gray-500 text-xs mb-8">
            <span>+20 120 046 5039</span>
            <span className="w-1 h-1 bg-[#c9a277]/40 rounded-full" />
            <span>karim.12elseidy@gmail.com</span>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
            <p className="text-gray-700 text-xs tracking-wider">
              &copy; 2026 &yen;OUSSEF WALEED. All rights reserved.
            </p>
            <span className="hidden sm:block w-1 h-1 bg-[#c9a277]/40 rounded-full" />
            <a href="https://wa.me/201129041022?text=Hello%20Developer%20%3F%21">
              <p className="text-gray-700 text-xs tracking-wider">
                Developed by{" "}
                <span className="text-[#c9a277]/70 hover:text-accent cursor-pointer relative">
                  <i className="fa-brands fa-whatsapp"></i>&yen;oussef Waleed.
                  <i
                    className={`${style.clickAnimation} fa-solid fa-hand-point-up absolute left-1/2`}
                  ></i>
                </span>
              </p>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
