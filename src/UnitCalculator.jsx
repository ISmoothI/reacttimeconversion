import { useEffect, useState } from 'react';
import { useSpring, animated } from '@react-spring/web'

function UnitCalculator() {
    const [holdPrevValue, setHoldPrevValue] = useState(0);
    const [optionChosen, setOptionChosen] = useState("Inches");
    const [inches, setInches] = useState(0);
    const [foot, setFoot] = useState(0);
    const [meters, setMeters] = useState(0);

    //Converts the time respectively
    function convertUnits(value){
        // alert(value);
        if(optionChosen === "Inches"){
            setInches(value);
            setFoot(value / 12);
            setMeters(value / 39.37);
        }
        else if(optionChosen === "Foot"){
            setInches(value * 12);
            setFoot(value);
            setMeters(value / 3.281);
        }
        else if(optionChosen === "Meters"){
            setInches(value * 39.37);
            setFoot(value * 3.281);
            setMeters(value);
        }

    }

    //Holds the previous user entered value
    //Will use previous value to calculate when the time type is changed
    useEffect(() => {
        if(isNaN(holdPrevValue)){
            setHoldPrevValue(0);
        }

        convertUnits(holdPrevValue);
    }, [holdPrevValue, optionChosen]
    );

    return(
        <div className="unitcalculator-main">
            <h1>Unit Calculator</h1>
            <div className='unitcalculator-logohold'>
                {/* <img src={clockLogo} className="App-clock-logo" alt="clocklogo" />
                <img src={hourHandLogo} className="App-hourhand-logo" alt="hourlogo" />
                <img src={minuteHandLogo} className="App-minutehand-logo" alt="minutelogo" /> */}
            </div>
            <div>
                <div>
                    <h2>Inches: </h2>
                    <AnimNum num={inches}></AnimNum>
                </div>
                <div>
                    <h2>Foot: </h2>
                    <AnimNum num={foot}></AnimNum>
                </div>
                <div>
                    <h2>Meters: </h2>
                    <AnimNum num={meters}></AnimNum>
                </div>
                <label id='unitinput-label' htmlFor="unitinput">{"Convert: "}</label>
                <input id='unitinput' type='number' min='0' placeholder='Insert number here...' onChange={(e) => { setHoldPrevValue(e.target.valueAsNumber); }}></input>
                <select name="unit" id="unit" onChange={(e) => { setOptionChosen(e.target.childNodes[e.target.selectedIndex].textContent); }}>
                    <option value="inches">Inches</option>
                    <option value="foot">Foot</option>
                    <option value="meters">Meters</option>
                </select>
            </div>
        </div>
    );
}


//Animates the numbers to flip as the user input changes
function AnimNum({ num }){
    const { val } = useSpring({
      from: { val: 0 },
      val: num
    });
    
    return <animated.h2 id='animnumbers'>{val.to((num) => num.toFixed(5))}</animated.h2>
  }

export default UnitCalculator;