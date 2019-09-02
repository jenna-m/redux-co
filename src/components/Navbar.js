import React from 'react';
import { NavLink } from 'react-router-dom';

class Navbar extends React.Component {
    render() {
        return(
            <nav className="navbar">
                <div className="nav-container">
                    <NavLink exact to="/" className="brand-logo">redux Co.</NavLink>
                    <ul className="menu">
                        <li><NavLink exact to="/">Shop</NavLink></li>
                        <li><NavLink to="/cart">My Bag</NavLink></li>
                        <li class="cart-icon"><NavLink to="/cart"><i class="fa fa-shopping-bag"></i></NavLink></li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar;