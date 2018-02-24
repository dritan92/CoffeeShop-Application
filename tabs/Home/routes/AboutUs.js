import React, {Component} from 'react';
import {
  Text, View,StyleSheet,Image,ScrollView
} from 'react-native';


export default class AboutUs extends Component{
  render(){
    return(
    <ScrollView styles = {styles.scrollContainer}>
      <View style = {styles.container}>
        <Image style = {styles.image} source={require('../../../images/background.jpeg')}/>
        <Text style = {styles.headline}>Our Story</Text>
        <Text style = {styles.aboutus}>Founded in 2016 and based in Shepparton, Australia.
        Our coffeeshop invites people taste the best pizza in the world made by the best pizza chef,put the name here.
        We have a pizza day served only on Friday.
        Leandra(put the name of the coffeeshop)coffeeshop is the type of coffeeshop where nationalities come together as one.
        Out clientele includes Albanians, Turks, Germans, Australians and many more.
        Whether a place to rest or some delicious food to taste our coffeeshop guaratees the best service and atmosphere.
        </Text>
      </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  scrollContainer:{
    flex: 1,
    marginTop:  100,

  },
 aboutus:{
   marginTop: 30,
   fontSize: 15,
   fontFamily: 'Apple Color Emoji',
 },
 image:{
   flex: 1,
   position: 'absolute',
   width: '100%',
   height: '100%',
 },
 headline:{
   marginTop: 100,
   fontSize: 30,
   fontWeight: 'bold',
   fontFamily: 'Helvetica',
   color: '#800000',
   textAlign: 'center',
 }

})
