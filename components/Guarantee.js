function Guarantee() {
    try {
        return (
            <section 
                data-name="guarantee-section"
                className="py-16 bg-blue-50"
            >
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-soft p-8 md:p-12">
                        <div className="flex flex-col md:flex-row items-center">
                            <div 
                                data-name="guarantee-icon"
                                className="mb-6 md:mb-0 md:mr-8"
                            >
                                <div className="w-24 h-24 md:w-32 md:h-32 bg-green-50 rounded-full flex items-center justify-center">
                                    <i className="fas fa-shield-alt text-green-500 text-4xl md:text-5xl"></i>
                                </div>
                            </div>
                            
                            <div data-name="guarantee-content">
                                <h2 
                                    data-name="guarantee-title"
                                    className="text-2xl md:text-3xl font-bold mb-4 text-center md:text-left"
                                >
                                    Our <span className="text-gradient">100% Satisfaction Guarantee</span>
                                </h2>
                                
                                <p 
                                    data-name="guarantee-description"
                                    className="text-gray-600 mb-6"
                                >
                                    We're confident you'll love our mouth tape, but if you're not completely satisfied 
                                    for any reason, we offer a 30-day money-back guarantee. Simply return the unused 
                                    portion for a full refund, no questions asked.
                                </p>
                                
                                <div 
                                    data-name="guarantee-features"
                                    className="grid grid-cols-1 md:grid-cols-3 gap-4"
                                >
                                    <div 
                                        data-name="guarantee-feature"
                                        className="flex items-center"
                                    >
                                        <i className="fas fa-check text-green-500 mr-2"></i>
                                        <span className="text-sm">30-Day Money Back</span>
                                    </div>
                                    <div 
                                        data-name="guarantee-feature"
                                        className="flex items-center"
                                    >
                                        <i className="fas fa-check text-green-500 mr-2"></i>
                                        <span className="text-sm">Secure Checkout</span>
                                    </div>
                                    <div 
                                        data-name="guarantee-feature"
                                        className="flex items-center"
                                    >
                                        <i className="fas fa-check text-green-500 mr-2"></i>
                                        <span className="text-sm">Fast Shipping</span>
                                    </div>
                                </div>
                                
                                <div 
                                    data-name="payment-methods"
                                    className="mt-6 flex flex-wrap justify-center md:justify-start"
                                >
                                    <div 
                                        data-name="payment-icons"
                                        className="flex space-x-4"
                                    >
                                        <i className="fab fa-cc-visa text-gray-400 text-2xl"></i>
                                        <i className="fab fa-cc-mastercard text-gray-400 text-2xl"></i>
                                        <i className="fab fa-cc-amex text-gray-400 text-2xl"></i>
                                        <i className="fab fa-cc-paypal text-gray-400 text-2xl"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Guarantee component error:', error);
        reportError(error);
        return null;
    }
}
