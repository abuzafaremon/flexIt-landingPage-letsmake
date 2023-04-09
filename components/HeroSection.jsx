import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

import solutions from "../assets/images/heroImg/solutions.png";
import VectorUnderline from "../assets/images/heroImg/VectorUnderline.png";

const HeroSection = () => {
  return (
    <>
      <section className="bg-[url('../assets/images/heroImg/Herobg.png')] bg-cover bg-no-repeat bg-center w-full pb-20">
        <div className='bg-[url("/src/images/heroImg/bgTop.png")] w-full h-full'>
          <div className="containerall container mx-auto p-5">
            <div className="hero_div flex flex-col h-full mt-[80px]">
              {/* icon div start */}
              <div className="flex gap-8 mb-9">
                <a href="@">
                  <FaFacebookF className="text-white" />
                </a>
                <a href="@">
                  <FaYoutube className="text-white" />
                </a>
                <a href="@">
                  <FaInstagram className="text-white" />
                </a>
                <a href="@">
                  <FaTwitter className="text-white" />
                </a>
              </div>
              {/* icon div end  */}

              {/* text side start */}
              <div>
                <h1
                  className="
                        text-xl
                        xl:text-[56px]
                        lg:text-[56px]
                        md:text-[56px]
                        sm:text-2xl
                        capitalize font-bold text-white
                        "
                >
                  Providing the best
                  <div className="flex items-center gap-5 mt-4">
                    service & IT
                    <div>
                      <img
                        className="
                                    w-[87px]
                                    xl:w-[250px]
                                    lg:w-[220px]
                                    md:w-52
                                    sm:text-2xl
                                    "
                        src={solutions}
                        alt=""
                      />
                      <img
                        className="
                                    w-[87px]
                                    xl:w-[250px]
                                    lg:w-[220px]
                                    md:w-52
                                    sm:text-2xl
                                    "
                        src={VectorUnderline}
                        alt=""
                      />
                    </div>
                  </div>
                </h1>

                <p className="sm:w-[500px] text-xl leading-7 font-normal text-white mt-[30px]">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed
                  architecto dolorum inventore totam adipisci
                </p>
              </div>
              {/* text side end */}

              {/* button div start */}
              <div className="mt-[30px] flex items-center gap-6">
                <button className="text-[#09AFF4] text-xl border-2 border-solid border-[#09AFF4] p-[14px_40px] bg-[rgba(255,255,255,0.002)]shadow-[0px_3px_10px_-5px_rgba(6,9,34,0.15)] rounded-[4px_16px] hover:bg-[#09AFF4] hover:text-white">
                  Start Now
                </button>

                <button className="text-[#09AFF4] text-xl border-2 border-solid border-[#09AFF4] p-[14px_40px] bg-[rgba(255,255,255,0.002)]shadow-[0px_3px_10px_-5px_rgba(6,9,34,0.15)] rounded-[4px_16px] hover:bg-[#09AFF4] hover:text-white">
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
