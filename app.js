// Pizza Ordering Application - JavaScript
class PizzaApp {
    constructor() {
        this.pizzas = [
            {
                "id": 1,
                "name": "Margherita Classic",
                "category": "Classic",
                "description": "Fresh mozzarella, tomato sauce, and basil on our signature thin crust",
                "ingredients": ["Mozzarella", "Tomato Sauce", "Fresh Basil", "Olive Oil"],
                "prices": {
                    "personal": 12.99,
                    "medium": 16.99,
                    "large": 19.99,
                    "family": 23.99
                },
                "prepTime": 15,
                "dietary": ["vegetarian"],
                "spiceLevel": "mild",
                "popularity": 95,
                "image": "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400"
            },
            {
                "id": 2,
                "name": "Pepperoni Supreme",
                "category": "Classic",
                "description": "Premium pepperoni with mozzarella cheese and our classic tomato sauce",
                "ingredients": ["Pepperoni", "Mozzarella", "Tomato Sauce"],
                "prices": {
                    "personal": 14.99,
                    "medium": 18.99,
                    "large": 21.99,
                    "family": 25.99
                },
                "prepTime": 18,
                "dietary": [],
                "spiceLevel": "mild",
                "popularity": 98,
                "image": "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400"
            },
            {
                "id": 3,
                "name": "Hawaiian Paradise",
                "category": "Classic",
                "description": "Ham and pineapple with mozzarella cheese for a tropical taste",
                "ingredients": ["Ham", "Pineapple", "Mozzarella", "Tomato Sauce"],
                "prices": {
                    "personal": 15.99,
                    "medium": 19.99,
                    "large": 22.99,
                    "family": 26.99
                },
                "prepTime": 16,
                "dietary": [],
                "spiceLevel": "mild",
                "popularity": 78,
                "image": "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400"
            },
            {
                "id": 4,
                "name": "Meat Lovers Supreme",
                "category": "Meat Lovers",
                "description": "Pepperoni, sausage, bacon, and ham for the ultimate meat experience",
                "ingredients": ["Pepperoni", "Italian Sausage", "Bacon", "Ham", "Mozzarella"],
                "prices": {
                    "personal": 18.99,
                    "medium": 24.99,
                    "large": 28.99,
                    "family": 32.99
                },
                "prepTime": 22,
                "dietary": [],
                "spiceLevel": "medium",
                "popularity": 89,
                "image": "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400"
            },
            {
                "id": 5,
                "name": "BBQ Chicken Deluxe",
                "category": "Meat Lovers",
                "description": "Grilled chicken with BBQ sauce, red onions, and cilantro",
                "ingredients": ["Grilled Chicken", "BBQ Sauce", "Red Onions", "Cilantro", "Mozzarella"],
                "prices": {
                    "personal": 17.99,
                    "medium": 22.99,
                    "large": 26.99,
                    "family": 30.99
                },
                "prepTime": 20,
                "dietary": [],
                "spiceLevel": "medium",
                "popularity": 85,
                "image": "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=400"
            },
            {
                "id": 6,
                "name": "Veggie Garden",
                "category": "Vegetarian",
                "description": "Bell peppers, mushrooms, onions, olives, and tomatoes",
                "ingredients": ["Bell Peppers", "Mushrooms", "Red Onions", "Black Olives", "Tomatoes", "Mozzarella"],
                "prices": {
                    "personal": 16.99,
                    "medium": 20.99,
                    "large": 24.99,
                    "family": 28.99
                },
                "prepTime": 17,
                "dietary": ["vegetarian"],
                "spiceLevel": "mild",
                "popularity": 72,
                "image": "https://images.unsplash.com/photo-1555072956-7758afb20e8f?w=400"
            },
            {
                "id": 7,
                "name": "Four Cheese Blend",
                "category": "Vegetarian",
                "description": "Mozzarella, parmesan, gorgonzola, and ricotta cheese blend",
                "ingredients": ["Mozzarella", "Parmesan", "Gorgonzola", "Ricotta", "Garlic"],
                "prices": {
                    "personal": 17.99,
                    "medium": 21.99,
                    "large": 25.99,
                    "family": 29.99
                },
                "prepTime": 16,
                "dietary": ["vegetarian"],
                "spiceLevel": "mild",
                "popularity": 81,
                "image": "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?w=400"
            },
            {
                "id": 8,
                "name": "Mediterranean Delight",
                "category": "Gourmet",
                "description": "Feta cheese, sun-dried tomatoes, kalamata olives, and spinach",
                "ingredients": ["Feta Cheese", "Sun-dried Tomatoes", "Kalamata Olives", "Spinach", "Mozzarella"],
                "prices": {
                    "personal": 19.99,
                    "medium": 25.99,
                    "large": 29.99,
                    "family": 34.99
                },
                "prepTime": 19,
                "dietary": ["vegetarian"],
                "spiceLevel": "mild",
                "popularity": 76,
                "image": "https://images.unsplash.com/photo-1588315029754-2dd089d39a1a?w=400"
            },
            {
                "id": 9,
                "name": "Spicy Buffalo Chicken",
                "category": "Meat Lovers",
                "description": "Buffalo chicken with hot sauce, blue cheese, and celery",
                "ingredients": ["Buffalo Chicken", "Hot Sauce", "Blue Cheese", "Celery", "Mozzarella"],
                "prices": {
                    "personal": 18.99,
                    "medium": 23.99,
                    "large": 27.99,
                    "family": 31.99
                },
                "prepTime": 21,
                "dietary": [],
                "spiceLevel": "hot",
                "popularity": 83,
                "image": "https://images.unsplash.com/photo-1594007654729-407eedc4be65?w=400"
            },
            {
                "id": 10,
                "name": "Truffle Mushroom",
                "category": "Gourmet",
                "description": "Wild mushrooms with truffle oil, garlic, and fresh herbs",
                "ingredients": ["Wild Mushrooms", "Truffle Oil", "Garlic", "Fresh Herbs", "Mozzarella"],
                "prices": {
                    "personal": 21.99,
                    "medium": 28.99,
                    "large": 33.99,
                    "family": 38.99
                },
                "prepTime": 23,
                "dietary": ["vegetarian"],
                "spiceLevel": "mild",
                "popularity": 68,
                "image": "https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=400"
            }
        ];

        this.categories = ["All", "Classic", "Meat Lovers", "Vegetarian", "Gourmet", "International", "Specialty"];
        this.sizes = [
            {"name": "Personal", "size": "10\"", "key": "personal"},
            {"name": "Medium", "size": "12\"", "key": "medium"},
            {"name": "Large", "size": "14\"", "key": "large"},
            {"name": "Family", "size": "16\"", "key": "family"}
        ];

        this.cart = this.loadCart();
        this.currentPizza = null;
        this.selectedSize = 'medium';
        this.quantity = 1;
        this.currentStep = 1;
        this.filteredPizzas = [...this.pizzas];
        
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.populateCategories();
        this.renderPizzas();
        this.updateCartCount();
        this.setupPriceSlider();
        
        // Simulate loading
        setTimeout(() => {
            document.getElementById('loadingState').style.display = 'none';
        }, 1000);
    }

