import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Settings from './screens/Settings';
import Home from './screens/Home';
import { Linking } from 'react-native'
import { InAppNotificationProvider } from 'react-native-in-app-notification';

import { Actions } from 'react-native-router-flux';
import Forgot from './screens/Forgot';
import RouterStack from './screens/Router';

// const AppNavigator = StackNavigator({
//   SettingScreen: { screen: Settings },
//   HomeScreen: { screen: Home }
// });

export default class App extends Component {


  componentDidMount() {
    
    Linking.getInitialURL().then((url) => {
      if (url) {
        console.log('Initial url is: ' + url);
       Actions.forgot()

      }
    }).catch(err => console.error('An error occurred', err));

  }

  render() {
    return (
        <View style={{ flex: 1 }}>
         <RouterStack />
      </View>
    );
  }
}


