import Image from "next/image";
import React from "react";

import profileImg from "../assets/images/TestimonialImg/1.png.png";

const Testimonial = () => {
  return (
    <>
      <section className="bg-[#060922] py-20 text-white text-center dark:bg-slate-900">
        <div className="containerall container mx-auto px-5">
          <div className="testimonial">
            <h5 className="uppercase text-[#09AFF4] text-base font-semibold leading-6 mb-5">
              ● Testimonial ●
            </h5>
            <h1
              className="text-xl leading-[62px] tracking-[1.5px] capitalize
                  sm:text-5xl 
                  "
            >
              Customers Testimonials
            </h1>
            <Image className="inline-block mb-12" src={profileImg} alt="" />

            <div className="flex items-center gap-24 justify-center mb-[35px]">
              <p className="bg-gray-600 p-[14px]">&lt;</p>
              <p className="w-[600px] leading-[41px] font-light text-2xl italic">
                ipsum dolor sit amet consectetur adipisicing elit. Quod, id
                sequi aut qui est ab, corporis quis maiores reiciendis explicabo
                odio tenetur nulla sint vel.
              </p>
              <p className="bg-gray-600 p-[14px]">&gt;</p>
            </div>

            <h3 className="text-xl leading-7 capitalize mb-1">Fouad Osman</h3>
            <small className="text-base leading-6 capitalize opacity-75">
              Officer
            </small>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
