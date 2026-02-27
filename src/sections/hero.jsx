import { ArrowRight, Download, Github, Linkedin, Twitter , ChevronDown} from "lucide-react";
import { Button } from "../components/button";
import { AnimatedBorderButton } from "../components/animatedBorderButton";


const skills = [
    "Typescript",
    "Next.js",
    "Nodejs",
    "React Native",
    "Flutter",
    "Python",
    "MongoDB",
    "SQL",
    "Git",
    "Github Actions",
    "Figma"
]

export const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden">
            <div className="absolute inset-0">
                <img src="/hero-bg.jpg" alt="" className="w-full h-full object-cover opacity-40" />
                <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background" />
            </div>

            {/* Green Dots */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(30)].map((_, i) => (
                    <div key={i} className="absolute w-1.5 h-1.5 rounded-full opacity-60"
                        style={{
                            backgroundColor: "#20B2A6",
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animation: `slow-drift ${15 + Math.random() * 20}s ease-in-out infinite`,
                            animationDelay: `${Math.random() * 5}s`
                        }}
                    />
                ))}
            </div>

            {/* Contents */}
            <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Column- for my biography */}
                    <div className="space-y-8">
                        <div className="animate-fade-in">
                            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                                <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                                Full-Stack Engineer + Video Editor
                            </span>
                        </div>


                        {/* Headline */}
                        <div className="space-y-4">
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
                                Every <span className="text-primary glow-text"> Service</span><br />is done with
                                Dexterity and <span className="font-serif italic font-normal text-white"> Excellence</span>
                            </h1>

                            <p className="text-lg text-muted-foreground max-w-lg animate-fade-in">
                                Hello there, I am Daniel Ayodele- A Full-Stack Engineer and a mobile Engineer specializing in Typescript, Next.js and Nodejs.
                                I design and build web applications and also mobile applications that users find relatable.
                            </p>
                        </div>


                        {/* CTA */}
                        <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
                            <Button size="lg"> Contact me  <ArrowRight className="w-5 h-5" /> </Button>
                            <AnimatedBorderButton>
                                <Download className="w-5 h-5" /> Download CV
                            </AnimatedBorderButton>
                        </div>

                        {/* Social Links */}
                        <div className="flex items-center gap-4 animate-fade-in animation-delay-100">
                            <span className="text-sm text-muted-foreground">Get in contact: </span>
                            {[
                                { icon: Github, href: "https://github.com/Emperor16" },
                                { icon: Linkedin, href: "https://www.linkedin.com/in/ayodele-daniel-33484a3a8/" },
                                { icon: Twitter, href: "https://x.com/DanielO23937500" }
                            ].map((social, idx) => (
                                <a key={idx} href={social.href} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300">
                                    <social.icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>
                    {/* Right Column - for profile image of Daniel init */}
                    <div className="relative animate-fade-in  animation-delay-300">

                        {/* Daniel Profile */}
                        <div className="relative max-w-md mx-auto">
                            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/30 via-transparent to-primary/10 blur-2xl animate-pulse"
                            />
                            <div className="relative glass rounded-3xl p-2 glow-border">
                                <img className="w-full aspect-[4/5] object-cover rounded-2xl" src="/profile-photo.png" alt="Daniel Ayodele" />
                                {/* floating badge */}
                                <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                                    <div className="flex items-center gap-3">
                                        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                                        <span>Available for work </span>
                                    </div>
                                </div>
                                {/* stats badge */}
                                <div className="absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float animation-delay-500">
                                    <div className="text-2xl font-bold text-primary">5+</div>
                                    <div className="text-xs text-muted-foreground">Years Experience</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Skills Cloud */}
                <div className="mt-20 animate-fade-in animation-delay-200">
                    <p className="text-sm text-muted-foreground mb-6 text-center">Tools and Frameworks I have gained mastery on</p>
                    <div className="relative overflow-hidden">
                        <div className="flex animate-auto-carousel">
                            {[...skills.map((s, i) => ({ skill: s, id: `a-${i}` })), ...skills.map((s, i) => ({ skill: s, id: `b-${i}` }))].map((item) => (
                                <div key={item.id} className="flex-shrink-0 px-8 py-4">
                                    <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">{item.skill}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce animation-delay-300">
                    <a 
                    href="#about"
                    className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                            <span className="text-sm uppercase tracking-wider">Scroll</span>
                        <ChevronDown className="w-6 h-6" />
                    </a>
                </div>
            </div>
        </section>
    );
}
