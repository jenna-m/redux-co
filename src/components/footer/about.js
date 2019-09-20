import React from 'react';

class About extends React.Component {
    render() {
        return (
            <div className="about">
                <h1>About</h1>
                <p>
                    Redux Co. is a fictitious store, made up by me (<a href="https://github.com/jenna-m" target="new">jenna-m</a>). This came about after following a <a href="https://medium.com/@ayabellazreg/make-a-simple-shopping-cart-app-using-react-redux-1-3-fefde93e80c7" target="new">three-part tutorial</a> for creating a shopping cart app using React and Redux.
                </p>
                <p>
                    It was my first time building an app with Redux, and I wanted to get more out of the tutorial. I expanded upon it with the help of Google, StackOverflow, and GitHub. I've added more items and item details pages, revamped the cart display, implemented categories, took user experience into consideration, and basically made it my own.
                </p>
                <p>
                    Although this isn't a fully functioning online storefront (i.e., there are no sizing options, and there is no backend or complete checkout process), I'm extremely satisfied with the results and what I've learned so far. I may revisit this project in the future to add a backend and make it fully functional.
                </p>
                <p>
                    All shop content (images & item names) was taken from <a href="https://madewell.com" target="new">Madewell</a>. Without their items, I would have had a pretty tough time curating a store.
                </p>
                <p>
                    So, what went into this project?
                    <ul>
                        <li>React</li>
                        <li>Redux</li>
                        <li>redux-persist</li>
                        <li>react-router</li>
                        <li>react-image-magnifiers</li>
                        <li>Lodash</li>
                        <li>Formik</li>
                        <li>Yup</li>
                        <li>Nodemailer</li>
                        <li>A whole lot of CSS (& flexbox)</li>
                    </ul>
                </p>
                <p>
                    Thanks for stopping by.
                </p>
            </div>
        );
    }
}

export default About;