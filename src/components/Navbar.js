import React from 'react';
import { NavLink, Link } from 'react-router-dom';

class Navbar extends React.Component {
    render() {
        return(
            <nav className="navbar" role="navigation">
                <div className="nav-container">
                    <NavLink exact to="/" className="brand-logo">redux Co.</NavLink>
                    <ul className="menu">
                        <li><Link exact to="/">New Arrivals</Link></li>
                        <li><Link to="/clothing">Clothing</Link></li>
                        <li><Link to="/shoes">Shoes</Link></li>
                        <li><Link to="/accessories">Accessories</Link></li>
                        <li class="bag-ico"><NavLink to="/cart"><i class="fa fa-shopping-bag"></i></NavLink></li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar;