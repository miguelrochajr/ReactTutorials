import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyCc3kKoPJ1uIOLm1WsOmSwvz6Uxy4aRlis';

// Create a new component. This should produce some HTML
const App = () => {
    return (
      <div>
        <SearchBar />
      </div>
    );
};

// Take it and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
