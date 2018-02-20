'use strict'
import React, {Component} from 'react';
import {Text, View, StyleSheet, ScrollView, Image} from 'react-native';

import MenuItem from '../components/MenuItem';

export default class MenuPage extends  Component{
  render(){
    return(
      <ScrollView styles = {styles.scrollContainer}>
        <View style = {styles.container}>
          <Image style = {styles.containerBackground} source={require('../images/wood.jpg')}/>
          <MenuItem
            title = 'Pepperoni'
            price = '$10'
            description = 'Pepperoni and mozzarella'
            source={require('../images/pepperoni.png')}>
          </MenuItem>

          <MenuItem
            title = 'Margherita Pizza'
            price = '$10'
            description = 'Cherry tomatoes, fresh tomato, basil drizzle & mozzarella'
            source={require('../images/margarita.jpeg')}>
          </MenuItem>

          <MenuItem
            title = 'Seafood Pizza'
            price = '$10'
            description = 'Fish (including salmon, tuna, anchovy), shellfish, clams, scallops, mussels, shrimp, squid,lobster and scungilli'
            source={require('../images/seafood.jpeg')}>
          </MenuItem>

          <MenuItem
            title = 'Vegeterian Pizza'
            price = '$10'
            description = 'Oasted red peppers, fresh baby spinach, fresh onions, fresh mushrooms, tomatoes, black olives, cheeses made with 100% real mozzarella, feta and provolone, sprinkled with garlic herb seasoning,'
            source={require('../images/vegi.jpeg')}>
          </MenuItem>

          <MenuItem
            title = 'Neapolitan Pizza'
            price = '$10'
            description = 'Dry Fish, tomato sauce, cheese'
            source={require('../images/napolitana.jpg')}>
          </MenuItem>
        </View>
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
