import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux';

import { initNavigator } from '../actions/navigator';

import Nav from '../components/nav';
import SideBar from '../components/sidebar';

import ModuleContainer from '../containers/ModuleContainer'

const propTypes = {
  dispatch: PropTypes.func.isRequired,
  path: PropTypes.array
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.displayName = 'App';
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
        return null;
    }
  }

  render() {
    return (<div>
      <Nav />
      <SideBar sidebars={[{title: 'item1'}]}/>
      <div>App</div>
    </div>)
  }
}

function mapStateToProps(state) {
  console.log(state);
  const {navigator} = state;
  const {path} = navigator.route;

  return {
    path
  }
}
export default connect(mapStateToProps)(App);
