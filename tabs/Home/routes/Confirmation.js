import React , {Component} from 'react'
import PopupDialog, { SlideAnimation } from 'react-native-popup-dialog';
import {View, StyleSheet, Text} from 'react-native'

import defaultStyles from './styles.js'

const slideAnimation = new SlideAnimation({
  slideFrom: 'bottom',
});
var randomString = require('random-string');
var code = randomString({length: 10});
export default class Confirmation extends Component{
    render(){
      return(
        <View style={styles.container}>
          <PopupDialog
            ref={(popupDialog) => { this.popupDialog = popupDialog; }}
            dialogAnimation={slideAnimation}>
              <View style = {styles.viewContainer}>
                <Text style = {styles.header}>Your confirmation code </Text>
                <Text style = {styles.code}> {code}</Text>
              </View>
          </PopupDialog>
        </View>
      )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  viewContainer:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    ...defaultStyles.text,
    color: '#333',
    fontSize: 20,
  },
  code: {
    ...defaultStyles.text,
    color: '#333',
    fontSize: 36,
  },
  buttonContainer: {
    alignItems: 'center',
    backgroundColor: '#673AB7',
    borderRadius: 100,
    margin: 20,
    paddingVertical: 10,
    paddingHorizontal: 30,
  },
  button: {
    ...defaultStyles.text,
    color: '#FFFFFF',
    fontSize: 18,
  },
});
