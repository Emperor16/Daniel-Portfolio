import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonialsData = [
    {
        quote: "Working with Daniel was an absolute pleasure. Their dedication, creativity, and problem-solving skills were evident in every project we collaborated on. They consistently delivered high-quality work and went above and beyond to ensure our success.",
        author: "John Doe",
        role: "CEO, Tech Solutions Inc.",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
        quote: "Daniel's expertise in frontend development is unparalleled. They have a keen eye for design and a deep understanding of user experience, which made our website not only visually stunning but also highly functional.",
        author: "Jane Smith",
        role: "Product Manager, Innovate Co.",
        avatar: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
        quote: "I had the opportunity to work with Daniel on a complex project, and their ability to navigate challenges and find innovative solutions was truly impressive. They are a valuable asset to any team.",
        author: "Alex Johnson",
        role: "CTO, Future Tech",
        avatar: "https://randomuser.me/api/portraits/men/22.jpg"
    },
    {
        quote: "Daniel's ability to understand our vision and translate it into a seamless user experience is exceptional. They are not just a developer but a true partner in bringing our ideas to life.",
        author: "Sarah Williams",
        role: "Marketing Director, Creative Agency",
        avatar: "https://randomuser.me/api/portraits/women/68.jpg"
    },
    {
        quote: "Daniel's professionalism and attention to detail are second to none. They consistently delivered projects on time and exceeded our expectations with their innovative approach.",
        author:"Dipeolu Ayobami Peter",
        role: "Founder, Nexsus",
        avatar: "https://randomuser.me/api/portraits/men/12.jpg"
    },
    {
        quote: "Daniel's ability to collaborate and communicate effectively made our project a success. They are not only a skilled developer but also a great team player.",
        author: "Emily Davis",
        role: "UX Designer, DesignPro",
        avatar: "https://randomuser.me/api/portraits/women/32.jpg"
    }
];

export const Testimonials = () => {
    const [activeIdx, setActiveIdx] = useState(0);

    const next = () => {
        setActiveIdx((prev) => (prev + 1) % testimonialsData.length);
    };

    const previous = () => {
        setActiveIdx((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
    };

    return (
        <section id="testimonials" className="py-32 relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
            <div className="container mx-auto px-6 relative z-10">
                {/* TESTIMONIALS header */}
                <div className="text-center max-w-3xl mb-16 flex flex-col items-center mx-auto">
                    <span className="text-secondary-foreground text-sm font-medium tracking-wider capitalize animate-fade-in">What People Say..</span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
                        Testimonials that <span className="italic font-normal font-serif text-white"> Inspire Confidence</span>
                    </h2>
                    <p className="text-muted-foreground animate-fade-in animation-delay-200">Hear from my clients and friends about my work and impact.</p>
                </div>

                {/* Testimonials Carousels */}
                <div className="max-w-4xl mx-auto">
                    <div className="relative">
                        {/* Main Testimonials */}
                        <div className="glass p-8 rounded-3xl md:p-12 glow-border animate-fade-in animation-delay-200">
                            <div className="absolute -top-4 left-8 w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                                <Quote className="w-6 h-6 text-primary-foreground" />
                            </div>
                            <blockquote className="text-xl md:text-2xl font-medium leading-relaxed mb-8 pt-4">
                                "{testimonialsData[activeIdx].quote}"
                            </blockquote>
                            <div className="flex items-center gap-4">
                                <img className="w-12 h-12 rounded-full object-cover ring-2 ring-primary/20" src={testimonialsData[activeIdx].avatar} alt={testimonialsData[activeIdx].author} />
                                <div>
                                    <div className="font-semibold text-lg">{testimonialsData[activeIdx].author}</div>
                                    <div className="text-sm text-muted-foreground">{testimonialsData[activeIdx].role}</div>
                                </div>
                            </div>
                        </div>

                        {/* Navigation Arrows */}
                        <div className="flex items-center justify-center gap-4 mt-8">
                            <button className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all" onClick={previous}>
                                <ChevronLeft />
                            </button>

                            <div className="flex gap-2">
                                {testimonialsData.map((_, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => setActiveIdx(idx)}
                                        className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === activeIdx ? "w-8 bg-primary" : "bg-muted-foreground/30 hover:bg-muted-foreground"}`}
                                    />
                                ))}
                            </div>

                            <button className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all" onClick={next}>
                                <ChevronRight />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
