import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';
import {
    Container,
} from 'native-base';
import AppHeader from '../component/AppHeader';


export default class Profile extends Component {
    render() {
        const { goBack } = this.props.navigation;
        return (
            <Container>
                <AppHeader title='Profile' goBack={goBack} />
                <View style={styles.container}>
                    <Text style={styles.text}>
                        Profile
                    </Text>
                </View>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    text: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
});