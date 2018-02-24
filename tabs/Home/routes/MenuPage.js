
import React, {Component} from 'react';
import {Text, View, StyleSheet, ScrollView, Image} from 'react-native';

import MenuItemPizzas from '../../../components/MenuItemPizzas';
import MenuPop from './MenuPop'

import {pizzas} from './data'

export default class MenuPage extends  Component{
  state = {
    popupIsOpen: false,
    chosenDay: 0,
    chosenTime: null,
  }
  openPizza = (pizza) => {
    this.setState({
      popupIsOpen: true,
      pizza,
    });
  }
  closePizza = () => {
    this.setState({
      popupIsOpen: false,
      chosenDay: 0,
      chosenTime: null,
    });
  }
  choseDay = (day) => {
    this.setState({
      chosenDay: day
    });
  }
  choseTime = (time) => {
    this.setState({
      chosenTime : time
    });
  }
  render(){
    return(
      <View style = {styles.container}>
      <ScrollView
            contentContainerStyle={styles.scrollContent}
        // Hide all scroll indicators
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}>
           {pizzas.map((pizza, index) =>
            <MenuItemPizzas
              pizza = {pizza}
              onOpen = {this.openPizza}
              key={index}
            />
          )}
        </ScrollView>
        <MenuPop
          pizza = {this.state.pizza}
          isOpen = {this.state.popupIsOpen}
          onClose = {this.closePizza}
          chosenDay = {this.state.chosenDay}
          chosenTime = {this.state.chosenTime}
          onChosenDay = {this.choseDay}
          onChosenTime = {this.choseTime}
        />

     </View>
    );
  }
}

const styles = StyleSheet.create({
  containerBackground:{
    flex: 1,
    resizeMode: 'center',
  },
  scrollContent: {
      flexDirection: 'row',   // arrange posters in rows
      flexWrap: 'wrap',       // allow multiple rows
    },
  container: {
    paddingTop: 20,

  }
})