    setupEventListeners() {
        // Search functionality
        const searchInput = document.getElementById('searchInput');
        searchInput.addEventListener('input', this.debounce((e) => {
            this.filterPizzas();
        }, 300));

        // Filter controls
        document.getElementById('categoryFilter').addEventListener('change', () => this.filterPizzas());
        document.getElementById('sortFilter').addEventListener('change', () => this.filterPizzas());
        document.getElementById('clearFiltersBtn').addEventListener('click', () => this.clearFilters());
        
        // Dietary filters
        document.querySelectorAll('.dietary-filter').forEach(checkbox => {
            checkbox.addEventListener('change', () => this.filterPizzas());
        });

        // Spice level filters
        document.querySelectorAll('input[name="spiceLevel"]').forEach(radio => {
            radio.addEventListener('change', () => this.filterPizzas());
        });

        // Price range
        document.getElementById('priceRange').addEventListener('input', (e) => {
            document.getElementById('priceValue').textContent = e.target.value;
            this.filterPizzas();
        });

        // Cart and modal controls
        document.getElementById('cartBtn').addEventListener('click', () => this.openCart());
        document.getElementById('loginBtn').addEventListener('click', () => this.showToast('Login functionality coming soon!', 'info'));
    }

    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    populateCategories() {
        const categoryFilter = document.getElementById('categoryFilter');
        this.categories.forEach(category => {
            const option = document.createElement('option');
            option.value = category;
            option.textContent = category;
            categoryFilter.appendChild(option);
        });
    }

