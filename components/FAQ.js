function FAQ() {
    try {
        const [activeIndex, setActiveIndex] = React.useState(null);

        const faqs = [
            {
                question: "Is it safe to use mouth tape every night?",
                answer: "Yes, SleepRight mouth tape is designed for daily use. It's made with hypoallergenic, skin-friendly adhesive that's gentle on your lips and skin. However, if you have breathing difficulties, consult with a healthcare professional before use."
            },
            {
                question: "How long does one pack of mouth tape last?",
                answer: "Each pack contains 30 strips, designed for a full month of use. One strip should be used per night and disposed of in the morning."
            },
            {
                question: "Will I be able to breathe if my nose gets congested during the night?",
                answer: "Our mouth tape is designed to be easily removed if needed. If your nose becomes congested during sleep, you can simply remove the tape by gently pulling it off. We recommend not using mouth tape when you have nasal congestion or a respiratory infection."
            },
            {
                question: "Is mouth taping suitable for children?",
                answer: "We do not recommend mouth tape for children under 12 years of age. For teenagers and adults, it's a safe practice when used as directed."
            },
            {
                question: "Can I talk or drink water with the mouth tape on?",
                answer: "The tape is designed to keep your mouth closed during sleep. Talking will be difficult, and drinking would require removing the tape. We recommend applying the tape right before going to sleep."
            },
            {
                question: "How long will it take to notice benefits?",
                answer: "Many users report improvements in sleep quality and reduced snoring from the very first night. However, the full benefits of nasal breathing may take 1-2 weeks of consistent use to become noticeable."
            }
        ];

        const toggleFAQ = (index) => {
            setActiveIndex(activeIndex === index ? null : index);
        };

        return (
            <section 
                id="faq" 
                data-name="faq-section"
                className="py-16 bg-white"
            >
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 
                            data-name="faq-title"
                            className="text-3xl md:text-4xl font-bold mb-4"
                        >
                            Frequently Asked Questions
                        </h2>
                        <p 
                            data-name="faq-subtitle"
                            className="text-lg text-gray-600 max-w-2xl mx-auto"
                        >
                            Find answers to the most common questions about our mouth tape.
                        </p>
                    </div>

                    <div 
                        data-name="faq-container"
                        className="max-w-3xl mx-auto"
                    >
                        {faqs.map((faq, index) => (
                            <div 
                                key={index}
                                data-name={`faq-item-${index}`}
                                className={`faq-item mb-4 border rounded-lg overflow-hidden ${
                                    activeIndex === index ? 'border-blue-500' : 'border-gray-200'
                                }`}
                            >
                                <button 
                                    data-name={`faq-question-${index}`}
                                    className="w-full text-left p-4 flex justify-between items-center focus:outline-none"
                                    onClick={() => toggleFAQ(index)}
                                >
                                    <span className="font-medium text-lg">{faq.question}</span>
                                    <i className={`fas ${activeIndex === index ? 'fa-minus' : 'fa-plus'} text-blue-500`}></i>
                                </button>
                                
                                {activeIndex === index && (
                                    <div 
                                        data-name={`faq-answer-${index}`}
                                        className="p-4 pt-0 text-gray-600 animate-fade-in"
                                    >
                                        {faq.answer}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    <div 
                        data-name="faq-contact"
                        className="text-center mt-10"
                    >
                        <p className="text-gray-600">
                            Can't find the answer you're looking for?
                        </p>
                        <a 
                            href="#contact" 
                            className="text-blue-500 font-medium hover:underline"
                        >
                            Contact our support team
                        </a>
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('FAQ component error:', error);
        reportError(error);
        return null;
    }
}
