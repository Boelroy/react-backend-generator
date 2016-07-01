import React from 'react';
import './sidebar.scss';

class SideBar extends React.Component {

    getSidebarList(){
      return this.props.sidebars.map((item, index)=>
              <li key={index}>{item.title}</li>)
    }

    render() {
        return (<div className="g-sidebar">
          <ul className="g-sidebar-list">
            {this.getSidebarList()}
          </ul>
        </div>);
    }
}

export default SideBar;
