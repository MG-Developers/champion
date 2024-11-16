// import CareerSection from "../Sections/Career/page";
import PartnerSection from "../Sections/Partner/page";
import Stats from "../Sections/Stats/page";
import TeamSection from "../Sections/Team/page";
import LocationCard from "../UI Components/Cards/LocationCard/page";
import Container from "../UI Components/Container/page";

export default function About() {
  return (
    <>
      {/* <section className="bg-black text-white py-12 pb-20"> */}
      <section className="bg-black text-white lg:py-28 md:py-24 py-20">
        <Container>
          <div className="flex justify-center text-center">
            <p className="xl:text-6xl lg:text-5xl md:text-4xl text-3xl max-w-screen-md font-light xl:leading-snug lg:leading-snug md:leading-snug leading-snug lg:py-8 py-6">
              You can always{" "}
              <span className="font-bold text-custom-purple">count on us</span>{" "}
              during your journey
            </p>
          </div>

          <div className="grid grid-flow-row auto-rows-auto lg:grid-cols-2 grid-cols-1 gap-8 py-6">
            <div className="relative w-full h-full row-span-2 pt-80">
              <img
                className="absolute top-0 rounded-3xl w-full h-full object-cover"
                src="/images/dummy-about-img.png"
              />
            </div>

            <div className="relative w-full h-full pt-80">
              <img
                className="absolute top-0 rounded-3xl w-full h-full object-cover"
                src="/images/dummy-about-img2.png"
              />
            </div>

            <div className="relative w-full h-full pt-80">
              <img
                className="absolute top-0 rounded-3xl w-full h-full object-cover"
                src="/images/dummy-about-img3.png"
              />
            </div>
          </div>
        </Container>
      </section>

      <PartnerSection />
      <Stats />

      <section className="bg-white text-tp-black">
        <Container className="py-12">
          <div className="flex flex-col items-center justify-center">
            <div className="flex flex-col items-center justify-center">
              <p className="xl:text-5xl lg:text-4xl md:text-3xl text-2xl capitalize font-bold">
                We Operate
                <span className="text-custom-purple leading-normal">
                  {" "}
                  Globally
                </span>
              </p>
              <p className="text-center lg:p-4 md:p-3 p-2 lg:text-lg md:text-base text-sm max-w-screen-lg font-light">
                With offices in India, Canada, and the UAE, we provide
                comprehensive tax services to clients across the globe,
                leveraging our local expertise to navigate international tax
                complexities.
              </p>
            </div>

            <div className="xl:mt-12 lg:mt-10 md:mt-8 mt-6">
              <div className="grid grid-flow-row auto-rows-min xl:gap-20 lg:gap-16 md:gap-12 gap-10">
                <div className="grid md:grid-cols-2 grid-cols-1 gap-10">
                  <div className="flex flex-col items-center">
                    <div className="flex items-center gap-6 cursor-pointer text-tp-black hover:text-tp-blue transition-all hover:duration-500 hover:ease-in-out">
                      <img
                        className="xl:w-12 lg:w-10 w-8"
                        src="/images/uae-flag.svg"
                      />
                      <p className="xl:text-4xl lg:text-3xl md:text-2xl text-xl font-bold">
                        UAE
                      </p>
                    </div>

                    <div className="grid grid-cols-1 xl:gap-10 lg:gap-8 md:gap-6 gap-4 xl:mt-12 lg:mt-10 md:mt-8 mt-6">
                      <LocationCard
                        city="Dubai"
                        address="One Central 8th and 9th Floor, Trade Centre 2, Dubai"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col items-center">
                    <div className="flex items-center gap-6 cursor-pointer text-tp-black hover:text-tp-blue transition-all hover:duration-500 hover:ease-in-out">
                      <img
                        className="xl:w-12 lg:w-10 w-8"
                        src="/images/canada-flag.svg"
                      />
                      <p className="xl:text-4xl lg:text-3xl md:text-2xl text-xl font-bold">
                        CANADA
                      </p>
                    </div>

                    <div className="grid grid-cols-1 xl:gap-10 lg:gap-8 gap-6 xl:mt-12 lg:mt-10 md:mt-8 mt-6">
                      <LocationCard
                        city="Toronto"
                        address="240 Richmond St W, Toronto, ON M5V 1V6, Canada"
                      />
                    </div>
                  </div>
                </div>
                {/* <div className="flex items-center justify-center">
                  <HeadlineTag
                    bg="bg-white"
                    text="tp-black"
                    title="Our Global Presence"
                  />
                </div> */}

                <div className="flex flex-col items-center">
                  <div className="flex items-center gap-6 cursor-pointer text-tp-black hover:text-tp-blue transition-all hover:duration-500 hover:ease-in-out">
                    <img
                      className="xl:w-12 lg:w-10 w-8"
                      src="/images/india-flag.svg"
                    />
                    <p className="xl:text-4xl lg:text-3xl md:text-2xl text-xl font-bold">
                      INDIA
                    </p>
                  </div>

                  <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 xl:gap-10 lg:gap-8 gap-6 xl:mt-12 lg:mt-10 md:mt-8 mt-6">
                    <LocationCard
                      city="Noida"
                      address="The Iconic Corenthum, Sector 62, Noida, Uttar Pradesh
                          201301, India"
                    />

                    <LocationCard
                      city="Gurugram"
                      address="BlueOne Square, Udyog Vihar Phase 4 Rd, Gurugram,
                          Haryana 122016, India"
                    />

                    <LocationCard
                      city="New Delhi"
                      address="Eldeco Centre, Block A, Shivalik Colony, Malviya
                          Nagar, Delhi, New Delhi 110017, India"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <TeamSection />
      {/* <CareerSection /> */}
    </>
  );
}