    setupPriceSlider() {
        const priceRange = document.getElementById('priceRange');
        const maxPrice = Math.max(...this.pizzas.map(p => Math.max(...Object.values(p.prices))));
        priceRange.max = Math.ceil(maxPrice);
        priceRange.value = Math.ceil(maxPrice);
        document.getElementById('priceValue').textContent = Math.ceil(maxPrice);
    }

    filterPizzas() {
        const searchTerm = document.getElementById('searchInput').value.toLowerCase();
        const category = document.getElementById('categoryFilter').value;
        const maxPrice = parseFloat(document.getElementById('priceRange').value);
        const selectedDietary = Array.from(document.querySelectorAll('.dietary-filter:checked')).map(cb => cb.value);
        const selectedSpice = document.querySelector('input[name="spiceLevel"]:checked').value;
        const sortBy = document.getElementById('sortFilter').value;

        this.filteredPizzas = this.pizzas.filter(pizza => {
            // Search filter
            const matchesSearch = pizza.name.toLowerCase().includes(searchTerm) ||
                                pizza.description.toLowerCase().includes(searchTerm) ||
                                pizza.ingredients.some(ing => ing.toLowerCase().includes(searchTerm));

            // Category filter
            const matchesCategory = category === 'All' || pizza.category === category;

            // Price filter
            const matchesPrice = Math.min(...Object.values(pizza.prices)) <= maxPrice;

            // Dietary filter
            const matchesDietary = selectedDietary.length === 0 || 
                                 selectedDietary.some(diet => pizza.dietary.includes(diet));

            // Spice level filter
            const matchesSpice = selectedSpice === 'all' || pizza.spiceLevel === selectedSpice;

            return matchesSearch && matchesCategory && matchesPrice && matchesDietary && matchesSpice;
        });

        // Sort pizzas
        this.sortPizzas(sortBy);
        this.renderPizzas();
    }

    sortPizzas(sortBy) {
        switch (sortBy) {
            case 'price-low':
                this.filteredPizzas.sort((a, b) => Math.min(...Object.values(a.prices)) - Math.min(...Object.values(b.prices)));
                break;
            case 'price-high':
                this.filteredPizzas.sort((a, b) => Math.min(...Object.values(b.prices)) - Math.min(...Object.values(a.prices)));
                break;
            case 'prep-time':
                this.filteredPizzas.sort((a, b) => a.prepTime - b.prepTime);
                break;
            case 'popularity':
            default:
                this.filteredPizzas.sort((a, b) => b.popularity - a.popularity);
                break;
        }
    }

    clearFilters() {
        document.getElementById('searchInput').value = '';
        document.getElementById('categoryFilter').value = 'All';
        document.getElementById('sortFilter').value = 'popularity';
        document.getElementById('priceRange').value = document.getElementById('priceRange').max;
        document.getElementById('priceValue').textContent = document.getElementById('priceRange').max;
        
        document.querySelectorAll('.dietary-filter').forEach(cb => cb.checked = false);
        document.querySelector('input[name="spiceLevel"][value="all"]').checked = true;
        
        this.filterPizzas();
    }

