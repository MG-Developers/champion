"use client"

import ContactSection from "../Sections/Contact/ContactSection"
import FAQsSection from "../Sections/FAQs/page";
import Container from "../UI Components/Container/page";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Contact() {
    const questions = [
        {
            title: "What makes Taxpire different from other tax filing platforms?",
            content:
                "Taxpire offers a unique combination of effortless tax filing, expert validation of income, coverage for crypto and F&O gains, and comprehensive business solutions, all with no hidden charges.",
        },

        {
            title: "How does Taxpire ensure maximum tax refunds?",
            content:
                "Our experts carefully review your tax documents and apply all eligible deductions and credits to ensure you get the maximum tax refund.",
        },

        {
            title: "How can I contact Taxpire support?",
            content:
                "You can contact our support team via email, phone, or live chat. Visit our Contact Us page for detailed contact information.",
        },

        {
            title: "Can I get personalized tax advice from Taxpire?",
            content:
                "Absolutely! Our tax experts are available to provide personalized advice based on your specific tax situation. Simply schedule a consultation through your account.",
        },

        {
            title: "How much does it cost to use Taxpire?",
            content:
                "Our pricing varies based on the services you need. Please visit our Pricing page for detailed information on our packages and fees.",
        },

        {
            title: "What payment methods do you accept?",
            content:
                "We accept various payment methods, including credit/debit cards, net banking and UPI.",
        },
    ];

    return <>
        <ContactSection />
        <FAQsSection questions={questions} />

        <section>
            <Container className="py-12">
                <div>
                    <p className="capitalize text-5xl font-semibold">Customer Success <span className="text-custom-purple">Stories</span> </p>
                </div>

                <div className="py-10 mt-4">
                    <Swiper spaceBetween={30}
                        slidesPerView={2.5}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        loop={true}
                        modules={[Autoplay]}
                    >
                        <SwiperSlide>
                            <div className="grid grid-flow-row auto-rows-auto gap-8 p-8 my-2 shadow shadow-slate-200 border border-slate-200 rounded-2xl transition-all duration-500 cursor-pointer hover:border-slate-300 hover:shadow-slate-400">
                                <div className="flex items-center gap-1">
                                    <img className="w-6" src="images/star.svg" alt="star-icon" />
                                    <img className="w-6" src="images/star.svg" alt="star-icon" />
                                    <img className="w-6" src="images/star.svg" alt="star-icon" />
                                    <img className="w-6" src="images/star.svg" alt="star-icon" />
                                    <img className="w-6" src="images/star.svg" alt="star-icon" />
                                </div>

                                <div>
                                    <p className="text-lg font-light">Very stated for properly simplifying operations with their unique plan and process optimization.</p>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div>
                                        <img src="images/dummy-avatar-img.jpg" className="w-16 rounded-full" alt="avatar-img" />
                                    </div>

                                    <div>
                                        <p className="text-lg font-medium">Emily Johnson</p>
                                        <p className="text-base font-light">Operations Director</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="grid grid-flow-row auto-rows-auto gap-8 my-2 p-8 shadow shadow-slate-200 border border-slate-200 rounded-2xl transition-all duration-500 cursor-pointer hover:border-slate-300 hover:shadow-slate-400">
                                <div className="flex items-center gap-1">
                                    <img className="w-6" src="images/star.svg" alt="star-icon" />
                                    <img className="w-6" src="images/star.svg" alt="star-icon" />
                                    <img className="w-6" src="images/star.svg" alt="star-icon" />
                                    <img className="w-6" src="images/star.svg" alt="star-icon" />
                                    <img className="w-6" src="images/star.svg" alt="star-icon" />
                                </div>

                                <div>
                                    <p className="text-lg font-light">Very stated for properly simplifying operations with their unique plan and process optimization.</p>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div>
                                        <img src="images/dummy-avatar-img.jpg" className="w-16 rounded-full" alt="avatar-img" />
                                    </div>

                                    <div>
                                        <p className="text-lg font-medium">Emily Johnson</p>
                                        <p className="text-base font-light">Operations Director</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="grid grid-flow-row auto-rows-auto gap-8 my-2 p-8 shadow shadow-slate-200 border border-slate-200 rounded-2xl transition-all duration-500 cursor-pointer hover:border-slate-300 hover:shadow-slate-400">
                                <div className="flex items-center gap-1">
                                    <img className="w-6" src="images/star.svg" alt="star-icon" />
                                    <img className="w-6" src="images/star.svg" alt="star-icon" />
                                    <img className="w-6" src="images/star.svg" alt="star-icon" />
                                    <img className="w-6" src="images/star.svg" alt="star-icon" />
                                    <img className="w-6" src="images/star.svg" alt="star-icon" />
                                </div>

                                <div>
                                    <p className="text-lg font-light">Very stated for properly simplifying operations with their unique plan and process optimization.</p>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div>
                                        <img src="images/dummy-avatar-img.jpg" className="w-16 rounded-full" alt="avatar-img" />
                                    </div>

                                    <div>
                                        <p className="text-lg font-medium">Emily Johnson</p>
                                        <p className="text-base font-light">Operations Director</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="grid grid-flow-row auto-rows-auto gap-8 my-2 p-8 shadow shadow-slate-200 border border-slate-200 rounded-2xl transition-all duration-500 cursor-pointer hover:border-slate-300 hover:shadow-slate-400">
                                <div className="flex items-center gap-1">
                                    <img className="w-6" src="images/star.svg" alt="star-icon" />
                                    <img className="w-6" src="images/star.svg" alt="star-icon" />
                                    <img className="w-6" src="images/star.svg" alt="star-icon" />
                                    <img className="w-6" src="images/star.svg" alt="star-icon" />
                                    <img className="w-6" src="images/star.svg" alt="star-icon" />
                                </div>

                                <div>
                                    <p className="text-lg font-light">Very stated for properly simplifying operations with their unique plan and process optimization.</p>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div>
                                        <img src="images/dummy-avatar-img.jpg" className="w-16 rounded-full" alt="avatar-img" />
                                    </div>

                                    <div>
                                        <p className="text-lg font-medium">Emily Johnson</p>
                                        <p className="text-base font-light">Operations Director</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="grid grid-flow-row auto-rows-auto gap-8 my-2 p-8 shadow shadow-slate-200 border border-slate-200 rounded-2xl transition-all duration-500 cursor-pointer hover:border-slate-300 hover:shadow-slate-400">
                                <div className="flex items-center gap-1">
                                    <img className="w-6" src="images/star.svg" alt="star-icon" />
                                    <img className="w-6" src="images/star.svg" alt="star-icon" />
                                    <img className="w-6" src="images/star.svg" alt="star-icon" />
                                    <img className="w-6" src="images/star.svg" alt="star-icon" />
                                    <img className="w-6" src="images/star.svg" alt="star-icon" />
                                </div>

                                <div>
                                    <p className="text-lg font-light">Very stated for properly simplifying operations with their unique plan and process optimization.</p>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div>
                                        <img src="images/dummy-avatar-img.jpg" className="w-16 rounded-full" alt="avatar-img" />
                                    </div>

                                    <div>
                                        <p className="text-lg font-medium">Emily Johnson</p>
                                        <p className="text-base font-light">Operations Director</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </Container>
        </section>
    </>
}
