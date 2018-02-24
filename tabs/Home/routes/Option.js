import React , {Component} from 'react'
import {
        Animated,
        StyleSheet,
        TouchableOpacity,
        Text,
      } from 'react-native';


import defaultStyles from './styles.js'

const colorDefault = 'rgba(255, 255, 255,255)',
      colorSelected = 'red'

export default class Options extends Component{
  static propTypes = {
    value: PropTypes.string.isRequired,
    isChosen: PropTypes.boolx.isRequired,
    onChose: PropTypes.func.isRequired,
  }

  state={
    background: new Animated.Value(0)
  }
  componentWillMount(){
    if(this.props.isChosen){
      this.animateSelect();
    }
  }
  componentWillReceiveProps(nextProps){
    if(!this.props.isChosen && nextProps.isChosen){
        this.animateSelect();
    }
    else if(this.props.isChosen && !nextProps.isChosen){
      this.animateDeselect();
    }
  }
  animateSelect(){
    Animated.timing(this.state.background,{
      toValue: 100,
      duration: 200,
    }).start();
  }
  animateDeselect(){
    Animated.timing(this.state.background,{
      toValue: 0,
      duration: 200,
    }).start();
  }

  render(){
    const {value, isChosen, onChose} = this.props;
    const backgroundColorAnimation = this.state.interpolate({
      inputRange: [0,100],
      outputRange: [colorDefault, colorSelected],
    })
    return(
      <TouchableOpacity
        activateOpacity: {1},
        onPress: {onChose}>
        <Animated.View style={[styles.container, {backgroundColor: backgroundColorAnimation}]}>
          <Text style={{color: isChosen ? colorDefault: colorSelected}}>
            {value}
          </Text>
      </TouchableOpacity>
    )}
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    borderColor: colorSelected,
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginRight: 10,
  },
  text: {
    ...defaultStyles.text,
  }
});
