import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Clock} from "lucide-react";
import { Button } from "../components/button";
import { useState } from "react";
import emailjs from "@emailjs/browser";


const contactInfo= [
    {
        icon: Mail,
        label: "Email",
        value: "danielayodele758@gmail.com",
        href: "mailto:danielayodele758@gmail.com"
    },

    {
        icon: Phone,
        label: "Phone",
        value: "not available",
    },

    {
        icon: MapPin,
        label: "Location",
        value: "Lagos, Nigeria",
        href: "#",
    },
];

export const Contact =() =>{

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });  

    const [isLoading, setIsLoading] = useState(false);
    const [submitStatus, setSubmitStatus] = useState({
        type: null, 
        message: "",
    }); // null, "success", "error"

    const submitForm = async (e) => {
        e.preventDefault(); 

        setIsLoading(true);
        setSubmitStatus({type: null, message: ""});
        
        try{
            const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
            const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
            const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_API_KEY;

            if (!serviceID || !templateID || !publicKey) {
                throw new Error("Email.js is not properly configured, check env file.");
            }

             await emailjs.send(serviceID, templateID, {
                name: formData.name,
                email: formData.email,   
                message: formData.message,
             }, publicKey);

            setSubmitStatus({
                type: "success",
                message: "Message sent successfully! I will get back to you shortly."
            });
            setFormData({name: "", email: "", message: ""});
        }
        catch(error){
            console.error("Error sending email:", error);
            setSubmitStatus({
                type: "error",
                message: error.message || "Failed to send message. Please try again later."
            });
        }
        finally{
            setIsLoading(false);
        }
    };

    return (
        <section id="contact" className="py-32 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"/>
            <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-highlight/5 rounded-full blur-3xl"></div>
        </div> 

        <div className="container mx-auto px-6 relative z-10">
            {/* Contact Header */}
            <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">Get in Touch</span>
                <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
                    Contact <span className="italic font-normal font-serif text-white"> Me</span>
                </h2>
                <p className="text-muted-foreground animate-fade-in animation-delay-200">
                    Have an million dollar idea, and you need an engineer expertise  (mobile engineer or a web engineer), or trying to gain visibility with your brand, Lets make that happen!
                </p>
            </div>
            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto ">
                {/* Contact Form */}
                <div className="glass p-8 rounded-3xl border border-primary/30 animate-fade-in animation-delay-300 ">
                    <form className="space-y-6" action="" onSubmit={submitForm}>
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                            <input value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})}  required placeholder="Your name" type="text" id="name" name="name" className="w-full p-3 rounded-lg bg-secondary-foreground/10 border border-secondary-foreground/20 focus:outline-none focus:ring-2 focus:ring-primary transition-all"/>
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                            <input value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})}
                                required placeholder="Your email" type="email" id="email" name="email" className="w-full p-3 rounded-lg bg-secondary-foreground/10 border border-secondary-foreground/20 focus:outline-none focus:ring-2 focus:ring-primary transition-all"/>
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                            <textarea value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} required placeholder="Write me a message" id="message" name="message" rows={5} className="w-full p-3 rounded-lg bg-secondary-foreground/10 border border-secondary-foreground/20 focus:outline-none focus:ring-2 focus:ring-primary"></textarea>
                        </div>

                        <Button className= "w-full" type="submit" size="lg" disabled={isLoading}>{isLoading ? "Sending..." : "Send Message"} <Send className="w-5 h-5"/> 
                        </Button>
                        {submitStatus.type && (
                            <div className={`flex items-center gap-3 p-4 rounded-xl ${submitStatus.type === "success" ? "bg-green-500/10 border border-green-500/30 text-green-500" : "bg-red-500/10 border border-red-500/30 text-red-500"}`}>
                            {submitStatus.type === "success" ? <CheckCircle className= "w-5 h-5 flex-shrink-0" /> : (<AlertCircle className="w-5 h-5 flex-shrink-0"/>)}

                            <p className="text-sm">{submitStatus.message}</p>

                            </div>    
                        )}
                    </form>
                </div>

                {/* Contact Information */}
                <div className="flex flex-col justify-center animate-fade-in animation-delay-400">
                    <div className="glass rounded-3xl p-8 border border-primary/30">
                        <h3 className="text-2xl font-bold mb-6 text-secondary-foreground">Contact Information</h3>
                        <div className="space-y-6">
                            {contactInfo.map((info, index) => (
                                <div key={index} className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                                        <info.icon className="w-5 h-5 text-primary" />
                                    </div>
                                    <div>
                                        <p className="font-medium text-secondary-foreground">{info.label}</p>
                                        {info.href ? (
                                            <a 
                                                href={info.href} 
                                                className="text-muted-foreground hover:text-primary transition-colors"
                                            >
                                                {info.value}
                                            </a>
                                        ) : (
                                            <p className="text-muted-foreground">{info.value}</p>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Availability */}
                    <div className="glass rounded-3xl p-8 border border-primary/30 mt-6">
                        <div className="flex items-center gap-3">
                            <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
                            <h3 className="text-xl font-semibold">I am currently available</h3>
                        </div>
                        <p className="text-muted-foreground text-sm mt-2">I am available for freelance work and internships. Contact me and let's build dreams together.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>);
};
