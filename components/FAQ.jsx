import Image from "next/image";

import leftImg from "../assets/images/askQuesImg/faq-illustration.png.png";

const FAQ = () => {
  return (
    <>
      <section id="faq" className="py-20 dark:text-white dark:bg-slate-900">
        <div className="container mx-auto px-5">
          <div
            className="grid
            grid-cols-1
            gap-3
            justify-between
            items-center
            md:grid-cols-2"
          >
            {/* image div start */}
            <div>
              <Image className="w-full" src={leftImg} alt="Computer home img" />
            </div>
            {/* image div end */}

            {/* Question div start */}
            <div>
              <div className="mb-14">
                <h5
                  className="uppercase
                  text-[#09AFF4]
                  font-semibold
                  mb-5"
                >
                  ● Faqs ●
                </h5>
                <h1
                  className="text-2xl
                  tracking-[1.5px]
                  capitalize
                  lg:text-5xl
                  md:text-2xl"
                >
                  Frequently Asked Questions
                </h1>
              </div>

              {/* questions start */}
              <div>
                <div
                  className="text-[#09AFF4]
                  font-bold
                  text-lg
                  flex
                  justify-between
                  items-center
                  border
                  border-[rgba(9,175,244,0.35)]
                  rounded-[4px]
                  p-[17px]
                  mb-2"
                >
                  <p>Are your service easy to use?</p>
                  <p>+</p>
                </div>
                {/*  */}
                <div
                  className="text-[#09AFF4]
                  font-bold
                  text-lg
                  flex
                  justify-between
                  items-center
                  border
                  border-[rgba(9,175,244,0.35)]
                  rounded-[4px]
                  p-[17px]
                  mb-2"
                >
                  <p>Are your service easy to use?</p>
                  <p>+</p>
                </div>
                {/*  */}
                <div
                  className="text-[#09AFF4]
                  font-bold
                  text-lg
                  flex
                  justify-between
                  items-center
                  border
                  border-[rgba(9,175,244,0.35)]
                  rounded-[4px]
                  p-[17px]
                  mb-2"
                >
                  <p>Are your service easy to use?</p>
                  <p>+</p>
                </div>
                {/*  */}
                <div
                  className="text-[#09AFF4]
                  font-bold
                  text-lg
                  flex
                  justify-between
                  items-center
                  border
                  border-[rgba(9,175,244,0.35)]
                  rounded-[4px]
                  p-[17px]
                  mb-2"
                >
                  <p>Are your service easy to use?</p>
                  <p>+</p>
                </div>
                {/*  */}
              </div>
              {/* questions end */}
            </div>
            {/* Question div end */}
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQ;
