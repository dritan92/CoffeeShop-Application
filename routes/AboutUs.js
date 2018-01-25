'use strict'

import React, {Component} from 'react';
import {
  Text, View,StyleSheet,Image,
} from 'react-native';


export default class AboutUs extends Component{
  render(){
    return(
      <View style = {styles.container}>
        <Image style = {styles.image} source={require('../images/logo.png')}/>
        <Text>---- Our Story -----</Text>
        <Text style = {styles.aboutus}>Founded in 2016 and based in Shepparton, Australia.
        Our coffeeshop invites people taste the best pizza in the world made by the best pizza chef,put the name here.We have a pizza day served only on Friday.LeLiNo(put the name of the coffeeshop) is the type of coffeeshop where nationalities come together as one.Out clientele includes Albanians, Turks, Germans, Australians and many more. Whether a place to rest or some delicious food to taste our coffeeshop guaratees the best service and atmosphere.
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
 aboutus:{
   marginTop: 90,
   fontSize: 15,
 },
 image:{
   width: 100,
   height: 100,
   position: 'absolute',

 },

})
