import React, { useState } from "react";

function ToDoInput({addTask}){
    const [userInput,setUserInput] = useState("");

    const handleChange = (event) => {
        setUserInput(event.currentTarget.value);
        console.log(event.currentTarget.value);
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        addTask(userInput);
        setUserInput("");
    }
    return(
        <form class = "input-group mt-3" onSubmit={handleSubmit}>
            <input class ="form-control" value = {userInput} type="text" onChange={handleChange} placeholder="Enter Task..."></input>
            <button class = "btn btn-success" disabled = {!userInput}> + </button>
        </form>
    );
};
export default ToDoInput;