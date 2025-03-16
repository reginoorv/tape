function HowToUse() {
    try {
        const steps = [
            {
                number: "01",
                title: "Clean & Dry",
                description: "Ensure your lips are clean and dry before application.",
                icon: "fa-soap"
            },
            {
                number: "02",
                title: "Peel & Position",
                description: "Peel the tape from the backing and position it over your lips.",
                icon: "fa-hand-paper"
            },
            {
                number: "03",
                title: "Press Gently",
                description: "Press gently to ensure proper adhesion to your lips.",
                icon: "fa-fingerprint"
            },
            {
                number: "04",
                title: "Sleep & Remove",
                description: "Sleep peacefully and remove gently in the morning.",
                icon: "fa-moon"
            }
        ];

        return (
            <section 
                id="how-to-use" 
                data-name="how-to-use-section"
                className="py-16 bg-white"
            >
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 
                            data-name="how-to-use-title"
                            className="text-3xl md:text-4xl font-bold mb-4"
                        >
                            How to Use <span className="text-gradient">SleepRight</span>
                        </h2>
                        <p 
                            data-name="how-to-use-subtitle"
                            className="text-lg text-gray-600 max-w-2xl mx-auto"
                        >
                            Simple and easy to use. Follow these steps for the best results.
                        </p>
                    </div>

                    <div className="flex flex-col md:flex-row">
                        <div 
                            data-name="how-to-use-video"
                            className="md:w-1/2 mb-8 md:mb-0 md:pr-8"
                        >
                            <div className="bg-gray-200 rounded-xl overflow-hidden shadow-soft">
                                <video 
                                    controls
                                    className="w-full h-auto"
                                    poster="https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2xlZXB8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
                                >
                                    <source src="https://samplelib.com/lib/preview/mp4/sample-5s.mp4" type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                            <div className="text-center mt-3 text-sm text-gray-500">
                                Watch our demonstration video to see how easy it is to apply SleepRight mouth tape
                            </div>
                        </div>

                        <div 
                            data-name="how-to-use-steps"
                            className="md:w-1/2"
                        >
                            {steps.map((step, index) => (
                                <div 
                                    key={index}
                                    data-name={`step-${index + 1}`}
                                    className="flex items-start mb-8 stagger-item animate-fade-in"
                                >
                                    <div 
                                        data-name="step-icon"
                                        className="bg-blue-100 text-blue-500 rounded-full w-14 h-14 flex items-center justify-center flex-shrink-0 mr-4"
                                    >
                                        <i className={`fas ${step.icon} text-xl`}></i>
                                    </div>
                                    <div>
                                        <div 
                                            data-name="step-number"
                                            className="text-sm font-semibold text-blue-500 mb-1"
                                        >
                                            STEP {step.number}
                                        </div>
                                        <h3 
                                            data-name="step-title"
                                            className="text-xl font-semibold mb-2"
                                        >
                                            {step.title}
                                        </h3>
                                        <p 
                                            data-name="step-description"
                                            className="text-gray-600"
                                        >
                                            {step.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('HowToUse component error:', error);
        reportError(error);
        return null;
    }
}
