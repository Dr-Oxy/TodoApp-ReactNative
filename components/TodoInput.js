import { View, TextInput, Button, StyleSheet } from 'react-native';

import CustomButton from './CustomButton';

const TodoInput = ({ todo, setTodo, onAdd }) => {
  const handleInputText = (enteredText) => {
    setTodo(enteredText);
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="What are your goals today?"
        onChangeText={handleInputText}
        value={todo}
      />
      <CustomButton onPress={onAdd} text="add" />
    </View>
  );
};

export default TodoInput;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    width: '70%',
    padding: 10,
    marginRight: 10,
  },
});
