import { StyleSheet, Text, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { useState } from 'react';
import Header from './components/header';
import ToDoItem from './components/todoitem';
import AddToDo from './components/addtodo.js';
 
 
 export default function App() {
   const [toDo, setToDo] = useState([
     {text: 'buy coffee' , key: 1 },
     {text: 'create app' , key: 2 },
     {text: 'finish homework' , key: 3 },
     
   ]);
 
   const pressHandler = (key) => {
     setToDo((prevToDo) => {
       return prevToDo.filter(toDo => toDo.key != key)
     });
   }
 
   const submitHandler = (text) => {
     if(text.length < 1){
       Alert.alert('Warning', 'ToDo must not be empty', [
         {text:'Understood', onPress:() => console.log('alert close')}
       ]);
     }else{
       setToDo((prevToDo) => {
         return [
           {text: text, key: Math.random().toString() },
           ...prevToDo
         ]
       })
     }
     
   }
 
   return (
     <TouchableWithoutFeedback onPress={() => {
       Keyboard.dismiss();
     }}>
       <View style={styles.container}>
         <Header/>
         <View style={styles.content}>
           <AddToDo submitHandler={submitHandler} />
           <View style={styles.list}>
             <FlatList
               data={toDo}
               renderItem={( {item} ) => (
                 <ToDoItem item={item} pressHandler={pressHandler} />
               )} 
             />
           </View>
         </View>
       </View >
     </TouchableWithoutFeedback>
   );
 }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
        
  },
  content:{
    padding: 40,
    flex: 1,

  },
  list:{
    marginTop: 20,
    flex: 1,

  }
  
});

