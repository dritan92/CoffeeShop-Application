import React from 'react';
import {Navigator} from 'react-native'
import Home from './routes/Home';
import MenuPage from './routes/MenuPage';
import AboutUs from './routes/AboutUs';
import Drinks from './routes/Drinks';
import Events from './routes/Events';
import Reservation from './routes/Reservation';

import { StackNavigator } from 'react-navigation';

const routeConfig = {
  Home:     { screen: Home    },
  AboutUs:  { screen: AboutUs },
  Drinks:   { screen: Drinks  },
  Events:   { screen: Events  },
  Reservation: {screen: Reservation},
  MenuPage: { screen: MenuPage},
}

const StackNavigatorConfig = {
  navigationOptions: {
    headerBackTitleStyle: {
      color: '#6f4e37',
    },
    headerTintColor: '#6f4e37',
  }
}

export default Menu = StackNavigator(routeConfig, StackNavigatorConfig);
