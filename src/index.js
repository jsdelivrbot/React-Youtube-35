import React from 'react';
import ReactDom from 'react-dom';

import SearchBar from './components/search-bar';

const API_KEY = 'AIzaSyAJXKUFUcxUdkLQfOri_B1tdVSW3QN_jEA';

// Create a new component. This component should produce some HTML
const App = () => {
    return (
        <div>
            <SearchBar/>
        </div>
    );
};

// Take this component's generated HTML and put it on the page(in the DOM)
ReactDom.render(<App />, document.querySelector('.container'));
