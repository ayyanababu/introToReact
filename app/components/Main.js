/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';
import { actionChangeText } from '../actions';


class Main extends Component {

  changeText(){
    console.log(this.props);
    console.log(this.props.dispatch);

    thi.props.dispatch(actionChangeText("change new text"));
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>{this.props.text}</Text>
        <TouchableOpacity onPress={this.changeText}>
          <Text>Change Text</Text>
        </TouchableOpacity>
      </View>
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
  welcome: {
    fontSize: 50,
    textAlign: 'center',
    margin: 10,
  },
});

var mapStateToProps = (state) => {
  return{
    text: state.text,

  };
}




export default connect(() => (mapStateToProps))(Main)
