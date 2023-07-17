import Image from "next/image";

const ServicesOffer = () => {
  const images = {
    webDev: "/assets/images/ServiceOfferImg/webDev.png",
    digitalMarketing: "/assets/images/ServiceOfferImg/digitalMarketing.png",
    SaaSProduct: "/assets/images/ServiceOfferImg/SaaSProduct.png",
    appsDev: "/assets/images/ServiceOfferImg/appsDev.png",
    SEO: "/assets/images/ServiceOfferImg/seo.png",
    dateAnalysis: "/assets/images/ServiceOfferImg/dateAnalysis.png",
  };
  return (
    <>
      <section
        id="services"
        className=" 
         dark:text-white
         dark:bg-slate-900"
      >
        <div className="container mx-auto p-5">
          <div className="py-20">
            {/* service offer header start */}
            <div className="grid gap-6 justify-center items-center text-center md:flex md:justify-between md:text-start">
              <div>
                <p className="text-[#09AFF4] font-bold">● Services ●</p>
                <h1 className="text-5xl leading-[62px]">Services We Offer</h1>
                <p className="text-[#060922] leading-6 md:w-[400px] dark:text-white">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit Omnis
                  id atque dignissimos repellat quae ullam.
                </p>
              </div>

              <div>
                <button className="text-[#09AFF4] text-xl border-2 border-[#09AFF4] p-[14px_40px]  rounded-[4px_16px] hover:bg-[#09AFF4] hover:text-white">
                  See All Services &rarr;
                </button>
              </div>
            </div>
            {/* service offer header end */}

            {/* service offer Card start */}
            <div
              className="mt-[70px] grid gap-6 grid-cols-1
                  sm:grid-cols-2 
                  md:grid-cols-3
                  "
            >
              {/* card */}
              <div className="bg-[#ffffff01] border  border-[#09aff4] shadow-[0px_0px_10px_rgba(6,9,34,0.1)] rounded-lg p-[30px]">
                <Image
                  src={images.webDev}
                  width={80}
                  height={80}
                  alt="webDev"
                />
                <h3 className="text-2xl mt-5 mb-[14px] font-semibold leading-[29px]">
                  Web Development
                </h3>
                <p className="mb-6">
                  Lorem ipsum dolor sit amet consecltetur adipisicing elit.
                  Omnis tempore perfe rendis explicabo.
                </p>
                <a className="text-[#09AFF4] font-semibold capitalize" href="#">
                  Read More &rarr;
                </a>
              </div>
              {/* card */}
              <div className="bg-[#ffffff01] border  border-[#09aff4] shadow-[0px_0px_10px_rgba(6,9,34,0.1)] rounded-lg p-[30px]">
                <Image
                  src={images.digitalMarketing}
                  width={80}
                  height={80}
                  alt="digitalMarketing"
                />
                <h3 className="text-2xl mt-5 mb-[14px] font-semibold leading-[29px]">
                  Web Development
                </h3>
                <p className="mb-6">
                  Lorem ipsum dolor sit amet consecltetur adipisicing elit.
                  Omnis tempore perfe rendis explicabo.
                </p>
                <a className="text-[#09AFF4] font-semibold capitalize" href="#">
                  Read More &rarr;
                </a>
              </div>
              {/* card */}
              <div className="bg-[#ffffff01] border  border-[#09aff4] shadow-[0px_0px_10px_rgba(6,9,34,0.1)] rounded-lg p-[30px]">
                <Image
                  src={images.SaaSProduct}
                  width={80}
                  height={80}
                  alt="SaaSProduct"
                />
                <h3 className="text-2xl mt-5 mb-[14px] font-semibold leading-[29px]">
                  Web Development
                </h3>
                <p className="mb-6">
                  Lorem ipsum dolor sit amet consecltetur adipisicing elit.
                  Omnis tempore perfe rendis explicabo.
                </p>
                <a className="text-[#09AFF4] font-semibold capitalize" href="#">
                  Read More &rarr;
                </a>
              </div>
              {/* card */}
              <div className="bg-[#ffffff01] border  border-[#09aff4] shadow-[0px_0px_10px_rgba(6,9,34,0.1)] rounded-lg p-[30px]">
                <Image
                  src={images.appsDev}
                  width={80}
                  height={80}
                  alt="appsDev"
                />
                <h3 className="text-2xl mt-5 mb-[14px] font-semibold leading-[29px]">
                  Web Development
                </h3>
                <p className="mb-6">
                  Lorem ipsum dolor sit amet consecltetur adipisicing elit.
                  Omnis tempore perfe rendis explicabo.
                </p>
                <a className="text-[#09AFF4] font-semibold capitalize" href="#">
                  Read More &rarr;
                </a>
              </div>
              {/* card */}
              <div className="bg-[#ffffff01] border  border-[#09aff4] shadow-[0px_0px_10px_rgba(6,9,34,0.1)] rounded-lg p-[30px]">
                <Image src={images.SEO} width={80} height={80} alt="seo" />
                <h3 className="text-2xl mt-5 mb-[14px] font-semibold leading-[29px]">
                  Web Development
                </h3>
                <p className="mb-6">
                  Lorem ipsum dolor sit amet consecltetur adipisicing elit.
                  Omnis tempore perfe rendis explicabo.
                </p>
                <a className="text-[#09AFF4] font-semibold capitalize" href="#">
                  Read More &rarr;
                </a>
              </div>
              {/* card */}
              <div className="bg-[#ffffff01] border  border-[#09aff4] shadow-[0px_0px_10px_rgba(6,9,34,0.1)] rounded-lg p-[30px]">
                <Image
                  src={images.dateAnalysis}
                  width={80}
                  height={80}
                  alt="dateAnalysis"
                />
                <h3 className="text-2xl mt-5 mb-[14px] font-semibold leading-[29px]">
                  Web Development
                </h3>
                <p className="mb-6">
                  Lorem ipsum dolor sit amet consecltetur adipisicing elit.
                  Omnis tempore perfe rendis explicabo.
                </p>
                <a className="text-[#09AFF4] font-semibold capitalize" href="#">
                  Read More &rarr;
                </a>
              </div>
              {/* card */}
            </div>
            {/* service offer Card end */}
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesOffer;
