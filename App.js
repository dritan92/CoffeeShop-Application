/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  NavigatorIOS,
  Dimensions
} from 'react-native';
import FirstPage from './FirstPage';
import resolveAssetSource from 'resolveAssetSource';


const HEADER_PATTERN = resolveAssetSource(require('./images/coffee-shop-logo.jpg'));
export default class App extends Component<{}> {
  render() {
    return (
      <NavigatorIOS
        style= {styles.container}
        initialRoute = {{
          component:  FirstPage,
          title: ' '
        }}
        tintColor="rgba(255, 255, 255, .4)"
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
