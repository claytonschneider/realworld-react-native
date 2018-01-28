import React, { Component } from 'react';
import { Text, StyleSheet, ScrollView } from 'react-native';
import { Button, Icon } from 'native-base';

export default class Menu extends Component {

    handleNavigate =(navigateTo) => {
        const { navigate } = this.props;
        navigate(navigateTo);
    };

    render() {

        return (
            <ScrollView style={styles.menu}>
                <Button
                    transparent
                    style={styles.item}
                    onPress={() => this.handleNavigate('Profile')}
                >
                    <Icon name="person" style={styles.icon} />
                    <Text style={styles.text}>Profile</Text>
                </Button>
                <Button
                    transparent
                    style={styles.item}
                    onPress={() => this.handleNavigate('Setting')}
                >
                    <Icon name="md-build" style={styles.icon} />
                    <Text style={styles.text}>Setting</Text>
                </Button>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    menu: {
        flex: 1,
        backgroundColor: '#3e8e3e',
        paddingVertical: 50,
    },
    item: {
        width: '100%',
        borderRadius: 0,
        justifyContent: 'flex-start',
    },
    text: {
        color: '#fff',
    },
    icon: {
        color: 'rgba(255, 255, 255, 0.5)',
        flex: 0,
        width: 20,
        marginRight: 10,
    },
});