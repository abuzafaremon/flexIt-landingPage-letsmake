import Image from "next/image";

const RatingSection = () => {
  const images = {
    finished: "/assets/images/RatingImg/statistics.png",
    jobs: "/assets/images/RatingImg/created-jobs.png",
    customer: "/assets/images/RatingImg/customer.png",
    experience: "/assets/images/RatingImg/experience.png",
  };
  return (
    <>
      <section
        className="bg-[#07102E] 
        bg-[url('/assets/images/RatingImg/ratting-bg.png')] 
        bg-center 
        bg-cover 
        bg-no-repeat 
        dark:bg-slate-900"
      >
        <div className="container mx-auto p-4">
          <div
            className="grid 
            gap-5 
            py-20 
            grid-cols-1 
            sm:grid-cols-2 
            lg:grid-cols-4 
            text-center"
          >
            {/* card */}
            <div
              className="text-white 
              p-[35px_80px] 
              border-t-4 
              border 
              border-[#09AFF4] 
              rounded-[0_0_8px_8px]"
            >
              <div className="flex justify-center">
                <Image
                  src={images.finished}
                  width={80}
                  height={80}
                  alt="finished"
                />
              </div>
              <strong
                className="text-5xl 
                font-semibold 
                my-2"
              >
                750+
              </strong>
              <p className="text-xl">Finished Projects</p>
            </div>
            {/* card */}
            <div
              className="text-white 
              p-[35px_80px] 
              border-t-4 
              border 
              border-[#09AFF4] 
              rounded-[0_0_8px_8px]"
            >
              <div className="flex justify-center">
                <Image src={images.jobs} width={80} height={80} alt="jobs" />
              </div>
              <strong
                className="text-5xl 
                font-semibold 
                my-2"
              >
                23+
              </strong>
              <p className="text-xl">Created Jobs</p>
            </div>
            {/* card */}
            <div
              className="text-white 
              p-[35px_80px] 
              border-t-4 
              border 
              border-[#09AFF4] 
              rounded-[0_0_8px_8px]"
            >
              <div className="flex justify-center">
                <Image
                  src={images.customer}
                  width={80}
                  height={80}
                  alt="customer"
                />
              </div>
              <strong
                className="text-5xl 
                font-semibold 
                my-2"
              >
                80+
              </strong>
              <p className="text-xl">Happy Customers</p>
            </div>
            {/* card */}
            <div
              className="
              text-white 
              p-[35px_80px] 
              border-t-4 
              border 
              border-[#09AFF4] 
              rounded-[0_0_8px_8px]"
            >
              <div className="flex justify-center">
                <Image
                  src={images.experience}
                  width={80}
                  height={80}
                  alt="experience"
                />
              </div>
              <strong
                className="text-5xl 
                font-semibold 
                my-2"
              >
                28+
              </strong>
              <p className="text-xl">Years Of Experience</p>
            </div>
            {/* card */}
          </div>
        </div>
      </section>
    </>
  );
};

export default RatingSection;
