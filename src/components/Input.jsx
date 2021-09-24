import React, { useState } from 'react';

function Input(props) {

    var[title , setTitle] = useState("");
    var[content , setContent] = useState("")


//* Title Change Handler
    function titleChangeHandler(e){
        var flag = e.target.value;
        setTitle(flag);
    }


//* Content Change Handler
    function contentChangeHandler(e){
        var flag = e.target.value;
        setContent(flag);
    }
//*Click Handler
    function clickHandler(){
        props.addNewNote(title , content)
    }

//* Return
    return <div className="input">
    <form onClick={(event) => event.preventDefault()}>
      <input onChange={titleChangeHandler} type="text"  placeholder="title"          value={title} />
      <input onChange={contentChangeHandler} type="text"  placeholder="take a note"  value={content} />
      <button onClick={clickHandler}>+</button>
    </form>
  </div>
}

export default Input;