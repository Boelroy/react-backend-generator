'use strict';

import * as types from '../constants/ActionTypes';

export default function sidebar(state = {opened: false}, action) {
  switch(action.type) {
    case types.SIDEBAR_TOGGLE:
      return Object.assign({}, state, {
        opened: !state.opened
      });
    default:
      return state;
  }
}
