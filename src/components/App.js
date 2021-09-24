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
      
    }

//*deleteItem() which receives id of an item
function deleteItem(id){
  
    setTodoList((prev) =>{
      return prev.filter((eachItem , index) => {
        return index !== id;
      })
    })
}


// *Return
  return (
    <div>
      <Header />

      <Input addNewNote = {addNewNote}/>
      
      <div className="notes-container">
      {todoList.map((eachItem , index) => <Note key={index} id={index} title={eachItem.title} content={eachItem.content} deleteItem={deleteItem} />)}
      
      </div>
    
    
    </div>
  );
}

export default App;
