"use client"

import { motion } from "framer-motion";
import Container from "@/app/UI Components/Container/page";
import BlogCard from "@/app/UI Components/Cards/Blog Card/BlogCard";

export default function BlogSection() {

    const blogsData = [
        {
            title: "Essential Strategies for Business Expansion",
            category: "Business",
            date: "May 20, 2024",
            img: "dummy-blog-img.jpg"
        },

        {
            title: "Digitally transforming to maximize business",
            category: "Development",
            date: "March 27, 2024",
            img: "dummy-blog-img-2.jpg"
        },

        {
            title: "The Power of Digital and Transformation",
            category: "Business",
            date: "January 24, 2024",
            img: "dummy-blog-img-3.jpg"
        },

        {
            title: "Tips for Organizational and Transformation",
            category: "Marketing",
            date: "January 18, 2024",
            img: "dummy-blog-img-4.jpg"
        }
    ]

    return <section>
        <Container className="py-16">
            <div className="flex justify-between items-center">
                <div>
                    <p className="text-5xl font-bold">Our Newest <span className="text-custom-purple">Insights</span></p>
                    <p className="mt-6 text-lg font-light max-w-lg">Discover fresh ideas and recent industry insights carefully chosen by our team of professionals.</p>
                </div>

                <div>
                    <motion.button
                        whileHover={{
                            scale: 1.05,
                            transition: { duration: 0.25 },
                        }}
                        whileTap={{
                            scale: 0.95,
                            transition: { duration: 0.125 },
                        }}
                        className="text-white bg-black rounded-xl px-6 py-3"
                    >
                        View All Articles
                    </motion.button>
                </div>
            </div>

            <div className="py-12 grid grid-cols-3 gap-6">
                {blogsData.map((item, index) => {
                    return <BlogCard item={item} index={index} />
                })}
            </div>
        </Container>
    </section>
}
