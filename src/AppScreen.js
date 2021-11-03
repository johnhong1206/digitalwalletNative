import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SignupScreen from './screens/SignupScreen';
import tabs from './components/navigation/tabs';

const Stack = createStackNavigator();

const AppScreen = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="Signup">
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="Home" component={tabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppScreen;
