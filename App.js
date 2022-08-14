import { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';

import Todo from './components/Todo';
import TodoInput from './components/TodoInput';

export default function App() {
  const [todo, setTodo] = useState('');
  const [lists, setLists] = useState([]);

  const addTodo = () => {
    if (todo !== '') {
      setLists((currentLists) => [
        ...currentLists,
        {
          text: todo,
          key: Date.now().toString(36) + Math.random().toString(36).slice(2),
        },
      ]);

      // clears input field
      setTodo('');
    }
  };

  const deleteTodo = (id) => {
    setLists((currentLists) => currentLists.filter((item) => item.key !== id));
  };

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <LinearGradient
        colors={['#fff', '#f20f62']}
        start={{ x: 0.5, y: 0.0 }}
        end={{ x: 1, y: 0.6 }}
      >
        <View style={styles.wrapper}>
          <TodoInput todo={todo} setTodo={setTodo} onAdd={addTodo} />

          <View>
            <Text>Your To-Dos Will Appear Here</Text>

            {/* using flatlist */}
            <View style={styles.list}>
              <FlatList
                data={lists}
                renderItem={(itemData) => {
                  return (
                    <Todo
                      id={itemData.item.key}
                      text={itemData.item.text}
                      onDelete={deleteTodo}
                    />
                  );
                }}
              />
            </View>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    paddingTop: 70,
    paddingHorizontal: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
  },
  text: {
    color: 'black',
  },
  list: {
    height: '90%',
    marginTop: 20,
  },
});
