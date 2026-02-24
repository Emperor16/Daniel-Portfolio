export const AnimatedBorderButton = ({ 
    children,
    className = "",
    ...props
}) => {
    return (
        <button 
            type="button"
            className={`group relative text-foreground 
            transition-all duration-300 focus:outline-none 
            focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 
            px-8 py-4 text-lg font-medium rounded-full
            inline-flex items-center cursor-pointer bg-transparent border border-border ${className}`}
            {...props}
        >
            {/* Animated SVG border */}
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
            
            {/* Content */}
            <span className="relative z-10 flex items-center justify-center gap-2">
                {children}
            </span>
        </button>
    )
}
