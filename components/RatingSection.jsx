import Image from "next/image";
import React from "react";

import card1 from "../assets/images/RatingImg/Frame (1).png";

const RatingSection = () => {
  return (
    <>
      <section className="bg-[#07102E]">
        <div className='bg-[url("/src/images/RatingImg/div.overlay-photo-image-bg.png")] bg-center bg-cover bg-no-repeat dark:bg-slate-900'>
          <div className="containerall container mx-auto p-4">
            <div
              className="rating_div 
                  grid gap-5 py-20 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
            >
              {/* card */}
              <div className="text-white p-[35px_80px] border-t-4 border border-solid border-[#09AFF4] text-center rounded-[0_0_8px_8px]">
                <div className="flex items-center justify-center">
                  <Image src={card1} alt="" />
                </div>
                <h1 className="text-5xl font-semibold my-2">750+</h1>
                <p className="text-xl">Finished Projects</p>
              </div>
              {/* card */}
              <div className="text-white p-[35px_80px] border-t-4 border border-solid border-[#09AFF4] text-center rounded-[0_0_8px_8px]">
                <div className="flex items-center justify-center">
                  <Image src={card1} alt="" />
                </div>
                <h1 className="text-5xl font-semibold my-2">23+</h1>
                <p className="text-xl">Created Jobs</p>
              </div>
              {/* card */}
              <div className="text-white p-[35px_80px] border-t-4 border border-solid border-[#09AFF4] text-center rounded-[0_0_8px_8px]">
                <div className="flex items-center justify-center">
                  <Image src={card1} alt="" />
                </div>
                <h1 className="text-5xl font-semibold my-2">200+</h1>
                <p className="text-xl">Happy Customers</p>
              </div>
              {/* card */}
              <div className="text-white p-[35px_80px] border-t-4 border border-solid border-[#09AFF4] text-center rounded-[0_0_8px_8px]">
                <div className="flex items-center justify-center">
                  <Image src={card1} alt="" />
                </div>
                <h1 className="text-5xl font-semibold my-2">28+</h1>
                <p className="text-xl">Years Of Experience</p>
              </div>
              {/* card */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RatingSection;
