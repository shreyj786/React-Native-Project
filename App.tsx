import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/pages/HomeScreen';
import { Navigation } from './src/utility/Navigation';
import DiscoverScreen from './src/pages/DiscoverScreen';


const Stack = createNativeStackNavigator();

const App = (): JSX.Element => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={Navigation.HomeScreen} component={HomeScreen} />
        <Stack.Screen name={Navigation.DiscoverScreen} component={DiscoverScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    // <Text> Heelo ther</Text>
  );
};

export default App;
