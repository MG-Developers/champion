"use client"
import { AnimatedText } from "@/app/components/AnimatedText"
import { IoIosArrowForward } from "react-icons/io";
import { IoIosCheckmarkCircle } from "react-icons/io";

export default function Home() {

  const priceComparisonTableData = [
    {
      id: "core-features",
      name: "Core Features",
      features: [{
        id: "budgeting",
        name: "Budgeting",
        isStarter: true,
        isProfessional: true,
        isEnterprise: true
      },

      {
        id: "track-metrics",
        name: "Track Metrics",
        isStarter: true,
        isProfessional: true,
        isEnterprise: true
      },

      {
        id: "debt-management",
        name: "Debt Management",
        isStarter: true,
        isProfessional: true,
        isEnterprise: true
      },

      {
        id: "saving-goals",
        name: "Saving Goals",
        isStarter: true,
        isProfessional: true,
        isEnterprise: true
      }],
    },

    {
      id: "advance-features",
      name: "Advance Features",
      features: [{
        id: "budgeting",
        name: "Budgeting",
        isStarter: true,
        isProfessional: true,
        isEnterprise: true
      },

      {
        id: "track-metrics",
        name: "Track Metrics",
        isStarter: true,
        isProfessional: true,
        isEnterprise: true
      },

      {
        id: "debt-management",
        name: "Debt Management",
        isStarter: true,
        isProfessional: true,
        isEnterprise: true
      },

      {
        id: "saving-goals",
        name: "Saving Goals",
        isStarter: true,
        isProfessional: true,
        isEnterprise: true
      }],
    },

    {
      id: "additional-benefits",
      name: "Additional Benefits",
      features: [{
        id: "budgeting",
        name: "Budgeting",
        isStarter: true,
        isProfessional: true,
        isEnterprise: true
      },

      {
        id: "track-metrics",
        name: "Track Metrics",
        isStarter: true,
        isProfessional: true,
        isEnterprise: true
      },

      {
        id: "debt-management",
        name: "Debt Management",
        isStarter: true,
        isProfessional: true,
        isEnterprise: true
      },

      {
        id: "saving-goals",
        name: "Saving Goals",
        isStarter: true,
        isProfessional: true,
        isEnterprise: true
      }],
    },
  ]

  return (
    <>
      <main>
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
          <div className="h-screen flex items-center">
            <div className="w-11/12 mx-auto">
              <div className="grid grid-cols-2">
                <div>
                  <AnimatedText text="A marketing website is a complex thing to build on your own" />
                </div>

                <div></div>
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

        <section className="w-11/12 mx-auto py-24">
          <div className="flex flex-col tracking-wide">
            <div className="flex flex-col items-center text-center space-y-6">
              <h2 className="xl:text-5xl lg:text-4xl md:text-3xl text-2xl font-medium">Plan Comparison</h2>
              <p className="text-base max-w-md text-gray-600">Explore detailed answers to the most commonly asked questions about our platform, features, integrations</p>
            </div>

            <div className="mt-6 py-10 border-b border-gray-300">
              <div className="grid grid-cols-4 gap-8 items-center">
                <div>
                  <p>Perfect for individuals or small teams</p>
                  <p>Monthly</p>
                </div>

                <div className="flex flex-col justify-between h-full">
                  <div>
                    <h3 className="text-2xl font-medium py-4">Starter</h3>
                    <p className="text-sm mb-4 text-gray-600 font-medium">0$/month, billed monthly. Perfect for individuals or small teams</p>
                  </div>
                  <button className="border border-gray-100 bg-gray-100 rounded-lg w-full py-3 px-6 text-sm font-medium">Get Started Now</button>
                </div>

                <div className="flex flex-col justify-between h-full">
                  <div>
                    <h3 className="text-2xl font-medium py-4">Professional</h3>
                    <p className="text-sm mb-4 text-gray-600 font-medium">12,99$/month, billed monthly. Perfect for scaling company, big corporate</p>
                  </div>
                  <button className="border border-black bg-black text-white rounded-lg w-full py-3 px-6 text-sm font-medium">Get Started Now</button>
                </div>

                <div className="flex flex-col justify-between h-full">
                  <div>
                    <h3 className="text-2xl font-medium py-4">Enterprise</h3>
                    <p className="text-sm mb-4 text-gray-600 font-medium">Contact us for custom pricing and billing terms</p>
                  </div>
                  <button className="border border-gray-100 bg-gray-100 rounded-lg w-full py-3 px-6 text-sm font-medium">Get Started Now</button>
                </div>
              </div>
            </div>

            {priceComparisonTableData.map((row, index) => {
              return (
                <div key={index} className="grid grid-flow-row auto-rows-fr">
                  <div className="mt-10">
                    <h2 className="text-xl font-medium py-4">{row.name}</h2>
                    {row.features.map((feature, index) => {
                      return (
                        <div key={index} className="grid grid-cols-4 gap-8 items-center py-6 border-b border-gray-200">
                          <div>
                            <p className="text-base font-medium text-gray-600">{feature.name}</p>
                          </div>

                          <div className="flex flex-col items-center">
                            <p>{feature.isStarter ? <IoIosCheckmarkCircle className="text-black" size={24} /> : <></>}</p>
                          </div>

                          <div className="flex flex-col items-center">
                            <p>{feature.isProfessional ? <IoIosCheckmarkCircle className="text-black" size={24} /> : <></>}</p>
                          </div>

                          <div className="flex flex-col items-center">
                            <p>{feature.isEnterprise ? <IoIosCheckmarkCircle className="text-black" size={24} /> : <></>}</p>
                          </div>
                        </div>
                      )
                    })}

                  </div>
                </div>
              )
            })}

          </div>
        </section>
      </main>
    </>
  )
}

