import Image from "next/image";
import email from "../assets/images/OfficeBranchImg/email.png";
import phone from "../assets/images/OfficeBranchImg/phone-call.png";

const OfficeBranches = () => {
  return (
    <>
      <section
        id="location"
        className="py-20 dark:text-white dark:bg-slate-900"
      >
        <div className="container mx-auto px-5">
          <div>
            <h1
              className="mb-14
              text-2xl
              text-center
              tracking-[1.5px]
              capitalize
              font-medium
              md:text-5xl"
            >
              Our offices around the world
            </h1>
            {/* box div start */}
            <div
              className="grid
              items-center
              gap-6
              grid-cols-1
              md:grid-cols-2
              lg:grid-cols-3"
            >
              {/* box 1 */}
              <div
                className="rounded-[0px_0px_8px_8px]
                border
                border-t-4
                border-[#09AFF4]
                p-[33px_17px]"
              >
                <h1
                  className="text-2xl
                  font-medium
                  capitalize"
                >
                  New York
                </h1>
                <hr className="w-16 h-[2px] bg-[#09AFF4] mt-2 mb-8" />
                <p className="text-xl leading-7 capitalize opacity-75">
                  United States, 307 Wilshire, 2nd av. new york 3516.
                </p>

                <div className="flex items-center gap-4 mb-8 mt-[37px]">
                  <Image src={email} alt="email" />
                  <div>
                    <h3 className="text-xl text-[#09AFF4BF] font-medium">
                      Email:
                    </h3>
                    <code className="lowercase text-lg opacity-75">
                      info@example.com
                    </code>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <Image src={phone} alt="phone" />
                  <div>
                    <h3 className="text-xl text-[#09AFF4BF] font-medium">
                      Phone:
                    </h3>
                    <p className="text-lg opacity-75">+29480837257998</p>
                  </div>
                </div>
              </div>
              {/* box 1 */}

              {/* box 2 */}
              <div
                className="rounded-[0px_0px_8px_8px]
                border
                border-t-4
                border-[#09AFF4]
                p-[33px_17px]"
              >
                <h1
                  className="text-2xl
                  font-medium
                  capitalize"
                >
                  London
                </h1>
                <hr className="w-16 h-[2px] bg-[#09AFF4] mt-2 mb-8" />
                <p className="text-xl leading-7 capitalize opacity-75">
                  United States, 307 Wilshire, 2nd av. new york 3516.
                </p>

                <div className="flex items-center gap-4 mb-8 mt-[37px]">
                  <Image src={email} alt="" />
                  <div>
                    <h3 className="text-xl text-[#09AFF4BF] font-medium">
                      Email:
                    </h3>
                    <code className="lowercase text-lg opacity-75">
                      info@example.com
                    </code>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <Image src={phone} alt="" />
                  <div>
                    <h3 className="text-xl text-[#09AFF4BF] font-medium">
                      Phone:
                    </h3>
                    <p className="text-lg opacity-75">+29480837257998</p>
                  </div>
                </div>
              </div>
              {/* box 2 */}

              {/* box 3 */}
              <div
                className="rounded-[0px_0px_8px_8px]
                border
                border-t-4
                border-[#09AFF4]
                p-[33px_17px]"
              >
                <h1
                  className="text-2xl
                  font-medium
                  capitalize"
                >
                  Tokio
                </h1>
                <hr className="w-16 h-[2px] bg-[#09AFF4] mt-2 mb-8" />
                <p className="text-xl leading-7 capitalize opacity-75">
                  United States, 307 Wilshire, 2nd av. new york 3516.
                </p>

                <div className="flex items-center gap-4 mb-8 mt-[37px]">
                  <Image src={email} alt="" />
                  <div>
                    <h3 className="text-xl text-[#09AFF4BF] font-medium">
                      Email:
                    </h3>
                    <code className="lowercase text-lg opacity-75">
                      info@example.com
                    </code>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <Image src={phone} alt="" />
                  <div>
                    <h3 className="text-xl text-[#09AFF4BF] font-medium">
                      Phone:
                    </h3>
                    <p className="text-lg opacity-75">+29480837257998</p>
                  </div>
                </div>
              </div>
              {/* box 3 */}
            </div>
            {/* box div end */}
          </div>
        </div>
      </section>
    </>
  );
};

export default OfficeBranches;
