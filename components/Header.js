function Header() {
    try {
        const [isMenuOpen, setIsMenuOpen] = React.useState(false);
        const [isScrolled, setIsScrolled] = React.useState(false);

        React.useEffect(() => {
            const handleScroll = () => {
                setIsScrolled(window.scrollY > 10);
            };
            
            window.addEventListener('scroll', handleScroll);
            return () => {
                window.removeEventListener('scroll', handleScroll);
            };
        }, []);

        const toggleMenu = () => {
            setIsMenuOpen(!isMenuOpen);
        };

        const scrollToSection = (sectionId) => {
            document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
            setIsMenuOpen(false);
        };

        return (
            <header 
                data-name="header"
                className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
                    isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
                }`}
            >
                <div className="container mx-auto px-4 flex justify-between items-center">
                    <div data-name="logo" className="flex items-center">
                        <h1 className="text-xl font-bold">
                            <span className="text-blue-500">Sleep</span>
                            <span className="text-green-500">Right</span>
                        </h1>
                    </div>

                    <nav data-name="desktop-nav" className="hidden md:flex space-x-8">
                        <button data-name="nav-link" onClick={() => scrollToSection('benefits')} className="text-gray-600 hover:text-blue-500 transition-colors">Benefits</button>
                        <button data-name="nav-link" onClick={() => scrollToSection('how-to-use')} className="text-gray-600 hover:text-blue-500 transition-colors">How to Use</button>
                        <button data-name="nav-link" onClick={() => scrollToSection('testimonials')} className="text-gray-600 hover:text-blue-500 transition-colors">Testimonials</button>
                        <button data-name="nav-link" onClick={() => scrollToSection('faq')} className="text-gray-600 hover:text-blue-500 transition-colors">FAQ</button>
                    </nav>

                    <div data-name="cta-button" className="hidden md:block">
                        <button 
                            onClick={() => scrollToSection('buy-now')}
                            className="bg-gradient text-white px-6 py-2 rounded-full font-medium hover:opacity-90 transition-opacity"
                        >
                            Buy Now
                        </button>
                    </div>

                    <button 
                        data-name="mobile-menu-button"
                        className="md:hidden text-gray-500 focus:outline-none"
                        onClick={toggleMenu}
                    >
                        <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div 
                        data-name="mobile-menu"
                        className="md:hidden bg-white shadow-lg absolute top-full left-0 w-full animate-fade-in"
                    >
                        <div className="container mx-auto px-4 py-3 flex flex-col space-y-3">
                            <button 
                                data-name="mobile-nav-link"
                                onClick={() => scrollToSection('benefits')} 
                                className="text-gray-600 hover:text-blue-500 transition-colors py-2 border-b border-gray-100"
                            >
                                Benefits
                            </button>
                            <button 
                                data-name="mobile-nav-link"
                                onClick={() => scrollToSection('how-to-use')} 
                                className="text-gray-600 hover:text-blue-500 transition-colors py-2 border-b border-gray-100"
                            >
                                How to Use
                            </button>
                            <button 
                                data-name="mobile-nav-link"
                                onClick={() => scrollToSection('testimonials')} 
                                className="text-gray-600 hover:text-blue-500 transition-colors py-2 border-b border-gray-100"
                            >
                                Testimonials
                            </button>
                            <button 
                                data-name="mobile-nav-link"
                                onClick={() => scrollToSection('faq')} 
                                className="text-gray-600 hover:text-blue-500 transition-colors py-2 border-b border-gray-100"
                            >
                                FAQ
                            </button>
                            <button 
                                data-name="mobile-cta"
                                onClick={() => scrollToSection('buy-now')}
                                className="bg-gradient text-white px-6 py-2 rounded-full font-medium hover:opacity-90 transition-opacity"
                            >
                                Buy Now
                            </button>
                        </div>
                    </div>
                )}
            </header>
        );
    } catch (error) {
        console.error('Header component error:', error);
        reportError(error);
        return null;
    }
}
