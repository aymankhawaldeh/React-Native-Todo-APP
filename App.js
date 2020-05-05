import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, FlatList, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Header from './components/header';
import AddTodo from './components/addTodo';
import TodoItem from './components/todoItem'
export default function App() {
const [doo, setDoo]=useState([
  {title : 'play football', key: '9'},
  {title : 'drink water', key: '19'},
  {title : 'go there', key: '92'},
  {title : 'the end', key: '69'},




])

const pressHandler= (key) => {
  setDoo((prevTodos) =>{
    return prevTodos.filter(todo => todo.key != key)
   
  })
}


const submitHandler = text => {

  if(text.length > 3){

    setDoo((prevTodos) => {
      return [
        {title:text, key: Math.random().toString()},
        ...prevTodos
      ]
    })
  } else {
    Alert.alert('OOPS!', 'Todos must be over than 3 chars', [ {text: 'Understood', onPress: ()=> console.log('closed')}])
  }
  }



  return (
    <TouchableWithoutFeedback onPress={()=> {
      Keyboard.dismiss();
    }}>
    <View style={styles.container}>
      <Header />
      
      <View style={styles.content}>
        <AddTodo submitHandler={submitHandler}  />
      <View style={styles.list}>
        <FlatList
         data={doo} 
         renderItem={({item}) =>(
           <TodoItem item={item} pressHandler={pressHandler}/>

   
         )} />
      </View>
      </View>  
    </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,
    flex: 1,
  },
  list: {
    marginTop: 20,  
    flex: 1,
  }
});
