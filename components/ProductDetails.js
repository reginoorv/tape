function ProductDetails() {
    try {
        const [quantity, setQuantity] = React.useState(1);
        const [selectedOption, setSelectedOption] = React.useState('standard');
        
        const productOptions = {
            standard: {
                name: "Standard Pack",
                price: 19.99,
                description: "30-day supply (30 strips)",
                savings: 0
            },
            value: {
                name: "Value Pack",
                price: 34.99,
                description: "60-day supply (60 strips)",
                savings: 4.99
            },
            family: {
                name: "Family Pack",
                price: 49.99,
                description: "90-day supply (90 strips)",
                savings: 9.98
            }
        };

        const increaseQuantity = () => {
            setQuantity(prev => Math.min(prev + 1, 10));
        };

        const decreaseQuantity = () => {
            setQuantity(prev => Math.max(prev - 1, 1));
        };

        const handleOptionChange = (option) => {
            setSelectedOption(option);
        };

        const totalPrice = (productOptions[selectedOption].price * quantity).toFixed(2);
        
        return (
            <section 
                id="buy-now" 
                data-name="product-details-section"
                className="py-16 bg-white"
            >
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 
                            data-name="product-details-title"
                            className="text-3xl md:text-4xl font-bold mb-4"
                        >
                            Get Your <span className="text-gradient">SleepRight</span> Mouth Tape
                        </h2>
                        <p 
                            data-name="product-details-subtitle"
                            className="text-lg text-gray-600 max-w-2xl mx-auto"
                        >
                            Start your journey to better sleep and healthier breathing today.
                        </p>
                    </div>

                    <div className="max-w-5xl mx-auto bg-gray-50 rounded-2xl shadow-soft overflow-hidden">
                        <div className="flex flex-col md:flex-row">
                            <div 
                                data-name="product-image"
                                className="md:w-1/2"
                            >
                                <div className="p-6 md:p-10 h-full flex items-center justify-center">
                                    <div className="relative">
                                        <img 
                                            src="https://images.unsplash.com/photo-1563241527-3004b7be0ffd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2R1Y3QlMjBwYWNrYWdpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
                                            alt="SleepRight Mouth Tape Package" 
                                            className="rounded-lg shadow-md w-full object-cover h-80"
                                        />
                                        <div 
                                            data-name="product-badge"
                                            className="absolute -top-4 -right-4 bg-gradient text-white rounded-full w-16 h-16 flex items-center justify-center text-center text-sm font-bold"
                                        >
                                            <div>
                                                <div>BEST</div>
                                                <div>SELLER</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div 
                                data-name="product-info"
                                className="md:w-1/2 bg-white p-6 md:p-10"
                            >
                                <h3 
                                    data-name="product-name"
                                    className="text-2xl font-bold mb-2"
                                >
                                    SleepRight Premium Mouth Tape
                                </h3>
                                
                                <div 
                                    data-name="product-rating"
                                    className="flex items-center mb-4"
                                >
                                    <div className="flex text-yellow-400 mr-2">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                    </div>
                                    <span className="text-gray-500 text-sm">(452 reviews)</span>
                                </div>
                                
                                <p 
                                    data-name="product-description"
                                    className="text-gray-600 mb-6"
                                >
                                    Hypoallergenic, gentle adhesive mouth tape designed for comfortable 
                                    overnight wear. Promotes nasal breathing, reduces snoring, and improves 
                                    sleep quality.
                                </p>
                                
                                <div 
                                    data-name="product-features"
                                    className="mb-6"
                                >
                                    <div className="flex items-center mb-2">
                                        <i className="fas fa-check text-green-500 mr-2"></i>
                                        <span>Hypoallergenic & skin-friendly</span>
                                    </div>
                                    <div className="flex items-center mb-2">
                                        <i className="fas fa-check text-green-500 mr-2"></i>
                                        <span>Easy to apply & remove</span>
                                    </div>
                                    <div className="flex items-center mb-2">
                                        <i className="fas fa-check text-green-500 mr-2"></i>
                                        <span>Comfortable for all-night wear</span>
                                    </div>
                                </div>
                                
                                <div 
                                    data-name="product-options"
                                    className="mb-6"
                                >
                                    <h4 className="font-semibold mb-2">Select Package:</h4>
                                    <div className="space-y-3">
                                        {Object.entries(productOptions).map(([key, option]) => (
                                            <div 
                                                key={key}
                                                data-name={`option-${key}`}
                                                className={`border rounded-lg p-3 cursor-pointer transition-colors ${
                                                    selectedOption === key 
                                                        ? 'border-blue-500 bg-blue-50' 
                                                        : 'border-gray-200 hover:border-blue-300'
                                                }`}
                                                onClick={() => handleOptionChange(key)}
                                            >
                                                <div className="flex justify-between">
                                                    <div>
                                                        <div className="font-medium">{option.name}</div>
                                                        <div className="text-sm text-gray-500">{option.description}</div>
                                                    </div>
                                                    <div className="text-right">
                                                        <div className="font-bold">${option.price.toFixed(2)}</div>
                                                        {option.savings > 0 && (
                                                            <div className="text-sm text-green-500">
                                                                Save ${option.savings.toFixed(2)}
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                
                                <div 
                                    data-name="product-quantity"
                                    className="flex items-center mb-6"
                                >
                                    <span className="mr-3 font-semibold">Quantity:</span>
                                    <div className="flex border rounded">
                                        <button 
                                            data-name="decrease-quantity"
                                            className="px-3 py-1 border-r"
                                            onClick={decreaseQuantity}
                                            disabled={quantity <= 1}
                                        >
                                            <i className="fas fa-minus text-gray-500"></i>
                                        </button>
                                        <span className="px-4 py-1 font-medium">{quantity}</span>
                                        <button 
                                            data-name="increase-quantity"
                                            className="px-3 py-1 border-l"
                                            onClick={increaseQuantity}
                                            disabled={quantity >= 10}
                                        >
                                            <i className="fas fa-plus text-gray-500"></i>
                                        </button>
                                    </div>
                                </div>
                                
                                <div 
                                    data-name="product-total"
                                    className="flex justify-between items-center mb-6 pb-6 border-b"
                                >
                                    <span className="font-semibold">Total:</span>
                                    <span className="text-2xl font-bold">${totalPrice}</span>
                                </div>
                                
                                <button 
                                    data-name="add-to-cart-button"
                                    className="w-full bg-gradient text-white py-3 rounded-lg font-medium mb-4 hover:opacity-90 transition-opacity"
                                >
                                    Add to Cart
                                </button>
                                
                                <button 
                                    data-name="buy-now-button"
                                    className="w-full bg-blue-900 text-white py-3 rounded-lg font-medium hover:bg-blue-800 transition-colors"
                                >
                                    Buy Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('ProductDetails component error:', error);
        reportError(error);
        return null;
    }
}
