import clientCard from "../assets/images/ClientCard/div.client-logo.png";
import clientCard1 from "../assets/images/ClientCard/div.client-logo-1.png";
import clientCard2 from "../assets/images/ClientCard/div.client-logo-2.png";
import clientCard3 from "../assets/images/ClientCard/div.client-logo-3.png";
import clientCard4 from "../assets/images/ClientCard/div.client-logo-4.png";
import clientCard5 from "../assets/images/ClientCard/div.client-logo-5.png";
import Image from "next/image";

const Clients = () => {
  return (
    <>
      <section
        className="bg-[#09AFF4] 
        py-20 
        dark:bg-slate-900"
      >
        <div
          className="container 
          mx-auto 
          px-5"
        >
          <div>
            <p
              className="text-md 
              text-white 
              tracking-[1.5px]
              capitalize
              text-center
              sm:text-3xl
              "
            >
              trusted by over 500 clients around the world.
            </p>

            {/* client cards start */}
            <div
              className="pt-14
                  grid
                  gap-3 
                  grid-cols-[repeat(2,_auto)]
                  sm:grid-cols-[repeat(3,_auto)]
                  justify-center
                  items-center
                  xl:flex"
            >
              <Image width={190} src={clientCard} alt="Client companies Card" />
              <Image
                width={190}
                src={clientCard1}
                alt="Client companies Card"
              />
              <Image
                width={190}
                src={clientCard2}
                alt="Client companies Card"
              />
              <Image
                width={190}
                src={clientCard3}
                alt="Client companies Card"
              />
              <Image
                width={190}
                src={clientCard4}
                alt="Client companies Card"
              />
              <Image
                width={190}
                src={clientCard5}
                alt="Client companies Card"
              />
            </div>
            {/* client cards end */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Clients;
