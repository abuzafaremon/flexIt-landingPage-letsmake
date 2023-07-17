import Image from "next/image";
import DropdownMenu from "./DropdownMenu";

const Navbar = () => {
  const images = {
    logoImg: "/assets/images/heroImg/logo.png",
    searchIcon: "/assets/images/heroImg/SearchIcon.png",
    darkMode: "/assets/images/heroImg/DarkMode.png",
  };
  return (
    <header className="sticky top-0 bg-[#0C264B] bg-opacity-95">
      <div className="container mx-auto px-4 py-3">
        <div
          className="flex justify-between items-center" //TODO: same class for dif device
        >
          <a href="#hero">
            <Image
              src={images.logoImg}
              width={100}
              height={100}
              alt="Logo img"
            />
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
            <Image
              src={images.searchIcon}
              width={30}
              height={30}
              alt="Search Icon"
            />
            <div className="h-9 w-9 bg-black rounded-full flex justify-center items-center">
              <Image
                src={images.darkMode}
                width={20}
                height={20}
                alt="Dark mode icon"
              />
            </div>
            <DropdownMenu />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
