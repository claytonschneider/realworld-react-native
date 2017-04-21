import React from 'react';
import { connect } from 'react-redux';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';
import { Home } from '../scenes';

export const AppNavigator = StackNavigator({
  Home: { screen: Home }
});

const AppWithNavigationState = ({ dispatch, nav }) => (
  <AppNavigator navigator={addNavigationHelpers({ dispatch, state: nav })} />
);

const mapStateToProps = state => ({
  nav: state.nav
});

export default connect(mapStateToProps)(AppWithNavigationState);
