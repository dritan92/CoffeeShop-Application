import React from 'react';
import { StyleSheet, View, Text, Image, Dimensions,TouchableHighlight } from 'react-native';

const { width } = Dimensions.get('window');
export default MenuItem = ({
  source,
  title,
  description,
  price,
}) => (
  <View>
    <Image
      resizeMode='contain'
      source={source}
      style={styles.image}
    />
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.description}>{description}</Text>
    <View style = {styles.rowContainer}>
      <Text style={styles.price}>{price}</Text>
      <TouchableHighlight onPress = {this.onPress}>
          <Image style={styles.basket} source={require('../images/basket.png')}/>
      </TouchableHighlight>
      </View>
  </View>
)

const styles = StyleSheet.create({
  title: {
    fontFamily: 'Chalkduster',
    fontSize: 26,
    marginTop: 6,
    marginLeft: 10,
    marginBottom: -4,
  },
  description: {
    fontFamily: 'Cochin',
    fontSize: 14,
    marginLeft: 10,
  },
  image: {
    height: 220,
    width,
    borderColor: 'transparent',
    resizeMode: 'stretch',
    alignItems: 'stretch',
    borderWidth: 10,
  },
  price: {
    fontFamily: 'Courier',
    fontSize: 28,
    marginLeft: 10,
    marginBottom: 10,
  },
  basket:{
    width: 30,
    height: 30,
  },
  rowContainer:{
    flexDirection: 'row',

    justifyContent: 'space-between',
  }
})
