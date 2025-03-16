function Testimonials() {
    try {
        const [activeIndex, setActiveIndex] = React.useState(0);
        
        const testimonials = [
            {
                name: "Sarah Johnson",
                location: "New York, NY",
                image: "https://randomuser.me/api/portraits/women/44.jpg",
                rating: 5,
                text: "My husband's snoring was affecting both our sleep. After trying SleepRight mouth tape, the difference was immediate! He sleeps quietly now, and I get uninterrupted sleep. It's been a game-changer for our relationship."
            },
            {
                name: "Michael Torres",
                location: "Chicago, IL",
                image: "https://randomuser.me/api/portraits/men/32.jpg",
                rating: 5,
                text: "As someone with sleep apnea, I was skeptical at first. But after consistent use of SleepRight mouth tape, I've noticed significant improvement in my sleep quality. I wake up feeling more refreshed and energetic."
            },
            {
                name: "Emily Chen",
                location: "San Francisco, CA",
                image: "https://randomuser.me/api/portraits/women/63.jpg",
                rating: 4,
                text: "I've struggled with dry mouth and throat for years. This mouth tape has helped me breathe through my nose consistently throughout the night. The adhesive is gentle on my skin and doesn't leave any residue."
            },
            {
                name: "David Wilson",
                location: "Austin, TX",
                image: "https://randomuser.me/api/portraits/men/86.jpg",
                rating: 5,
                text: "As an athlete, recovery is crucial for me. Since using SleepRight, I've noticed better sleep quality and improved recovery times. I wake up feeling more rested and ready for my training sessions."
            }
        ];

        React.useEffect(() => {
            const interval = setInterval(() => {
                setActiveIndex((prevIndex) => 
                    prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
                );
            }, 5000);
            
            return () => clearInterval(interval);
        }, [testimonials.length]);

        const handleDotClick = (index) => {
            setActiveIndex(index);
        };

        return (
            <section 
                id="testimonials" 
                data-name="testimonials-section"
                className="py-16 bg-blue-50"
            >
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 
                            data-name="testimonials-title"
                            className="text-3xl md:text-4xl font-bold mb-4"
                        >
                            What Our Customers Say
                        </h2>
                        <p 
                            data-name="testimonials-subtitle"
                            className="text-lg text-gray-600 max-w-2xl mx-auto"
                        >
                            Don't just take our word for it. See how SleepRight has transformed 
                            the sleep quality of our customers.
                        </p>
                    </div>

                    <div 
                        data-name="testimonials-slider"
                        className="max-w-4xl mx-auto relative"
                    >
                        <div 
                            data-name="testimonials-container"
                            className="overflow-hidden"
                        >
                            <div 
                                data-name="testimonials-track"
                                className="flex transition-transform duration-500 ease-in-out"
                                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
                            >
                                {testimonials.map((testimonial, index) => (
                                    <div 
                                        key={index}
                                        data-name={`testimonial-${index}`}
                                        className="w-full flex-shrink-0 px-4"
                                    >
                                        <div className="testimonial-card bg-white rounded-xl p-6 md:p-8 shadow-soft">
                                            <div className="flex items-center mb-4">
                                                <img 
                                                    src={testimonial.image} 
                                                    alt={testimonial.name}
                                                    className="w-12 h-12 rounded-full object-cover mr-4"
                                                    onError={(e) => {
                                                        e.target.onerror = null;
                                                        e.target.src = "https://via.placeholder.com/48";
                                                    }}
                                                />
                                                <div>
                                                    <h4 
                                                        data-name="testimonial-name"
                                                        className="font-semibold text-lg"
                                                    >
                                                        {testimonial.name}
                                                    </h4>
                                                    <p 
                                                        data-name="testimonial-location"
                                                        className="text-gray-500 text-sm"
                                                    >
                                                        {testimonial.location}
                                                    </p>
                                                </div>
                                            </div>
                                            
                                            <div 
                                                data-name="testimonial-rating"
                                                className="flex mb-4"
                                            >
                                                {[...Array(5)].map((_, i) => (
                                                    <i 
                                                        key={i}
                                                        className={`fas fa-star ${
                                                            i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'
                                                        } mr-1`}
                                                    ></i>
                                                ))}
                                            </div>
                                            
                                            <p 
                                                data-name="testimonial-text"
                                                className="text-gray-600 italic"
                                            >
                                                "{testimonial.text}"
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        
                        <div 
                            data-name="slider-controls"
                            className="flex justify-center mt-8 space-x-2"
                        >
                            {testimonials.map((_, index) => (
                                <button 
                                    key={index}
                                    data-name={`slider-dot-${index}`}
                                    className={`w-3 h-3 rounded-full ${
                                        activeIndex === index ? 'bg-blue-500' : 'bg-gray-300'
                                    } transition-colors duration-300`}
                                    onClick={() => handleDotClick(index)}
                                    aria-label={`Go to testimonial ${index + 1}`}
                                ></button>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Testimonials component error:', error);
        reportError(error);
        return null;
    }
}