    renderPizzas() {
        const grid = document.getElementById('pizzaGrid');
        const resultsCount = document.getElementById('resultsCount');
        
        resultsCount.textContent = `${this.filteredPizzas.length} pizzas found`;
        
        grid.innerHTML = this.filteredPizzas.map(pizza => `
            <div class="pizza-card" onclick="app.openPizzaModal(${pizza.id})">
                <div class="pizza-card__image">
                    <img src="${pizza.image}" alt="${pizza.name}" loading="lazy">
                    <div class="pizza-badges">
                        ${pizza.dietary.includes('vegetarian') ? '<span class="badge badge--vegetarian">Vegetarian</span>' : ''}
                        ${pizza.spiceLevel === 'hot' ? '<span class="badge badge--hot">Spicy</span>' : ''}
                    </div>
                </div>
                <div class="pizza-card__content">
                    <div class="pizza-card__header">
                        <h3 class="pizza-card__title">${pizza.name}</h3>
                        <span class="pizza-card__price">$${pizza.prices.medium}</span>
                    </div>
                    <p class="pizza-card__description">${pizza.description}</p>
                    <div class="pizza-card__meta">
                        <span>🕒 ${pizza.prepTime} min</span>
                        <span>⭐ ${pizza.popularity}% liked</span>
                    </div>
                    <div class="pizza-card__footer">
                        <button class="btn btn--primary btn--sm" onclick="event.stopPropagation(); app.quickAddToCart(${pizza.id})">
                            Quick Add
                        </button>
                        <button class="btn btn--outline btn--sm" onclick="event.stopPropagation(); app.openPizzaModal(${pizza.id})">
                            View Details
                        </button>
                    </div>
                </div>
            </div>
        `).join('');
    }

    openPizzaModal(pizzaId) {
        this.currentPizza = this.pizzas.find(p => p.id === pizzaId);
        this.selectedSize = 'medium';
        this.quantity = 1;
        
        document.getElementById('modalPizzaName').textContent = this.currentPizza.name;
        document.getElementById('modalPizzaImage').src = this.currentPizza.image;
        document.getElementById('modalPizzaDescription').textContent = this.currentPizza.description;
        document.getElementById('modalPrepTime').textContent = this.currentPizza.prepTime;
        
        // Render ingredients
        document.getElementById('modalPizzaIngredients').innerHTML = 
            this.currentPizza.ingredients.map(ing => `<span class="ingredient-tag">${ing}</span>`).join('');
        
        // Render dietary tags
        document.getElementById('modalDietaryTags').innerHTML = 
            this.currentPizza.dietary.map(diet => `<span class="badge badge--${diet}">${diet}</span>`).join('');
        
        // Render size options
        document.getElementById('modalSizeOptions').innerHTML = this.sizes.map(size => `
            <div class="size-option ${size.key === this.selectedSize ? 'selected' : ''}" 
                 onclick="app.selectSize('${size.key}')">
                <div class="size-name">${size.name}</div>
                <div class="size-detail">${size.size}</div>
                <div class="size-price">$${this.currentPizza.prices[size.key]}</div>
            </div>
        `).join('');
        
        this.updateModalPrice();
        document.getElementById('modalQuantity').textContent = this.quantity;
        
        document.getElementById('pizzaModal').classList.add('active');
    }

    closePizzaModal() {
        document.getElementById('pizzaModal').classList.remove('active');
    }

    selectSize(sizeKey) {
        this.selectedSize = sizeKey;
        document.querySelectorAll('.size-option').forEach(opt => opt.classList.remove('selected'));
        event.target.closest('.size-option').classList.add('selected');
        this.updateModalPrice();
    }

    increaseQuantity() {
        this.quantity++;
        document.getElementById('modalQuantity').textContent = this.quantity;
        this.updateModalPrice();
    }

    decreaseQuantity() {
        if (this.quantity > 1) {
            this.quantity--;
            document.getElementById('modalQuantity').textContent = this.quantity;
            this.updateModalPrice();
        }
    }

    updateModalPrice() {
        const price = this.currentPizza.prices[this.selectedSize] * this.quantity;
        document.getElementById('modalPrice').textContent = `$${price.toFixed(2)}`;
    }

    quickAddToCart(pizzaId) {
        const pizza = this.pizzas.find(p => p.id === pizzaId);
        const cartItem = {
            id: Date.now(),
            pizzaId: pizza.id,
            name: pizza.name,
            image: pizza.image,
            size: 'medium',
            quantity: 1,
            price: pizza.prices.medium
        };
        
        this.cart.push(cartItem);
        this.saveCart();
        this.updateCartCount();
        this.showToast(`${pizza.name} added to cart!`, 'success');
    }

