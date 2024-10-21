import React, { useState } from 'react';
import { View, Text, Button, FlatList, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function HomeScreen({ navigation }) {
  const [expenses, setExpenses] = useState([]);

  const handleDelete = (id) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  const confirmDelete = (id) => {
    Alert.alert(
      "Delete Expense",
      "Are you sure you want to delete this expense?",
      [
        { text: "Cancel", style: "cancel" },
        { text: "Delete", onPress: () => handleDelete(id), style: "destructive" }
      ]
    );
  };

  const calculateTotal = () => {
    return expenses.reduce((total, expense) => total + expense.amount, 0).toFixed(2);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Expense Tracker</Text>

      <FlatList
        data={expenses}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <TouchableOpacity onPress={() => navigation.navigate('ViewExpense', { expense: item })}>
              <Text style={styles.expenseText}>- {item.description}: Rs. {item.amount}/=</Text>
            </TouchableOpacity>
            <View style={styles.actions}>
              <TouchableOpacity onPress={() => navigation.navigate('EditExpense', { expense: item, setExpenses })}>
                <Icon name="edit" size={24} color="blue" style={styles.icon} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => confirmDelete(item.id)}>
                <Icon name="delete" size={24} color="red" style={styles.icon} />
              </TouchableOpacity>
            </View>
          </View>
        )}
      />

      <Text style={styles.total}>Total Expenses: Rs. {calculateTotal()}/=</Text>

      <Button title="Add Expense" onPress={() => navigation.navigate('AddExpense', { setExpenses })} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  expenseText: {
    fontSize: 18,
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginHorizontal: 10,
  },
  total: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 20,
  },
});
