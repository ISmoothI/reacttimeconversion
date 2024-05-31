import { useEffect, useState} from 'react';

import calculatorLogo from './imgs/Calculator.png';

function Calculator(){
    const [expression, setExpression] = useState([]);
    const [number, setNumber] = useState("");
    const [displayOutput, setDisplayOutput] = useState();
    const [equals, setEquals] = useState(0);
    const [previousExpression, setPreviousExpression] = useState([]);

    //checks the users input
    function checkInput(val){
        if((val >= 0 && val <= 9) || val === "."){
            //digits and decimals are combined into one

            setNumber(number + val);
        }
        else if(val === "+" || val === "-" || val === "*" || val === "/"){
            //number and the pressed sign are stored into an expression array respectively; the number is then reset

            if(number === ""){
                //if the user tries to put a sign after a sign, it will not store
                return;
            }
            
            setExpression(h => h = [...h, number, val]);
            setNumber("");
        }        
        else if(val === "Backspace"){
            //the number the user is currently inputing is edited by removing the last element

            setNumber(number.slice(0, -1));
        }
        else if(val === "=" || val === "Enter"){
            //number is stored into the expression array; the number is reset; equals changes in order to call useEffect for re-render check

            setExpression(h => h = [...h, number]);
            setNumber("");
            setEquals(equals + 1);
        }
        else if(val === "C"){
            //expression array is reset; number is reset

            setExpression([]);
            setNumber("");
        }

    }

    //searches/solves from left to right of the expression array for multiplication and division
    function solveMultiAndDiv(numsArr){
        if(numsArr.includes("*") === -1 && numsArr.includes("/") === -1){
            //if there are no multiplication and division symbols: return
            return;
        }

        //search the expression array
        //looks for the operator (i); do the appropriate math from the number on the left of the operator (i-1) and the number on the right of the operator (i+1)
        //replace the number on the right (i+1) with the result; remove the left number and operator from the array and reset the loop
        for(var i = 0; i < numsArr.length; i++){
            if(numsArr[i] === "*"){
                numsArr[i + 1] = parseFloat(numsArr[i - 1]) * parseFloat(numsArr[i + 1]);
                numsArr.splice(i - 1, 2);
                i = -1;
            }
            else if(numsArr[i] === "/"){
                numsArr[i + 1] = parseFloat(numsArr[i - 1]) / parseFloat(numsArr[i + 1]);
                numsArr.splice(i - 1, 2);
                i = -1;
            }
        }
    }

    //searches/solves from left to right of the expression array for addition and subtraction
    function solveAddAndSub(numsArr){
        if(numsArr.includes("+") === -1 && numsArr.includes("-") === -1){
            //if there are no addition and subtraction symbols: return
            return;
        }

        //looks for the operator (i); do the appropriate math from the number on the left of the operator (i-1) and the number on the right of the operator (i+1)
        //replace the number on the right (i+1) with the result; remove the left number and operator from the array and reset the loop
        for(var i = 0; i < numsArr.length; i++){
            if(numsArr[i] === "+"){
                numsArr[i + 1] = parseFloat(numsArr[i - 1]) + parseFloat(numsArr[i + 1]);
                numsArr.splice(i - 1, 2);
                i = -1;
            }
            else if(numsArr[i] === "-"){
                numsArr[i + 1] = parseFloat(numsArr[i - 1]) - parseFloat(numsArr[i + 1]);
                numsArr.splice(i - 1, 2);
                i = -1;
            }
        }
    }

    //runs on first render and equals is changed; is used to calculate equals with up-to-date values
    useEffect(() => {
        var result;
        var hNums;

        //if last input is empty, that means users last input was a sign; so it is removed
        if(expression[expression.length - 1] === ""){
            hNums = expression.slice(0, -2);
        }
        else{
            //otherwise: use the whole expression
            hNums = [...expression];
        }

        //store the expression to hold onto and display on the window
        setPreviousExpression(expression);

        //order of operations
        solveMultiAndDiv(hNums);
        solveAddAndSub(hNums);

        //if the array is not empty: save the result value to display on the window and for further calculations if needed
        if(hNums[0] !== undefined){
            result = hNums[0];
            setExpression([]);
            setNumber(number + result);
            setDisplayOutput(result);
        }
        else{
            setExpression([]);
            setNumber("");
            setDisplayOutput();
        }

    }, [equals]
    );

    return(
        <div className='calculator-main'>
            <div>
                <h1>Basic Calculator</h1>
                <img src={calculatorLogo} alt='' className='pagelogo'></img>
            </div>
            <div className='pagecontent'>
                <div className='calculator-displayoldexpression'>
                    <h2>{previousExpression} = {displayOutput}</h2>
                </div>
                <div className='calculator-displaycurrentexpression'>
                    <h2>{expression}</h2>
                </div>
                <div className='calculator-container'>
                    <div className='calculator-grid'>
                        <input className='calculator-grid-textinput' type='text' readOnly value={number} onKeyDown={(e) => { checkInput(e.key);}}></input>
                        <input className='calculator-grid-item' type='button' value={'C'} onClick={(e) => { checkInput(e.target.value);}}></input>
                        <input className='calculator-grid-item' type='button' value={7} onClick={(e) => { checkInput(e.target.value);}}></input>
                        <input className='calculator-grid-item' type='button' value={8} onClick={(e) => { checkInput(e.target.value);}}></input>
                        <input className='calculator-grid-item' type='button' value={9} onClick={(e) => { checkInput(e.target.value);}}></input>
                        <input className='calculator-grid-item' type='button' value={'/'} onClick={(e) => { checkInput(e.target.value);}}></input>
                        <input className='calculator-grid-item' type='button' value={4} onClick={(e) => { checkInput(e.target.value);}}></input>
                        <input className='calculator-grid-item' type='button' value={5} onClick={(e) => { checkInput(e.target.value);}}></input>
                        <input className='calculator-grid-item' type='button' value={6} onClick={(e) => { checkInput(e.target.value);}}></input>
                        <input className='calculator-grid-item' type='button' value={'*'} onClick={(e) => { checkInput(e.target.value);}}></input>
                        <input className='calculator-grid-item' type='button' value={1} onClick={(e) => { checkInput(e.target.value);}}></input>
                        <input className='calculator-grid-item' type='button' value={2} onClick={(e) => { checkInput(e.target.value);}}></input>
                        <input className='calculator-grid-item' type='button' value={3} onClick={(e) => { checkInput(e.target.value);}}></input>
                        <input className='calculator-grid-item' type='button' value={'-'} onClick={(e) => { checkInput(e.target.value);}}></input>
                        <input className='calculator-grid-item' type='button' value={0} onClick={(e) => { checkInput(e.target.value);}}></input>
                        <input className='calculator-grid-item' type='button' value={'.'} onClick={(e) => { checkInput(e.target.value);}}></input>
                        <input className='calculator-grid-item-equals' type='button' value={'='} onClick={(e) => { checkInput(e.target.value);}}></input>
                        <input className='calculator-grid-item' type='button' value={'+'} onClick={(e) => { checkInput(e.target.value);}}></input>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Calculator;
