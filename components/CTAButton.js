function CTAButton({ text, onClick, isPrimary = true, className = "", icon = null }) {
    try {
        return (
            <button 
                data-name="cta-button"
                onClick={onClick}
                className={`
                    ${isPrimary 
                        ? 'bg-gradient text-white hover:opacity-90' 
                        : 'bg-white text-blue-500 border border-blue-500 hover:bg-blue-50'
                    }
                    px-6 py-3 rounded-full font-medium transition-all duration-300
                    flex items-center justify-center
                    ${className}
                `}
            >
                {icon && <i className={`${icon} mr-2`}></i>}
                {text}
            </button>
        );
    } catch (error) {
        console.error('CTAButton component error:', error);
        reportError(error);
        return null;
    }
}
