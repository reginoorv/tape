function Benefits() {
    try {
        const benefits = [
            {
                icon: "fa-moon",
                title: "Reduces Snoring",
                description: "Encourages nasal breathing which helps reduce or eliminate snoring for a more peaceful sleep."
            },
            {
                icon: "fa-battery-full",
                title: "Improves Sleep Quality",
                description: "Promotes optimal oxygen intake during sleep, leading to more restful and rejuvenating sleep cycles."
            },
            {
                icon: "fa-wind",
                title: "Helps Nasal Breathing",
                description: "Trains your body to breathe through the nose, which filters and humidifies the air you breathe."
            },
            {
                icon: "fa-check-circle",
                title: "Easy to Use & Safe",
                description: "Comfortable, gentle adhesive that's easy to apply and remove without irritation."
            }
        ];

        return (
            <section 
                id="benefits" 
                data-name="benefits-section"
                className="py-16 bg-white"
            >
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 
                            data-name="benefits-title"
                            className="text-3xl md:text-4xl font-bold mb-4"
                        >
                            Why Choose <span className="text-gradient">SleepRight</span> Mouth Tape?
                        </h2>
                        <p 
                            data-name="benefits-subtitle"
                            className="text-lg text-gray-600 max-w-2xl mx-auto"
                        >
                            Our premium mouth tape is designed to improve your sleep and overall health through 
                            better breathing habits.
                        </p>
                    </div>

                    <div 
                        data-name="benefits-grid"
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                    >
                        {benefits.map((benefit, index) => (
                            <div 
                                key={index}
                                data-name={`benefit-item-${index}`}
                                className="benefit-item bg-blue-50 rounded-xl p-6 text-center transition-transform hover:transform hover:scale-105 stagger-item animate-fade-in"
                            >
                                <div 
                                    data-name="benefit-icon"
                                    className="benefit-icon text-4xl text-blue-500 mb-4 inline-block bg-white p-4 rounded-full shadow-soft"
                                >
                                    <i className={`fas ${benefit.icon}`}></i>
                                </div>
                                <h3 
                                    data-name="benefit-title"
                                    className="text-xl font-semibold mb-3"
                                >
                                    {benefit.title}
                                </h3>
                                <p 
                                    data-name="benefit-description"
                                    className="text-gray-600"
                                >
                                    {benefit.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Benefits component error:', error);
        reportError(error);
        return null;
    }
}
