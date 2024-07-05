import { ICartItem, IProduct } from "@/commons/interfaces";

const initializeCart = (): ICartItem[] => {
    const cartItemsJSON = localStorage.getItem('cartItems');
    if (cartItemsJSON) {
        return JSON.parse(cartItemsJSON);
    }
    return [];
};

let cartItems: ICartItem[] = initializeCart();

const saveCartToLocalStorage = (): void => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
};

const addToCart = (product: IProduct): void => {
    const existingItemIndex = cartItems.findIndex(item => item.id === product.id);

    if (existingItemIndex !== -1) {
        cartItems[existingItemIndex].quantity++;
    } else {
        cartItems.push({ ...product, quantity: 1 });
    }

    saveCartToLocalStorage();
};

const removeFromCart = (productId: number): void => {
    cartItems = cartItems.filter(item => item.id !== productId);
    saveCartToLocalStorage();
};

const clearCart = (): void => {
    cartItems = [];
    saveCartToLocalStorage();
};

const getCartItems = (): ICartItem[] => {
    return cartItems;
};



const CartService = {
    addToCart,
    removeFromCart,
    clearCart,
    getCartItems,
};

export default CartService;
