import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../redux/reducers/cart-reducer';
import { toast } from 'react-toastify';

export const Product = ({ product }) => {
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.items);

    const isInCart = cartItems.some(item => item.id === product.id);

    const handleAddToCart = () => {
        dispatch(addToCart(product));
        toast.success("Product added to cart!");
    };

    const handleRemoveFromCart = () => {
        dispatch(removeFromCart(product.id));
        toast.info("Product removed from cart!");
    };

    return (
        <div className="border p-3 rounded-xl">
            <div className='w-[100%] h-[200px] flex items-center justify-center overflow-hidden'>
                <img className=' object-cover object-center ' src={product.thumbnail} alt={product.title} />
            </div>
            <h2 className=' pt-5 text-[18px] mb-5 '>{product.title.slice(0, 25)}...</h2>
            <p>Price: ${product.price}</p>
            <p>Available Stock: {product.stock}</p>
            {isInCart ? (
                <button className=' mt-5 w-full rounded-lg py-3 text-[#fff] text-[20px] bg-[#ff3838] ' onClick={handleRemoveFromCart}>Remove from Cart</button>
            ) : (
                <button className=' mt-5 w-full rounded-lg py-3 text-[#fff] text-[20px] bg-[#299efe] ' onClick={handleAddToCart}>Add to Cart</button>
            )}
        </div>
    );
};
