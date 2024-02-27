import React from 'react'
import { NavLink } from 'react-router-dom'

export const Header = () => {
    return (
        <header className='py-5 border-b '>
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
                                    Cart
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}
