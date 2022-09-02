import React from "react";
import ToDoItem from "./ToDoItem";

function ToDoList({toDoList,toggle,handleCompleted, handleClear, handleUncompleted, handleDelete}){

    return(
        <div class = "py-3 list-group">
            {toDoList?.map(todoitem => {
                return (
                    <ToDoItem todoitem = {todoitem} toggle = {toggle} handleClear = {handleClear} handleCompleted = {handleCompleted} handleUncompleted = {handleUncompleted} handleDelete = {handleDelete}/>
                )
            })}
            {/* <div className="row py-3 row-cols-3">
                <div className="col d-grid"><button class = "btn btn-danger" onClick={handleClear}>Clear List</button></div>
                <div className="col d-grid"><button class = "btn btn-danger" onClick={handleCompleted}>Show Completed</button></div>
                <div className="col d-grid"><button class = "btn btn-secondary" onClick={handleUncompleted}>Show Uncompleted</button></div>
                
                
                
            </div> */}
            
        </div>
    );
};
export default ToDoList;