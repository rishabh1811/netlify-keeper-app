import React, { useState } from 'react';
import Header from './Header';
import Input from './Input';
import Note from './Note';


function App() {

var [todoList , setTodoList] = useState([]);

//* addNewNote() that receives title and content
    function addNewNote(title , content) {
      setTodoList(prev => {
        var newItem = {
          title : title,
          content: content
        }
        return[...prev, newItem]
      })
      console.log(todoList);
    }

  return (
    <div>
      <Header />

      <Input addNewNote = {addNewNote}/>
      <div className="notes-container">
      {todoList.map((eachItem) => <Note title={eachItem.title} content={eachItem.content} />)}
      
      </div>
    
    
    </div>
  );
}

export default App;
