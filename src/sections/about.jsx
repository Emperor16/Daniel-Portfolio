import { Code2, Lightbulb, Rocket, User , Smartphone, SmartphoneCharging} from "lucide-react";

const highlights = [

    {
        icon: Smartphone,
        title: "Flutter Developer",
        description: "I have experience building cross-platform mobile applications using Flutter, allowing me to create seamless experiences for both iOS and Android users."
    },

    {
        icon: User,
        title: "Witty learner",
        description: "I am passionate about building and nurturing tech communities. I believe in the power of collaboration and enjoy working with others to achieve common goals."


    },

    {
        icon: Lightbulb,
        title: "Problem Solver",
        description: "I enjoy solving complex problems and finding creative solutions. I am always looking for ways to optimize processes and improve efficiency."
    },

    {
        icon: Smartphone,
        title: "Flutter Developer",
        description: "I am a seasonsed and professional flutter developer, with experience building a full stack mobile applications."
    },

]

export const About = () => {
    return <section id="about" className="py-32 relative overflow-x-hidden">
        <div className="container mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                {/*Left Column */}
                <div className="space-y-8">
                    <div className="animate-fade-in">
                        <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">About Me</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
                        Building your thoughts
                        <span className="font-serif italic font-normal text-white">
                            {" "}one line of code at a time
                        </span>
                    </h2>
                    <div className="space-y-6 text-muted-foreground animate-fade-in animation-delay-200">
                        {/* <p>
                            I am a passionate and dedicated full stack developer with a strong background in building web applications.
                             With experience in React, Node.js, and MongoDB, I have a proven track record of creating efficient and scalable solutions. 
                             I am constantly learning new technologies and improving my skills to stay up-to-date with industry trends. I believe in the power 
                             of teamwork and enjoy collaborating with others to achieve common goals. I am always open to feedback and willing to help others grow. 
                             I enjoy solving complex problems and finding creative solutions to optimize processes and improve efficiency.
                        </p> */}
                        <p>
                            Hello there, I am Daniel a Computer Science student with not just programming skills but also with techincal expertise and 
                            know-how of writing scalable codes and building problem solving applications.    
                        </p><br />
                        <p>
                            I am on a pathway of building by collaboration or solo building 50 problem solving application before the end of 2026.
                            With consistency and dilligence, I have built 10 applications that have solved over 10,000 youths in Ibadan, Oyo State problem.
                        </p> <br />
                        <p>
                            When I am not coding, I enjoy spending time with my family, reading books; major focus on Entrepenuership , Leadership and Spiritual growth.
                        </p>
                    </div>

                    {/* Mission Statement */}
                    <div className=" glass rounded-2xl p-6  glow-border animate-fade-in animation-delay-400">
                        <p className="text-lg font-medium italic text-secondary-foreground">My mission is to build innovative and user-friendly applications that solve real-world problems and enhance the digital experience for my users</p>
                    </div>
                </div>
                {/* Right Column */}
                <div className="grid sm:grid-cols-2 gap-6">
                    {highlights.map((item, idx) =>(
                        <div key= {idx} className="glass p-6 rounded-2xl animate-fade-in"
                        style={{animationDelay: `${idx * 100}ms`}}
                        >
                            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20 transition-all">
                                <item.icon className="h-8 w-8 text-secondary-foreground" />
                            </div>
                            <h3 className="text-xl font-semibold text-secondary-foreground mb-2">{item.title}</h3>
                            <p className="text-muted-foreground">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>;
}