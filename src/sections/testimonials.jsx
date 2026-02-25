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
        author: "Michael Brown",
        role: "Founder, Startup Hub",
        avatar: "https://randomuser.me/api/portraits/men/12.jpg",
    },
    {
        quote: "Daniel's ability to collaborate and communicate effectively made our project a success. They are not only a skilled developer but also a great team player.",
        author: "Emily Davis",
        role: "UX Designer, DesignPro",
        avatar: "https://randomuser.me/api/portraits/women/32.jpg",
    }
];

export const Testimonials =() =>{
    return <section id="testimonials" className="py-32 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
    </section>;
}