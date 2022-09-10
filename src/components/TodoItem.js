import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const TodoItem = ({ title, done }) => {
  return (
    <View styles={styles.container}>
      <View styles={styles.todo}>
        <TouchableOpacity activeOpacity={0.8} style={done ? styles.done : styles.check}>
          <FontAwesome name="check" color={done ? '#FFFFFF' : '#E0E0E0'} size={14} />
        </TouchableOpacity>
        <Text styles={styles.title}>{title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingLeft: 16,
    paddingRight: 16,
    backgroundColor: '#FFFFFF',
  },
  todo: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 60,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
  },
  title: {
    fontSize: 16,
    color: '#424242',
  },
  check: {
    borderWidth: 1,
    borderColor: '#E5E5E5',
    width: 28,
    height: 28,
    justifyContent: 'center',
    borderRadius: 14,
    alignItems: 'center',
    marginRight: 8,
  },
  done: {
    width: 28,
    height: 28,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
    backgroundColor: '#6830CF',
  },
});
export default TodoItem;
