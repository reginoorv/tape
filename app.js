function App() {
    try {
        return (
            <div data-name="app-container">
                <Header />
                <main>
                    <Hero />
                    <Benefits />
                    <HowToUse />
                    <Testimonials />
                    <ProductDetails />
                    <Guarantee />
                    <FAQ />
                    <section 
                        id="reviews" 
                        data-name="reviews-section"
                        className="py-16 bg-blue-50"
                    >
                        <div className="container mx-auto px-4">
                            <div className="text-center mb-12">
                                <h2 
                                    data-name="reviews-title"
                                    className="text-3xl md:text-4xl font-bold mb-4"
                                >
                                    Share Your Experience
                                </h2>
                                <p 
                                    data-name="reviews-subtitle"
                                    className="text-lg text-gray-600 max-w-2xl mx-auto"
                                >
                                    We value your feedback. Let us know how SleepRight has helped improve your sleep.
                                </p>
                            </div>
                            
                            <div className="max-w-2xl mx-auto">
                                <ReviewForm />
                            </div>
                        </div>
                    </section>
                </main>
                <Footer />
                <ChatSupport />
            </div>
        );
    } catch (error) {
        console.error('App component error:', error);
        reportError(error);
        return (
            <div className="text-center p-10">
                <h2 className="text-2xl text-red-500 mb-4">Something went wrong</h2>
                <p>Please refresh the page or try again later.</p>
            </div>
        );
    }
}

// Custom error boundary for handling React errors
function handleGlobalError(error) {
    console.error('Global error:', error);
    reportError(error);
}

// Add global error handler
window.addEventListener('error', (event) => {
    handleGlobalError(event.error);
});

// Add unhandled promise rejection handler
window.addEventListener('unhandledrejection', (event) => {
    handleGlobalError(event.reason);
});

// Use legacy ReactDOM.render instead of createRoot
ReactDOM.render(<App />, document.getElementById('root'));
