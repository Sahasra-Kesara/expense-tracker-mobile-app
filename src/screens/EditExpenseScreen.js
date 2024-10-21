import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function EditExpenseScreen({ route }) {
  const { expense, setExpenses } = route.params;
  const [description, setDescription] = useState(expense.description);
  const [amount, setAmount] = useState(expense.amount.toString());
  const navigation = useNavigation();

  const handleUpdate = () => {
    const updatedExpense = {
      id: expense.id,
      description,
      amount: parseFloat(amount),
    };

    setExpenses((prevExpenses) => 
      prevExpenses.map((exp) => (exp.id === expense.id ? updatedExpense : exp))
    );

    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Edit Expense</Text>
      <TextInput
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
        style={styles.input}
      />
      <TextInput
        placeholder="Amount"
        value={amount}
        onChangeText={setAmount}
        keyboardType="numeric"
        style={styles.input}
      />
      <Button title="Update Expense" onPress={handleUpdate} />
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
  input: {
    borderBottomWidth: 1,
    width: '80%',
    margin: 10,
    padding: 8,
  },
});
