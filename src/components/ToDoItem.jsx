import React from "react";

function ToDoItem({todoitem,toggle}){

    const completedItem = (event) =>{
        event.preventDefault()
        toggle(event.currentTarget.id)
        console.log(event.currentTarget.id)
        console.log(event.target.innerText)
        console.log(todoitem.task)
        console.log(event.target.key)
    }

    const strikeClass = todoitem.complete? "todoitem strike": "todoitem";
    const finalClass = `list-group-item ${strikeClass}`

    return(
        <li  key={todoitem.id+todoitem.task} className={finalClass} id={todoitem.id}  name="todoItem" value = {todoitem.id} onClick={completedItem} >
                {todoitem.task}
            
        </li>
    );
};
export default ToDoItem;