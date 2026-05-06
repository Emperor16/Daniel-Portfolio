import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonialsData = [
    {
        quote: "One thing that stood out to me, whilst he works under my unit, was his courage and his meticulousness to get the job done perfectly and one time",
        author: "Dr. Olalade Seyi",
        role: "Director of Software Development Unit (ITEMS)",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
        quote: "Daniel's expertise in frontend development is unparalleled. He has a keen eye for design and a deep understanding of user experience, which made our website not only visually stunning but also highly functional.",
        author: "Eniola Ayodele",
        role: "CEO, Dorola Inc.",
        avatar: "https://randomuser.me/api/portraits/women/34.jpg"
    },
    {
        quote: "I had the opportunity to work with Daniel on a complex project, and his ability to navigate challenges and find innovative solutions was truly impressive.He is a valuable asset to any team.",
        author: "Dipeolu Ayobami Peter",
        role: "Founder, Nexsus",
        avatar: "https://randomuser.me/api/portraits/men/1.jpg"
    },
    {
        quote: "Daniel's ability to understand our vision and translate it into a seamless user experience is exceptional. He is not just a developer but a reliable person, I can count on at all times. Tested and proven worthy!",
        author: "Benjamin Adeyeye",
        role: "Senior UI/UX designer, Tripitify Inc.",
        avatar: "https://randomuser.me/api/portraits/men/5.jpg"
    },
    {
        quote: "Daniel's professionalism and attention to detail are second to none. He consistently understands my brand and optimmizing my website to boost my online prescence to reach aross borders 30+ clients reached out in 2 months outside Nigeria.",
        author: "Victoria, Kofo",
        role: "CEO, Dolly P Fashion World",
        avatar: "https://randomuser.me/api/portraits/women/12.jpg"
    },
    {
        quote: "Daniel's ability to collaborate and communicate effectively made our project a success.He is not only good and skillful at what he does , but also a great team player and makes the working with him fun.",
        author: "Tosin Oluremi",
        role: "Flutter, Mobile Developer",
        avatar: "https://randomuser.me/api/portraits/men/42.jpg"
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
                <div className="w-full max-w-3xl mx-auto mb-16 text-center flex flex-col items-center justify-center">
                    <span className="text-secondary-foreground text-sm font-medium tracking-wider capitalize animate-fade-in block text-center w-full">
                        What People Say..
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground text-center w-full">
                        Testimonials that <span className="italic font-normal font-serif text-white">Inspire Confidence</span>
                    </h2>
                    <p className="text-muted-foreground animate-fade-in animation-delay-200 text-center max-w-xl mx-auto w-full">
                        Hear from my clients and friends about my work and impact.
                    </p>
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
