import Image from "next/image";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const HeroSection = () => {
  const images = {
    solutions: "/assets/images/heroImg/solutions.png",
    VectorUnderline: "/assets/images/heroImg/VectorUnderline.png",
  };
  return (
    <>
      <section
        id="hero"
        className="bg-[url('/assets/images/heroImg/Herobg.png')] bg-cover bg-no-repeat bg-center w-full pb-20"
      >
        <div className='bg-[url("/src/images/heroImg/bgTop.png")] w-full h-full'>
          <div className="container mx-auto p-5">
            <div className="flex flex-col h-full mt-[80px]">
              {/* icon div start */}
              <div className="flex gap-8 mb-9 text-white">
                <a href="#">
                  <FaFacebookF />
                </a>
                <a href="#">
                  <FaYoutube />
                </a>
                <a href="#">
                  <FaInstagram />
                </a>
                <a href="#">
                  <FaTwitter />
                </a>
              </div>
              {/* icon div end  */}

              {/* text side start */}
              <div>
                <div
                  className="
                        text-xl
                        sm:text-2xl
                        md:text-[56px]
                        capitalize font-bold text-white
                        "
                >
                  <span>Providing the best</span>
                  <div className="flex items-center gap-5 mt-4">
                    <span>service & IT</span>
                    <div>
                      <Image
                        className="w-[87px]
                                    md:w-52
                                    lg:w-[220px]
                                    xl:w-[250px]
                                    "
                        src={images.solutions}
                        width={250}
                        height={250}
                        alt="solutions"
                      />
                      <Image
                        className="
                                    w-[87px]
                                    md:w-52
                                    lg:w-[220px]
                                    xl:w-[250px]
                                    "
                        src={images.VectorUnderline}
                        width={250}
                        height={250}
                        alt="underline"
                      />
                    </div>
                  </div>
                </div>

                <p className="sm:w-[500px] text-xl leading-7 text-white mt-8">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed
                  architecto dolorum inventore totam adipisci
                </p>
              </div>
              {/* text side end */}

              {/* button div start */}
              <div className="mt-[30px] flex items-center gap-6">
                <button className="text-[#09AFF4] text-xl border-2 border-[#09AFF4] p-[14px_40px] rounded-[4px_16px] hover:bg-[#09AFF4] hover:text-white">
                  Start Now
                </button>

                <button className="text-[#09AFF4] text-xl border-2 border-[#09AFF4] p-[14px_40px] rounded-[4px_16px] hover:bg-[#09AFF4] hover:text-white">
                  Contact Us
                </button>
              </div>
              {/* button div end */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
