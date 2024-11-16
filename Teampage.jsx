import Link from "next/link";
import Container from "@/app/UI Components/Container/page";

import { FaInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const teamDetails = [
  {
    name: "Sarah Johnson",
    role: "Senior Consultant",
    img: "dummy-team-img.jpg",
    instagram: "",
    facebook: "",
    linkedIn: "",
  },

  {
    name: "Emily Ramirez",
    role: "Financial Advisor",
    img: "dummy-team-img-2.jpg",
    instagram: "",
    facebook: "",
    linkedIn: "",
  },

  {
    name: "Saman Roberts",
    role: "Project Manager",
    img: "dummy-team-img-3.jpg",
    instagram: "",
    facebook: "",
    linkedIn: "",
  },

  {
    name: "Michael Chen",
    role: "Strategy Analyst",
    img: "dummy-team-img-4.jpg",
    instagram: "",
    facebook: "",
    linkedIn: "",
  },
];

export default function TeamSection() {
  return (
    <section>
      <Container className="xl:py-16 lg:py-12 md:py-10 sm:py-8 py-6">
        <div className="flex flex-col text-center">
          <div>
            <p className="capitalize xl:text-6xl lg:text-5xl md:text-4xl text-3xl text-center font-semibold xl:leading-tight lg:leading-tight md:leading-tight leading-tight">Discover Our <span className="text-custom-purple">Teammate</span></p>
          </div>

          <div className="flex justify-center">
            <p className="lg:mt-6 mt-4 lg:max-w-screen-md md:max-w-screen-sm max-w-sm xl:text-xl lg:text-lg md:text-base text-sm font-light">
              Explore the range of abilities and skills that our team member
              brings to the table to strengthen our group as a whole.
            </p>
          </div>

          <div className="xl:mt-20 lg:mt-16 md:mt-12 mt-8 mx-auto">
            <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
              {teamDetails.map((item, index) => {
                return (
                  <div className="text-left group" key={index}>
                    <div className="lg:w-68 md:w-64 w-60 lg:h-68 md:h-64 h-60 rounded-xl overflow-hidden">
                      <img
                        className="rounded-xl cursor-pointer group-hover:scale-110 transition-all ease-in-out group-hover:duration-700"
                        src={`/images/${item.img}`}
                      />
                    </div>
                    <p className="mt-4 md:text-2xl text-xl font-medium cursor-pointer transition-all ease-linear hover:text-custom-purple duration-200">
                      {item.name}
                    </p>
                    <p className="mt-1 md:text-base text-sm">{item.role}</p>

                    <div className="mt-4 flex items-center">
                      <Link href="">
                        <FaInstagram
                          className="p-2 mr-4 lg:text-[2.5rem] md:text-[2.25rem] text-[2rem] border-black border rounded-full hover:bg-black hover:text-white transition-all ease-linear duration-600"
                        />
                      </Link>

                      <Link href="">
                        <FaFacebookF
                          className="p-2 mr-4 lg:text-[2.5rem] md:text-[2.25rem] text-[2rem] border-black border rounded-full hover:bg-black hover:text-white transition-all ease-linear duration-600"
                        />
                      </Link>

                      <Link href="">
                        <FaLinkedinIn
                          className="p-2 lg:text-[2.5rem] md:text-[2.25rem] text-[2rem] border-black border rounded-full hover:bg-black hover:text-white transition-all ease-linear duration-600"
                        />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
