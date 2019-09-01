import React from 'react';
import { 
    HashRouter,
    NavLink,
} from 'react-router-dom';

class Navbar extends React.Component {
    render() {
        return(
            <HashRouter>
                <nav className="navbar">
                    <div className="nav-container">
                        <NavLink exact to="/" className="brand-logo">Shopping App</NavLink>

                        <ul className="menu">
                            <li><NavLink exact to="/">Shop</NavLink></li>
                            <li><NavLink exact to="/cart">My Cart</NavLink></li>
                            <li><NavLink exact to="/cart"><i class="fa fa-shopping-cart"></i></NavLink></li>
                        </ul>
                    </div>
                </nav>
            </HashRouter>
        )
    }
}

export default Navbar;