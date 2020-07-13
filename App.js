/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

import Button from './src/components/Button'


class App extends Component  {

  render() {
    return (
      <View>
        <Button label="AC" />
        <Button label="1" />
      </View>
    );
  }

}

// const styles = StyleSheet.create({
//   scrollView: {
//     backgroundColor: Colors.lighter,
//   },
// });

export default App;
