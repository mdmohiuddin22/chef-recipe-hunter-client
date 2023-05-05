/* eslint-disable no-unused-vars */
import React from 'react';

const Blog = () => {
    return (
        <div>
            <h1>1. Differences between uncontrolled and controlled components:
Uncontrolled and controlled components are two different ways to manage the state of form elements or user inputs in React.
Uncontrolled components: In an uncontrolled component, the form element's value is managed by the DOM, and not by React. To get the value of an uncontrolled component, you have to read the value from the DOM using a ref. The main advantage of uncontrolled components is that they are simpler to implement, especially for simple forms.

Controlled components: In a controlled component, the value of the form element is managed by React, by setting a state variable. When the user changes the value of the form element, React re-renders the component, and updates the state variable accordingly. Controlled components are more powerful and flexible than uncontrolled components, and allow for more complex forms.</h1>
<br />
<h1>2. Validating React props using PropTypes:
PropTypes is a library in React that allows you to specify the data type and shape of the props passed to a component. Here's how to use PropTypes to validate props:
First, import PropTypes from the prop-types library:</h1>
<br />
<h1>3. Difference between Node.js and Express.js:
Node.js is a server-side runtime environment that allows you to build server-side applications using JavaScript. It provides a runtime environment for JavaScript outside of the browser, allowing you to use it for server-side scripting. Express.js, on the other hand, is a web framework built on top of Node.js that simplifies the process of building web applications.
Node.js provides the core functionality for building server-side applications, while Express.js provides a layer of abstraction on top of Node.js to make it easier to handle HTTP requests and responses. Express.js provides a wide range of features, including routing, middleware, template engines, and more.</h1>
<br />
<h1>4. What is a custom hook, and why will you create a custom hook?
A custom hook is a JavaScript function that uses one or more built-in hooks in React, and returns a new custom hook that can be used in other components. Custom hooks allow you to reuse code logic across multiple components, and make your code more modular and reusable.</h1>
        </div>
    );
};

export default Blog;