    addToCartFromModal() {
        const cartItem = {
            id: Date.now(),
            pizzaId: this.currentPizza.id,
            name: this.currentPizza.name,
            image: this.currentPizza.image,
            size: this.selectedSize,
            quantity: this.quantity,
            price: this.currentPizza.prices[this.selectedSize]
        };
        
        this.cart.push(cartItem);
        this.saveCart();
        this.updateCartCount();
        this.closePizzaModal();
        this.showToast(`${this.currentPizza.name} added to cart!`, 'success');
    }

    openCart() {
        this.renderCart();
        document.getElementById('cartModal').classList.add('active');
    }

    closeCart() {
        document.getElementById('cartModal').classList.remove('active');
    }

    renderCart() {
        const cartItems = document.getElementById('cartItems');
        const cartEmpty = document.getElementById('cartEmpty');
        const cartFooter = document.getElementById('cartFooter');
        
        if (this.cart.length === 0) {
            cartItems.style.display = 'none';
            cartEmpty.style.display = 'block';
            cartFooter.style.display = 'none';
            return;
        }
        
        cartItems.style.display = 'block';
        cartEmpty.style.display = 'none';
        cartFooter.style.display = 'block';
        
        cartItems.innerHTML = this.cart.map(item => `
            <div class="cart-item">
                <div class="cart-item__image">
                    <img src="${item.image}" alt="${item.name}">
                </div>
                <div class="cart-item__content">
                    <div class="cart-item__header">
                        <h4 class="cart-item__name">${item.name}</h4>
                        <button class="cart-item__remove" onclick="app.removeFromCart(${item.id})">×</button>
                    </div>
                    <div class="cart-item__details">
                        ${this.getSizeName(item.size)} • $${item.price.toFixed(2)} each
                    </div>
                    <div class="cart-item__footer">
                        <div class="cart-item__quantity">
                            <button class="quantity-btn" onclick="app.updateCartQuantity(${item.id}, ${item.quantity - 1})">-</button>
                            <span>${item.quantity}</span>
                            <button class="quantity-btn" onclick="app.updateCartQuantity(${item.id}, ${item.quantity + 1})">+</button>
                        </div>
                        <div class="cart-item__price">$${(item.price * item.quantity).toFixed(2)}</div>
                    </div>
                </div>
            </div>
        `).join('');
        
        this.updateCartTotals();
    }

    getSizeName(sizeKey) {
        const size = this.sizes.find(s => s.key === sizeKey);
        return size ? `${size.name} (${size.size})` : sizeKey;
    }

    removeFromCart(itemId) {
        this.cart = this.cart.filter(item => item.id !== itemId);
        this.saveCart();
        this.updateCartCount();
        this.renderCart();
        this.showToast('Item removed from cart', 'info');
    }

    updateCartQuantity(itemId, newQuantity) {
        if (newQuantity <= 0) {
            this.removeFromCart(itemId);
            return;
        }
        
        const item = this.cart.find(item => item.id === itemId);
        if (item) {
            item.quantity = newQuantity;
            this.saveCart();
            this.updateCartCount();
            this.renderCart();
        }
    }

    updateCartTotals() {
        const subtotal = this.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        const tax = subtotal * 0.085;
        const total = subtotal + tax;
        
        document.getElementById('cartSubtotal').textContent = `$${subtotal.toFixed(2)}`;
        document.getElementById('cartTax').textContent = `$${tax.toFixed(2)}`;
        document.getElementById('cartTotal').textContent = `$${total.toFixed(2)}`;
    }

    updateCartCount() {
        const count = this.cart.reduce((sum, item) => sum + item.quantity, 0);
        document.getElementById('cartCount').textContent = count;
    }

    startCheckout() {
        if (this.cart.length === 0) return;
        
        this.closeCart();
        this.currentStep = 1;
        this.renderCheckoutStep();
        document.getElementById('checkoutModal').classList.add('active');
    }

    closeCheckout() {
        document.getElementById('checkoutModal').classList.remove('active');
    }

