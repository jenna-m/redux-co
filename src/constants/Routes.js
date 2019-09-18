import React from 'react';
import { Route } from 'react-router-dom';
import Home from '../components/home/home';
import NewArrivals from '../components/shopping/newArrivals';
import Item from '../components/shopping/item';

import Clothing from '../components/shopping/clothing/clothing';
import Tops from '../components/shopping/clothing/tops';
import Sweaters from '../components/shopping/clothing/sweaters';
import Jackets from '../components/shopping/clothing/jackets';
import Denim from '../components/shopping/clothing/denim';
import Skirts from '../components/shopping/clothing/skirts';
import Dresses from '../components/shopping/clothing/dresses';

import Shoes from '../components/shopping/shoes/shoes';
import Boots from '../components/shopping/shoes/boots';
import Heels from '../components/shopping/shoes/heels';
import Sandals from '../components/shopping/shoes/sandals';

import Accessories from '../components/shopping/accessories/accessories';
import Purses from '../components/shopping/accessories/purses';
import Jewelry from '../components/shopping/accessories/jewelry';
import Eyewear from '../components/shopping/accessories/eyewear';

import Cart from '../components/cart/Cart';
import Contact from '../components/footer/contact/contact';

export const Routes = 
            <div>
                <Route exact path="/" component={ Home } />
                <Route path="/new-arrivals" component={ NewArrivals } />

                <Route path="/clothing" component={ Clothing } />
                <Route path="/tops" component={ Tops } />
                <Route path="/sweaters" component={ Sweaters } />
                <Route path="/jackets" component={ Jackets } />
                <Route path="/denim" component={ Denim } />
                <Route path="/skirts" component={ Skirts } />
                <Route path="/dresses" component={ Dresses } />

                <Route path="/shoes" component={ Shoes } />
                <Route path="/boots" component={ Boots } />
                <Route path="/heels" component={ Heels } />
                <Route path="/sandals" component={ Sandals } />

                <Route path="/accessories" component={ Accessories } />
                <Route path="/purses" component={ Purses } />
                <Route path="/jewelry" component={ Jewelry } />
                <Route path="/eyewear" component={ Eyewear } />

                <Route path="/products" component={ Item } />
                <Route path="/cart" component={ Cart } />
                <Route path="/contact" component={ Contact } />
            </div>