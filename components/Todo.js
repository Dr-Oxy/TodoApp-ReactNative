import { View, Text, Pressable, StyleSheet } from 'react-native';

const Todo = ({ id, text, onDelete }) => {
  return (
    <View style={styles.todo}>
      <Pressable
        android_ripple={{
          background: '#ff4122',
        }}
        style={({ pressed }) => pressed && styles.pressed}
        onPress={() => onDelete(id)}
      >
        <Text style={styles.todoText}>{text}</Text>
      </Pressable>
    </View>
  );
};

export default Todo;

const styles = StyleSheet.create({
  todo: {
    backgroundColor: '#fff',
    margin: 8,

    borderRadius: 6,
  },
  pressed: {
    backgroundColor: '#ff4122',
  },
  todoText: {
    color: '#111',
    fontSize: 16,
    padding: 8,
  },
});
