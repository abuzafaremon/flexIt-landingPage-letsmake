import Image from "next/image";

const PricingSection = () => {
  const images = {
    card: "/assets/images/PricingPlanImg/free.png",
    card1: "/assets/images/PricingPlanImg/stander.png",
    card2: "/assets/images/PricingPlanImg/pro.png",
    card3: "/assets/images/PricingPlanImg/unlimited.png",
  };
  return (
    <>
      <section id="pricing" className="dark:text-white dark:bg-slate-900">
        <div className="container mx-auto p-4">
          <div className="pricing py-20">
            {/* header part start */}
            <div
              className="flex
              flex-col
              justify-between
              md:flex
              md:items-center
              md:flex-row"
            >
              <div>
                <p
                  className="text-[#09AFF4] 
                  font-semibold
                  uppercase
                  mb-2"
                >
                  ● Pricing plans ●
                </p>

                <div className="mb-12">
                  <h1
                    className="text-2xl
                    md:text-4xl
                    lg:text-5xl
                    capitalize
                    font-medium
                    mb-6"
                  >
                    Affordable Pricing Plans
                  </h1>
                  <p
                    className="text-lg
                    leading-7
                    md:w-80"
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit
                    Omnis id atque dignissimos repellat quae ullam.
                  </p>
                </div>
              </div>

              <button
                className="mb-5
                lg:mb-0
                p-[14px_40px]
                text-xl
                border-2
                rounded-[4px_16px]
                text-[#09AFF4]
                border-[#09AFF4]
                hover:bg-[#09AFF4]
                hover:text-white"
              >
                See All Plans &rarr;
              </button>
            </div>
            {/* header part end */}

            {/* price part start */}
            <div
              className="grid
              justify-center
              items-center
              gap-6
              grid-cols-1
              md:grid-cols-2
              lg:flex
              lg:justify-between
              "
            >
              {/* price card */}
              <div
                className="p-[33px_17px]
                bg-[#ffffff01]
                border
                border-[#09aff459]
                shadow-[1px_1px_10px_rgba(6,9,34,0.15)]rounded-[8px_8px_0px_0px]
                text-center
                hover:text-white 
                hover:bg-[#09AFF4] transition group"
              >
                <Image
                  className="mb-5 inline-block"
                  src={images.card}
                  width={50}
                  height={50}
                  alt="free"
                />

                <h4
                  className="mb-[18px]
                  text-2xl
                  font-semibold"
                >
                  Free Plan
                </h4>
                <h1
                  className="text-[64px]
                  font-semibold
                  leading-[64px]
                  mb-2"
                >
                  <sup
                    className="text-[#09AFF4]
                    text-2xl
                    inline-block
                    mr-1
                    font-medium"
                  >
                    $
                  </sup>
                  00
                </h1>
                <small className="italic">Per Project</small>
                <hr className="w-28 h-1 bg-[#09AFF4] mx-auto" />
                {/*  */}
                <div className="leading-8">
                  <p>150 Lorem, ipsum dolor.</p>
                  <p>20 Lorem ipsum dolor sit .</p>
                  <p>Lorem ipsum dolor sit.</p>
                  <p>free Lorem ipsum dolor .</p>
                  <p>added Lorem ipsum dolor.</p>
                </div>

                <div>
                  <button className="bg-[#09AFF4] text-xl border-2  border-[#09AFF4] py-3 w-full shadow-[0px_3px_10px_-5px_rgba(6,9,34,0.15)] rounded-[4px_16px] group-hover:bg-white group-hover:text-[#09aff4]">
                    See All Plans
                  </button>
                </div>
              </div>
              {/* price card */}
              <div
                className="p-[33px_17px]
                bg-[#ffffff01]
                border
                border-[#09aff459]
                shadow-[1px_1px_10px_rgba(6,9,34,0.15)]rounded-[8px_8px_0px_0px]
                text-center
                hover:text-white 
                hover:bg-[#09AFF4] transition group"
              >
                <Image
                  className="mb-5 inline-block"
                  src={images.card1}
                  width={50}
                  height={50}
                  alt="stander"
                />

                <h4
                  className="mb-[18px]
                  text-2xl
                  font-semibold"
                >
                  Standard Plan
                </h4>
                <h1
                  className="text-[64px]
                  font-semibold
                  leading-[64px]
                  mb-2"
                >
                  <sup
                    className="text-[#09AFF4]
                    text-2xl
                    inline-block
                    mr-1
                    font-medium"
                  >
                    $
                  </sup>
                  85
                </h1>
                <small className="italic">Per Project</small>
                <hr className="w-28 h-1 bg-[#09AFF4] mx-auto" />
                {/*  */}
                <div className="leading-8">
                  <p>150 Lorem, ipsum dolor.</p>
                  <p>20 Lorem ipsum dolor sit .</p>
                  <p>Lorem ipsum dolor sit.</p>
                  <p>free Lorem ipsum dolor .</p>
                  <p>added Lorem ipsum dolor.</p>
                </div>

                <div>
                  <button className="bg-[#09AFF4] text-xl border-2  border-[#09AFF4] py-3 w-full shadow-[0px_3px_10px_-5px_rgba(6,9,34,0.15)] rounded-[4px_16px] group-hover:bg-white group-hover:text-[#09aff4]">
                    See All Plans
                  </button>
                </div>
              </div>
              {/* price card */}
              <div
                className="p-[33px_17px]
                bg-[#ffffff01]
                border
                border-[#09aff459]
                shadow-[1px_1px_10px_rgba(6,9,34,0.15)]rounded-[8px_8px_0px_0px]
                text-center
                hover:text-white 
                hover:bg-[#09AFF4] transition group"
              >
                <Image
                  className="mb-5 inline-block"
                  src={images.card2}
                  width={50}
                  height={50}
                  alt="pro"
                />

                <h4
                  className="mb-[18px]
                  text-2xl
                  font-semibold"
                >
                  Pro Plan
                </h4>
                <h1
                  className="text-[64px]
                  font-semibold
                  leading-[64px]
                  mb-2"
                >
                  <sup
                    className="text-[#09AFF4]
                    text-2xl
                    inline-block
                    mr-1
                    font-medium"
                  >
                    $
                  </sup>
                  150
                </h1>
                <small className="italic">Per Project</small>
                <hr className="w-28 h-1 bg-[#09AFF4] mx-auto" />
                {/*  */}
                <div className="leading-8">
                  <p>150 Lorem, ipsum dolor.</p>
                  <p>20 Lorem ipsum dolor sit .</p>
                  <p>Lorem ipsum dolor sit.</p>
                  <p>free Lorem ipsum dolor .</p>
                  <p>added Lorem ipsum dolor.</p>
                </div>

                <div>
                  <button className="bg-[#09AFF4] text-xl border-2  border-[#09AFF4] py-3 w-full shadow-[0px_3px_10px_-5px_rgba(6,9,34,0.15)] rounded-[4px_16px] group-hover:bg-white group-hover:text-[#09aff4]">
                    See All Plans
                  </button>
                </div>
              </div>
              {/* price card */}
              <div
                className="p-[33px_17px]
                bg-[#ffffff01]
                border
                border-[#09aff459]
                shadow-[1px_1px_10px_rgba(6,9,34,0.15)]rounded-[8px_8px_0px_0px]
                text-center
                hover:text-white 
                hover:bg-[#09AFF4] transition group"
              >
                <Image
                  className="mb-5 inline-block"
                  src={images.card3}
                  width={50}
                  height={50}
                  alt="unlimited"
                />

                <h4
                  className="mb-[18px]
                  text-2xl
                  font-semibold"
                >
                  Ultimate Plan
                </h4>
                <h1
                  className="text-[64px]
                  font-semibold
                  leading-[64px]
                  mb-2"
                >
                  <sup
                    className="text-[#09AFF4]
                    text-2xl
                    inline-block
                    mr-1
                    font-medium"
                  >
                    $
                  </sup>
                  210
                </h1>
                <small className="italic">Per Project</small>
                <hr className="w-28 h-1 bg-[#09AFF4] mx-auto" />
                {/*  */}
                <div className="leading-8">
                  <p>150 Lorem, ipsum dolor.</p>
                  <p>20 Lorem ipsum dolor sit .</p>
                  <p>Lorem ipsum dolor sit.</p>
                  <p>free Lorem ipsum dolor .</p>
                  <p>added Lorem ipsum dolor.</p>
                </div>

                <div>
                  <button className="bg-[#09AFF4] text-xl border-2  border-[#09AFF4] py-3 w-full shadow-[0px_3px_10px_-5px_rgba(6,9,34,0.15)] rounded-[4px_16px] group-hover:bg-white group-hover:text-[#09aff4]">
                    See All Plans
                  </button>
                </div>
              </div>
              {/* price card */}
            </div>
            {/* price part end */}
          </div>
        </div>
      </section>
    </>
  );
};

export default PricingSection;
