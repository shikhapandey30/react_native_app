import React, { Component } from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux'


export class Forgot extends Component {

	componentDidMount() {
     console.log('IM Forgot');
  }

  render() {
    return (
      <View>
        <Text>This is the Forgot screen</Text>
        <TouchableOpacity 
              onPress={() => Actions.home()}
          >
              <Text style={{ fontSize: 16 }}>Go to home screen</Text>
          </TouchableOpacity>
      </View>
    )
  }
};

export default Forgot;