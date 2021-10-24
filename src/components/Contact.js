import * as React from 'react';
import {View, Text, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';


function Contact({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Contact Screen</Text>
      <Button
        title="Go to Projects"
        onPress={() => navigation.navigate('Projects')}
      />
    </View>
  );
}

export default Contact;