    renderCheckoutStep() {
        const content = document.getElementById('checkoutContent');
        this.updateProgressSteps();
        
        switch (this.currentStep) {
            case 1:
                content.innerHTML = this.renderCartReview();
                break;
            case 2:
                content.innerHTML = this.renderCustomerInfo();
                break;
            case 3:
                content.innerHTML = this.renderDeliveryInfo();
                break;
            case 4:
                content.innerHTML = this.renderPaymentInfo();
                break;
            case 5:
                content.innerHTML = this.renderConfirmation();
                break;
        }
    }

    updateProgressSteps() {
        document.querySelectorAll('.progress-step').forEach((step, index) => {
            step.classList.remove('active', 'completed');
            if (index + 1 === this.currentStep) {
                step.classList.add('active');
            } else if (index + 1 < this.currentStep) {
                step.classList.add('completed');
            }
        });
    }

    renderCartReview() {
        const subtotal = this.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        const tax = subtotal * 0.085;
        const total = subtotal + tax;

        return `
            <h4>Review Your Order</h4>
            <div class="cart-items">
                ${this.cart.map(item => `
                    <div class="cart-item">
                        <div class="cart-item__image">
                            <img src="${item.image}" alt="${item.name}">
                        </div>
                        <div class="cart-item__content">
                            <h4 class="cart-item__name">${item.name}</h4>
                            <div class="cart-item__details">
                                ${this.getSizeName(item.size)} • Qty: ${item.quantity}
                            </div>
                            <div class="cart-item__price">$${(item.price * item.quantity).toFixed(2)}</div>
                        </div>
                    </div>
                `).join('')}
            </div>
            <div class="cart-total">
                <div class="total-row">
                    <span>Subtotal:</span>
                    <span>$${subtotal.toFixed(2)}</span>
                </div>
                <div class="total-row">
                    <span>Tax (8.5%):</span>
                    <span>$${tax.toFixed(2)}</span>
                </div>
                <div class="total-row total-final">
                    <span>Total:</span>
                    <span>$${total.toFixed(2)}</span>
                </div>
            </div>
            <div class="checkout-navigation">
                <button class="btn btn--secondary" onclick="app.closeCheckout()">Back to Cart</button>
                <button class="btn btn--primary" onclick="app.nextStep()">Continue</button>
            </div>
        `;
    }

    renderCustomerInfo() {
        return `
            <h4>Customer Information</h4>
            <form id="customerForm">
                <div class="form-row">
                    <div class="form-group">
                        <label class="form-label">First Name</label>
                        <input type="text" class="form-control" name="firstName" required>
                    </div>
                    <div class="form-group">
                        <label class="form-label">Last Name</label>
                        <input type="text" class="form-control" name="lastName" required>
                    </div>
                </div>
                <div class="form-group">
                    <label class="form-label">Email</label>
                    <input type="email" class="form-control" name="email" required>
                </div>
                <div class="form-group">
                    <label class="form-label">Phone Number</label>
                    <input type="tel" class="form-control" name="phone" required>
                </div>
            </form>
            <div class="checkout-navigation">
                <button class="btn btn--secondary" onclick="app.previousStep()">Back</button>
                <button class="btn btn--primary" onclick="app.nextStep()">Continue</button>
            </div>
        `;
    }

    renderDeliveryInfo() {
        return `
            <h4>Delivery Information</h4>
            <form id="deliveryForm">
                <div class="form-group">
                    <label class="form-label">Street Address</label>
                    <input type="text" class="form-control" name="address" required>
                </div>
                <div class="form-row">
                    <div class="form-group">
                        <label class="form-label">City</label>
                        <input type="text" class="form-control" name="city" required>
                    </div>
                    <div class="form-group">
                        <label class="form-label">ZIP Code</label>
                        <input type="text" class="form-control" name="zip" required>
                    </div>
                </div>
                <div class="form-group">
                    <label class="form-label">Delivery Instructions (Optional)</label>
                    <textarea class="form-control" name="instructions" rows="3"></textarea>
                </div>
            </form>
            <div class="checkout-navigation">
                <button class="btn btn--secondary" onclick="app.previousStep()">Back</button>
                <button class="btn btn--primary" onclick="app.nextStep()">Continue</button>
            </div>
        `;
    }

