import React from 'react';
import { StyleSheet, Text, TouchableOpacity, Animated, View } from 'react-native';
import { GestureHandlerRootView, Swipeable } from 'react-native-gesture-handler';

const TodoItem = ({ todo, onToggle, onDelete }) => {
  const renderRightActions = (progress, dragX) => {
    const trans = dragX.interpolate({
      inputRange: [-100, 0],
      outputRange: [0, 100],
    });

    return (
      <TouchableOpacity
        style={styles.deleteButton}
        onPress={onDelete}
      >
        <Animated.Text
          style={[
            styles.deleteText,
            {
              transform: [{ translateX: trans }],
            },
          ]}
        >
          删除
        </Animated.Text>
      </TouchableOpacity>
    );
  };

  return (
    <GestureHandlerRootView>
      <Swipeable renderRightActions={renderRightActions}>
        <TouchableOpacity
          style={styles.todoItem}
          onPress={onToggle}
          activeOpacity={0.8}
        >
          <View style={[styles.checkbox, todo.completed && styles.checked]}>
            {todo.completed && <Text style={styles.checkmark}>✓</Text>}
          </View>
          <Text
            style={[
              styles.todoText,
              todo.completed && styles.completedText,
            ]}
          >
            {todo.text}
          </Text>
        </TouchableOpacity>
      </Swipeable>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  todoItem: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    elevation: 3,
    shadowColor: '#6366f1',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    borderWidth: 1,
    borderColor: 'rgba(99, 102, 241, 0.1)',
  },
  checkbox: {
    width: 26,
    height: 26,
    borderRadius: 13,
    borderWidth: 2,
    borderColor: '#6366f1',
    marginRight: 15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(99, 102, 241, 0.05)',
  },
  checked: {
    backgroundColor: '#6366f1',
  },
  checkmark: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  todoText: {
    fontSize: 16,
    color: '#333',
    flex: 1,
    letterSpacing: 0.5,
  },
  completedText: {
    textDecorationLine: 'line-through',
    color: '#9CA3AF',
  },
  deleteButton: {
    backgroundColor: '#6366f1',
    justifyContent: 'center',
    alignItems: 'center',
    width: 90,
    height: '100%',
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
  },
  deleteText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    padding: 20,
  },
});

export default TodoItem; 