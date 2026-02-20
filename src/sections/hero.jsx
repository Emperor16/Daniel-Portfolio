import { ArrowRight, Download, Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "../components/button";
import { AnimatedBorderButton } from "../components/animatedBorderButton";

export const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden">
            <div className="absolute inset-0">
                <img src="/hero-bg.jpg" alt="" className="w-full h-full object-cover opacity-40" />
                <div className="absolute inset-0 bg-linear-to-b from-background/20 via-background/80 to-background" />
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
                                Every <span className="text-primary glow-text"> Services</span><br />is done with
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
                            <AnimatedBorderButton />
                        </div>

                        {/* Social Links */}
                        <div className="flex items-center gap-4 animate-fade-in animation-delay-100">
                            <span className="text-sm text-muted-foreground">Get in contact: </span>
                            {[
                                { icon: Github, href: "https://github.com/Emperor16"},
                                { icon: Linkedin, href: "https://www.linkedin.com/in/ayodele-daniel-33484a3a8/" },
                                { icon: Twitter, href: "https://x.com/DanielO23937500" }
                            ].map((social, idx) => (
                                <a key={idx} href={social.href} className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300">
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
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </section>
    );
}
