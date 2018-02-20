'use strict'

import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {Text, View, StyleSheet, Image, TouchableHighlight} from 'react-native';
import MenuPage from '../../routes/MenuPage';
import AboutUs from '../../routes/AboutUs';
import Reservation from '../../routes/Reservation';
import Events from '../../routes/Events';
import Drinks from '../../routes/Drinks';
import Header from './Header';

export default class FirstPage extends Component{

  static navigationOptions = {
  ...Header
}
  render(){
    const { navigation: { navigate } } = this.props;
    return(
      <View style = {styles.container}>
        <Image style = {styles.containerBackground}
        source={require('../../images/wood-2065369_1280.jpg')}/>
        <View style = {styles.mainContainer}>
            <View style = {styles.square}>
              <View style = {styles.firstRow}>
                <Image style ={styles.images} source={require('../../images/menu2.png')}/>
                <TouchableHighlight style={[styles.button,  this.props.hightlight ?  styles.button : null]}
                  underlayColor= '#ff1493'
                  onPress = {() => navigate('MenuPage')}>
                  <Text style = {styles.boardText}>Menu</Text>
                </TouchableHighlight>
              </View>

              <View style = {styles.row}>
                  <Image style ={styles.images} source={require('../../images/aboutus.png')}/>
                  <TouchableHighlight style={[styles.button, this.props.hightlight ?  styles.button : null]}
                   underlayColor= '#ff1493'
                   onPress = {() => navigate('AboutUs')}>
                     <Text style = {styles.boardText}>About Us</Text>
                 </TouchableHighlight>
              </View>
              <View style = {styles.row}>
                  <Image style ={styles.images} source={require('../../images/res.png')}/>
                  <TouchableHighlight style={[styles.button, this.props.hightlight ?  styles.button : null]}
                  underlayColor= '#ff1493'
                  onPress = {() => navigate('Reservation')}>
                    <Text style = {styles.boardText}>Reservation</Text>
                </TouchableHighlight>
            </View>

            <View style = {styles.row}>
                <Image style ={styles.images} source={require('../../images/events.png')}/>
                <TouchableHighlight style={[styles.button, this.props.hightlight ?  styles.button : null]}
                  underlayColor= '#ff1493'
                  onPress = {() => navigate('Events')}>
                  <Text style = {styles.boardText}>Events</Text>
                </TouchableHighlight>

            </View>
            <View style = {styles.row}>
                <Image style ={styles.images} source={require('../../images/drinks.png')} />
                <TouchableHighlight style={[styles.button, this.props.hightlight ?  styles.button : null]}
                  underlayColor= '#ff1493'
                  onPress = {() => navigate('Drinks')}>
                  <Text style = {styles.boardText}>Drinks</Text>
                </TouchableHighlight>
            </View>

            </View>
        </View>
        <View style={styles.footer}>
          <TouchableHighlight style={[styles.footerButtons, this.props.hightlight ?  styles.footerButtons : null]}
            underlayColor= '#ff1493'
            onPress = {this.onPress}>
            <Image style = {styles.images} //source={require('./images/...')}
            />
         </TouchableHighlight>
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
    flex: 2,
    justifyContent: 'center',
    alignItems: 'flex-end',

  },
  square:{
    width:  280,
    height: 250,
    backgroundColor: '#202020',
    //'#252123',
    borderWidth: 10,
    borderColor: '#8B4513',
    elevation: 24,
    borderRadius: 5,
  },
  firstRow:{
    marginBottom: 15,
    flexDirection: 'row',
    marginLeft: 10,
    marginTop: 10,
  },
  row:{
    marginBottom: 15,
    flexDirection: 'row',
    marginLeft: 10,
  },
  button:{
    marginLeft: 30,

  },
  imageMenu:{

  },
  boardText:{
    fontSize: 20,
    fontFamily: 'Chalkboard SE',
    color: 'white',
  },
  footer:{
     alignSelf: 'stretch',
     alignItems: 'center',
     bottom: 0,
     left: 0,
     right: 0,
     backgroundColor: '#ffff'
  },
  images:{
    width: 30,
    height: 30,
  },

});
