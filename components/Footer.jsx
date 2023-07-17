import Image from "next/image";

const Footer = () => {
  const images = {
    logo: "/assets/images/FooterImg/logo-colored.png.png",
    message: "/assets/images/FooterImg/envelop.png",
    location: "/assets/images/FooterImg/location.png",
    phone: "/assets/images/FooterImg/phone.png",
    facebook: "/assets/images/FooterImg/facebook.png",
    youtube: "/assets/images/FooterImg/youtube.png",
    instagram: "/assets/images/FooterImg/instagram.png",
    twitter: "/assets/images/FooterImg/twitter.png",
  };
  return (
    <>
      <section
        className='pt-16
        pb-2
        bg-[#24153B]
        bg-[url("/assets/images/FooterImg/footer-bg.png")]'
      >
        <div className="container mx-auto px-5">
          <div>
            <div
              className="grid
              grid-cols-[repeat(2,_auto)]
              items-start
              justify-between
              lg:flex"
            >
              {/* left side start */}
              <div className="px-3 pb-8 lg:w-2/5">
                <Image
                  width={80}
                  className="mb-6"
                  src={images.logo}
                  height={80}
                  alt="logo"
                />

                <p className="text-white mb-6">
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
                <h1 className="text-xl font-semibold mb-7">
                  Contact Information
                </h1>

                {/* contacts */}
                <div>
                  {/* 1 */}
                  <div className="flex items-center gap-2 mb-6">
                    <Image
                      src={images.message}
                      height={30}
                      width={30}
                      alt="message"
                    />
                    <p>example@support.com</p>
                  </div>

                  {/* 2 */}
                  <div className="flex items-center gap-2 mb-6">
                    <Image
                      src={images.location}
                      height={30}
                      width={30}
                      alt="location"
                    />
                    <address>5 Xyz st., Abc, alexandria, egypt.</address>
                  </div>

                  {/* 3 */}
                  <div className="flex items-center gap-2 mb-6">
                    <Image
                      src={images.phone}
                      height={25}
                      width={25}
                      alt="phone"
                    />
                    <p>+20123456789</p>
                  </div>
                </div>

                {/* icons */}
                <div className="flex items-center gap-[10px]">
                  <a href="#">
                    <Image
                      src={images.facebook}
                      height={30}
                      width={30}
                      alt="facebook"
                    />
                  </a>

                  <a href="#">
                    <Image
                      src={images.youtube}
                      height={30}
                      width={30}
                      alt="youtube"
                    />
                  </a>

                  <a href="#">
                    <Image
                      src={images.instagram}
                      height={30}
                      width={30}
                      alt="instagram"
                    />
                  </a>

                  <a href="#">
                    <Image
                      src={images.twitter}
                      height={30}
                      width={30}
                      alt="twitter"
                    />
                  </a>
                </div>
              </div>
              {/*  */}
            </div>

            {/* last footer */}
            <div className="text-white flex items-center justify-between mt-16">
              <p>&copy; 2023 | Zafar Emon | All Rights Reserved</p>

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
