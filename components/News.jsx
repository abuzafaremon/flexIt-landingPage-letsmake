import img1 from "../assets/images/NewsImg/div.post-img-wrapper.png";
import img2 from "../assets/images/NewsImg/2.jpg.png";
import img3 from "../assets/images/NewsImg/3.jpg.png";
import Image from "next/image";

const News = () => {
  return (
    <>
      <section className="py-20  dark:text-white dark:bg-slate-900">
        <div className="containerall container mx-auto px-5">
          <div className="news">
            {/* head part start */}
            <div
              className="grid grid-cols-1 justify-between items-center
                  md:grid-cols-[repeat(2,_auto)]
                  "
            >
              <div>
                <p className="text-[#09AFF4] text-base font-semibold leading-6 uppercase mb-2">
                  ● Blog ●
                </p>

                <div className="mb-12">
                  <h1 className="text-5xl capitalize font-medium mb-6">
                    Latest News
                  </h1>
                </div>
              </div>

              <button
                className="mb-5 w-max text-[#09AFF4] text-xl border-2 border-solid border-[#09AFF4] p-[14px_40px] bg-[rgba(255,255,255,0.002)]shadow-[0px_3px_10px_-5px_rgba(6,9,34,0.15)] rounded-[4px_16px] hover:bg-[#09AFF4] hover:text-white
                     md:mb-0
                     "
              >
                See All Posts &rarr;
              </button>
            </div>
            {/* head part end */}

            {/* cards start */}
            <div
              className="grid grid-cols-1 justify-between items-start gap-6
                  lg:grid-cols-3
                  md:grid-cols-2
                  "
            >
              {/* card 1*/}
              <div className="rounded bg-[#DAF3FD] dark:bg-slate-900">
                <Image className="w-full" src={img1} alt="" />

                <div className=" p-4">
                  <div className="flex justify-start items-center gap-3">
                    <div className="flex items-center gap-[10px]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
                        />
                      </svg>
                      <p>Hosting</p>
                    </div>

                    <div className="h-4 w-[1px] bg-black"></div>
                    <div className="flex items-center gap-[10px]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                        />
                      </svg>
                      <p>Allan Moore</p>
                    </div>
                  </div>

                  <h1 className="mt-2 mb-2 text-2xl font-semibold leading-9 capitalize">
                    How litespeed technology works to speed up your site.
                  </h1>

                  <p className="mb-4 text-base leading-6 opacity-75">
                    Lorem ipsum dolor sit, amet consectetur adipisicing
                    elit.Iure nulla dolorem, voluptates molestiae
                  </p>

                  <a className="text-[#09AFF4]" href="@">
                    Read More &rarr;
                  </a>
                </div>
              </div>
              {/* card */}

              {/* card 2 */}
              <div className="rounded bg-[#DAF3FD] dark:bg-slate-900">
                <Image className="w-full" src={img2} alt="" />

                <div className=" p-4">
                  <div className="flex justify-start items-center gap-3">
                    <div className="flex items-center gap-[10px]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
                        />
                      </svg>
                      <p>Web Dev</p>
                    </div>

                    <div className="h-4 w-[1px] bg-black"></div>
                    <div className="flex items-center gap-[10px]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                        />
                      </svg>
                      <p>Mhmd Amin</p>
                    </div>
                  </div>

                  <h1 className="mt-2 mb-2 text-2xl font-semibold leading-9 capitalize">
                    give your website a new look and feel with themes
                  </h1>

                  <p className="mb-4 text-base leading-6 opacity-75">
                    Lorem ipsum dolor sit, amet consectetur adipisicing
                    elit.Iure nulla dolorem, voluptates molestiae
                  </p>

                  <a className="text-[#09AFF4]" href="@">
                    Read More &rarr;
                  </a>
                </div>
              </div>
              {/* card */}

              {/* card 3 */}
              <div className="rounded bg-[#DAF3FD] dark:bg-slate-900">
                <Image className="w-full" src={img3} alt="" />

                <div className=" p-4">
                  <div className="flex justify-start items-center gap-3 mb-2">
                    <div className="flex items-center gap-[10px]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
                        />
                      </svg>
                      <p>SEO</p>
                    </div>

                    <div className="h-4 w-[1px] bg-black"></div>
                    <div className="flex items-center gap-[10px]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                        />
                      </svg>
                      <p>Yousuf Amin</p>
                    </div>
                  </div>

                  <h1 className="mt-2 mb-2 text-2xl font-semibold leading-9 capitalize">
                    the role of domain names in SEO world explained
                  </h1>

                  <p className="text-base leading-6 opacity-75 mb-4">
                    Lorem ipsum dolor sit, amet consectetur adipisicing
                    elit.Iure nulla dolorem, voluptates molestiae
                  </p>

                  <a className="text-[#09AFF4]" href="@">
                    Read More &rarr;
                  </a>
                </div>
              </div>
              {/* card */}
            </div>
            {/* cards end */}
          </div>
        </div>
      </section>
    </>
  );
};

export default News;
