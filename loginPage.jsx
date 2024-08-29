"use client"

import { useState } from "react";
import Container from "../UI Components/Container/page"
import { motion } from "framer-motion"
import { Input } from "@nextui-org/react";

import { RiUserLine } from "react-icons/ri";
import { IoMail } from "react-icons/io5";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

export default function LoginPage() {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => setIsVisible(!isVisible);

    return <section className="flex items-center bg-black text-white min-h-screen">
        <Container className="py-12">
            <div className="grid grid-cols-2 gap-10">
                <div className="grid grid-flow-row auto-rows-auto gap-10">
                    <div>
                        <div>
                            <p className="uppercase text-base font-medium text-slate-300">Start for free</p>
                            <p className="mt-4 text-5xl font-bold">Create new account<span className="text-custom-purple">.</span></p>
                        </div>

                        <div className="mt-8 flex items-center gap-2 text-slate-300 text-base">
                            <p>Already A Member?</p>
                            <button className="text-custom-purple">Log In</button>
                        </div>
                    </div>

                    <div className="grid grid-flow-row auto-rows-auto gap-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="w-full">
                                <Input
                                    type="text"
                                    label="First name"
                                    placeholder="Enter your first name"
                                    labelPlacement="inside"
                                    variant="bordered"
                                    fullWidth
                                    endContent={
                                        <RiUserLine
                                            size="1.2rem"
                                            className="text-custom-purple pointer-events-none flex-shrink-0 mr-2"
                                        />
                                    }

                                    classNames={{
                                        label: "group-data-[filled-within=true]:text-slate-300",
                                        input: ["text-white", "placeholder:text-slate-400"],
                                        inputWrapper: ["border-slate-800", "bg-slate-800", "text-white", "data-[hover=true]:bg-slate-800", "data-[hover=true]:border-slate-800", "group-data-[focus=true]:bg-slate-800", "group-data-[focus=true]:border-custom-purple"],
                                    }}

                                />
                            </div>

                            <div className="w-full">
                                <Input
                                    type="text"
                                    label="Last name"
                                    placeholder="Enter your last name"
                                    labelPlacement="inside"
                                    variant="bordered"
                                    fullWidth
                                    endContent={
                                        <RiUserLine
                                            size="1.2rem"
                                            className="text-custom-purple pointer-events-none flex-shrink-0 mr-2"
                                        />
                                    }

                                    classNames={{
                                        label: "group-data-[filled-within=true]:text-slate-300",
                                        input: ["text-white", "placeholder:text-slate-400"],
                                        inputWrapper: ["border-slate-800", "bg-slate-800", "text-white", "data-[hover=true]:bg-slate-800", "data-[hover=true]:border-slate-800", "group-data-[focus=true]:bg-slate-800", "group-data-[focus=true]:border-custom-purple"],
                                    }}

                                />
                            </div>
                        </div>

                        <div className="w-full">
                            <Input
                                type="email"
                                label="Email"
                                placeholder="you@example.com"
                                labelPlacement="inside"
                                variant="bordered"
                                fullWidth
                                endContent={
                                    <IoMail
                                        size="1.4rem"
                                        className="text-custom-purple pointer-events-none flex-shrink-0 mr-2"
                                    />
                                }
                                classNames={{
                                    label: "group-data-[filled-within=true]:text-slate-300",
                                    input: ["text-white", "placeholder:text-slate-400"],
                                    inputWrapper: ["border-slate-800", "bg-slate-800", "text-white", "data-[hover=true]:bg-slate-800", "data-[hover=true]:border-slate-800", "group-data-[focus=true]:bg-slate-800", "group-data-[focus=true]:border-custom-purple"],
                                }}
                            />
                        </div>

                        <div className="w-full">
                            <Input
                                label="Password"
                                variant="bordered"
                                placeholder="Enter your password"
                                endContent={
                                    <button className="focus:outline-none" type="button" onClick={toggleVisibility} aria-label="toggle password visibility">
                                        {isVisible ? (
                                            <FaEyeSlash size="1.4rem"
                                                className="text-custom-purple pointer-events-none flex-shrink-0 mr-2" />
                                        ) : (
                                            <FaEye size="1.4rem"
                                                className="text-custom-purple pointer-events-none flex-shrink-0 mr-2" />
                                        )}
                                    </button>
                                }
                                type={isVisible ? "text" : "password"}

                                classNames={{
                                    label: "group-data-[filled-within=true]:text-slate-300",
                                    input: ["text-white", "placeholder:text-slate-400"],
                                    inputWrapper: ["border-slate-800", "bg-slate-800", "text-white", "data-[hover=true]:bg-slate-800", "data-[hover=true]:border-slate-800", "group-data-[focus=true]:bg-slate-800", "group-data-[focus=true]:border-custom-purple"],
                                }}
                            />
                        </div>
                    </div>

                    <div className="flex items-center gap-6">
                        <motion.button
                            whileHover={{
                                scale: 1.05,
                                transition: { duration: 0.125 },
                            }}

                            whileTap={{
                                scale: 0.9,
                                transition: { duration: 0.125 },
                            }} className="w-full py-4 bg-slate-700 text-white text-base border border-slate-700 rounded-full transition-all hover:brightness-75">Change method</motion.button>
                        <motion.button
                            whileHover={{
                                scale: 1.05,
                                transition: { duration: 0.125 },
                            }}

                            whileTap={{
                                scale: 0.9,
                                transition: { duration: 0.125 },
                            }} className="w-full py-4 bg-custom-purple text-white text-base border border-custom-purple rounded-full transition-all hover:brightness-125">Create account</motion.button>
                    </div>
                </div>
            </div>
        </Container>
    </section>

}
