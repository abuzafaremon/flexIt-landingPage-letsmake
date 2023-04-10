import img1980 from "../assets/images/WWClientImg/1980..png";
import vectorUnderline from "../assets/images/WWClientImg/Vector.png";
import rightImg from "../assets/images/WWClientImg/photo-1.png.png";
import firstOnField from "../assets/images/WWClientImg/firstOnField.png";
import EasytoReach from "../assets/images/WWClientImg/EasytoReach.png";
import WWServices from "../assets/images/WWClientImg/WWServices.png";
import support from "../assets/images/WWClientImg/Support.png";
import signature from "../assets/images/WWClientImg/div.signature.png";
import Image from "next/image";

const About = () => {
  return (
    <>
      <section id="about" className="pb-24 dark:bg-slate-900 dark:text-white">
        <div className="container mx-auto p-5">
          <div
            className="flex flex-col items-center justify-between gap-6
            md:flex-row"
          >
            {/* text side start */}
            <div>
              <div>
                <p className="mb-5 text-[#09AFF4] text-base font-semibold uppercase">
                  ● About Us ●
                </p>
              </div>

              <div className="mb-12">
                <h1
                  className="text-3xl capitalize mb-6 md:text-4xl
                  lg:text-[56px]
                  "
                >
                  Trusted by Worldwide
                  <div className="flex items-center gap-5">
                    Clients since
                    <div className="md:mt-5">
                      <Image className="mb-2" src={img1980} alt="image" />
                      <Image src={vectorUnderline} alt="image" />
                    </div>
                  </div>
                </h1>
                <p className="text-lg">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Distinctio, aliquam est! rerum inventore animi at iusto totam
                  sunt accusamus quia
                </p>
              </div>

              {/* ww cards start */}
              <div
                className="grid grid-cols-1 gap-6
                sm:grid-cols-2"
              >
                {/* card */}
                <div className="flex gap-5 items-start">
                  <Image src={firstOnField} alt="firstOnField" />
                  <div>
                    <h3 className="text-2xl font-bold mb-3">First On Field</h3>
                    <p className="text-[#060922] dark:text-white">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Aspernatur, iste
                    </p>
                  </div>
                </div>
                {/* card */}
                <div className="flex gap-5 items-start">
                  <Image src={EasytoReach} alt="EasytoReach" />
                  <div>
                    <h3 className="text-2xl font-bold mb-3">Easy To Reach</h3>
                    <p className="text-[#060922] dark:text-white">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Aspernatur, iste
                    </p>
                  </div>
                </div>
                {/* card */}
                <div className="flex gap-5 items-start">
                  <Image src={WWServices} alt="WWServices" />
                  <div>
                    <h3 className="text-2xl font-bold mb-3">
                      Worldwide Services
                    </h3>
                    <p className="text-[#060922] dark:text-white">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Aspernatur, iste
                    </p>
                  </div>
                </div>
                {/* card */}
                <div className="flex gap-5 items-start">
                  <Image src={support} alt="support" />
                  <div>
                    <h3 className="text-2xl font-bold mb-3">24/7 Support</h3>
                    <p className="text-[#060922] dark:text-white">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Aspernatur, iste
                    </p>
                  </div>
                </div>

                {/* signature start */}
                <div>
                  <button className="text-[#09AFF4] text-xl border-2 border-solid border-[#09AFF4] p-[14px_40px] rounded-[4px_16px] hover:bg-[#09AFF4] hover:text-white">
                    Get in Touch
                  </button>
                </div>

                <div className="flex justify-end">
                  <Image src={signature} alt="signature" />
                </div>
                {/* signature end */}
              </div>
              {/* ww cards end */}
            </div>
            {/* text side end */}

            {/* image start */}
            <div>
              <Image className="w-full" src={rightImg} alt="rightImg" />
            </div>
            {/* image end */}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
