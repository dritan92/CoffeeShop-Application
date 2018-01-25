'use srict'

import React, {Component} from 'react';
import {ScrollView, Text, View, Spinner , ActivityIndicator, TextInput} from 'react-native';

export default class SearchPage extends Component<{}>{
  constructor(props){
    super(props);
    this.state={
      searchString: 'London',
      isLoading: false,
      message: '',
    }
  }
  _onTextChange = (event) => {
    this.setState = ({searchString: event.nativeEvent.text})
  }
  render(){
    const spinner = this.state.isLoading ? <ActivityIndicator size='large', color: '#000ff' /> : null;
    return(
        <View style = {styles.container}>
        <Text style = {styles.textDescription}>Search for houses to buy</Text>
        <Text style = {styles.textDescription}>Search by PlaceName or PostCode</Text>
        <View style= {styles.flowRight}>
          <TextInput style = {styles.textInput}
                     value = {this.props.searchString}
                     onChange= {this._onTextChange}
                     placeholder='Search via name or post code'/>
         <Button onPress={this.searchQuery}
                 style = {styles.buttonGo}
                 title = 'GO'/>
        </View>
        <Image source={require('./Resources/house.png')}
               style={styles.image}/>
        {spinner}
        <Text style = {styles.textDescription}>{this.state.message}</Text>
    );
  }

}

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },

});
