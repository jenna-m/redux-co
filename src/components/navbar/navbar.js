import React from 'react';
import { NavLink, Link } from 'react-router-dom';

class Navbar extends React.Component {
    render() {
        return(
            <nav className="navbar" role="navigation">
                <div className="nav-container">
                    <NavLink exact to="/" className="brand-logo">redux Co.</NavLink>
                    <ul class="menu">
                        <li><Link to="/new-arrivals">New Arrivals</Link></li>
                        <li>
                            <li className="menu-category"><Link to="/clothing">Clothing</Link></li>
                            <ul className="dropdown">
                                <li className="sublink"><Link to="/tops">Tops</Link></li>
                                <li className="sublink"><Link to="/sweaters">Sweaters</Link></li>
                                <li className="sublink"><Link to="/jackets">Jackets</Link></li>
                                <li className="sublink"><Link to="/denim">Denim</Link></li>
                                <li className="sublink"><Link to="/dresses">Dresses</Link></li>
                                <li className="sublink"><Link to="/skirts">Skirts</Link></li>
                            </ul>
                        </li>
                        <li>
                            <li className="menu-category"><Link to="/shoes">Shoes</Link></li>
                            <ul className="dropdown">
                                <li className="sublink"><Link to="/boots">Boots</Link></li>
                                <li className="sublink"><Link to="/heels">Heels</Link></li>
                                <li className="sublink"><Link to="/sandals">Sandals</Link></li>
                            </ul>
                        </li>
                        <li>
                            <li className="menu-category"><Link to="/accessories">Accessories</Link></li>
                            <ul className="dropdown">
                                <li className="sublink"><Link to="/purses">Purses</Link></li>
                                <li className="sublink"><Link to="/jewelry">Jewelry</Link></li>
                                <li className="sublink"><Link to="/eyewear">Eyewear</Link></li>
                            </ul>
                        </li>
                        <li class="bag-ico"><NavLink to="/cart"><i class="fa fa-shopping-bag"></i></NavLink></li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar;