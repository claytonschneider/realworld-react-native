import React, { Component } from 'react';
import { StyleSheet, StatusBar } from 'react-native';
import { Header, Left, Body, Button, Icon, Title, Subtitle } from 'native-base';

export default class AppHeader extends Component {
    render() {
        const { title, subtitle, goBack } = this.props;
        return (
            <Header style={styles.header} hasSubtitle={!!subtitle}>
                <StatusBar
                    translucent
                    backgroundColor="rgba(0, 0, 0, 0.2)"
                    barStyle="light-content"
                />
                <Left style={styles.left}>
                    <Button transparent onPress={() => goBack()}>
                        <Icon name="arrow-back" style={styles.iconBack} />
                    </Button>
                </Left>
                <Body style={styles.body}>
                {title && <Title style={styles.title}>{title}</Title>}
                {subtitle && (
                    <Subtitle style={styles.subtitle}>{subtitle}</Subtitle>
                )}
                </Body>
            </Header>
        );
    }
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#5CB85C',
        height: 100,
        paddingTop: 20,
        elevation: 0,
        borderBottomWidth: 0,
    },
    left: {
        flex: 0,
        marginRight: 10,
    },
    body: {
        flex: 1,
    },
    iconBack: {
        color: 'white',
    },
    title: {
        color: 'white',
        alignSelf: 'stretch',
        textAlign: 'center',
    },
    subtitle: {
        color: 'white',
        alignSelf: 'stretch',
        textAlign: 'center',
    },
});