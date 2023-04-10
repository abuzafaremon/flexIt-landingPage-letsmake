import webDev from "../assets/images/ServiceOfferImg/webDev.png";
import digitalMarketing from "../assets/images/ServiceOfferImg/digitalMarketing.png";
import SaaSProduct from "../assets/images/ServiceOfferImg/SaaSProduct.png";
import appsDev from "../assets/images/ServiceOfferImg/appsDev.png";
import SEO from "../assets/images/ServiceOfferImg/seo.png";
import dateAnalysis from "../assets/images/ServiceOfferImg/dateAnalysis.png";
import Image from "next/image";

const ServicesOffer = () => {
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
              <div className="bg-[#ffffff01] border border-solid border-[#09aff4] shadow-[0px_0px_10px_rgba(6,9,34,0.1)] rounded-lg p-[30px]">
                <Image src={webDev} alt="webDev" />
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
              <div className="bg-[#ffffff01] border border-solid border-[#09aff4] shadow-[0px_0px_10px_rgba(6,9,34,0.1)] rounded-lg p-[30px]">
                <Image src={digitalMarketing} alt="digitalMarketing" />
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
              <div className="bg-[#ffffff01] border border-solid border-[#09aff4] shadow-[0px_0px_10px_rgba(6,9,34,0.1)] rounded-lg p-[30px]">
                <Image src={SaaSProduct} alt="SaaSProduct" />
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
              <div className="bg-[#ffffff01] border border-solid border-[#09aff4] shadow-[0px_0px_10px_rgba(6,9,34,0.1)] rounded-lg p-[30px]">
                <Image src={appsDev} alt="appsDev" />
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
              <div className="bg-[#ffffff01] border border-solid border-[#09aff4] shadow-[0px_0px_10px_rgba(6,9,34,0.1)] rounded-lg p-[30px]">
                <Image src={SEO} alt="seo" />
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
              <div className="bg-[#ffffff01] border border-solid border-[#09aff4] shadow-[0px_0px_10px_rgba(6,9,34,0.1)] rounded-lg p-[30px]">
                <Image src={dateAnalysis} alt="dateAnalysis" />
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
