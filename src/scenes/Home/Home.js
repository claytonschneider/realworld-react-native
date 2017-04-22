import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions';
import { Feed } from '../../components';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

class Home extends Component {
  render() {
    console.log('@@@@@@@ this.props', this.props);
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          HOME
        </Text>
        <Feed articles={{}} />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  articles: state.articles
});

const mapDispatchToProps = dispatch => ({
  articleActions: bindActionCreators({ ...actions.articleActions }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
