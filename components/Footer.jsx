import React from "react";

import logo from "../assets/images/FooterImg/logo-colored.png.png";
import message from "../assets/images/FooterImg/envelop.png";
import location from "../assets/images/FooterImg/location.png";
import phone from "../assets/images/FooterImg/phone.png";
import facebook from "../assets/images/FooterImg/facebook.png";
import youtube from "../assets/images/FooterImg/youtube.png";
import instagram from "../assets/images/FooterImg/instagram.png";
import twitter from "../assets/images/FooterImg/twitter.png";
import Image from "next/image";

const Footer = () => {
  return (
    <>
      <section className='pt-16 pb-2 bg-[#24153B] bg-[url("../assets/images/FooterImg/footer-bg.png")]'>
        <div className="containerall container mx-auto px-5">
          <div className="footer">
            <div
              className="grid grid-cols-[repeat(2,_auto)] items-start justify-between
                  lg:flex
                  "
            >
              {/* left side start */}
              <div className="px-3 pb-8 lg:w-2/5">
                <Image className="mb-[26px]" src={logo} alt="logo" />

                <p className="text-white mb-[27px]">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Voluptatibus facere modi possimus dignissimos, aliquam nobis
                  eaque? Voluptatem magnam quisquam rem.
                </p>

                <p className="text-white">Subscribe to our news letter</p>
                <div>
                  <input
                    className="p-2"
                    type="email"
                    placeholder="Email Address"
                  />
                  <button className="py-2 px-5 bg-[#09AFF4BF]">
                    Subscribe
                  </button>
                </div>
              </div>
              {/* left side end */}

              {/*  */}
              <div className="text-white">
                <h1 className="mb-[22px]">Useful Links</h1>
                <ul>
                  <li className="before:content-['→'] before:mr-[8px] before:text-[#09AFF4] block text-sm font-medium mb-5">
                    Google
                  </li>
                  <li className="before:content-['→'] before:mr-[8px] before:text-[#09AFF4] block text-sm font-medium mb-5">
                    Dribbble
                  </li>
                  <li className="before:content-['→'] before:mr-[8px] before:text-[#09AFF4] block text-sm font-medium mb-5">
                    Linkedin
                  </li>
                  <li className="before:content-['→'] before:mr-[8px] before:text-[#09AFF4] block text-sm font-medium mb-5">
                    Wikipedia
                  </li>
                </ul>
              </div>
              {/*  */}

              {/*  */}
              <div className="text-white">
                <h1 className="mb-[22px] w-max">Resources</h1>

                <ul>
                  <li className="before:content-['→'] before:mr-[8px] before:text-[#09AFF4] block text-sm font-medium mb-5">
                    Support
                  </li>
                  <li className="before:content-['→'] before:mr-[8px] before:text-[#09AFF4] block text-sm font-medium mb-5">
                    Dashboard
                  </li>
                  <li className="before:content-['→'] before:mr-[8px] before:text-[#09AFF4] block text-sm font-medium mb-5">
                    Drivers
                  </li>
                  <li className="before:content-['→'] before:mr-[8px] before:text-[#09AFF4] block text-sm font-medium mb-5">
                    Projects
                  </li>
                </ul>
              </div>
              {/*  */}

              {/* Last div */}
              <div className="text-white">
                <h1 className="text-xl font-semibold leading-6 mb-7">
                  Contact Information
                </h1>

                {/* contacs */}
                <div>
                  {/* 1 */}
                  <div className="flex items-center gap-2 mb-6">
                    <Image src={message} alt="message" />
                    <code>example@support.com</code>
                  </div>

                  {/* 2 */}
                  <div className="flex items-center gap-2 mb-6">
                    <Image src={location} alt="location" />
                    <p>5 Xyz st., Abc, alexandria, egypt.</p>
                  </div>

                  {/* 3 */}
                  <div className="flex items-center gap-2 mb-6">
                    <Image src={phone} alt="phone" />
                    <code>+20123456789</code>
                  </div>
                </div>

                {/* icons */}
                <div className="flex items-center gap-[10px]">
                  <a href="@">
                    <Image src={facebook} alt="facebook" />
                  </a>

                  <a href="@">
                    <Image src={youtube} alt="youtube" />
                  </a>

                  <a href="@">
                    <Image src={instagram} alt="instagram" />
                  </a>

                  <a href="@">
                    <Image src={twitter} alt="twitter" />
                  </a>
                </div>
              </div>
              {/*  */}
            </div>

            {/* last footer */}
            <div className="text-white flex items-center justify-between mt-16">
              <p>&copy; 2023 Created by: Asraful Alam</p>

              <div className="flex items-center gap-3">
                <p>Terms of Use</p>
                <div className="w-[1px] h-5 bg-[#09AFF4]"></div>
                <p>Privacy Policy</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
