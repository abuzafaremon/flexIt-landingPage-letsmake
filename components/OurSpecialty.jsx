import leftImage from "../assets/images/CustomerWorkingImg/photo-2.png.png";
import working from "../assets/images/CustomerWorkingImg/working.png";
import vectorUnderline from "../assets/images/CustomerWorkingImg/Vector.png";
import Image from "next/image";

const OurSpecialty = () => {
  return (
    <>
      <section className="py-20 dark:bg-slate-900 dark:text-white">
        <div className="container mx-auto p-5">
          <div
            className="flex flex-col justify-between items-center gap-6
               md:flex-row"
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
                  <p className="text-[#09AFF4] font-semibold uppercase mb-3">
                    ● Why choose us ●
                  </p>
                </div>

                <div className="mb-12">
                  <div
                    //TODO: it was h1 tag
                    className="text-3xl capitalize mb-6
                    md:text-4xl
                    lg:text-[56px]
                    "
                  >
                    Trusted by Worldwide
                    <div className="flex items-center gap-5">
                      Clients since
                      <div className="md:mt-5">
                        <Image
                          className="w-28 md:w-full"
                          src={working}
                          alt="working"
                        />
                        <Image
                          className="w-28 md:w-full"
                          src={vectorUnderline}
                          alt="vectorUnderline"
                        />
                      </div>
                    </div>
                  </div>
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
                  <span
                    //TODO: it was p tag
                    className="text-5xl font-bold text-[#09AFF4]"
                  >
                    01.
                  </span>
                  <div>
                    <h3 className="text-2xl font-medium capitalize  mb-3">
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
                  <span
                    //TODO: it was p tag
                    className="text-5xl font-bold text-[#09AFF4]"
                  >
                    02.
                  </span>
                  <div>
                    <h3 className="text-2xl font-medium capitalize  mb-3">
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
                  <span
                    //TODO: it was p tag
                    className="text-5xl font-bold text-[#09AFF4]"
                  >
                    03.
                  </span>
                  <div>
                    <h3 className="text-2xl font-medium capitalize  mb-3">
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
                  <button className="text-[#09AFF4] text-xl border-2 border-[#09AFF4] p-[14px_40px] rounded-[4px_16px] hover:bg-[#09AFF4] hover:text-white">
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

export default OurSpecialty;