    renderPaymentInfo() {
        return `
            <h4>Payment Method</h4>
            <div class="payment-methods">
                <div class="payment-method selected" onclick="app.selectPayment('credit')">
                    <h5>💳 Credit Card</h5>
                    <p>Pay securely with your credit or debit card</p>
                </div>
                <div class="payment-method" onclick="app.selectPayment('paypal')">
                    <h5>🅿️ PayPal</h5>
                    <p>Quick and secure payment with PayPal</p>
                </div>
                <div class="payment-method" onclick="app.selectPayment('cash')">
                    <h5>💵 Cash on Delivery</h5>
                    <p>Pay with cash when your order arrives</p>
                </div>
            </div>
            <div class="checkout-navigation">
                <button class="btn btn--secondary" onclick="app.previousStep()">Back</button>
                <button class="btn btn--primary" onclick="app.nextStep()">Place Order</button>
            </div>
        `;
    }

    renderConfirmation() {
        const orderNumber = Math.floor(Math.random() * 10000) + 1000;
        const estimatedTime = new Date(Date.now() + 30 * 60000).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
        
        return `
            <div class="text-center">
                <h4>🎉 Order Confirmed!</h4>
                <p>Thank you for your order. Your delicious pizza is being prepared!</p>
                
                <div class="card">
                    <div class="card__body">
                        <h5>Order Details</h5>
                        <p><strong>Order #:</strong> ${orderNumber}</p>
                        <p><strong>Estimated Delivery:</strong> ${estimatedTime}</p>
                        <p><strong>Total:</strong> $${this.getCartTotal().toFixed(2)}</p>
                    </div>
                </div>
                
                <div class="checkout-navigation">
                    <button class="btn btn--primary" onclick="app.completeOrder()">Continue Shopping</button>
                </div>
            </div>
        `;
    }

    selectPayment(method) {
        document.querySelectorAll('.payment-method').forEach(pm => pm.classList.remove('selected'));
        event.target.closest('.payment-method').classList.add('selected');
    }

    nextStep() {
        if (this.currentStep < 5) {
            this.currentStep++;
            this.renderCheckoutStep();
        }
    }

    previousStep() {
        if (this.currentStep > 1) {
            this.currentStep--;
            this.renderCheckoutStep();
        }
    }

    completeOrder() {
        this.cart = [];
        this.saveCart();
        this.updateCartCount();
        this.closeCheckout();
        this.showToast('Order placed successfully! We\'ll send you updates via email.', 'success');
    }

    getCartTotal() {
        const subtotal = this.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        return subtotal * 1.085; // Including tax
    }

    saveCart() {
        localStorage.setItem('pizzaCart', JSON.stringify(this.cart));
    }

    loadCart() {
        const saved = localStorage.getItem('pizzaCart');
        return saved ? JSON.parse(saved) : [];
    }

    showToast(message, type = 'info') {
        const toast = document.createElement('div');
        toast.className = `toast toast--${type}`;
        toast.innerHTML = `
            <div class="toast-content">
                <p>${message}</p>
            </div>
        `;
        
        document.getElementById('toastContainer').appendChild(toast);
        
        setTimeout(() => toast.classList.add('show'), 100);
        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => toast.remove(), 300);
        }, 3000);
    }
}

// Global functions for onclick handlers
function scrollToPizzas() {
    document.getElementById('pizzaSection').scrollIntoView({ behavior: 'smooth' });
}

function closeCart() {
    app.closeCart();
}

function closePizzaModal() {
    app.closePizzaModal();
}

function increaseQuantity() {
    app.increaseQuantity();
}

function decreaseQuantity() {
    app.decreaseQuantity();
}

function addToCartFromModal() {
    app.addToCartFromModal();
}

function startCheckout() {
    app.startCheckout();
}

function closeCheckout() {
    app.closeCheckout();
}

// Initialize the application
let app;
document.addEventListener('DOMContentLoaded', () => {
    app = new PizzaApp();
});