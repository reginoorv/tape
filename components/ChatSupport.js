function ChatSupport() {
    try {
        const [isOpen, setIsOpen] = React.useState(false);
        const [messages, setMessages] = React.useState([
            {
                type: 'bot',
                text: 'Hi there! 👋 How can I help you with SleepRight mouth tape today?',
                time: new Date()
            }
        ]);
        const [newMessage, setNewMessage] = React.useState('');
        const [isTyping, setIsTyping] = React.useState(false);
        const messagesEndRef = React.useRef(null);

        // Define common questions and responses
        const chatResponses = {
            product: {
                keywords: ['product', 'material', 'made of', 'what is', 'tape'],
                response: "SleepRight mouth tape is made of hypoallergenic, medical-grade material that's gentle on your skin. It's specifically designed for comfortable overnight wear and easy removal in the morning."
            },
            price: {
                keywords: ['price', 'cost', 'how much', 'pricing', 'discount'],
                response: "Our SleepRight mouth tape comes in three options: Standard Pack ($19.99), Value Pack ($34.99), and Family Pack ($49.99). We also offer discounts for subscribers and occasional promotional offers!"
            },
            shipping: {
                keywords: ['shipping', 'delivery', 'ship', 'arrive', 'when will'],
                response: "We offer free standard shipping on all orders over $30. Standard shipping takes 3-5 business days, while express shipping (available for an additional fee) takes 1-2 business days."
            },
            returns: {
                keywords: ['return', 'refund', 'money back', 'guarantee', 'not satisfied'],
                response: "We offer a 30-day money-back guarantee. If you're not completely satisfied with your purchase, you can return the unused portion for a full refund, no questions asked."
            },
            benefits: {
                keywords: ['benefits', 'help', 'advantage', 'why', 'how does it help'],
                response: "SleepRight mouth tape helps reduce snoring, improves sleep quality, prevents dry mouth, and promotes nasal breathing which has numerous health benefits including better oxygen absorption and reduced mouth bacteria."
            },
            safety: {
                keywords: ['safe', 'safety', 'dangerous', 'risk', 'side effects', 'breathing'],
                response: "SleepRight mouth tape is completely safe when used as directed. It's designed to be easily removable if needed during the night. However, if you have severe nasal congestion, sleep apnea, or respiratory issues, please consult with a healthcare provider before use."
            },
            usage: {
                keywords: ['use', 'how to', 'apply', 'remove', 'instructions'],
                response: "To use SleepRight: 1) Clean and dry your lips, 2) Peel the tape from the backing, 3) Position it over your lips and press gently, 4) Sleep peacefully and remove gently in the morning. It's that simple!"
            },
            snoring: {
                keywords: ['snoring', 'snore', 'noise', 'partner', 'sleep apnea'],
                response: "SleepRight mouth tape helps reduce or eliminate snoring by encouraging nasal breathing. Many users report significant reduction in snoring from the very first night, with their partners finally getting peaceful sleep!"
            },
            children: {
                keywords: ['child', 'children', 'kids', 'teenager', 'baby'],
                response: "We don't recommend SleepRight mouth tape for children under 12 years of age. For teenagers and adults, it's a safe practice when used as directed."
            }
        };

        const toggleChat = () => {
            setIsOpen(!isOpen);
        };

        const handleInputChange = (e) => {
            setNewMessage(e.target.value);
        };

        const scrollToBottom = () => {
            messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
        };

        React.useEffect(() => {
            scrollToBottom();
        }, [messages]);

        const getBotResponse = (userMessage) => {
            // Convert user message to lowercase for easier matching
            const message = userMessage.toLowerCase();
            
            // Check for greetings
            if (/^(hi|hello|hey|good morning|good afternoon|good evening)/.test(message)) {
                return "Hello there! 👋 How can I help you with SleepRight mouth tape today?";
            }
            
            // Check for thanks
            if (/thank(s| you)/.test(message)) {
                return "You're welcome! Is there anything else I can help you with?";
            }
            
            // Check for goodbye
            if (/^(bye|goodbye|see you|talk to you later)/.test(message)) {
                return "Thank you for chatting with us! If you have any more questions, feel free to ask anytime. Have a great day!";
            }
            
            // Check for specific categories
            for (const category in chatResponses) {
                const { keywords, response } = chatResponses[category];
                for (const keyword of keywords) {
                    if (message.includes(keyword)) {
                        return response;
                    }
                }
            }
            
            // Default responses if no match
            const defaultResponses = [
                "Thank you for your question! I'd be happy to help. Could you provide a bit more detail so I can give you the most accurate information?",
                "That's a great question. Let me connect you with our customer support team who can provide more detailed information. You can reach them at support@sleepright.com or call us at (888) 123-4567.",
                "I understand you're interested in our SleepRight mouth tape. Is there something specific about the product you'd like to know?",
                "I'm not sure I understood your question correctly. Are you asking about our product features, pricing, or usage instructions?",
                "Thanks for reaching out! Would you like to know more about the benefits of using mouth tape for sleep?"
            ];
            
            return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
        };

        const handleSubmit = (e) => {
            e.preventDefault();
            
            if (!newMessage.trim()) return;
            
            // Add user message
            const userMessage = {
                type: 'user',
                text: newMessage,
                time: new Date()
            };
            
            setMessages(prev => [...prev, userMessage]);
            setNewMessage('');
            setIsTyping(true);
            
            // Get bot response after delay
            setTimeout(() => {
                const botResponse = getBotResponse(userMessage.text);
                
                const botMessage = {
                    type: 'bot',
                    text: botResponse,
                    time: new Date()
                };
                
                setMessages(prev => [...prev, botMessage]);
                setIsTyping(false);
            }, 1000 + Math.random() * 1000); // Random delay between 1-2 seconds for realistic typing effect
        };

        const formatTime = (date) => {
            return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        };

        return (
            <div data-name="chat-support">
                {/* Chat Button */}
                <button 
                    data-name="chat-button"
                    onClick={toggleChat} 
                    className="chat-support-button bg-gradient text-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg"
                >
                    <i className={`fas ${isOpen ? 'fa-times' : 'fa-comments'} text-2xl`}></i>
                </button>
                
                {/* Chat Window */}
                {isOpen && (
                    <div 
                        data-name="chat-window"
                        className="chat-window bg-white"
                    >
                        {/* Chat Header */}
                        <div 
                            data-name="chat-header"
                            className="bg-gradient text-white p-4 flex items-center"
                        >
                            <div className="mr-3">
                                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                                    <i className="fas fa-headset text-blue-500 text-xl"></i>
                                </div>
                            </div>
                            <div>
                                <h3 className="font-medium">Customer Support</h3>
                                <p className="text-xs text-blue-100">We typically reply within minutes</p>
                            </div>
                        </div>
                        
                        {/* Chat Messages */}
                        <div 
                            data-name="chat-messages"
                            className="flex-1 p-4 overflow-y-auto h-64"
                        >
                            {messages.map((message, index) => (
                                <div 
                                    key={index}
                                    data-name={`message-${index}`}
                                    className={`mb-4 flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                                >
                                    <div 
                                        className={`max-w-3/4 rounded-lg p-3 ${
                                            message.type === 'user' 
                                                ? 'bg-blue-500 text-white' 
                                                : 'bg-gray-100 text-gray-800'
                                        }`}
                                    >
                                        <p>{message.text}</p>
                                        <div 
                                            className={`text-xs mt-1 ${
                                                message.type === 'user' ? 'text-blue-100' : 'text-gray-500'
                                            }`}
                                        >
                                            {formatTime(message.time)}
                                        </div>
                                    </div>
                                </div>
                            ))}
                            
                            {isTyping && (
                                <div 
                                    data-name="typing-indicator"
                                    className="flex justify-start mb-4"
                                >
                                    <div className="bg-gray-100 text-gray-800 rounded-lg p-3">
                                        <div className="flex space-x-1">
                                            <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></div>
                                            <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                                            <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{animationDelay: '0.4s'}}></div>
                                        </div>
                                    </div>
                                </div>
                            )}
                            
                            <div ref={messagesEndRef} />
                        </div>
                        
                        {/* Chat Input */}
                        <form 
                            data-name="chat-form"
                            onSubmit={handleSubmit}
                            className="border-t p-4 flex"
                        >
                            <input 
                                type="text"
                                value={newMessage}
                                onChange={handleInputChange}
                                placeholder="Type your message..."
                                className="flex-1 px-4 py-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <button 
                                type="submit"
                                className="bg-gradient text-white px-4 py-2 rounded-r-lg hover:opacity-90 transition-opacity"
                            >
                                <i className="fas fa-paper-plane"></i>
                            </button>
                        </form>
                    </div>
                )}
            </div>
        );
    } catch (error) {
        console.error('ChatSupport component error:', error);
        reportError(error);
        return null;
    }
}
