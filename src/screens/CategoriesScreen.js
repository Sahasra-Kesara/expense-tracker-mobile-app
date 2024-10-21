import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const categories = [
  { id: 'food', name: 'Food', icon: 'fastfood' },
  { id: 'health', name: 'Health', icon: 'fitness-center' },
  { id: 'clothing', name: 'Clothing', icon: 'checkroom' },
  { id: 'transport', name: 'Transport', icon: 'directions-car' },
  // Add more categories as needed
];

export default function CategoriesScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Spending Categories</Text>
      <FlatList
        data={categories}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity 
            style={styles.categoryItem} 
            onPress={() => navigation.navigate('FilteredExpenses', { category: item.id })}
          >
            <Icon name={item.icon} size={24} />
            <Text style={styles.categoryText}>{item.name}</Text>
          </TouchableOpacity>
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
  categoryItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    width: '100%',
  },
  categoryText: {
    fontSize: 18,
    marginLeft: 10,
  },
});
