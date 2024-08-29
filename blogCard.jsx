"use client"

import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

export default function BlogCard({ item = {}, index = "" }) {
    return <div className="p-6 border border-slate-300 shadow shadow-slate-200 rounded-xl transition-all duration-700 group hover:bg-custom-purple hover:text-white hover:border-custom-purple hover:shadow-custom-purple">

        <div className="rounded-xl overflow-hidden">
            <img
                className="rounded-xl cursor-pointer hover:scale-110 transition-all ease-in-out duration-700"
                src={`images/${item.img}`}
                alt="blog-img"
            />
        </div>

        <div className="mt-6 flex items-center gap-4">
            <span className="py-2 px-4 rounded-md text-base text-white bg-black cursor-pointer">
                {item.category}
            </span>
            <span className="text-lg font-light">
                {item.date}
            </span>
        </div>

        <div className="mt-6">
            <p className="text-xl font-semibold cursor-pointer hover:underline hover:underline-offset-2">
                {item.title}
            </p>
        </div>

        <div className="mt-4">
            <motion.button
                whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.25 },
                }}
                whileTap={{
                    scale: 0.95,
                    transition: { duration: 0.125 },
                }}
                className="flex items-center text-base text-white bg-black rounded-lg px-4 py-3 group-hover:bg-white group-hover:text-black"
            >
                Read More
                <FaArrowRight
                    size="0.8rem"
                    className="ml-2"
                />
            </motion.button>
        </div>
    </div>
}
