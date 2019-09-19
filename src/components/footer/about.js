import React from 'react';

class About extends React.Component {
    render() {
        return (
            <div className="about">
                <h1>About</h1>
                <p>
                    Redux Co. is a fictitious store, made up by me (<a href="https://github.com/jenna-m" target="new">jenna-m</a>). This came about after following a tutorial for creating a shopping cart app using React-Redux. I wanted to get more out of the tutorial, so I expanded upon it with the help of Google, StackOverflow, and GitHub. 
                </p>
                <p>
                    Expanding off the tutorial, I've added more items and item details pages, implemented categories, provided different shipping options, took user experience into consideration, and basically made it my own. Although this isn't a fully functioning online storefront (i.e., there is no backend, sizing options, or complete checkout process), I'm extremely satisfied with the results and what I've learned so far and may revisit this project in the future.
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