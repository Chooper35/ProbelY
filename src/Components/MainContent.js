import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import UnitScreen from '../Screens/UnitScreen';
import PatientScreen from '../Screens/PatientScreen';
import PatientDetailScreen from '../Screens/PatientDetailScreen';

const NestedStack = createStackNavigator();

export default function MainContent({navigation}, props) {
  return (
    <NestedStack.Navigator>
      <NestedStack.Screen
        name="UnitScreen"
        component={UnitScreen}
        options={{headerShown: false}}></NestedStack.Screen>
      <NestedStack.Screen
        name="PatientScreen"
        component={PatientScreen}
        options={{headerShown: false}}></NestedStack.Screen>
      <NestedStack.Screen
        name="PatientDetail"
        component={PatientDetailScreen}
        options={{headerShown: false}}></NestedStack.Screen>
    </NestedStack.Navigator>
  );
}

const styles = StyleSheet.create({});
