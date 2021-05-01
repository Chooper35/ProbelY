/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import 'react-native-gesture-handler';
 import {NavigationContainer} from "@react-navigation/native";
 import { createStackNavigator } from '@react-navigation/stack';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import LoginScreen from './src/Screens/LoginScreen';
import MainContent from './src/Components/MainContent';
import {navigationRef} from "./src/Components/RootNavigation";

const Stack= createStackNavigator();

export default function App (){
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator>
      <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{headerShown:false}}>

        </Stack.Screen>
        <Stack.Screen
          name="MainContent"
          component={MainContent}
          options={{ title: 'Probel' }}>

        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  
});
