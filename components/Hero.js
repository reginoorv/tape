function Hero() {
    try {
        return (
            <section 
                data-name="hero-section"
                className="pt-28 pb-16 md:pt-32 md:pb-24 bg-gradient-to-b from-blue-50 to-white"
            >
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row items-center">
                        <div data-name="hero-content" className="md:w-1/2 mb-10 md:mb-0 md:pr-8">
                            <h1 
                                data-name="hero-title"
                                className="text-4xl md:text-5xl font-bold mb-6 leading-tight animate-fade-in"
                            >
                                Sleep Better & Healthier with 
                                <span className="text-gradient"> Mouth Tape</span>
                            </h1>
                            
                            <p 
                                data-name="hero-description"
                                className="text-lg text-gray-600 mb-8 animate-fade-in"
                                style={{animationDelay: '0.2s'}}
                            >
                                Experience the benefits of nasal breathing during sleep. Our premium mouth tape 
                                helps reduce snoring, improve sleep quality, and promote healthier breathing patterns.
                            </p>
                            
                            <div 
                                data-name="hero-cta"
                                className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 animate-fade-in"
                                style={{animationDelay: '0.4s'}}
                            >
                                <a 
                                    href="#buy-now" 
                                    className="bg-gradient text-white text-center px-8 py-3 rounded-full font-medium hover:opacity-90 transition-opacity animate-pulse"
                                >
                                    Buy Now
                                </a>
                                <a 
                                    href="#how-to-use" 
                                    className="bg-white text-blue-500 text-center border border-blue-500 px-8 py-3 rounded-full font-medium hover:bg-blue-50 transition-colors"
                                >
                                    How It Works
                                </a>
                            </div>
                        </div>
                        
                        <div 
                            data-name="hero-image"
                            className="md:w-1/2 animate-fade-in"
                            style={{animationDelay: '0.6s'}}
                        >
                            <div className="relative">
                                <img 
                                    src="https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                                    alt="Person sleeping peacefully with mouth tape" 
                                    className="rounded-lg shadow-soft object-cover w-full h-96"
                                />
                                <div 
                                    data-name="hero-badge"
                                    className="absolute -bottom-5 -right-5 bg-white rounded-full p-4 shadow-lg"
                                >
                                    <div className="text-center">
                                        <div className="text-green-500 font-bold text-xl">98%</div>
                                        <div className="text-xs text-gray-600">Customer<br/>Satisfaction</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Hero component error:', error);
        reportError(error);
        return null;
    }
}
