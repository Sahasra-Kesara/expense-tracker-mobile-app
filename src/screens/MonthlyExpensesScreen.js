import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

export default function MonthlyExpensesScreen({ route }) {
  const { expenses } = route.params;
  
  // Filter expenses by month (current month for simplicity)
  const currentMonth = new Date().getMonth() + 1; // JavaScript months are 0-based
  const monthlyExpenses = expenses.filter(expense => {
    const expenseMonth = new Date(expense.date).getMonth() + 1;
    return expenseMonth === currentMonth;
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Monthly Expenses</Text>
      <FlatList
        data={monthlyExpenses}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Text style={styles.expenseText}>
            {item.description}: Rs. {item.amount}/= on {new Date(item.date).toLocaleDateString()}
          </Text>
        )}
      />
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
});
