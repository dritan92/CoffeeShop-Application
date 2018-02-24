
import React, {Component} from 'react';
import {Text, View, StyleSheet, ScrollView, Image} from 'react-native';

import MenuItemDrinks from '../../../components/MenuItemDrinks';
import {drinks} from './data'


export default class Drinks extends Component{
  render(){
    return(
      <ScrollView styles = {styles.scrollContainer}>
        {drinks.map((drink, index) =>
          <MenuItemDrinks
            drink = {drink}
            onOpen = {this.openDrink}
            key={index}
          />
        )}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  containerBackground:{
    flex: 1,
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  scrollContainer:{
    flex: 1,
    marginTop:  100,

  },
  container: {
    flex: 1,
  }

})
