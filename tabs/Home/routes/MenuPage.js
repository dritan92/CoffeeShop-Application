
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
  chooseDay = (day) => {
    this.setState({
      chosenDay: day
    });
  }
  chooseTime = (time) => {
    this.setState({
      chosenTime : time
    });
  }
  bookPizza = () =>{
    if(!this.state.chosenTime){
      alert('Please select show time');
    }
    else{
      this.closePizza();
      this.props.navigator.push({
        name: 'confirmation',
        code: Math.randrom.toString(36).substring(6).toUpperCase(),
      })
    }
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
          pizza={this.state.pizza}
          isOpen={this.state.popupIsOpen}
          onClose={this.closePizza}
          chosenDay={this.state.chosenDay}
          chosenTime={this.state.chosenTime}
          onChooseDay={this.chooseDay}
          onChooseTime={this.chooseTime}
          onBook = {this.bookPizza}
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
