import React, {Component} from 'react';
import {Text, View,Image} from 'react-native';
import {StackNavigator, TabNavigator} from 'react-navigation';


import Contact from './tabs/Contact';
import Home from './tabs/Home';
import Location from './tabs/Location';


const TabConfig={
  Home:{
    screen: Home,
    navigationOptions:{
      tabBarLevel: 'Home',
      tabBarColor: ({tintColor})=>(
        <Image source={require ('./images/logo.png')}
               style = {[styles.icon, {tintColor: tintColor}]}/>
      )
    }
  },
  Contact:{
    screen: Contact,
    navigationOptions:{
      tabBarLevel: 'Contact',
      tabBarColor: ({tintColor}) => (
        <Image source={require ('./images/logo.png')}
               style = {[styles.icon, {tintColor: tintColor}]} />
      )
    }
  },
  Location: {
    screen: Location,
    navigationOptions: {
      tabBarLevel: 'Location',
      tabBarColor: ({tintColor}) => (
        <Image source= {require ('./images/logo.png')}
               style = {[styles.icon, {tintColor: tintColor}]} />
      )
    }
  },
}

const TabStyleConfig= {
  tabBarOptions:{
    activeTintColor: '#fe000',
  }
}

const style = StyleSheet.create({
  icon:{
    width: 28, height: 28,
  }
})

export default App = TabNavigator(TabConfig, TabStyleConfig);
