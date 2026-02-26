import { Mail, Phone, MapPin, Send } from "lucide-react";
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
        value: "+234 704 914 2018",
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

    const [isLoadinig, setIsLoading] = useState(false);
    const [submitStatus, setSubmitStatus] = useState({
        type: null, 
        message: "",
    }); // null, "success", "error"

    const submitForm = (e) => {
        e.preventDefault(); 

        setIsLoading(true);
        setSubmitStatus({type: null, message: ""});
        
        try{
            const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
            const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
            const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_API_KEY;

            if (!serviceID || !templateID || !publicKey) {
                throw new Error("Email service is not properly configured, check env file.");
            }

             await emailjs.sendForm(serviceID, templateID, {
                name: formData.name,
                email: formData.email,
                message: formData.message,
             }, publicKey);

            setSubmitStatus({
                type: "success",
                message: "Message sent successfully!"
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
    return (<section id="contact" className="py-32 elative overflow-hidden">
       <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-1/4 left-1/4 w-96 -96 bg-primary/5 rouned-full blur-3xl"/>
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
                    Whether you have a question, want to collaborate, or just want to say hi, my inbox is always open. I look forward to connecting with you!
                </p>
            </div>
            <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto ">
               <div className="glass p-8 rounded-3xl border border-primary/30 animate-fade-in animaton-delay-300 ">
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

                        <Button className= "w-full" type="submit" size="lg" disabled={isLoading}>{isLoading ? "Sending..." : "Send Message"} <Send/> </Button>
                    </form>
                </div> 
            </div>
        </div>
    </section>);
};

