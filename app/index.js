
import React, {Component} from 'react';
import {Text, View,Image, StyleSheet} from 'react-native';
import {StackNavigator, TabNavigator} from 'react-navigation';

import Contact from '../tabs/Contact';
import Home from '../tabs/Home';
import Location from '../tabs/Location';


const TabConfig={
  Home:{
    screen: Home,
    navigationOptions:{
      tabBarLevel: 'Home',
      tabBarIcon: ({tintColor})=>(
        <Image source={require ('./assets/images/home.png')}
               style = {[styles.icon, {tintColor: tintColor}]}/>
      )
    }
  },
  Location: {
    screen: Location,
    navigationOptions: {
      tabBarLabel: 'Location',
      tabBarIcon: ({ tintColor }) => (
        <Image
          source={require ('./assets/images/homeicon.png')}
          style = {[styles.icon, {tintColor: tintColor}]} />
      )
    }
  },
  Contact:{
    screen: Contact,
    navigationOptions:{
      tabBarLevel: 'Contact',
      tabBarIcon: ({tintColor}) => (
        <Image source={require ('./assets/images/contact.png')}
               style = {[styles.icon, {tintColor: tintColor}]} />
      )
    }
  },
}

const TabStyleConfig = {
  tabBarOptions: {
    activeTintColor: '#6f4e37',
  },
}

export default App = TabNavigator(TabConfig, TabStyleConfig);

const styles = StyleSheet.create({
  icon:{
    width: 28,
    height: 28,
  }
})
