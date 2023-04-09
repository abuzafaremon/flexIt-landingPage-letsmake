import React from "react";

import card from "../assets/images/PricingPlanImg/Group.png";
import card1 from "../assets/images/PricingPlanImg/Group (1).png";
import card2 from "../assets/images/PricingPlanImg/Group (2).png";
import card3 from "../assets/images/PricingPlanImg/Group (3).png";
import Image from "next/image";

const PricingSection = () => {
  return (
    <>
      <section className="dark:text-white dark:bg-slate-900">
        <div className="containerall container mx-auto p-4">
          <div className="pricing py-20">
            {/* header part start */}
            <div
              className="flex flex-col justify-between
                  md:flex md:items-center md:flex-row
                  "
            >
              <div>
                <p className="text-[#09AFF4] text-base font-semibold leading-6 uppercase mb-2">
                  ● Pricing plans ●
                </p>

                <div className="mb-12">
                  <h1 className="text-2xl md:text-4xl lg:text-5xl capitalize font-medium mb-6">
                    Affordable Pricing Plans
                  </h1>
                  <p className="text-lg leading-7 md:w-80">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit
                    Omnis id atque dignissimos repellat quae ullam.
                  </p>
                </div>
              </div>

              <button className="w-max mb-5 lg:mb-0 text-[#09AFF4] text-xl border-2 border-solid border-[#09AFF4] p-[14px_40px] bg-[rgba(255,255,255,0.002)]shadow-[0px_3px_10px_-5px_rgba(6,9,34,0.15)] rounded-[4px_16px] hover:bg-[#09AFF4] hover:text-white">
                See All Plans &rarr;
              </button>
            </div>
            {/* header part end */}

            {/* price part start */}
            <div
              className="grid grid-cols-1 justify-center items-center gap-6
                  md:grid-cols-2 
                  lg:flex lg:justify-between
                  "
            >
              {/* price card */}
              <div className="p-[33px_17px] bg-[#ffffff01] border border-solid border-[#09aff459] shadow-[1px_1px_10px_rgba(6,9,34,0.15)] rounded-[8px_8px_0px_0px] text-center hover:text-white hover:bg-[#09AFF4]">
                <Image className="mb-5 inline-block" src={card} alt="" />

                <h4 className="mb-[18px] text-2xl font-semibold">Free Plan</h4>
                <h1 className="text-[64px] font-semibold leading-[64px] mb-2">
                  <sup className="text-[#09AFF4] text-2xl inline-block mr-1 font-medium">
                    ${" "}
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
                  <button className="bg-[#09AFF4] text-xl border-2 border-solid border-[#09AFF4] p-[14px_40px] bg-[rgba(255,255,255,0.002)]shadow-[0px_3px_10px_-5px_rgba(6,9,34,0.15)] rounded-[4px_16px]">
                    See All Plans
                  </button>
                </div>
              </div>
              {/* price card */}
              <div className="p-[33px_17px] bg-[#ffffff01] border border-solid border-[#09aff459] shadow-[1px_1px_10px_rgba(6,9,34,0.15)] rounded-[8px_8px_0px_0px] text-center hover:text-white hover:bg-[#09AFF4]">
                <Image className="mb-5 inline-block" src={card1} alt="" />

                <h4 className="mb-[18px] text-2xl font-semibold">
                  Standard Plan
                </h4>
                <h1 className="text-[64px] font-semibold leading-[64px] mb-2">
                  <sup className="text-[#09AFF4] text-2xl inline-block mr-1 font-medium">
                    ${" "}
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
                  <button className="bg-[#09AFF4] text-xl border-2 border-solid border-[#09AFF4] p-[14px_40px] bg-[rgba(255,255,255,0.002)]shadow-[0px_3px_10px_-5px_rgba(6,9,34,0.15)] rounded-[4px_16px]">
                    See All Plans
                  </button>
                </div>
              </div>
              {/* price card */}
              <div className="p-[33px_17px] bg-[#ffffff01] border border-solid border-[#09aff459] shadow-[1px_1px_10px_rgba(6,9,34,0.15)] rounded-[8px_8px_0px_0px] text-center hover:text-white hover:bg-[#09AFF4]">
                <Image className="mb-5 inline-block" src={card2} alt="" />

                <h4 className="mb-[18px] text-2xl font-semibold">Pro Plan</h4>
                <h1 className="text-[64px] font-semibold leading-[64px] mb-2">
                  <sup className="text-[#09AFF4] text-2xl inline-block mr-1 font-medium">
                    ${" "}
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
                  <button className="bg-[#09AFF4] text-xl border-2 border-solid border-[#09AFF4] p-[14px_40px] bg-[rgba(255,255,255,0.002)]shadow-[0px_3px_10px_-5px_rgba(6,9,34,0.15)] rounded-[4px_16px]">
                    See All Plans
                  </button>
                </div>
              </div>
              {/* price card */}
              <div className="p-[33px_17px] bg-[#ffffff01] border border-solid border-[#09aff459] shadow-[1px_1px_10px_rgba(6,9,34,0.15)] rounded-[8px_8px_0px_0px] text-center hover:text-white hover:bg-[#09AFF4]">
                <Image className="mb-5 inline-block" src={card3} alt="" />

                <h4 className="mb-[18px] text-2xl font-semibold">
                  Ultimate Plan
                </h4>
                <h1 className="text-[64px] font-semibold leading-[64px] mb-2">
                  <sup className="text-[#09AFF4] text-2xl inline-block mr-1 font-medium">
                    ${" "}
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
                  <button className="bg-[#09AFF4] text-xl border-2 border-solid border-[#09AFF4] p-[14px_40px] bg-[rgba(255,255,255,0.002)]shadow-[0px_3px_10px_-5px_rgba(6,9,34,0.15)] rounded-[4px_16px]">
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
