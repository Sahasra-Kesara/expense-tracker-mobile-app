import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function ViewExpenseScreen({ route, navigation }) {
  const { expense } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Expense Details</Text>
      <Text style={styles.expenseText}>Description: {expense.description}</Text>
      <Text style={styles.expenseText}>Amount: ${expense.amount}</Text>

      <View style={styles.actions}>
        <TouchableOpacity onPress={() => navigation.navigate('EditExpense', { expense })}>
          <Icon name="edit" size={24} color="blue" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Icon name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  expenseText: {
    fontSize: 18,
    marginVertical: 10,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
});
