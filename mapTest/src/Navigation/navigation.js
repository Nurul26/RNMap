import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Map from '../components/map';
import Search from '../components/search';

const Stack = createNativeStackNavigator();

const Appstack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Search' screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="Map" component={Map} />

      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Appstack;