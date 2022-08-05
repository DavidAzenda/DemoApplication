import{useState} from 'react';
import data from './data.json';
import ToDoInput from './ToDoInput';
import ToDoList from './ToDoList';


function ToDoApp() {

  const[toDoList,setToDoList]= useState(data);
  const[completed,setCompleted]= useState([]);
  const[uncompleted,setUncompleted]= useState([]);
  const[tableToggle, setTableToggle] = useState(false);
  const[isEmpty, setIsEmpty] = useState(false);

  const toggle = (id) =>{
    let item = toDoList?.map(task =>{
      return task.id === Number(id)?{...task,complete: !task.complete}:{...task};
    });
    setToDoList(item);
    //setCompleted(item);
  }

  const handleClear = () => {
    if(toDoList.length === 0){
      setIsEmpty(!isEmpty)
    }
    else{
      setIsEmpty(isEmpty)
    }
    let clear = [];
    setToDoList(clear);
    setCompleted(clear);
    setUncompleted(clear);
  }

  const handleCompleted = () => {
    let copyList = toDoList;
    let complete = copyList.filter((task) => {
      return task.complete;
    });
    setCompleted(complete);
    setTableToggle(!tableToggle)
    //setToDoList(completed);
  }

  const handleUncompleted = () => {
    let copyList = toDoList;
    let uncomplete = copyList.filter((task) => {
      return !task.complete;
    });
    setUncompleted(uncomplete)
    //setToDoList(uncompleted);
  }

  const addTask = (userInput) => {
    let copy = [...toDoList];
    copy = [...copy, {id: toDoList.length +1, task: userInput, complete: false}];
    setToDoList(copy);
  }

  

  return(
    <div className='container'>
      <div className='row py-2 row-cols-2'>
        <div className='col d-grid'>
          <h1>
            ToDo
          </h1>
        </div>
        <div className="col text-end">
          <div className='btn-group' role="group" aria-label = "groupitems">
          <h2 class={tableToggle? "bi bi-eye-slash-fill": "bi bi-eye"} type = "button" onClick={handleCompleted}></h2>
          <h2 class ="bi bi-trash3" disabled = {isEmpty? true && "bi bi-trash3-fill": false} type = "button" onClick={handleClear}></h2>  
          </div>
        </div>
        
      </div>
      
      <ToDoInput addTask = {addTask}/>
      {!tableToggle && <ToDoList id="todooutstanding" toDoList = {toDoList} toggle = {toggle} handleClear = {handleClear}  handleCompleted = {handleCompleted}  handleUncompleted = {handleUncompleted}/>}
      {tableToggle && <ToDoList id="todooutcomplete" toDoList = {completed} toggle = {toggle} handleClear = {handleClear}  handleCompleted = {handleCompleted}  handleUncompleted = {handleUncompleted}/>}
    </div>
  );

  // const [userInput, setUserInput] = useState([]);
  // const [completed, setCompleted] = useState([]);
  // const [incrementer, setIncrementer] = useState(0);




  // // get the value from the input
  // // const getValue = event => {
  // //   setUserInput(document.getElementById("tasks").value);
  // //   console.log(userInput);
  // // };

  // // get the button to create a list element
  // const createItem = event => {
  //   const item = document.getElementById("tasks").value;
  //   setUserInput(userInput=>[item,...userInput]);
  //   var listGroup = document.getElementsByTagName("ul");
  //   // var listItem = listGroup.
  //   // for (var listID = 0; listID<userInput.length;listID++){
  //   //     var lItem = listItem[listID];
  //   //     lItem.id = listID+1;
  //   // }
  //   const clearfield = document.getElementById("tasks");
  //   clearfield.value = " ";
    
  //   console.log(userInput);
  //   // setUserInput([]);

  // };
  // const listItems = userInput.map((input)=>
  //   <li 
  //   class = "list-group-item"
  //   key = {input.id}
  //   id = "isComplete">{input}
  //           <input class="form-check-input me-1" type="checkbox" value="" id="firstCheckboxStretched"></input>
  //           <label class="form-check-label stretched-link" for="firstCheckboxStretched">{input}</label>
  //   </li>);

  

  // // const clearList = event => {
  // //   setUserInput([]);
  // // }

  // // const complete = event => {
  // //   const completedItem = document.getElementById("isComplete").value;
  // //   setCompleted(completed => [...completed,completedItem]);
  // //   console.log(completed);
  // //   // console.log(id);
  // // }

  // function complete(id){
  //   console.log(id);
  // }

  // function setID(){
  //   setIncrementer(incrementer=>incrementer+1)
  // }
  

  // // const completedItems = completed.map((complete)=>
  // //   <li class = "list-group-item">{complete}
  // //   </li>);




 

  // return (
  //   <div className="container">
  //     {/* <div className=" input-group pt-5">
  //       <input class = "form-control" id = "tasks" type="text" placeholder = "What are you going to do?">
  //       </input>
  //       <button class = "btn btn-success" onClick={createItem}>
  //         Add
  //       </button>
  //     </div>
  //     <div>
  //       <h1 className="display-1">
  //           ToDo
  //       </h1>
  //       <ul class="list-group">
  //       {userInput.map((input)=>
  //         <li 
  //         class = "list-group-item"
  //         // key = {input.id}
  //         >
  //           <input class="form-check-input me-1" type="checkbox" id ={setID}value=""></input>
  //           <label class="form-check-label stretched-link" for = {setID}>{input}</label>
  //         </li>)}
  //       </ul>
  //       <div className='text-center py-5'>
  //         <button className='btn btn-success'>Complete</button>
  //         <button className='btn btn-danger'>Delete</button>
  //       </div>
        
  //     </div>
  //     <div>
  //       <h1 className="display-1">
  //           Completed
  //       </h1>
  //       <ol class="list-group list-group-numbered">
  //         {/* {completedItems} */}
  //       {/* </ol> */}
  //     {/* </div> */} 
  //   </div>
    
  // );
}

export default ToDoApp;