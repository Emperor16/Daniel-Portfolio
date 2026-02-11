export const Button = ({className, size= "", children}) =>{
    const baseClasses= "relative  overflow-hidden rounded-full font-medium focus:outline-non focus-visible: ring-primary bg-primmary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25 ";

    const sizeClass ={
        sm: "px py-2 text-sm",
        default: "px-6 py-3 text-base",
        lg: "px-8 py-4 text-lg"
    }
    const classes= `${baseClasses} ${sizeClass[size]} ${className}`;
    return(
        <button className= {classes}>
            <span className="relative flex items-center justify-center gap-2">{ children }</span>
        </button>
    
    )
}