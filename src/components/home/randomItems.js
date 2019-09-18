import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import Item from '../shopping/item';

const mapStateToProps = (state) => {
    return {
        items: state.items
    };
}

class RandomItems extends React.Component {
    render() {
        let categories = ['tops', 'sweaters', 'jackets', 'denim', 'dresses', 'skirts', 'boots', 'sandals', 'heels', 'purses', 'jewelry', 'eyewear'];
        let randomNumber = Math.floor(Math.random() * 12);
        let randomCategory = categories[randomNumber];
        let itemList = this.props.items.map(item => {
            if (item.subcat === randomCategory) {
                return (
                    <div className="new-arrivals-item-card" key={item.id}>
                        <div className="new-arrivals-item-image">
                            <Link
                                to = {{
                                    pathname: `/products/${item.category}/${item.subcat}`,
                                    search: `?id=${item.id}`,
                                }}
                                component={ Item }>
                                    <img src={item.img} alt={item.title} />
                            </Link>
                        </div>
                    </div>
                )
            }
        })

        return (
            <div className="new-arrivals-container">
                <h1>How about {randomCategory}?</h1>
                <div className="new-arrivals-items">
                    {itemList}
                </div>
                <div className="see-more">
                    <Link to={`/${randomCategory}`}>See more {randomCategory}</Link>
                </div>
            </div> 
        );
    }
}

export default connect(mapStateToProps)(withRouter(RandomItems));