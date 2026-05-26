import { useEffect, useState } from "react";
import style from "./Navbar.module.css";
import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";
import KGLogo from "../../../assets/KG_Logo.png";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  const [openToggle, setOpenToggle] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 ${scrolled ? "bg-gradient-to-b from-black/70 to-black/20 backdrop-blur-xl border-b border-white/50" : "bg-black/50"}`}
      >
        <div className="max-w-7xl mx-auto md:flex items-center justify-between px-2 md:px-6 py-2 md:py-3">
          {/* nav-logo */}
          <div className="nav-logo hidden md:block">
            <img
              src={KGLogo}
              alt="KG_Logo"
              className="mix-blend-lighten w-12 drop-shadow-glow"
            />
          </div>

          {/* nav-brand */}
          <div className="nav-brand">
            {/* nav-title */}
            <div className="nav-title flex md:block justify-between items-center">
              <div className="flex font-bold drop-shadow-glow md:block text-center items-center text-text-primary font-prata text-2xl md:text-3xl tracking-wide group">
                <img
                  src={KGLogo}
                  alt="KG_Logo"
                  className="mix-blend-lighten w-8 md:hidden"
                />

                <div className="w-1.5 h-1.5 rounded-full bg-[#c9a227]/60 mx-1 md:hidden" />

                <span>
                  <span className="text-accent group-hover:text-accent-hover">
                    K
                  </span>
                  arim
                  <span className="text-accent group-hover:text-accent-hover">
                    G
                  </span>
                  amal
                </span>
              </div>

              <button
                onClick={() => setOpenToggle(!openToggle)}
                className={`navbar-toggle ${openToggle ? "text-accent border-accent" : "text-text-primary"} p-1 md:hidden text-2xl border rounded-sm`}
              >
                <i className="fa-solid fa-bars"></i>
              </button>
            </div>

            {/* navbarLinks */}
            <ul
              className={`${style.navbarLinks} ${openToggle ? "right-0" : "-right-[410px]"} mb-5 md:mb-0 md:flex md:justify-between text-text-secondary font-firaSans font-semibold`}
            >
              <Link
                onClick={() => setOpenToggle(false)}
                to="home"
                spy
                activeClass="activeLink"
              >
                <li
                  className={`${style.navLink} my-3 md:my-0 hover:text-accent cursor-pointer py-2 group md:mx-2 lg:mx-3`}
                >
                  <i className="fa-solid fa-house group-hover:text-accent-hover group-hover:-translate-x-0.5 group-hover:-translate-y-1 group-hover:-rotate-6 group-hover:scale-125"></i>{" "}
                  Home
                </li>
              </Link>

              <Link
                onClick={() => setOpenToggle(false)}
                to="about"
                spy
                activeClass="activeLink"
              >
                <li
                  className={`${style.navLink} my-3 md:my-0 hover:text-accent cursor-pointer py-2 group md:mx-2 lg:mx-3`}
                >
                  <i className="fa-regular fa-address-card group-hover:text-accent-hover group-hover:-translate-x-0.5 group-hover:-translate-y-1 group-hover:-rotate-6 group-hover:scale-125"></i>{" "}
                  About
                </li>
              </Link>

              <Link
                onClick={() => setOpenToggle(false)}
                to="services"
                spy
                activeClass="activeLink"
              >
                <li
                  className={`${style.navLink} my-3 md:my-0 hover:text-accent cursor-pointer py-2 group md:mx-2 lg:mx-3`}
                >
                  <i className="fa-brands fa-ioxhost group-hover:text-accent-hover group-hover:-translate-x-0.5 group-hover:-translate-y-1 group-hover:-rotate-6 group-hover:scale-125"></i>{" "}
                  Services
                </li>
              </Link>

              <Link
                onClick={() => setOpenToggle(false)}
                to="portfolio"
                spy
                activeClass="activeLink"
              >
                <li
                  className={`${style.navLink} my-3 md:my-0 hover:text-accent cursor-pointer py-2 group md:mx-2 lg:mx-3`}
                >
                  <i className="fa-solid fa-user-tie group-hover:text-accent-hover group-hover:-translate-x-0.5 group-hover:-translate-y-1 group-hover:-rotate-6 group-hover:scale-125"></i>{" "}
                  Portfolio
                </li>
              </Link>

              <Link
                onClick={() => setOpenToggle(false)}
                to="contact"
                spy
                activeClass="activeLink"
              >
                <li
                  className={`${style.navLink} my-3 md:my-0 hover:text-accent cursor-pointer py-2 group md:mx-2 lg:mx-3`}
                >
                  <i className="fa-solid fa-phone group-hover:text-accent-hover group-hover:-translate-x-0.5 group-hover:-translate-y-1 group-hover:-rotate-6 group-hover:scale-125"></i>{" "}
                  Contact Me
                </li>
              </Link>

              <NavLink
                onClick={() =>
                  setTimeout(() => {
                    window.scrollTo(0, 0);
                  }, 0)
                }
                to="gallery"
                className="hover:bg-accent block text-accent md:hidden hover:text-black font-medium px-5 py-2 border-2 w-full md:w-fit border-accent rounded-[5px] text-sm"
              >
                <li className="navLink cursor-pointer py-2 group w-full md:w-fit">
                  Main Gallery
                </li>
              </NavLink>
            </ul>
          </div>

          {/* md:btn-contact */}
          <NavLink
            onClick={() =>
              setTimeout(() => {
                window.scrollTo(0, 0);
              }, 0)
            }
            to="gallery"
            className="hover:bg-accent hidden text-accent md:block hover:text-black font-medium px-5 py-2 border-2 w-full md:w-fit border-accent rounded-[5px] text-sm"
          >
            Main Gallery
          </NavLink>
        </div>
      </nav>
      <div
        onClick={() => setOpenToggle(false)}
        className={`fixed inset-0 z-20 ${
          openToggle
            ? "opacity-100 visible bg-gradient-to-b from-black/40 via-black/20 to-black/40 backdrop-blur-lg"
            : "opacity-0 invisible"
        }`}
      ></div>
    </>
  );
}
