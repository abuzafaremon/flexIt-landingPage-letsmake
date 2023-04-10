import logoImg from "../assets/images/heroImg/logo.png";
import searchIcon from "../assets/images/heroImg/SearchIcon.png";
import darkMode from "../assets/images/heroImg/DarkMode.png";
import Image from "next/image";
import DropdownMenu from "./DropdownMenu";

const Navbar = () => {
  return (
    <header className="sticky top-0 bg-[#0C264B] bg-opacity-95">
      <div className="container mx-auto px-4 py-3">
        <div
          className="flex justify-between items-center" //TODO: same class for dif device
        >
          <a href="#hero">
            <Image src={logoImg} alt="Logo img" />
          </a>

          <div>
            <ul
              className="hidden gap-8
                     lg:flex lg:justify-between lg:items-center" //TODO: same class for dif device
            >
              <li>
                <a className=" text-white font-medium capitalize" href="#hero">
                  Home
                </a>
              </li>
              <li>
                <a
                  className=" text-white font-medium capitalize"
                  href="#services"
                >
                  Service
                </a>
              </li>
              <li>
                <a className=" text-white font-medium capitalize" href="#about">
                  About
                </a>
              </li>
              <li>
                <a
                  className=" text-white font-medium capitalize"
                  href="#portfolio"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  className=" text-white font-medium capitalize"
                  href="#pricing"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  className=" text-white font-medium capitalize"
                  href="#testimonial"
                >
                  Testimonial
                </a>
              </li>
              <li>
                <a className=" text-white font-medium capitalize" href="#faq">
                  FAQ
                </a>
              </li>
              <li>
                <a
                  className=" text-white font-medium capitalize"
                  href="#contact"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div className="flex items-center gap-4">
            <Image src={searchIcon} alt="Search Icon" />
            <div className="h-9 w-9 bg-black rounded-full flex justify-center items-center">
              <Image src={darkMode} alt="Dark mode icon" />
            </div>
            <DropdownMenu />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
