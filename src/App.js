import React, { useState, useEffect } from 'react';
import Todo from './Todo';
import { Button , FormControl, Input, InputLabel } from '@material-ui/core';
import './App.css';
import db from './firebase';
import firebase from 'firebase';


function App() {
  const[todos, setTodos] = useState(['hel','oo']);
  const [input, setInput] = useState('');
//fetching daa from firebase
useEffect(() => {
  db.collection('todos').orderBy('timestamp','desc').onSnapshot(snapshot => {
    setTodos(snapshot.docs.map(doc=>({ id: doc.id ,todo: doc.data().todo})))
  })  
}, []);


  const addTodo = (event)=>{
    //this will fore of when we click the button
    event.preventDefault();
  
    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setTodos([...todos,input]);
    setInput('') 
  }
  return (
    <div className="App">
     <h1>  Harshit's Todo-List ✔</h1>
     <form>
     
      <FormControl>
        <InputLabel>Write your Todo's here ☑ </InputLabel>
        <Input value = {input} onChange={event => setInput(event.target.value)}/>
      </FormControl>

      <Button disabled={!input} type="submit" onClick={addTodo} variant="contained" color="primary">
         Add ToDo 
         </Button>
      {/* <button  onClick={addTodo}>Add ToDo</button> */}
     </form>
    
     <ul>
       {todos.map(todo =>(
         <Todo todo={todo} />
        // <li>{todo}</li>
       ))}
     </ul>
    </div>
  );
}

export default App; 
