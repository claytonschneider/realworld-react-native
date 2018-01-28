import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    StatusBar
} from 'react-native';
import { Header, Left, Body, Button, Icon, Title } from 'native-base';
import { observer } from 'mobx-react/native';
import { observable } from 'mobx';
import SideMenu from 'react-native-side-menu';
import Menu from '../component/Menu';

@observer
export default class Home extends Component {
    @observable isMenuOpen = false;

    toggleMenu = () => {
        this.isMenuOpen = !this.isMenuOpen;
    };

    setMenuStatus = isMenuOpen => {
        this.isMenuOpen = isMenuOpen;
    };
    render() {
        const { navigate } = this.props.navigation;

        return (
            <SideMenu
                menu={<Menu navigate={navigate} />}
                isOpen={this.isMenuOpen}
                onChange={this.setMenuStatus}
            >
                <Header style={styles.header}>
                    <StatusBar
                        translucent
                        backgroundColor="rgba(0, 0, 0, 0.2)"
                        barStyle="light-content"
                    />
                    <Left>
                        <Button transparent onPress={() => this.toggleMenu()}>
                            <Icon name="menu" style={styles.menuIcon}/>
                        </Button>
                    </Left>
                    <Body style={styles.body}>
                        <Title style={styles.title}>Home</Title>
                    </Body>
                </Header>
                <View style={styles.container}>
                    <Text style={styles.text}>
                        Home
                    </Text>
                </View>
            </SideMenu>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    text: {
        textAlign: 'center',
        color: '#5CB85C',
        marginBottom: 10,
    },
    title: {
        color: 'white',
        alignSelf: 'stretch',
        textAlign: 'left',
    },
    header: {
        backgroundColor: '#5CB85C',
        elevation: 0,
        height: 100,
        paddingTop: 20,
    },
    left: {
        flex: 0,
        marginRight: 10,
    },
    body: {
        flex: 1,
    },
    menuIcon: {
        color: 'white',
    },
});