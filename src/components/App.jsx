
import{useState} from 'react';

//import './App.css';

function App() {
  //var [inputNumber, setInputNumber] = useState(0);
  const [target, setTarget] = useState(0);
  const handleChange = event => {
    
    const stringNum = document.getElementById("number").value;
    setTarget(Number(stringNum));
    
  };

  const handleIncrease = event =>{
    
    setTarget(target => target+1);
    
  }

  const handleDecrease = event =>{
    
    setTarget(target => target-1);
    
  }

  const handleReset = event =>{

    // setTarget(0);
    const stringNum1 = document.getElementById("number");
    stringNum1.value = " ";
    setTarget(0);
   
  }

  return (
    
      <div class="container my-5">
      <div class = "justify-center">
        <h1 class="display-1 ">
          {target}
        </h1>
        
      </div>
      <div class = "row my-5">
        <div class = "col input-group">
          <input class = "form-control"
            type = "text"
            id = "number"
            name = "number"
            // onSubmit={handleChange}
            placeholder='Input a Number'></input>
            <button class = "btn btn-success"
          onClick={handleChange} >
            Submit
          </button>
        </div>
      
          
          
      </div>
      <div class = "row">
        <div class = "col btn-group " role="group" >
          <button class = "btn btn-dark "
          onClick={handleIncrease}>+</button>
          <button class = "btn btn-secondary "
          onClick={handleDecrease}>-</button>
          <button class = "btn btn-danger "
          onClick={handleReset}>Reset</button>
        </div>
      </div>

    </div>
  
    
  );
}

export default App;
