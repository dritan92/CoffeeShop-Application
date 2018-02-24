
import React, {Component} from 'react';
import {Text, View,Image, StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');


const HeaderImage = () =>(
  /*<ModelView
  source = {require('../../images/logo.png')}
  onLoadModelStart={this.onLoadModelStart}
  onLoadModelSuccess={this.onLoadModelSuccess}
  onLoadModelError={this.onLoadModelError}
   />*/
   //this comment is for the image component that will be used in case modelview doesnt work

    <Image
        resizeMode = 'contain'
        style = {styles.logo}
        source = {require('../../images/logo.png')}
    />

)

export default Header = {
  title: 'Home',
  headerTitle: <HeaderImage />

}

const styles = StyleSheet.create({
  logo: {
    width: width / 3,
    marginBottom: 6,
    maxHeight: 50,
  }
})
