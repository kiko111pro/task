/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import Search from './src/screens/Search';
import Movie from './src/screens/MovieScreen';
// import SplashScreen from 'react-native-splash-screen';

type RootStackParamList = {
  home: 'home'; // No parameters for 'home'
  movie: 'movie'; // No parameters for 'movie'
  search: 'search';
};
const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  // useEffect(() => {
  //   SplashScreen.hide();
  // }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{header: () => null}}
          name="home"
          component={HomeScreen}
        />
        <Stack.Screen
          options={{header: () => null}}
          name="search"
          component={Search}
        />
        <Stack.Screen
          options={{header: () => null}}
          name="movie"
          component={Movie}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
