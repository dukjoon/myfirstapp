import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';

const TaskModal = ({ isVisible, hide, add }) => {
  let content = ''
  return (
    <Modal isVisible={isVisible} onBackdropPress={hide} avoidKeyboard style={styles.modal}>
      <View style={styles.container}>
        <TextInput
          onChangeText={(text) => {
            content = text;
          }}
          onEndEditing={() => add(content)}
          placeholder="새로운 할 일을 추가해주세요."
        />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  container: {
    padding: 16,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
});

export default TaskModal;
