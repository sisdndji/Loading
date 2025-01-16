import React, { useState } from 'react';
import { StyleSheet, View, Text, SafeAreaView, StatusBar, FlatList, TouchableOpacity } from 'react-native';
import TodoItem from './components/TodoItem';
import AddTodoModal from './components/AddTodoModal';

export default function App() {
  const [todos, setTodos] = useState([]);
  const [isModalVisible, setModalVisible] = useState(false);

  const addTodo = (text) => {
    if (text.trim().length > 0) {
      setTodos([
        ...todos,
        { id: Math.random().toString(), text, completed: false }
      ]);
    }
    setModalVisible(false);
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#f5f5f5" />
      <View style={styles.header}>
        <Text style={styles.title}>待办事项</Text>
        <TouchableOpacity 
          style={styles.addButton}
          onPress={() => setModalVisible(true)}
        >
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={todos}
        renderItem={({ item }) => (
          <TodoItem
            todo={item}
            onToggle={() => toggleTodo(item.id)}
            onDelete={() => deleteTodo(item.id)}
          />
        )}
        keyExtractor={item => item.id}
        style={styles.list}
      />

      <AddTodoModal
        visible={isModalVisible}
        onClose={() => setModalVisible(false)}
        onAdd={addTodo}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F7FF',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    paddingTop: 40,
    backgroundColor: '#fff',
    elevation: 4,
    shadowColor: '#6366f1',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#6366f1',
  },
  addButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#6366f1',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
    shadowColor: '#6366f1',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  addButtonText: {
    fontSize: 26,
    color: '#fff',
    fontWeight: 'bold',
  },
  list: {
    flex: 1,
    padding: 20,
  },
}); 