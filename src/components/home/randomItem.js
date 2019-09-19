import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { random } from 'lodash';
import { numberOfItems } from '../../constants/ShopContent'; // Total # of items in shop
import Item from '../shopping/item';

const mapStateToProps = (state) => {
    return {
        items: state.items
    };
}

class RandomItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            items: this.props.items
        }
    }

    render() {
        // Generate random messaging
        const phrases = [
            'Looking for',
            'In search of',
            'How about',
            'Need some',
        ]
        const randomNum = random(3);
        const randomPhrase = phrases[randomNum];

        // Find random item (based on ID)
        const randomItemID = random(numberOfItems);
        const randomItem = this.props.items.map(item => {
            if (item.id === randomItemID) {
                return (
                    <div className="random-item-container">
                        <div className="random-item-message">
                            <h1>{randomPhrase} {item.subcat}?</h1>
                            <div className="see-more">
                                <ul>
                                    <li><Link to={`/${item.subcat}`}>Browse all {item.subcat}</Link></li>
                                    <li><Link to={`/${item.category}`}>Browse all {item.category}</Link></li>
                                    <li><Link to="/all-items">Browse everything else</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="random-item-card" key={item.id}>
                            <div className="random-item-image">
                                <Link to = {{
                                        pathname: `/products/${item.category}/${item.subcat}`,
                                        search: `?id=${item.id}`,
                                    }}
                                    component={ Item }>
                                        <img src={item.img} alt={item.title} />
                                </Link>
                            </div>
                        </div>
                    </div>
                )
            }
        })

        return (
            <div>
                {randomItem}
            </div> 
        );
    }
}

export default connect(mapStateToProps)(withRouter(RandomItem));