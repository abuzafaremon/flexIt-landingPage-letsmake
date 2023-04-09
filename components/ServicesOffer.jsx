import webDev from "../assets/images/ServiceOfferimg/Frame (2).png";
import digitalMarketing from "../assets/images/ServiceOfferimg/Frame.png";
import SaaSProduct from "../assets/images/ServiceOfferimg/Frame (1).png";
import appsDev from "../assets/images/ServiceOfferimg/Frame (3).png";
import SEO from "../assets/images/ServiceOfferimg/Frame (4).png";
import dateAnalysis from "../assets/images/ServiceOfferimg/Frame (5).png";
import Image from "next/image";

const ServicesOffer = () => {
  return (
    <>
      <section
        className="pb-48 
         dark:text-white dark:bg-slate-900
         "
      >
        <div className="containerall container mx-auto p-5">
          <div className="services_offer py-20">
            {/* service offer header start */}
            <div
              className="
                  md:flex md:justify-between md:items-center md:text-start
                  grid gap-6 justify-center items-center text-center
                  "
            >
              <div>
                <p className="text-base text-[#09AFF4] font-bold">
                  ● Services ●
                </p>
                <h1 className="text-5xl leading-[62px]">Services We Offer</h1>
                <p
                  className="text-[#060922] leading-6 md:w-[400px]
                        dark:text-white
                        "
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit Omnis
                  id atque dignissimos repellat quae ullam.
                </p>
              </div>

              <div>
                <button className="text-[#09AFF4] text-xl border-2 border-solid border-[#09AFF4] p-[14px_40px] bg-[rgba(255,255,255,0.002)]shadow-[0px_3px_10px_-5px_rgba(6,9,34,0.15)] rounded-[4px_16px] hover:bg-[#09AFF4] hover:text-white">
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
              <div className="bg-[#ffffff01] border border-solid border-[#09aff4] shadow-[0px_0px_10px_rgba(6,9,34,0.1)] rounded-lg p-[30px]">
                <Image src={webDev} alt="" />
                <h3 className="text-2xl mt-5 mb-[14px] font-semibold leading-[29px]">
                  Web Development
                </h3>
                <p className="mb-6">
                  Lorem ipsum dolor sit amet consecltetur adipisicing elit.
                  Omnis tempore perfe rendis explicabo.
                </p>
                <a
                  className="text-[#09AFF4] text-base font-semibold capitalize"
                  href="@"
                >
                  Read More &rarr;
                </a>
              </div>
              {/* card */}
              <div className="bg-[#ffffff01] border border-solid border-[#09aff4] shadow-[0px_0px_10px_rgba(6,9,34,0.1)] rounded-lg p-[30px]">
                <Image src={digitalMarketing} alt="" />
                <h3 className="text-2xl mt-5 mb-[14px] font-semibold leading-[29px]">
                  Web Development
                </h3>
                <p className="mb-6">
                  Lorem ipsum dolor sit amet consecltetur adipisicing elit.
                  Omnis tempore perfe rendis explicabo.
                </p>
                <a
                  className="text-[#09AFF4] text-base font-semibold capitalize"
                  href="@"
                >
                  Read More &rarr;
                </a>
              </div>
              {/* card */}
              <div className="bg-[#ffffff01] border border-solid border-[#09aff4] shadow-[0px_0px_10px_rgba(6,9,34,0.1)] rounded-lg p-[30px]">
                <Image src={SaaSProduct} alt="" />
                <h3 className="text-2xl mt-5 mb-[14px] font-semibold leading-[29px]">
                  Web Development
                </h3>
                <p className="mb-6">
                  Lorem ipsum dolor sit amet consecltetur adipisicing elit.
                  Omnis tempore perfe rendis explicabo.
                </p>
                <a
                  className="text-[#09AFF4] text-base font-semibold capitalize"
                  href="@"
                >
                  Read More &rarr;
                </a>
              </div>
              {/* card */}
              <div className="bg-[#ffffff01] border border-solid border-[#09aff4] shadow-[0px_0px_10px_rgba(6,9,34,0.1)] rounded-lg p-[30px]">
                <Image src={appsDev} alt="" />
                <h3 className="text-2xl mt-5 mb-[14px] font-semibold leading-[29px]">
                  Web Development
                </h3>
                <p className="mb-6">
                  Lorem ipsum dolor sit amet consecltetur adipisicing elit.
                  Omnis tempore perfe rendis explicabo.
                </p>
                <a
                  className="text-[#09AFF4] text-base font-semibold capitalize"
                  href="@"
                >
                  Read More &rarr;
                </a>
              </div>
              {/* card */}
              <div className="bg-[#ffffff01] border border-solid border-[#09aff4] shadow-[0px_0px_10px_rgba(6,9,34,0.1)] rounded-lg p-[30px]">
                <Image src={SEO} alt="" />
                <h3 className="text-2xl mt-5 mb-[14px] font-semibold leading-[29px]">
                  Web Development
                </h3>
                <p className="mb-6">
                  Lorem ipsum dolor sit amet consecltetur adipisicing elit.
                  Omnis tempore perfe rendis explicabo.
                </p>
                <a
                  className="text-[#09AFF4] text-base font-semibold capitalize"
                  href="@"
                >
                  Read More &rarr;
                </a>
              </div>
              {/* card */}
              <div className="bg-[#ffffff01] border border-solid border-[#09aff4] shadow-[0px_0px_10px_rgba(6,9,34,0.1)] rounded-lg p-[30px]">
                <Image src={dateAnalysis} alt="" />
                <h3 className="text-2xl mt-5 mb-[14px] font-semibold leading-[29px]">
                  Web Development
                </h3>
                <p className="mb-6">
                  Lorem ipsum dolor sit amet consecltetur adipisicing elit.
                  Omnis tempore perfe rendis explicabo.
                </p>
                <a
                  className="text-[#09AFF4] text-base font-semibold capitalize"
                  href="@"
                >
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
