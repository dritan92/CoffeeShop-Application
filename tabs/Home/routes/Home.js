import React from 'react';
import { View, Text, StyleSheet, ScrollView , Image, TouchableHighlight} from 'react-native';
import { ListItem } from 'react-native-elements';



import Header from '../Header';



export default class Home extends React.Component {
  static navigationOptions = {
    ...Header
  }

  render() {
    const { navigation: { navigate } } = this.props;
    return (
      <View style = {styles.container}>
       <Image style = {styles.containerBackground}
       source={require('../../../images/wood-2065369_1280.jpg')}/>
       <View style = {styles.mainContainer}>
           <View style = {styles.square}>
               <ListItem
                 underlayColor= 'transparent'
                 onPress={() => navigate('MenuPage')}
                 title = 'Pizza Menu'
                 titleStyle = {styles.title}
                 avatar={require('../../../images/menu2.png')}
                 />

                 <ListItem
                   underlayColor='transparent'
                   onPress={() => navigate('AboutUs')}
                   title = 'About Us'
                   titleStyle = {styles.title}
                   avatar={require('../../../images/aboutus.png')}/>

                 <ListItem
                   underlayColor= 'transparent'
                   onPress={() => navigate('Reservation')}
                   title = 'Reservation'
                   titleStyle = {styles.title}
                   avatar={require('../../../images/res.png')}/>

               <ListItem
                 style={{borderBottomWidth: 0}}
                 underlayColor= 'transparent'
                 onPress={() => navigate('Events')}
                 title = 'Events'
                 titleStyle = {styles.title}
                 avatar={require('../../../images/events.png')}/>

               <ListItem
                 underlayColor= 'transparent'
                 onPress={() => navigate('Drinks')}
                 title = 'Drinks'
                 titleStyle = {styles.title}
                 avatar={require('../../../images/drinks.png')} />
           </View>
       </View>
   </View>
  );
 }


}
const styles = StyleSheet.create({
 container:{
   flex: 1,
 },
 containerBackground:{
   flex: 1,
   position: 'absolute',
   width: '100%',
   height: '100%',

 },
 curtain: {
   alignItems: 'center',
   justifyContent: 'center',
   width: '100%',
   height: '21%',
   borderWidth: 1,
   borderBottomWidth:3,
   top: 0,
 },
 mainContainer:{
   flex: 1,
   justifyContent: 'center',
   alignItems: 'flex-end',

 },
 square:{
   width:  300,
   height: 300,
   backgroundColor: '#252123',
   //'#252123',
   borderWidth: 10,
   borderColor: '#8B4513',
   elevation: 24,
   borderRadius: 5,
 },
 title: {
   color: '#994C00',
   backgroundColor: 'transparent',
   fontSize: 22,
   fontFamily: 'Chalkboard SE',
 },
});
