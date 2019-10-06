import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { random } from 'lodash';
import { numberOfItems } from '../../constants/shopContent'; // Total # of items in shop
import Item from '../shopping/item';

const mapStateToProps = (state) => {
    return {
        items: state.items
    };
}

class NotFound extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            items: this.props.items
        }
    }

    render() {
        // Generate random messaging
        const phrases = [
            'Did you mean',
            'Maybe you meant',
            'Perhaps you\'re looking for',
            'Were you looking for'
        ]
        const randomNum = random(3);
        const randomPhrase = phrases[randomNum];

        // Find random item (based on ID)
        const randomItemID = random(numberOfItems);
        const randomItem = this.props.items.map(item => {
            if (item.id === randomItemID) {
                return (
                    <div className="_404-item-container">
                        <div className="_404-item-message">
                            <h2>Whoops! We couldn't find that...</h2>
                            <h3>{randomPhrase} "{item.subcat}"?</h3>
                        </div>
                        <div className="_404-item-content">
                        <div className="_404-see-more">
                                <ul>
                                    <li><Link to={`/${item.subcat}`}>Browse {item.subcat}</Link></li>
                                    <li><Link to={`/${item.category}`}>Browse all {item.category}</Link></li>
                                    <li><Link to="/all-items">Browse everything else</Link></li>
                                </ul>
                            </div>
                            <div className="_404-item-card" key={item.id}>
                                <div className="_404-item-image">
                                    <Link to = {{
                                            pathname: `/products/${item.category}/${item.subcat}`,
                                            search: `?id=${item.id}`,
                                        }}
                                        component={ Item }>
                                            <img src={item.img} alt={item.title} />
                                            <span className="_404-item-title">{item.title}</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
            return <React.Fragment />;
        })

        return (
            <div className="_404-container">
                <h1>404</h1>
                {randomItem}
            </div> 
        );
    }
}

export default connect(mapStateToProps)(withRouter(NotFound));