import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Login from './container/Login';
import Register from './container/Register';
import Home from './container/Home';
import Setting from './container/Setting';
import Profile from './container/Profile';
import StarterScreen from './container/StarterScreen';

const Navigator = new StackNavigator({
    StarterScreen: {
        screen: StarterScreen,
        navigationOptions: { header: null },
    },
    Home: {
        screen: Home,
        navigationOptions: { header: null },
    },
    Login: {
        screen: Login,
        navigationOptions: { header: null },
    },
    Register: {
        screen: Register,
        navigationOptions: { header: null },
    },
    Profile: {
        screen: Profile,
        navigationOptions: { header: null },
    },
    Setting: {
        screen: Setting,
        navigationOptions: { header: null },
    },
}, {
    initialRouteName: 'StarterScreen',
});

const WrappedStack = ({key} ) => {
    return <Navigator key={key} onNavigationStateChange={null}/>;
};

export default class App extends Component {
    render() {
        return (
            <WrappedStack/>
        );
    }
}

AppRegistry.registerComponent('realworld', () => App);
