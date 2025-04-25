import { HeroSection } from "@/app/sections/HeroSection"
import { ServiceSection } from "@/app/sections/ServiceSection"
import { TreatmentSection } from "@/app/sections/TreatmentSection"
import { AmenitySection } from "@/app/sections/AmenitySection"
import { TestimonialSection } from "@/app/sections/TestimonialSection"
import { Newsletter } from "@/app/components/newsletter"
import BrochureSection from "./sections/BrochureSection"

import { IoIosArrowForward } from "react-icons/io";

export default function Home() {
  return (
    <>
      <main>
        {/* <HeroSection /> */}
        {/* <BrochureSection />
        <ServiceSection />
        <TreatmentSection />
        <AmenitySection />
        <TestimonialSection />
        <Newsletter /> */}
        <section>
          <div className="h-screen">
            <div className="w-9/12 mx-auto h-screen flex flex-col space-y-5 items-center justify-center">
              <div>
                <p className="border border-gray-300 p-2 rounded-lg text-sm font-semibold">Premium Quality</p>
              </div>

              <div>
                <p className="text-5xl text-center font-semibold tracking-wide !leading-tight max-w-lg">Embrace the modern design transition</p>
              </div>

              <div>
                <p className="text-gray-500 font-normal">Begin our journey to build supremely outstanding websites.</p>
              </div>

              <div>
                <button className="font-medium flex items-center gap-2">Check all services <span><IoIosArrowForward /></span></button>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="flex justify-center">
            <div className="w-11/12 mx-auto grid grid-cols-2 gap-10">
              <div className="bg-gray-50 rounded-3xl py-16 pb-0 px-8">
                <div className="flex flex-col space-y-5 items-center justify-center">
                  <div>
                    <p className="bg-white border border-gray-300 py-2 px-3 rounded-lg text-sm font-semibold">Exclusive</p>
                  </div>

                  <div>
                    <p className="text-3xl text-center font-semibold tracking-wide !leading-tight max-w-lg">For Freelancers</p>
                  </div>

                  <div>
                    <p className="text-center text-gray-500 font-normal">Unlock the Power of Superior Web Design.</p>
                  </div>

                  <div>
                    <button className="font-medium flex items-center gap-2">Join Now <span><IoIosArrowForward /></span></button>
                  </div>

                  <div>
                    <img src="/images/card-1-img.avif" />
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-3xl py-16 pb-0 px-8">
                <div className="flex flex-col space-y-5 items-center justify-center">
                  <div>
                    <p className="bg-white border border-gray-300 py-2 px-3 rounded-lg text-sm font-semibold">New</p>
                  </div>

                  <div>
                    <p className="text-3xl text-center font-semibold tracking-wide !leading-tight max-w-lg">For Customers</p>
                  </div>

                  <div>
                    <p className="text-center text-gray-500 font-normal">Craft a Cutting-Edge Digital Experience.</p>
                  </div>

                  <div>
                    <button className="font-medium flex items-center gap-2">Start Today <span><IoIosArrowForward /></span></button>
                  </div>

                  <div>
                    <img src="/images/card-1-img.avif" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="h-screen"></section>
      </main>
    </>
  )
}

