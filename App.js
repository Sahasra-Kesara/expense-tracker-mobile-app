import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import AddExpenseScreen from './src/screens/AddExpenseScreen';
import ViewExpenseScreen from './src/screens/ViewExpenseScreen';
import EditExpenseScreen from './src/screens/EditExpenseScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="AddExpense" component={AddExpenseScreen} />
        <Stack.Screen name="ViewExpense" component={ViewExpenseScreen} />
        <Stack.Screen name="EditExpense" component={EditExpenseScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
