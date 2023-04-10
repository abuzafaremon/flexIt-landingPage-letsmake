import Image from "next/image";

import profileImg from "../assets/images/TestimonialImg/person-1.png";

const Testimonial = () => {
  return (
    <>
      <section
        id="testimonial"
        className="bg-[#060922]
        py-20
        text-white
        text-center
        dark:bg-slate-900"
      >
        <div className="container mx-auto px-5">
          <div className="testimonial">
            <h5
              className="uppercase
              text-[#09AFF4]
              font-semibold
              mb-5"
            >
              ● Testimonial ●
            </h5>
            <h1
              className="text-xl
              tracking-[1.5px]
              capitalize
              sm:text-5xl"
            >
              Customers Testimonials
            </h1>
            <Image
              className="inline-block mb-12"
              src={profileImg}
              alt="profileImg"
            />

            <div
              className="flex
              justify-center
              items-center
              gap-24
              mb-[35px]"
            >
              <span className="bg-gray-600 p-[14px]">&lt;</span>
              <p
                className="w-[600px]
                leading-[41px]
                font-light
                text-2xl
                italic"
              >
                ipsum dolor sit amet consectetur adipisicing elit. Quod, id
                sequi aut qui est ab, corporis quis maiores reiciendis explicabo
                odio tenetur nulla sint vel.
              </p>
              <span className="bg-gray-600 p-[14px]">&gt;</span>
            </div>

            <h3 className="text-xl leading-7 capitalize mb-1">Fouad Osman</h3>
            <small className="text-base capitalize opacity-75">Officer</small>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
