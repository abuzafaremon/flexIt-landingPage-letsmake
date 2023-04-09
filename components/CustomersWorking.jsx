import leftImage from "../assets/images/CustomerWorkingImg/photo-2.png.png";
import working from "../assets/images/CustomerWorkingImg/working.png";
import vertorUnderline from "../assets/images/CustomerWorkingImg/Vector.png";
import Image from "next/image";

const CustomersWorking = () => {
  return (
    <>
      <section className="pb-[100px] dark:bg-slate-900 dark:text-white">
        <div className="containerall container mx-auto p-5">
          <div
            className="customer_working flex flex-col justify-between items-center gap-6
               md:flex-row
               "
          >
            {/* image div start */}
            <div>
              <Image className="w-full" src={leftImage} alt="leftImage" />
            </div>
            {/* image div end */}

            {/* Text div start */}
            <div>
              <div>
                <div>
                  <p className="text-[#09AFF4] text-base font-semibold leading-6 uppercase">
                    ● Why choose us ●
                  </p>
                </div>

                <div className="mb-12">
                  <h1
                    className="text-3xl capitalize mb-6
                           lg:text-[56px]
                        md:text-4xl
                           "
                  >
                    Trusted by Worldwide
                    <div className="flex items-center gap-5">
                      Clients since
                      <div className="md:mt-5">
                        <Image
                          className="w-28  md:w-full"
                          src={working}
                          alt="working"
                        />
                        <Image
                          className="w-28 md:w-full"
                          src={vertorUnderline}
                          alt="vertorUnderline"
                        />
                      </div>
                    </div>
                  </h1>
                  <p className="text-lg leading-7">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Distinctio, aliquam est! rerum inventore animi at iusto
                    totam sunt accusamus quia
                  </p>
                </div>
              </div>

              {/* Work items start */}
              <div>
                {/* item */}
                <div className="flex items-start justify-start gap-6 mb-12 px-3">
                  <p className="text-5xl font-bold text-[#09AFF4]">01. </p>
                  <div>
                    <h3 className="text-2xl font-medium capitalize leading-[29px] mb-3">
                      Latest Technologies
                    </h3>
                    <p className="text-[#060922] opacity-75 dark:text-white">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Neque repellendus minima reiciendis nobis dolore
                      obcaecati.
                    </p>
                  </div>
                </div>
                {/* item */}
                <div className="flex items-start justify-start gap-6 mb-12 px-3">
                  <p className="text-5xl font-bold text-[#09AFF4]">02. </p>
                  <div>
                    <h3 className="text-2xl font-medium capitalize leading-[29px] mb-3">
                      Latest Technologies
                    </h3>
                    <p className="text-[#060922] opacity-75 dark:text-white">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Neque repellendus minima reiciendis nobis dolore
                      obcaecati.
                    </p>
                  </div>
                </div>
                {/* item */}
                <div className="flex items-start justify-start gap-6 px-3">
                  <p className="text-5xl font-bold text-[#09AFF4]">03. </p>
                  <div>
                    <h3 className="text-2xl font-medium capitalize leading-[29px] mb-3">
                      Latest Technologies
                    </h3>
                    <p className="text-[#060922] opacity-75 dark:text-white">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Neque repellendus minima reiciendis nobis dolore
                      obcaecati.
                    </p>
                  </div>
                </div>
                {/* item */}
                <div className="mt-12">
                  <button className="text-[#09AFF4] text-xl border-2 border-solid border-[#09AFF4] p-[14px_40px] bg-[rgba(255,255,255,0.002)]shadow-[0px_3px_10px_-5px_rgba(6,9,34,0.15)] rounded-[4px_16px] hover:bg-[#09AFF4] hover:text-white">
                    Start Now
                  </button>
                </div>
              </div>
              {/* Work items end */}
            </div>
            {/* Text div end */}
          </div>
        </div>
      </section>
    </>
  );
};

export default CustomersWorking;
