import React, { useState } from 'react';
import {
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

const AddTodoModal = ({ visible, onClose, onAdd }) => {
  const [text, setText] = useState('');

  const handleAdd = () => {
    onAdd(text);
    setText('');
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.centeredView}
      >
        <View style={styles.modalView}>
          <Text style={styles.modalTitle}>添加新待办</Text>
          <TextInput
            style={styles.input}
            placeholder="输入待办事项..."
            value={text}
            onChangeText={setText}
            autoFocus
          />
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={[styles.button, styles.cancelButton]}
              onPress={onClose}
            >
              <Text style={styles.cancelButtonText}>取消</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, styles.addButton]}
              onPress={handleAdd}
            >
              <Text style={styles.addButtonText}>添加</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(99, 102, 241, 0.3)',
  },
  modalView: {
    width: '85%',
    backgroundColor: '#fff',
    borderRadius: 25,
    padding: 25,
    alignItems: 'center',
    shadowColor: '#6366f1',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 8,
    borderWidth: 1,
    borderColor: 'rgba(99, 102, 241, 0.1)',
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#6366f1',
    letterSpacing: 0.5,
  },
  input: {
    width: '100%',
    borderWidth: 1.5,
    borderColor: 'rgba(99, 102, 241, 0.2)',
    borderRadius: 15,
    padding: 15,
    marginBottom: 25,
    fontSize: 16,
    backgroundColor: 'rgba(99, 102, 241, 0.05)',
    color: '#333',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  button: {
    borderRadius: 12,
    padding: 15,
    elevation: 3,
    flex: 1,
    marginHorizontal: 6,
    shadowColor: '#6366f1',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  cancelButton: {
    backgroundColor: '#EEF2FF',
    borderWidth: 1,
    borderColor: 'rgba(99, 102, 241, 0.2)',
  },
  addButton: {
    backgroundColor: '#6366f1',
  },
  cancelButtonText: {
    color: '#6366f1',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 16,
  },
  addButtonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 16,
  },
});

export default AddTodoModal; 