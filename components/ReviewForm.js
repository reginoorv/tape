function ReviewForm() {
    try {
        const [formData, setFormData] = React.useState({
            name: '',
            email: '',
            rating: 5,
            review: ''
        });
        const [isSubmitting, setIsSubmitting] = React.useState(false);
        const [isSubmitted, setIsSubmitted] = React.useState(false);
        const [error, setError] = React.useState('');

        const handleChange = (e) => {
            const { name, value } = e.target;
            setFormData(prevData => ({
                ...prevData,
                [name]: value
            }));
        };

        const handleRatingChange = (rating) => {
            setFormData(prevData => ({
                ...prevData,
                rating
            }));
        };

        const handleSubmit = (e) => {
            e.preventDefault();
            setError('');
            
            // Validate form
            if (!formData.name || !formData.email || !formData.review) {
                setError('Please fill in all required fields');
                return;
            }

            if (!validateEmail(formData.email)) {
                setError('Please enter a valid email address');
                return;
            }

            setIsSubmitting(true);

            // Simulate API call
            setTimeout(() => {
                setIsSubmitting(false);
                setIsSubmitted(true);
                // Reset form
                setFormData({
                    name: '',
                    email: '',
                    rating: 5,
                    review: ''
                });
                
                // Reset success message after some time
                setTimeout(() => {
                    setIsSubmitted(false);
                }, 5000);
            }, 1500);
        };

        const validateEmail = (email) => {
            const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return re.test(email);
        };

        return (
            <div 
                data-name="review-form-container"
                className="bg-white rounded-xl shadow-soft p-6 md:p-8"
            >
                {isSubmitted ? (
                    <div 
                        data-name="success-message"
                        className="text-center py-8"
                    >
                        <div className="text-green-500 text-5xl mb-4">
                            <i className="fas fa-check-circle"></i>
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Thank You For Your Review!</h3>
                        <p className="text-gray-600">
                            Your feedback helps us improve our products and services.
                        </p>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit}>
                        <h3 
                            data-name="form-title"
                            className="text-xl font-semibold mb-6"
                        >
                            Write a Review
                        </h3>
                        
                        {error && (
                            <div 
                                data-name="error-message"
                                className="bg-red-50 text-red-500 p-3 rounded mb-4"
                            >
                                {error}
                            </div>
                        )}
                        
                        <div 
                            data-name="form-group"
                            className="mb-4"
                        >
                            <label 
                                htmlFor="name" 
                                className="block text-gray-700 font-medium mb-2"
                            >
                                Name*
                            </label>
                            <input 
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>
                        
                        <div 
                            data-name="form-group"
                            className="mb-4"
                        >
                            <label 
                                htmlFor="email" 
                                className="block text-gray-700 font-medium mb-2"
                            >
                                Email*
                            </label>
                            <input 
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>
                        
                        <div 
                            data-name="form-group"
                            className="mb-4"
                        >
                            <label 
                                className="block text-gray-700 font-medium mb-2"
                            >
                                Rating*
                            </label>
                            <div className="flex">
                                {[1, 2, 3, 4, 5].map(star => (
                                    <button
                                        key={star}
                                        type="button"
                                        data-name={`rating-star-${star}`}
                                        onClick={() => handleRatingChange(star)}
                                        className="text-2xl mr-1 focus:outline-none"
                                    >
                                        <i className={`fas fa-star ${
                                            formData.rating >= star ? 'text-yellow-400' : 'text-gray-300'
                                        }`}></i>
                                    </button>
                                ))}
                            </div>
                        </div>
                        
                        <div 
                            data-name="form-group"
                            className="mb-6"
                        >
                            <label 
                                htmlFor="review" 
                                className="block text-gray-700 font-medium mb-2"
                            >
                                Review*
                            </label>
                            <textarea 
                                id="review"
                                name="review"
                                value={formData.review}
                                onChange={handleChange}
                                rows="4"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            ></textarea>
                        </div>
                        
                        <button 
                            data-name="submit-button"
                            type="submit"
                            disabled={isSubmitting}
                            className={`w-full bg-gradient text-white py-3 rounded-lg font-medium transition-opacity ${
                                isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:opacity-90'
                            }`}
                        >
                            {isSubmitting ? (
                                <div className="flex items-center justify-center">
                                    <i className="fas fa-circle-notch fa-spin mr-2"></i>
                                    Submitting...
                                </div>
                            ) : 'Submit Review'}
                        </button>
                    </form>
                )}
            </div>
        );
    } catch (error) {
        console.error('ReviewForm component error:', error);
        reportError(error);
        return null;
    }
}
