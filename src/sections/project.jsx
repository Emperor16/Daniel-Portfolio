import { ArrowUpRight, Github } from "lucide-react";
import { AnimatedBorderButton } from "../components/animatedBorderButton";

const projects = [
    {
        title: "LMS Dashboard",
        description: "A comprehensive dashboard for managing learning management systems.",
        image: "/project1.webp",
        link: "#",
        tags: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
        github: "https://github.com/Emperor16/lms-dashboard"
    },
    {
        title: "E-Commerce Platform",
        description: "A full-featured e-commerce platform with payment integration.",
        image: "/project2.webp",
        link: "#",
        tags: ["Next.js", "Stripe", "PostgreSQL", "Tailwind CSS"],
        github: "https://github.com/Emperor16/ecommerce-platform"
    },
    {
        title: "Task Management App",
        description: "A collaborative task management application for teams.",
        image: "/project3.webp",
        link: "#",
        tags: ["React", "Firebase", "Material UI", "Redux"],
        github: "https://github.com/Emperor16/task-manager"
    },
    {
        title: "Analytics Dashboard",
        description: "A real-time analytics dashboard with data visualization.",
        image: "/project4.webp",
        link: "#",
        tags: ["React", "D3.js", "Node.js", "MongoDB"],
        github: "https://github.com/Emperor16/analytics-dashboard"
    }
]

export const Project = () => {
    return (
        <section id="projects" className="py-32 relative overflow-hidden">
            {/* BG glows */}
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-20"></div>
            <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-20"></div>
            
            <div className="container mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className="text-center mx-auto max-w-3xl mb-16">
                    <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">Featured work</span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100">
                        Projects that
                        <span className="font-serif italic font-normal text-white"> speaks excellence</span>
                    </h2>
                    <p className="text-muted-foreground animate-fade-in animation-delay-200">
                        A selection of my recent works, from designing to building software applications that solve real-world problems.
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, idx) => (
                        <div
                            className="group glass rounded-xl overflow-hidden animate-fade-in"
                            style={{ animationDelay: `${idx * 100}ms` }}
                            key={idx}
                        >
                            {/* Project's image */}
                            <div className="relative overflow-hidden aspect-video">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    loading="lazy"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-55" />

                                {/* Overlay links */}
                                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <a
                                        href={project.link}
                                        className="p-2 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-colors"
                                    >
                                        <ArrowUpRight className="w-5 h-5"/>
                                    </a>
                                    <a
                                        href={project.github}
                                        className="bg-secondary text-secondary-foreground p-2 rounded-full hover:bg-secondary/80 transition-colors"
                                    >
                                        <Github className="w-5 h-5" />
                                    </a>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6 space-y-4">
                                <div className="flex items-start justify-between">
                                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">{project.title}</h3>
                                    <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                                </div>
                                <p className="text-muted-foreground text-sm">{project.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag, tagIdx) => (
                                        <span
                                            key={tagIdx}
                                            className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* View all projects button */}
                <div className="text-center mt-12 animate-fade-in animation-delay-200">
                    <a href="https://github.com/Emperor16?tab=repositories" target="_blank" rel="noopener noreferrer" className="mx-auto group relative text-foreground transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 px-8 py-4 text-lg font-medium rounded-full inline-flex items-center cursor-pointer bg-transparent border border-border">
                        <svg
                            className="absolute inset-0 w-full h-full pointer-events-none"
                            viewBox="0 0 200 60"
                            preserveAspectRatio="none"
                            style={{ overflow: "visible" }}
                        >
                            <path
                                d="M 30,1 A 29,29 0 0 0 1,30 L 1,30 A 29,29 0 0 0 30,59 L 170,59 A 29,29 0 0 0 199,30 L 199,30 A 29,29 0 0 0 170,1 Z"
                                fill="none"
                                stroke="var(--color-primary)"
                                strokeWidth="2"
                                strokeDasharray="150 450"
                                strokeDashoffset="0"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="neon-border-path"
                            />
                        </svg>
                        <span className="relative z-10 flex items-center justify-center gap-2">
                            View All Projects
                            <ArrowUpRight className="w-5 h-5" />
                        </span>
                    </a>
                </div>
            </div>
        </section>
        
    );
}
