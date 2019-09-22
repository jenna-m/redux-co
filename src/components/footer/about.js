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
                    It was my first time building an app with Redux, and I wanted to get more out of the tutorial than I originally had. I expanded upon it with the help of Google, StackOverflow, and GitHub. I've added item detail pages, revamped the cart display, implemented categories, took user experience and responsive design into consideration, added <a href="/404">404 routing</a>, among implementing other features to put my own spin on this online storefront.
                </p>
                <p>
                    Keep in mind that this isn't a fully functioning online storefront (yet): there's a bug in the shopping cart/bag, there are no sizing options, the contact form isn't fully functional, and there is no backend or complete checkout process. I'm sure there are other problems that I haven't unearthed. Despite this, I'm extremely satisfied with the results and what I've learned so far. I plan to revisit this project in the future to add a backend and make it fully functional.
                </p>
                <p>
                    All shop content (images & item names) was taken from <a href="https://madewell.com" target="new">Madewell</a>. Without their items, I would have had a pretty tough time curating a store.
                </p>
                <p>
                    So, what went into this project?
                    <ul>
                        <li><a href="https://reactjs.org/" target="new">React</a></li>
                        <li><a href="https://redux.js.org/" target="new">Redux</a></li>
                        <li><a href="https://github.com/rt2zz/redux-persist" target="new">redux-persist</a></li>
                        <li><a href="https://github.com/ReactTraining/react-router" target="new">react-router</a></li>
                        <li><a href="https://github.com/adamrisberg/react-image-magnifiers" target="new">react-image-magnifiers</a></li>
                        <li><a href="https://lodash.com/" target="new">Lodash</a></li>
                        <li><a href="https://github.com/jaredpalmer/formik" target="new">Formik</a></li>
                        <li><a href="https://github.com/jquense/yup" target="new">Yup</a></li>
                        <li><a href="https://fontawesome.com/" target="new">Font Awesome</a></li>
                        <li>And a whole lot of CSS</li>
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