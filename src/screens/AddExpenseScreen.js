import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function AddExpenseScreen({ route }) {
  const { setExpenses } = route.params;
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const navigation = useNavigation();

  const handleAdd = () => {
    const newExpense = {
      id: Math.random().toString(),
      description,
      amount: parseFloat(amount),
    };
    setExpenses((prevExpenses) => [...prevExpenses, newExpense]);
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Expense</Text>
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
      <Button title="Add Expense" onPress={handleAdd} />
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
