// Format price with currency symbol
function formatPrice(price, currency = 'USD') {
    try {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: currency
        }).format(price);
    } catch (error) {
        console.error('Error formatting price:', error);
        return `$${price.toFixed(2)}`;
    }
}

// Validate email address
function validateEmail(email) {
    try {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    } catch (error) {
        console.error('Error validating email:', error);
        return false;
    }
}

// Format date
function formatDate(date, format = 'short') {
    try {
        const d = new Date(date);
        
        if (format === 'short') {
            return d.toLocaleDateString();
        } else if (format === 'long') {
            return d.toLocaleDateString(undefined, {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });
        } else if (format === 'time') {
            return d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        } else {
            return d.toLocaleString();
        }
    } catch (error) {
        console.error('Error formatting date:', error);
        return '';
    }
}

// Generate a random ID
function generateId(length = 8) {
    try {
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let id = '';
        
        for (let i = 0; i < length; i++) {
            id += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        
        return id;
    } catch (error) {
        console.error('Error generating ID:', error);
        return Math.random().toString(36).substring(2, 10);
    }
}

// Debounce function to limit how often a function can be called
function debounce(func, wait = 300) {
    try {
        let timeout;
        
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    } catch (error) {
        console.error('Error in debounce function:', error);
        return func;
    }
}

// Local storage helper functions
const storage = {
    get: (key, defaultValue = null) => {
        try {
            const item = localStorage.getItem(key);
            return item ? JSON.parse(item) : defaultValue;
        } catch (error) {
            console.error('Error getting item from localStorage:', error);
            return defaultValue;
        }
    },
    set: (key, value) => {
        try {
            localStorage.setItem(key, JSON.stringify(value));
            return true;
        } catch (error) {
            console.error('Error setting item in localStorage:', error);
            return false;
        }
    },
    remove: (key) => {
        try {
            localStorage.removeItem(key);
            return true;
        } catch (error) {
            console.error('Error removing item from localStorage:', error);
            return false;
        }
    }
};
