const experience = [
    {
        period: "2023 - Present",
        role: "Senior Frontend Engineer",
        company: "Tech Solutions Inc.",
        description: "Leading Frontend architecture for enterprise business products",
        technologies: ["React", "TypeScript", "NextJS", "GraphQL"],
        current: true
    },
    {
        period: "2022 - 2023",
        role: "Frontend Engineer",
        company: "Tremindds Innovation Ltd",
        description: "Leading Frontend architecture for business products",
        technologies: ["React", "TypeScript", "NextJS", "GraphQL"],
        current: false
    },
    {
        period: "2021 - 2022",
        role: "Full Stack Developer",
        company: "Digital Agency Co.",
        description: "Developed and maintained web applications for various clients",
        technologies: ["React", "Node.js", "MongoDB", "Express"],
        current: false
    },
    {
        period: "2020 - 2021",
        role: "Junior Developer",
        company: "StartUp Hub",
        description: "Built responsive web interfaces and learned modern development practices",
        technologies: ["JavaScript", "React", "CSS", "Git"],
        current: false
    }
]

export const Experience = () => {
    return (
        <section id="experience" className="py-32 relative overflow-hidden">
            <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2"/>

            <div className="container mx-auto text-center px-6 relative z-10">
                {/* Section Header */}
                <div className="w-full max-w-3xl mx-auto mb-16 flex flex-col items-center justify-center text-center">
                    <span className="block w-full text-center text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
                        Career Journey
                    </span>
                    <h2 className="w-full text-center text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
                        Experience that <span className="italic font-normal font-serif text-white"> Speaks volumes</span>
                    </h2>
                    <p className="w-full mx-auto text-center text-muted-foreground animate-fade-in animation-delay-200">
                        From startups to established enterprises, my journey has been a tapestry of diverse experiences. Each chapter has enriched my skills and broadened my perspective, allowing me to thrive in dynamic environments and contribute meaningfully to every project I've been a part of.
                    </p>
                </div>

                {/* timeline */}
                <div className="relative">
                    <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(38,178,166,0.8)]"/>

                    {/* Experience Items */}
                    <div className="space-y-12">
                        {experience.map((exp, idx) => (
                            <div
                                className="relative grid md:grid-cols-2 gap-8 animate-fade-in"
                                style={{ animationDelay: `${(idx + 1) * 80}ms` }}
                                key={idx}
                            >
                                {/* TimeLine Dot */}
                                <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 rounded-full bg-primary -translate-x-1/2 ring-4 ring-background z-10">
                                    {exp.current && (<span className="absolute inset-0 rounded-full bg-primary animate-pulse"/>)}
                                </div>

                                {/* Experience Content */}
                                <div className={`pl-8 md:pl-0 ${idx % 2 === 0 ? "md:pr-16 md:text-right" : "md:col-start-2 md:pl-16"}`}>
                                    <div className="glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500">
                                        <span className="text-primary text-sm font-medium">{exp.period}</span>
                                        <h3 className="text-xl font-semibold mt-2">{exp.role}</h3>
                                        <p className="text-muted-foreground">{exp.company}</p>
                                        <p className="text-sm text-muted-foreground mt-4">{exp.description}</p>
                                        <div className="mt-3">
                                            {exp.technologies.map((tech, techIdx) => (
                                                <span key={techIdx} className="inline-block bg-primary/10 text-primary text-xs px-2 py-1 rounded mr-2 mt-2">{tech}</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
