import { ArrowUpRight, Github } from "lucide-react";
import { AnimatedBorderButton } from "../components/animatedBorderButton";

const projects = [
    {
        title: "LMS Dashboard",
        description: "A comprehensive dashboard for managing learning management systems.",
        image: "/assets/lms-dashboard.png",
        link: "#",
        tags: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
        github: "https://github.com/Emperor16/lms-dashboard"
    },

    {
        title: "Fintech Dashboard",
        description: "A comprehensive dashboard for managing fintech operations.",
        image: "/assets/fintech-dashboard.png",
        link: "#",
        tags: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
        github: "https://github.com/Emperor16/fintech-dashboard"
    },

    {
        title: "Fintech Dashboard",
        description: "A comprehensive dashboard for managing fintech operations.",
        image: "/assets/fintech-dashboard.png",
        link: "#",
        tags: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
        github: "https://github.com/Emperor16/fintech-dashboard"
    },
    {
        title: "Fintech Dashboard",
        description: "A comprehensive dashboard for managing fintech operations.",
        image: "/assets/fintech-dashboard.png",
        link: "#",
        tags: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
        github: "https://github.com/Emperor16/fintech-dashboard"
    }

]

export const Project = () => {
    return <section id="projects" className="py-32 relative overflow-hidden">
        {/* BG glowws */}
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-20"></div>
        <div className="container mx-auto px-6 relative z-10">
            {/* Section Header */}
            <div className="text-center mx-auto max-w-3xl mb-16">
                <span className="text-secondary-foreground text-sm font-medium transition all uppercase ">Featured work</span>
                <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100">Projects that
                    <span className="font-serif italic font-normal text-white"> {" "} solves a problem</span></h2>
                    <p className="text-muted-foreground animate-fade-in animation-delay-200"> A selection of my recent works, from desiging to building softwares applications thats solves real-world problems.</p>
            </div>

            {/* Projects Grid */}
            <div className="grid md:grid-cols-2 gap-8">
                {projects.map((project, idx) => (
                    <div className={`group glass rounded-xl overflow-hidden animate-fade-in md:row-span-1`} style={{ animationDelay: `${idx * 100}ms` }} key={idx}>
                        {/* projects's image */}
                        <div className="relative overflow-hidden aspect-video">
                            <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded-lg transition-transform duration-700 group-hover:scale-105" 
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-55"
                            />
                            {/* Overlay links */}
                            <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <a href={project.link} className= " py-3 rounded-full glass hover: bg-primary hover: text-primary-foreground p-2 rounded-full hover:bg-primary/80 transition-colors">
                                    <ArrowUpRight  className="w-5 h-5"/>
                                </a>
                                <a href={project.github} className="bg-secondary text-secondary-foreground p-2 rounded-full hover:bg-secondary/80 transition-colors">
                                    <Github className="w-5 h-5" />
                                </a>
                            </div>
                        </div> 
                        {/* Content */}
                        <div className="p-6 space-y-4">
                            <div className="flex items-start justify-between">
                                <h3 className="text-xl font-semibold group:hover:text-primary ">{project.title}</h3>
                                <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 group:hover:-translate-y-1 transition-all" />
                            </div>
                            <p className="text-muted-foreground text-sm">{project.description}
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag, tagIdx) => (
                                        <span key={tagIdx} className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300 ">{tag}</span>
                                    ))}
                                </div>
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {/* view all projects button */}
            <div className="text-center mt-12 animate-fade-in animation-delay-500">
            <AnimatedBorderButton className="mx-auto mt-12 flex items-center gap-2" href="#">
                View All Projects
                <ArrowUpRight className="w-5 h-5" />
            </AnimatedBorderButton>
            </div>
        </div>
    </section>;
}