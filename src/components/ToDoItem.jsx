import React, { useState } from "react";
import Modal from "./Modal";

function ToDoItem({todoitem,toggle,handleDelete}){

    const[ischecked, setIsChecked] = useState(false);

    const completedItem = (event) =>{
        event.preventDefault()
        toggle(event.currentTarget.id)
        //setIsChecked(!ischecked)
        console.log(event.currentTarget.id)
        // console.log(event.target.innerText)
        // console.log(todoitem.task)
        // console.log(event.target.key)
    }


    const editModal = document.getElementById(Modal.id)
    // console.log(editModal)
    // editModal.addEventListener('show.bs.modal', event => {
    // // Button that triggered the modal
    // const button = event.relatedTarget
    // // Extract info from data-bs-* attributes
    // const recipient = button.getAttribute('data-bs-whatever')
    // // If necessary, you could initiate an AJAX request here
    // // and then do the updating in a callback.
    // //
    // // Update the modal's content.
    // const modalTitle = editModal.querySelector('.modal-title')
    // const modalBodyInput = editModal.querySelector('.modal-body input')

    // modalTitle.textContent = `New message to ${recipient}`
    // modalBodyInput.value = recipient
    // })


    const highlightClass = todoitem.complete? "todoitem highlight": "todoitem";
    const finalClass = `list-group-item container d-flex ${highlightClass}`
    // const inputFinal = `form-check-input me-1 ${strikeClass}`
    const checkedbox = todoitem.complete? "true":"false";
    // console.log(Modal)

    return(
        // <li  key={todoitem.id+todoitem.task} className="list-group-item"  id={todoitem.id}  name="todoItem" value = {todoitem.id}  >
        //         <input className={inputFinal} type ="checkbox" value ="" id={todoitem.id} onChange={completedItem} ></input>

        //         <label className="form-check-label" >
        //             {todoitem.task}
        //         </label>
            
        // </li>
        // <li  key={todoitem.id+todoitem.task} className="list-group-item"  id={todoitem.id}  name="todoItem" value = {todoitem.id}  >
        //     <input className="form-check-input me-1" type ="checkbox"  value ="" id={todoitem.id+todoitem.task} onClick={completedItem}>
        //         </input>
        //         <label className="form-check-label" for={todoitem.id+todoitem.task}>
        //             {todoitem.task}
        //         </label>
        //         <button className="">
        //             ...
        //         </button>  
        // </li>
        <li className={finalClass}>
            <div className="">
            <input className="form-check-input me-1" type ="checkbox"  checked ={todoitem.complete} value ="" id={todoitem.id} onChange={e => toggle(todoitem.id)}></input>
            </div>
            <div className="">
            <label className="form-check-label"  for={todoitem.id}>
                    {todoitem.task}
                </label>
            </div>
            <div className="ms-auto">
                {/* <Modal></Modal> */}
            {/* <button type="button" className="btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target="#editModal" data-bs-whatever = {todoitem.id}>
                    ...
            </button>   */}
            {/* <button type="button" id={todoitem.id} onClick={e => handleDelete(todoitem.id)} className="btn btn-danger btn-sm">
                    X
            </button>   */}
            <button type="button" id={todoitem.id}  className="btn btn-danger btn-sm">
                    X
            </button>  
            </div>
            
               
               
        </li>
    );
};
export default ToDoItem;