'use strict';

import * as types from '../constants/ActionTypes';

export function toggleSidebar() {
  return {
    type: types.SIDEBAR_TOGGLE
  };
}

export function showSidebarMenu(menuId=0) {
  return {
    type: types.SIDEBAR_MENU_TOGGLE,
    menuId
  };
}

