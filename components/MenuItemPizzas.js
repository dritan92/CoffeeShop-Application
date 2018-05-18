import React , {Component} from 'react';
import { StyleSheet, View, Text, Image,
        Dimensions,TouchableHighlight,
        TouchableOpacity, Alert } from 'react-native';
import PropTypes from 'prop-types';




const { width } = Dimensions.get('window');
export default class MenuItemPizzas extends Component{

    static propTypes = {
      pizza:  PropTypes.object.isRequired,
      onOpen: PropTypes.func.isRequired,
    }

    render(){
      const {pizza, pizza:{title, price, description, source}, onOpen} = this.props;
      return(
          <TouchableOpacity style = {styles.container} onPress={() => onOpen(pizza)}>
            <View style={styles.imageContainer}>
                <Image
                  resizeMode='contain'
                  source={{ uri: source }}
                  style={styles.image}
                />
            </View>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.description}>{description}</Text>
                <View style = {styles.rowContainer}>
                  <Text style={styles.price}>{price}</Text>
                  <TouchableHighlight
                      underlayColor = 'transparent'
                      onPress = {
                        () => Alert.alert('hey you touched me') }>
                      <Image style={styles.basket} source={require('../images/basket.png')}/>
                 </TouchableHighlight>
                </View>
          </TouchableOpacity>
      )
    }

}

const styles = StyleSheet.create({
  container: {
    marginLeft: 10,
    marginBottom: 10,
  },
  imageContainer:{
    flex:1,
  },

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
    marginRight:20,
  },
  rowContainer:{
    flexDirection: 'row',

    justifyContent: 'space-between',
  }
})
