import React from 'react';
import { 
    HashRouter,
    Link,
    NavLink,
    Route
} from 'react-router-dom';

class Navbar extends React.Component {
    render() {
        return(
            <HashRouter>
                <nav className="nav-wrapper">
                    <div className="container">
                        <Link to="/" className="brand-logo">Shopping</Link>

                        <ul className="menu">
                            <li><NavLink to="/">Shop</NavLink></li>
                            <li><NavLink to="/cart">My Cart</NavLink></li>
                            <li><NavLink to="/cart"><i className="material-icons">shopping_cart</i></NavLink></li>
                        </ul>
                    </div>
                </nav>
            </HashRouter>
        )
    }
}

export default Navbar;