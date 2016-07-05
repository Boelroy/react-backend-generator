import React, { Component, PropTypes } from 'react';
import './sidebar.scss';

const propsType = {
  show: PropTypes.bool.isRequired,
  item: PropTypes.array.isRequired,
  // onMenuClick: PropTypes.func
}

class SideBar extends Component {
  constructor(props) {
    super(props);
    this.siderbarBodyHandler = this.siderbarBodyHandler.bind(this);
  }

  getSidebarList(){
    return this.props.sidebars.map((item, index)=>
            <li key={index}>{item.title}</li>)
  }

  siderbarBodyHandler(e) {
    const { sidebar } = this.refs;
    if (sidebar.contains(e.target)) return;
    this.props.onMenuClick(e);
  }

  handleBodyClick() {
    const { show } = this.props;
    if (show){
      document.addEventListener('click', this.siderbarBodyHandler);
    } else {
      document.removeEventListener('click', this.siderbarBodyHandler);
    }
  }

  render() {
    this.handleBodyClick();
    const { show } = this.props;
    return (<div ref="sidebar" className={(show ? 'toggle ':'') + "g-sidebar"}>
      <ul className="g-sidebar-list">
        {this.getSidebarList()}
      </ul>
    </div>);
  }
}

export default SideBar;
