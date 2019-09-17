import React from 'react';
import { NavLink, Link } from 'react-router-dom';

class Navbar extends React.Component {
    constructor() {
        super();

        this.state = {
            showClothing: false,
            showShoes: false,
            showAccessories: false
        }

        this.showClothing = this.showClothing.bind(this);
        this.hideClothing = this.hideClothing.bind(this);
        this.showShoes = this.showShoes.bind(this);
        this.hideShoes = this.hideShoes.bind(this);
        this.showAccessories = this.showAccessories.bind(this);
        this.hideAccessories = this.hideAccessories.bind(this);
    }

    showClothing(e) {
        e.preventDefault();

        this.setState({
            showClothing: true
        });
    }

    hideClothing(e) {
        e.preventDefault();

        this.setState({
            showClothing: false
        });
    }

    showShoes(e) {
        e.preventDefault();

        this.setState({
            showShoes: true
        });
    }

    hideShoes(e) {
        e.preventDefault();

        this.setState({
            showShoes: false
        });
    }

    showAccessories(e) {
        e.preventDefault();

        this.setState({
            showAccessories: true
        });
    }

    hideAccessories(e) {
        e.preventDefault();

        this.setState({
            showAccessories: false
        });
    }

    render() {
        return(
            <div>
                <nav className="navbar" role="navigation">
                    <div className="nav-container">
                        <NavLink exact to="/" className="brand-logo">redux Co.</NavLink>
                        <ul className="menu">
                            <li><Link exact to="/">New Arrivals</Link></li>
                            <li><Link to="/clothing" onMouseOver={this.showClothing} onClick={this.hideClothing}>Clothing</Link></li>
                            {
                                this.state.showClothing ? (
                                    <ul className="submenu">
                                        <li><Link to="/tops">Tops</Link></li>
                                        <li><Link to="/sweaters">Sweaters</Link></li>
                                        <li><Link to="/jackets">Jackets</Link></li>
                                        <li><Link to="/denim">Denim</Link></li>
                                        <li><Link to="/dresses">Dresses</Link></li>

                                    </ul>
                                ) : ( null )
                            }
                            <li><Link to="/shoes" onMouseOver={this.showShoes} onClick={this.hideShoes}>Shoes</Link></li>
                            {
                                this.state.showShoes ? (
                                    <ul className="submenu">
                                        <li><Link to="/boots">Boots</Link></li>
                                        <li><Link to="/sandals">Sandals</Link></li>
                                    </ul>
                                ) : ( null )
                            }
                            <li><Link to="/accessories" onMouseOver={this.showAccessories} onClick={this.hideAccessories}>Accessories</Link></li>
                            {
                                this.state.showAccessories ? (
                                    <ul className="submenu">
                                        <li><Link to="/purses">Purses</Link></li>
                                        <li><Link to="/jewelry">Jewelry</Link></li>
                                        <li><Link to="/glasses">(Sun)glasses</Link></li>
                                    </ul>
                                ) : ( null )
                            }
                            <li class="bag-ico"><NavLink to="/cart"><i class="fa fa-shopping-bag"></i></NavLink></li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar;