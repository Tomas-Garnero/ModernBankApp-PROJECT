
const Button = ({ styles }) => {
    return (
        <button 
            type="button" 
            className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none ${styles} rounded-[10px] hover:text-byme animate__animated animate__pulse animate__infinite animate__slow`}
        >
            Get Started
        </button>
    )
}

export default Button