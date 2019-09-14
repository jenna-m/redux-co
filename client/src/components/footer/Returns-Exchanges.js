import React from 'react';

class ReturnsExchanges extends React.Component {
    render() {
        return(
            <div>
                <h1>Returns & Exchanges</h1>
                <div class="returns-exchanges">
                <h2>Not totally satisfied with your order? We're sorry!</h2>
                <h3>Enter your order number below, and we'll sort it out.</h3>
                    <div className="form-content">
                        <form>
                            <input type="text" />
                            <button href="/">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default ReturnsExchanges;