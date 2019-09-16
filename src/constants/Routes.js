import React from 'react';
import { Route } from 'react-router-dom';
import Home from '../components/Home';
import Item from '../components/shopping/Item';
import Clothing from '../components/shopping/clothing';
import Shoes from '../components/shopping/shoes';
import Accessories from '../components/shopping/accessories';
import Cart from '../components/cart/Cart';
import Contact from '../components/footer/contact/contact';

export const Routes = <div>
            <Route exact path="/" component={ Home } />
            <Route path="/products" component={ Item } />
            <Route path="/clothing" component={ Clothing } />
            <Route path="/shoes" component={ Shoes } />
            <Route path="/accessories" component={ Accessories } />
            <Route path="/cart" component={ Cart } />
            <Route path="/contact" component={ Contact } />
            </div>