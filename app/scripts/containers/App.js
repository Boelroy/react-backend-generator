import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux';

import { initNavigator } from '../actions/navigator';

import Nav from '../components/nav';
import SideBar from '../components/sidebar';

import ModuleContainer from '../containers/ModuleContainer'

import {sidebar} from '../actions/sidebar'

const propTypes = {
  dispatch: PropTypes.func.isRequired,
  path: PropTypes.array,
  show: PropTypes.bool
};

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    const { dispatch } = this.props;
    dispatch(initNavigator());
  }

  renderContent() {
    const {path} = this.props;

    switch(path[0]) {
      case 'modules':
        return <ModuleContainer />
      default:
        return <div>App</div>;
    }
  }

  render() {
    const { dispatch, show } = this.props;
    return (<div>
      <Nav onMenuClick={ e => dispatch(sidebar()) }/>

      <SideBar ref="sidebar"
        onMenuClick={ e => dispatch(sidebar()) }
        sidebars={[{title: 'item1'}]}
        show={show}
      />
      <div className="g-content">
      { this.renderContent() }
      </div>
    </div>)
  }
}

function mapStateToProps(state) {
  console.log(state);
  const {navigator, sidebar} = state;
  const {path} = navigator.route;
  return {
    path,
    show: sidebar.opened
  }
}
export default connect(mapStateToProps)(App);
