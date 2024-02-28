import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

export const Header = () => {
    const cartItems = useSelector(state => state.cart.items);
    const count = cartItems.length;

    return (
        <header className='py-5 border-b fixed top-0 left-0 right-0 bg-white '>
            <div className="container">
                <div className='flex items-center justify-between'>
                    <a href="#">
                        LOGO
                    </a>
                    <nav className='flex items-center'>
                        <ul className='flex items-center gap-10'>
                            <li>
                                <NavLink to='/'>
                                    Shop
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/cart'>
                                    Cart ({count})
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}
