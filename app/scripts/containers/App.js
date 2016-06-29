import React from 'react';
import Nav from '../components/nav/index.js';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'App';
    }
    render() {
        return (
          <Nav />
          <div>App</div>
        )
    }
}

export default App;
