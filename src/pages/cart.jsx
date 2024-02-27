import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify'
import { removeFromCart, incrementQuantity, decrementQuantity } from '../redux/reducers/cart-reducer';

export const CartPage = () => {
    const dispatch = useDispatch();
    const items = useSelector(state => state.cart.items);

    const handleRemoveFromCart = (id) => {
        dispatch(removeFromCart(id));
        toast.info("Product removed from cart!");
    };

    const handleIncrementQuantity = (id) => {
        dispatch(incrementQuantity(id));
    };

    const handleDecrementQuantity = (id) => {
        dispatch(decrementQuantity(id));
    };

    return (
        <div className='container'>
            <h1 className='text-center py-5 text-[30px]'>Cart</h1>
            <ul className='border overflow-hidden rounded-md pb-5 px-7 h-[400px] overflow-y-auto'>
                <li className='flex w-full bg-white pt-5 fixed items-start gap-[180px] pb-4 border-b'>
                    <div className='  '>Image</div>
                    <div className='  '>Name</div>
                    <div className='  '>Price</div>
                    <div className='  '>Count</div>
                    <div className='  '>Total Price</div>
                </li>
                {items.map(item => (
                    <li className='flex [&:nth-child(2)]:mt-[50px] items-center justify-between border-b py-4' key={item.id}>
                        <div className='w-[140px]'>
                            <img src={item.thumbnail} alt={item.title} className='w-24 h-24 object-cover mr-4' />
                        </div>
                        <div className='w-[170px]'>
                            <h3 className='text-lg font-semibold'>{item.title.slice(0, 20)}</h3>
                        </div>
                        <div className='w-[170px]'>
                            <p className='text-gray-600'>Price: ${item.price}</p>
                        </div>
                        <div className='flex w-[150px] items-center mt-2'>
                            <button
                                className={`text-gray-500 border h-[30px] w-[30px] flex items-center justify-center rounded-full text-[20px] hover:bg-slate-200 focus:outline-none hover:text-gray-700 ${item.quantity === 1 ? 'cursor-not-allowed' : ''}`}
                                onClick={() => handleDecrementQuantity(item.id)}
                                disabled={item.quantity === 1}
                            >
                                -
                            </button>

                            <p className='mx-2'>{item.quantity}</p>

                            <button className='text-gray-500 border h-[30px] w-[30px] flex items-center justify-center rounded-full text-[20px] hover:bg-slate-200 focus:outline-none hover:text-gray-700' onClick={() => handleIncrementQuantity(item.id)}>+</button>
                        </div>
                        <div className='w-[140px]'>
                            <p>Total Price: ${item.quantity * item.price}</p>

                        </div>
                        <button className='text-red-500 ml-4 focus:outline-none hover:text-red-700' onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>

    );
};
