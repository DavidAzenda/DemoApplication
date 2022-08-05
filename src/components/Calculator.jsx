import{useState} from 'react';
import "./Calculator.css";

function Calculator() {

    const[number1, setNumber1] = useState("");
    const[number2,setNumber2] = useState ("");
    const[answer, setAnswer] = useState (0);
    const[isOn, setIsOn] = useState(false);
    const[displayNumber1, setDisplayNumber1] = useState(false);
    const[displayNumber2, setDisplayNumber2] = useState(false);
    const[displayAnswer, setDisplayAnswer] = useState(false);
    const[operator,setOperator] = useState("");
    const[isDisabled, setIsDisabled] = useState(true);

    const toggleButton = event =>{
        if(isOn == false){
            setIsOn(true);
            setIsDisabled(false);
            setNumber1("0");
            setDisplayNumber1(true);
            console.log(number1);
        }
        if(isOn == true){
            setIsOn(false);
            setIsDisabled(true);
            setDisplayNumber1(false);
            setDisplayNumber2(false);
            setDisplayAnswer(false);
            
        }

    }

    const clearField = event =>{
        setDisplayNumber1(true);
        setDisplayNumber2(false);
        setDisplayAnswer(false);
        setNumber1("0");
        setNumber2("0");
        setAnswer(0);
        setOperator("");
        
    }

    const finalAnswer = event =>{

        setDisplayNumber1(false);
        setDisplayNumber2(false);
        setDisplayAnswer(true);
        console.log("The operator is: ", operator);
        if(operator == "+"){
            setAnswer(()=>addNumbers());
        }
        if(operator == "-"){
            setAnswer(()=> subtractNumbers());
        }
        if(operator == "*"){
            setAnswer(()=>multiplyNumbers());
        }
        if(operator == "/"){
            setAnswer(()=> divideNumbers());
        }
        
        console.log("the result out of the operator we chose is: ",operator);
        
        console.log("number1: ",number1);
        console.log("number2: ",number2);
        console.log("answer: ",answer);
    }
    // const finalAnswer = event =>{

    //     setDisplayNumber1(false);
    //     setDisplayNumber2(false);
    //     setDisplayAnswer(true);
    //     console.log("The operator is: ", operator);
        
    //     document.querySelectorAll('button').forEach(occurance => {
    //         let id = occurance.getAttribute('id');
    //         occurance.addEventListener("click",function() {
    //             console.log("The ID is",id)
    //             while(id != "clearField"){
    //                 if(operator == "add"){
    //                     setAnswer(()=>addNumbers());
    //                     setDisplayNumber1(String(answer));
    //                 }
    //                 if(operator == "subtract"){
    //                     setAnswer(()=> subtractNumbers());
    //                     setDisplayNumber1(String(answer));
    //                 }
    //                 if(operator == "multiply"){
    //                     setAnswer(()=>multiplyNumbers());
    //                     setDisplayNumber1(String(answer));
    //                 }
    //                 if(operator == "divide"){
    //                     setAnswer(()=> divideNumbers());
    //                     setDisplayNumber1(String(answer));
    //                 }
    
    //             }
    //         });
                
    //     });
    //     // while(id != "clearField"){
    //     //     if(operator == "add"){
    //     //         setAnswer(()=>addNumbers());
    //     //         setDisplayNumber1(String(answer));
    //     //     }
    //     //     if(operator == "subtract"){
    //     //         setAnswer(()=> subtractNumbers());
    //     //         setDisplayNumber1(String(answer));
    //     //     }
    //     //     if(operator == "multiply"){
    //     //         setAnswer(()=>multiplyNumbers());
    //     //         // setDisplayNumber1(String(answer));
    //     //     }
    //     //     if(operator == "divide"){
    //     //         setAnswer(()=> divideNumbers());
    //     //         setDisplayNumber1(String(answer));
    //     //     }

    //     // }
        
        
    //     console.log("the result out of the operator we chose is: ",operator);
        
    //     console.log("number1: ",number1);
    //     console.log("number2: ",number2);
    //     console.log("answer: ",answer);
    // }

    const addButton = event =>{
        setDisplayNumber1(false);
        setDisplayNumber2(true);
        setDisplayAnswer(false);
        setOperator("+");
    }

    const subtractButton = event =>{
        setDisplayNumber1(false);
        setDisplayNumber2(true);
        setDisplayAnswer(false);
        setOperator("-");
    }
    const multiplyButton = event =>{
        setDisplayNumber1(false);
        setDisplayNumber2(true);
        setDisplayAnswer(false);
        setOperator("*");
    }
    const divideButton = event =>{
        setDisplayNumber1(false);
        setDisplayNumber2(true);
        setDisplayAnswer(false);
        setOperator("/");
    }

    const addNumbers = () => {
        const ans = Number(number1) + Number(number2)
        console.log("the answer after this function is: ", ans)
        return ans;
    }

    const subtractNumbers = () => {
        const ans = Number(number1) - Number(number2);
        return ans;
    }

    const multiplyNumbers = () => {
        const ans = Number(number1) * Number(number2);
        return ans;
    }

    const divideNumbers = () => {
        if(Number(number2 == 0)){
            return 0;
        }
        else{
            const ans = Number(number1)/Number(number2);
            return ans;
        }
        
    }

    // const handleNumberButtons = (event) => {
    //     var clickedId = event.srcElement.id;
    //     console.log(clickedId);
    //     var number = document.getElementById(clickedId).value;
    //     console.log("button id",number);
    //     if(displayNumber1 == true){
    //         setNumber1(number1 + number); 
    //         console.log("You are in Number 1: ", number1);
            
    //       }
    //     if(displayNumber2 == true){
    //         setNumber2(number2 + number);
    //         console.log("You are in Number 2", number2);
    //       }
    // }

 


    const btn1 = event => {
        const number = document.getElementById("btn1").value;
        console.log(number);
        if(displayNumber1 == true){
          setNumber1(number1 + number); 
          console.log("You are in Number 1: ", number1);
          
        }
        if(displayNumber2 == true){
            setNumber2(number2 + number);
            console.log("You are in Number 2", number2);
        }
        
        return number;
    }
    const btn2 = event => {
        const number = document.getElementById("btn2").value;
        console.log(number);
        if(displayNumber1 == true){
            setNumber1(number1 + number);  
          }
        if(displayNumber2 == true){
            setNumber2(number2 + number);
        }
        return number;
    }
    const btn3 = event => {
        const number = document.getElementById("btn3").value;
        console.log(number);
        if(displayNumber1 == true){
            setNumber1(number1 + number);  
          }
        if(displayNumber2 == true){
            setNumber2(number2 + number);
        }
        return number;
    }
    const btn4 = event => {
        const number = document.getElementById("btn4").value;
        console.log(number);
        if(displayNumber1 == true){
            setNumber1(number1 + number);  
          }
        if(displayNumber2 == true){
            setNumber2(number2 + number);
        }
        return number;
    }
    const btn5 = event => {
        const number = document.getElementById("btn5").value;
        console.log(number);
        if(displayNumber1 == true){
            setNumber1(number1 + number);  
          }
        if(displayNumber2 == true){
            setNumber2(number2 + number);
        }
        return number;
    }
    const btn6 = event => {
        const number = document.getElementById("btn6").value;
        console.log(number);
        if(displayNumber1 == true){
            setNumber1(number1 + number);  
          }
        if(displayNumber2 == true){
            setNumber2(number2 + number);
        }
        return number;
    }
    const btn7 = event => {
        const number = document.getElementById("btn7").value;
        console.log(number);
        if(displayNumber1 == true){
            setNumber1(number1 + number);  
          }
        if(displayNumber2 == true){
            setNumber2(number2 + number);
        }
        return number;
    }
    const btn8 = event => {
        const number = document.getElementById("btn8").value;
        console.log(number);
        if(displayNumber1 == true){
            setNumber1(number1 + number);  
          }
        if(displayNumber2 == true){
            setNumber2(number2 + number);
        }
        return number;
    }
    const btn9 = event => {
        const number = document.getElementById("btn9").value;
        console.log(number);
        if(displayNumber1 == true){
            setNumber1(number1 + number);  
          }
        if(displayNumber2 == true){
            setNumber2(number2 + number);
        }
        return number;
    }
    const btn0 = event => {
        const number = document.getElementById("btn0").value;
        console.log(number);
        if(displayNumber1 == true){
            setNumber1(number1 + number);  
          }
        if(displayNumber2 == true){
            setNumber2(number2 + number);
        }
        return number;
    }
  

  return (
    <div class="container my-5">
      <div className="container text-end">
        <div className="row h-100 d-inline-block">
            <div className="col-6">
                <h1 class="display-1 " id="number">
                {displayNumber1? Number(number1):" "}
                {displayNumber2? Number(number2):" "}
                {displayAnswer? answer: " "}
                </h1>
            </div>
        </div>
            
      </div>
    <div className="container">
        <div className="row py-2 row-cols-4 ">
            <div className="col d-grid">
            <button className = "btn  btn-secondary " id="btn1" onClick={btn1} disabled={isDisabled}
            value={1}>1</button>
            </div>
            <div className="col d-grid">
            <button class = "btn btn-secondary " id="btn2" onClick={btn2} disabled={isDisabled}
            value={2}>2</button>
            </div>
            <div className="col d-grid">
            <button class = "btn btn-secondary " id="btn3" onClick={btn3} disabled={isDisabled}
            value={3}>3</button>
            </div>
            <div className="col d-grid">
            <button class = "btn btn-secondary " id="btn4" onClick={btn4} disabled={isDisabled}
            value={4}>4</button>
            </div>
        </div>
        <div className="row py-2 row-cols-4 ">
            <div className="col d-grid">
            <button class = "btn btn-secondary " id="btn5" onClick={btn5} disabled={isDisabled}
            value={5}>5</button>
            </div>
            <div className="col d-grid">
            <button class = "btn btn-secondary "id="btn6" onClick={btn6} disabled={isDisabled}
            value={6}>6</button>
            </div>
            <div className="col d-grid">
            <button class = "btn btn-secondary " id="btn7" onClick={btn7} disabled={isDisabled}
            value={7}>7</button>
            </div>
            <div className="col d-grid">
            <button class = "btn btn-secondary " id="btn8" onClick={btn8} disabled={isDisabled}
            value={8}>8</button>
            </div>
        </div>
        <div className="row py-2 row-cols-4 ">
            <div className="col d-grid">
            <button class = "btn btn-secondary " id="btn9" onClick={btn9} disabled={isDisabled}
            value={9}>9</button>
            </div>
            <div className="col d-grid">
            <button class = "btn btn-secondary " id="btn0" onClick={btn0} disabled={isDisabled}
            value={0}>0</button>
            </div>
            <div className="col d-grid">
            <button class = "btn btn-danger " id = "clearField" disabled={isDisabled}
            onClick = {clearField}>Clear</button>
            </div>
            <div className="col d-grid">
            <button class = "btn btn-success " id= "toggle"
            onClick = {toggleButton}>{isOn? 'ON' : 'OFF'}</button>
            </div>
        </div>
        <div className="row py-2 row-cols-4 ">
            <div className="col d-grid">
            <button class = "btn btn-dark " id = "+" disabled={isDisabled} value = "+"
            onClick = {addButton}>+</button>
            </div>
            <div className="col d-grid">
            <button class = "btn btn-dark " id = "-" disabled={isDisabled} value = "-"
            onClick = {subtractButton}>-</button>
            </div>
            <div className="col d-grid">
            <button class = "btn btn-dark " id = "*" disabled={isDisabled} value = "*"
            onClick = {multiplyButton}>*</button>
            </div>
            <div className="col d-grid">
            <button class = "btn btn-dark " id = "/" disabled={isDisabled} value = "/"
            onClick = {divideButton}>/</button>
            </div>
        </div>
        <div className="row py-2 ">
            <div className="col d-grid">
            <button class = "btn btn-dark " id = "equals" disabled={isDisabled} value = "="
            onClick ={finalAnswer}>=</button>
            </div>
        </div>
        {/* <div className="container bg-light text-center">
            <div className="row h-50 d-inline-block">
                <div className="col-6">
                    <h1 class="display-1 " id="equation">
                    {Number(number1)}
                    {operator}
                    {Number(number2)}
                    {"="}
                    {answer}
                    </h1>
                </div>
            </div>
        </div> */}
        {/* <div class = "row text-center g-5">
            <div class = "col btn-group " role="group" >
            <button class = "btn btn-secondary "
            onClick>1</button>
            <button class = "btn btn-secondary "
            onClick>2</button>
            <button class = "btn btn-secondary "
            onClick>3</button>
            <button class = "btn btn-secondary "
            onClick>4</button>
            </div>
        </div>
        <div class = "row text-center">
            <div class = "col btn-group " role="group" >
            <button class = "btn btn-secondary "
            onClick>5</button>
            <button class = "btn btn-secondary "
            onClick>6</button>
            <button class = "btn btn-secondary "
            onClick>7</button>
            <button class = "btn btn-secondary "
            onClick>8</button>
            </div>
        </div>
        <div class = "row text-center">
            <div class = "col btn-group " role="group" >
            <button class = "btn btn-secondary "
            onClick>9</button>
            <button class = "btn btn-secondary "
            onClick>0</button>
            <button class = "btn btn-danger "
            onClick>Clear</button>
            <button class = "btn btn-success "
            onClick>ON/OFF</button>
            </div>
        </div>
        <div class = "row text-center">
            <div class = "col btn-group " role="group" >
            <button class = "btn btn-dark "
            onClick>+</button>
            <button class = "btn btn-dark "
            onClick>-</button>
            <button class = "btn btn-dark "
            onClick>*</button>
            <button class = "btn btn-dark "
            onClick>/</button>
            </div>
        </div> */}
    </div>
      

    </div>
  );
}

export default Calculator;
