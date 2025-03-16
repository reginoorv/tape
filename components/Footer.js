function Footer() {
    try {
        const currentYear = new Date().getFullYear();
        
        return (
            <footer 
                data-name="footer"
                className="bg-gray-900 text-white py-12"
            >
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div data-name="footer-brand">
                            <h2 className="text-xl font-bold mb-4">
                                <span className="text-blue-400">Sleep</span>
                                <span className="text-green-400">Right</span>
                            </h2>
                            <p className="text-gray-400 mb-4">
                                Premium mouth tape for better sleep and healthier breathing habits.
                            </p>
                            <div 
                                data-name="social-icons"
                                className="flex space-x-4"
                            >
                                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                    <i className="fab fa-facebook-f"></i>
                                </a>
                                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                    <i className="fab fa-instagram"></i>
                                </a>
                                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                    <i className="fab fa-twitter"></i>
                                </a>
                                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                    <i className="fab fa-youtube"></i>
                                </a>
                            </div>
                        </div>
                        
                        <div data-name="footer-links">
                            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                            <ul className="space-y-2">
                                <li>
                                    <a href="#benefits" className="text-gray-400 hover:text-white transition-colors">Benefits</a>
                                </li>
                                <li>
                                    <a href="#how-to-use" className="text-gray-400 hover:text-white transition-colors">How to Use</a>
                                </li>
                                <li>
                                    <a href="#testimonials" className="text-gray-400 hover:text-white transition-colors">Testimonials</a>
                                </li>
                                <li>
                                    <a href="#faq" className="text-gray-400 hover:text-white transition-colors">FAQ</a>
                                </li>
                            </ul>
                        </div>
                        
                        <div data-name="footer-legal">
                            <h3 className="text-lg font-semibold mb-4">Legal</h3>
                            <ul className="space-y-2">
                                <li>
                                    <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-400 hover:text-white transition-colors">Return Policy</a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-400 hover:text-white transition-colors">Shipping Information</a>
                                </li>
                            </ul>
                        </div>
                        
                        <div data-name="footer-contact">
                            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                            <ul className="space-y-2">
                                <li className="flex items-start">
                                    <i className="fas fa-envelope text-gray-400 mr-2 mt-1"></i>
                                    <span className="text-gray-400">support@sleepright.com</span>
                                </li>
                                <li className="flex items-start">
                                    <i className="fas fa-phone text-gray-400 mr-2 mt-1"></i>
                                    <span className="text-gray-400">+1 (888) 123-4567</span>
                                </li>
                                <li className="flex items-start">
                                    <i className="fas fa-map-marker-alt text-gray-400 mr-2 mt-1"></i>
                                    <span className="text-gray-400">123 Sleep Street, Restful City, RC 12345</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    
                    <div 
                        data-name="footer-bottom"
                        className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500"
                    >
                        <p>
                            &copy; {currentYear} SleepRight. All rights reserved.
                        </p>
                    </div>
                </div>
            </footer>
        );
    } catch (error) {
        console.error('Footer component error:', error);
        reportError(error);
        return null;
    }
}
