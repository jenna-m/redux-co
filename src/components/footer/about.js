import React from 'react';

class About extends React.Component {
    render() {
        return (
            <div className="about">
                <h1>About</h1>
                <p>
                    Redux Co. is a fictitious store, made up by me (<a href="https://github.com/jenna-m" target="new">jenna-m</a>) after following a tutorial for creating a shopping cart app using React-Redux. I wanted to get more out of the tutorial, so I expanded upon it with the help of Google, StackOverflow, and GitHub. I've added more items and item details pages, implemented categories, provided different shipping options, etc.
                </p>
                <p>
                    All shop content (i.e. images & item names) was taken from <a href="https://madewell.com" target="new">Madewell</a>. Without their items, I would have had a pretty tough time curating a store.
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