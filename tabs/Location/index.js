

import React, {Component} from 'react'
import { StyleSheet} from 'react-native'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import openMap from 'react-native-open-maps';

const LATITUDE = -36.4169676;
const LONGITUDE = 145.401247;


export default class Location extends Component{
  _goToGoogleMaps() {
    openMap({ latitude: LATITUDE, longitude: LONGITUDE });
  }
  render() {
    return (
      <MapView style={styles.map}
          initialRegion={{
              latitude: LATITUDE,
              longitude: LONGITUDE,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
          }}
          zoomEnabled = {true}
          scrollEnabled = {true}
        >
        <MapView.Marker
            coordinate={{latitude: LATITUDE,
            longitude: LONGITUDE}}
            title={"Leandra Shop"}
            description={"Our CoffeeShop-Pizza"}
            onPress={this._goToGoogleMaps}
         />
      </MapView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
    map: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    }
})
