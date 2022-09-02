import{useState} from 'react';


function Calculator() {
    const[isOn, setIsOn] = useState(false);
    const[displayStringEquation, setDisplayStringEquation] = useState(false);
    const[isDisabled, setIsDisabled] = useState(true);
    const[stringEquation, setStringEquation] = useState("");
    const[previousAnswers, setPreviousAnswers] = useState([]);

    const toggleButton = event =>{
        if(isOn == false){
            setIsOn(true);
            setIsDisabled(false);
            setDisplayStringEquation(true);
        
        }
        if(isOn == true){
            setIsOn(false);
            setIsDisabled(true);
            setDisplayStringEquation(false);

            
        }

    }

    const clearField = event =>{
        setStringEquation("");
        
    }


    const evalExpression = () => {
        let ans = Function("return "+ stringEquation)()
        
        setStringEquation(ans)
        // console.log(ans)
        //let num = Number(ans);
        //console.log(num)
        //console.log("35")
        let copy = [...previousAnswers];
        copy = [...copy,ans]
        setPreviousAnswers(copy)
        // console.log(stringEquation)
        
    }


    const percentbtn = () => {
        setStringEquation(stringEquation => stringEquation/100)
    }

   
    const btn1 = event => {
        const number = document.getElementById("btn1").value;
        console.log(number);
        setStringEquation(stringEquation + number)
        
        return number;
    }
    const btn2 = event => {
        const number = document.getElementById("btn2").value;
        console.log(number);
        setStringEquation(stringEquation + number)
        return number;
    }
    const btn3 = event => {
        const number = document.getElementById("btn3").value;
        console.log(number);
        setStringEquation(stringEquation + number)
        return number;
    }
    const btn4 = event => {
        const number = document.getElementById("btn4").value;
        console.log(number);
        setStringEquation(stringEquation + number)
        return number;
    }
    const btn5 = event => {
        const number = document.getElementById("btn5").value;
        console.log(number);
        setStringEquation(stringEquation + number)
        return number;
    }
    const btn6 = event => {
        const number = document.getElementById("btn6").value;
        console.log(number);
        setStringEquation(stringEquation + number)
        return number;
    }
    const btn7 = event => {
        const number = document.getElementById("btn7").value;
        console.log(number);
        setStringEquation(stringEquation + number)
        return number;
    }
    const btn8 = event => {
        const number = document.getElementById("btn8").value;
        console.log(number);
        setStringEquation(stringEquation + number)
        return number;
    }
    const btn9 = event => {
        const number = document.getElementById("btn9").value;
        console.log(number);
        setStringEquation(stringEquation + number)
        return number;
    }
    const btn0 = event => {
        const number = document.getElementById("btn0").value;
        console.log(number);
        setStringEquation(stringEquation + number)
        return number;
    }
    const addbtn = event => {
        const operator = document.getElementById("+").value;
        console.log(operator);
        setStringEquation(stringEquation + operator)
        return operator;
    }
    const subbtn = event => {
        const operator = document.getElementById("-").value;
        console.log(operator);
        setStringEquation(stringEquation + operator)
        return operator;
    }
    const mulbtn = event => {
        const operator = document.getElementById("*").value;
        console.log(operator);
        setStringEquation(stringEquation + operator)
        return operator;
    }
    const divbtn = event => {
        const operator = document.getElementById("/").value;
        console.log(operator);
        setStringEquation(stringEquation + operator)
        return operator;
    }
    const decimalbtn = event =>{
        const element = document.getElementById("decimalbtn").value;
        setStringEquation(stringEquation + element)
        return element;
    }
  

  return (
    <section className="bg-dark text-light p-5">
        <div className="container text-end">
            <div className="row h-100 d-inline-block">
                <div className="col-6">
                    <h1 class="display-1 " id="number">
                        {displayStringEquation? stringEquation:" "}
                    </h1>
                </div>
            </div>
        </div>
            <div className="container">
                <div className="row py-2 row-cols-4 ">
                    <div className="col d-grid">
                    <button class = "btn btn-danger " id = "clearField" disabled={isDisabled}
                    onClick = {clearField}>Clear</button>
                    </div>
                    <div className="col d-grid">
                    <button class = "btn btn-success " id= "toggle"
                    onClick = {toggleButton}>{isOn? 'ON' : 'OFF'}</button>
                    </div>
                    <div className="col d-grid">
                    <button className = "btn  btn-secondary " id="percentbtn" onClick={percentbtn} disabled={isDisabled}
                    >%</button>
                    </div>
                    <div className="col d-grid">
                    <button class = "btn btn-warning " id = "/" disabled={isDisabled} value = "/"
                    onClick={divbtn}>/</button>
                    </div>
                </div>
                <div className="row py-2 row-cols-4 ">
                    <div className="col d-grid">
                    <button class = "btn btn-secondary " id="btn7" onClick={btn7} disabled={isDisabled}
                    value={7}>7</button>
                    </div>
                    <div className="col d-grid">
                    <button class = "btn btn-secondary " id="btn8" onClick={btn8} disabled={isDisabled}
                    value={8}>8</button>
                    </div>
                    <div className="col d-grid">
                    <button class = "btn btn-secondary " id="btn9" onClick={btn9} disabled={isDisabled}
                    value={9}>9</button>
                    </div>
                    <div className="col d-grid">
                    <button class = "btn btn-warning " id = "*" disabled={isDisabled} value = "*"
                    onClick={mulbtn}>*</button>
                    </div>
                </div>
                <div className="row py-2 row-cols-4 ">
                    <div className="col d-grid">
                    <button class = "btn btn-secondary " id="btn4" onClick={btn4} disabled={isDisabled}
                    value={4}>4</button>
                    </div>
                    <div className="col d-grid">
                    <button class = "btn btn-secondary " id="btn5" onClick={btn5} disabled={isDisabled}
                    value={5}>5</button>
                    </div>
                    <div className="col d-grid">
                    <button class = "btn btn-secondary "id="btn6" onClick={btn6} disabled={isDisabled}
                    value={6}>6</button>
                    </div>
                    <div className="col d-grid">
                    <button class = "btn btn-warning " id = "-" disabled={isDisabled} value = "-"
                    onClick={subbtn}>-</button>
                    </div>
                </div>
                <div className="row py-2 row-cols-4 ">
                    <div className="col d-grid">
                    <button class = "btn btn-secondary " id="btn1" onClick={btn1} disabled={isDisabled}
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
                    <button class = "btn btn-warning " id = "+" disabled={isDisabled} value = "+"
                    onClick={addbtn}>+</button>
                    </div>
                </div>
                <div className="row py-2 row-cols-4">
                    <div className="col d-grid flex-fill">
                    <button class = "btn btn-secondary " id="btn0" onClick={btn0} disabled={isDisabled}
                    value={0}>0</button>
                    </div>
                    <div className="col d-grid">
                    <button class = "btn btn-secondary " id="decimalbtn" onClick={decimalbtn} disabled={isDisabled}
                    value=".">.</button>
                    </div>
                    <div className="col d-grid">
                    <button class = "btn btn-warning " id = "equals" disabled={isDisabled} value = "="
                    onClick ={evalExpression}>=</button>
                    </div>
                </div>
            </div>
            {/* <div className="container my-5">
                <h1>
                    Previous Results
                </h1>
                <div className='py-3 list-group'>
                    {previousAnswers.map(answers => {
                    return( <button type ="button" className='btn btn-secondary list--grpup-item list-group-item-action'>{answers} </button>
                    )

                    })}
                </div>
            </div> */}
    </section>
    
        

   
  );
}

export default Calculator;
