import React from 'react';
import { 
    HashRouter,
    Link,
    NavLink,
} from 'react-router-dom';

class Navbar extends React.Component {
    render() {
        return(
            <HashRouter>
                <nav className="navbar">
                    <div className="nav-container">
                        <Link to="/" className="brand-logo">Shopping App</Link>

                        <ul className="menu">
                            <li><NavLink to="/">Shop</NavLink></li>
                            <li><NavLink to="/cart">My Cart</NavLink></li>
                            <li><NavLink to="/cart"><i class="fa fa-shopping-cart"></i></NavLink></li>
                        </ul>
                    </div>
                </nav>
            </HashRouter>
        )
    }
}

export default Navbar;