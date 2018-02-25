import React from 'react';
import {Navigator} from 'react-native'
import Home from './routes/Home';
import MenuPage from './routes/MenuPage';
import AboutUs from './routes/AboutUs';
import Drinks from './routes/Drinks';
import Events from './routes/Events';
import Reservation from './routes/Reservation';
import Confirmation from './routes/Confirmation';

import { StackNavigator } from 'react-navigation';

const routeConfig = {
  Home:     { screen: Home    },
  AboutUs:  { screen: AboutUs },
  Drinks:   { screen: Drinks  },
  Events:   { screen: Events  },
  Reservation: {screen: Reservation},
  MenuPage: { screen: MenuPage},
  Confirmation: {screen: Confirmation},
}

const StackNavigatorConfig = {
  navigationOptions: {
    headerBackTitleStyle: {
      color: '#fe0000',
    },
    headerTintColor: '#fe0000'
  }
}

export default Menu = StackNavigator(routeConfig, StackNavigatorConfig);
