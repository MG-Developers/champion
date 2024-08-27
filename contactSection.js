"use client"

import { motion } from "framer-motion"
import Link from "next/link";
import Container from "@/app/UI Components/Container/page";
import { FaPhone } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { IoLocationSharp } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { Input, Textarea } from "@nextui-org/react";

import { RiUserLine } from "react-icons/ri";

export default function ContactSection() {
    return <section>
        <Container className="py-12">
            <div className="grid grid-cols-2 gap-10 px-10 py-16 bg-black text-white border border-black shadow shadow-slate-400 rounded-3xl">
                <div className="grid grid-flow-row auto-row-auto gap-16 h-min">
                    <div>
                        <p className="capitalize text-5xl font-bold">Get in <span className="text-custom-purple text-6xl">touch!</span></p>
                        <p className="mt-8 text-lg font-light leading-snug">Fill up the form and our Team will get back to you within 24 hours.</p>
                    </div>

                    <div className="grid grid-flow-row auto-rows-auto gap-4">
                        <div className="flex max-w-72 items-center p-4 border-2 border-black rounded-2xl hover:shadow hover:shadow-custom-purple hover:border-custom-purple transition-all duration-500 cursor-pointer">
                            <FaPhone size="1.6rem" className="mr-4 text-custom-purple" />
                            <p className="font-light text-base">+982 8756 437</p>
                        </div>

                        <div className="flex max-w-72 items-center p-4 border-2 border-black rounded-2xl hover:shadow hover:shadow-custom-purple hover:border-custom-purple transition-all duration-500 cursor-pointer">
                            <IoMail size="1.6rem" className="mr-4 text-custom-purple" />
                            <p className="font-light text-base">hello@taxpire.com</p>
                        </div>

                        <div className="flex max-w-72 items-center p-4 border-2 border-black rounded-2xl hover:shadow hover:shadow-custom-purple hover:border-custom-purple transition-all duration-500 cursor-pointer">
                            <IoLocationSharp size="2.8rem" className="mr-4 text-custom-purple" />
                            <p className="font-light text-base">One Central 8th and 9th Floor, Trade Centre 2, Dubai</p>
                        </div>
                    </div>

                    <div className="p-4 flex items-center gap-8">
                        <Link href="#">
                            <FaFacebookF size="2.8rem" className="p-3 text-white shadow-md shadow-custom-purple border-2 border-custom-purple rounded-full transition-all duration-500 hover:bg-custom-purple" />
                        </Link>
                        <Link href="#"><FaTwitter size="2.8rem" className="p-3 text-white shadow-md shadow-custom-purple border-2 border-custom-purple rounded-full transition-all duration-500 hover:bg-custom-purple" /></Link>
                        <Link href="#"><FaInstagram size="2.8rem" className="p-3 text-white shadow-md shadow-custom-purple border-2 border-custom-purple rounded-full transition-all duration-500 hover:bg-custom-purple" /></Link>
                        <Link href="#"><FaLinkedinIn size="2.8rem" className="p-3 text-white shadow-md shadow-custom-purple border-2 border-custom-purple rounded-full transition-all duration-500 hover:bg-custom-purple" /></Link>
                    </div>
                </div>

                <div className="grid grid-flow-row auto-rows-fit gap-8 bg-white rounded-2xl px-8 py-10 ">
                    <div className="w-full">
                        <Input
                            type="text"
                            label="Name"
                            placeholder="Enter your name"
                            labelPlacement="outside"
                            fullWidth
                            startContent={
                                <RiUserLine size="1.4rem" className="text-custom-purple pointer-events-none flex-shrink-0 mr-2" />
                            }
                        />
                    </div>

                    <div className="w-full">
                        <Input
                            type="email"
                            label="Email"
                            placeholder="you@example.com"
                            labelPlacement="outside"
                            fullWidth
                            startContent={
                                <IoMail size="1.4rem" className="text-custom-purple pointer-events-none flex-shrink-0 mr-2" />
                            }
                        />
                    </div>

                    <div className="w-full">
                        <Input
                            type="text"
                            label="Phone"
                            placeholder="Your number"
                            labelPlacement="outside"
                            fullWidth
                            startContent={
                                <FaPhone size="1.4rem" className="text-custom-purple pointer-events-none flex-shrink-0 mr-2" />
                            }
                        />
                    </div>

                    <div className="w-full">
                        <Textarea
                            label="Description"
                            placeholder="Enter your description"
                            labelPlacement="outside"
                            fullWidth
                            classNames={{ input: "min-h-40" }}
                        />
                    </div>

                    <div className="flex justify-center">
                        <motion.button
                            whileHover={{
                                scale: 1.05,
                                transition: { duration: 0.25 },
                            }}
                            whileTap={{
                                scale: 0.95,
                                transition: { duration: 0.125 },
                            }}
                            className="text-white bg-custom-purple border border-custom-purple rounded-2xl w-full py-4"
                        >
                            Submit
                        </motion.button>
                    </div>

                </div>
            </div>
        </Container>
    </section>
}
