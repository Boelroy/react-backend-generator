import React from 'react';
import NavStyle from './nav.scss';

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.displayName = 'Nav';
  }

  render() {
    return (<div className="nav" onClick={e=>this.props.onMenuClick(e)}>
      <i className="material-icons">menu</i>
    </div>);
  }
}

export default Nav;
