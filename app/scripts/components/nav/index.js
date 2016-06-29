import React from 'react';
import NavStyle from './nav.scss';

class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Nav';
    }
    render() {
        return <div className="nav">Nav</div>;
    }
}

export default Nav;
