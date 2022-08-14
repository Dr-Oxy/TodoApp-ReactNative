import { Pressable, View, Text, StyleSheet } from 'react-native';

const CustomButton = ({ text, onPress }) => {
  return (
    <Pressable onPress={onPress}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{text}</Text>
      </View>
    </Pressable>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  button: {
    width: '100%',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 8,
    backgroundColor: '#f20f62',
  },
  buttonText: {
    fontSize: 16,
    color: 'white',
    textTransform: 'capitalize',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
