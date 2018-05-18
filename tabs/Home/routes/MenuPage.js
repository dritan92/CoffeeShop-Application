
import React, {Component} from 'react';
import {Text, View, StyleSheet, ScrollView, Image} from 'react-native';
//there is a bug in this class import Confirmation from './Confirmation'
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
      //<Confirmation/>
    }
  }
  render(){
    return(
      <View style = {styles.container}>
      <ScrollView
            contentContainerStyle={styles.scrollContent}
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
  container: {
    paddingTop: 20,
  },
  containerBackground:{
    flex: 1,
    resizeMode: 'center',
  },
  scrollContent: {
      flexDirection: 'row',   // arrange posters in rows
      flexWrap: 'wrap',       // allow multiple rows
    },

})
