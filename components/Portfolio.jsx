import porfolio from "../assets/images/PortfolioImg/portfolio-6.png";
import porfolio1 from "../assets/images/PortfolioImg/portfolio-1.png";
import porfolio2 from "../assets/images/PortfolioImg/portfolio-2.png";
import porfolio3 from "../assets/images/PortfolioImg/portfolio-3.png";
import porfolio4 from "../assets/images/PortfolioImg/portfolio-4.png";
import porfolio5 from "../assets/images/PortfolioImg/portfolio-5.png";
import Image from "next/image";

const Portfolio = () => {
  return (
    <>
      <section
        id="portfolio"
        className="py-[80px]
        dark:text-white 
        dark:bg-slate-900"
      >
        <div className="container mx-auto p-4">
          <div className="portfolio">
            {/* header start */}
            <div
              className="flex 
              flex-col 
              justify-between 
              md:items-center
              md:flex-row"
            >
              <div>
                <h3
                  className="text-[#09AFF4] 
                  font-semibold 
                  uppercase"
                >
                  ● Portfolio ●
                </h3>
                <h2
                  className="text-5xl
                  font-medium
                  leading-[62px]
                  tracking-[1.5px]"
                >
                  Awesome Portfolio
                </h2>
              </div>
              <div>
                <button
                  className="text-[#09AFF4] 
                  text-xl 
                  border-2 
                  border-solid 
                  border-[#09AFF4] 
                  p-[14px_40px] 
                  rounded-[4px_16px] 
                  hover:bg-[#09AFF4] 
                  hover:text-white"
                >
                  See More &rarr;
                </button>
              </div>
            </div>
            {/* header end */}

            {/* images start */}
            <div>
              {/* Options */}
              <div className="mb-4 mt-12">
                <ul className="flex justify-start items-center gap-6">
                  <li>
                    <a className="active:text-[#09AFF4]" href="#">
                      All
                    </a>
                  </li>
                  <li>
                    <a className="active:text-[#09AFF4]" href="#">
                      Mobile
                    </a>
                  </li>
                  <li>
                    <a className="active:text-[#09AFF4]" href="#">
                      Web Apps
                    </a>
                  </li>
                  <li>
                    <a className="active:text-[#09AFF4]" href="#">
                      Data Analysis
                    </a>
                  </li>
                  <li>
                    <a className="active:text-[#09AFF4]" href="#">
                      Hosting
                    </a>
                  </li>
                </ul>
              </div>
              {/* Options */}

              {/* images start */}
              <div
                className="grid 
                grid-cols-1 
                sm:grid-cols-2
                md:grid-cols-3
                gap-2"
              >
                <Image src={porfolio} alt="portfolio" />
                <Image src={porfolio1} alt="portfolio" />
                <Image src={porfolio2} alt="portfolio" />
                <Image src={porfolio3} alt="portfolio" />
                <Image src={porfolio4} alt="portfolio" />
                <Image src={porfolio5} alt="portfolio" />
              </div>
              {/* images end */}
            </div>
            {/* images end */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
