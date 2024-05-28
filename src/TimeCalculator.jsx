import { useEffect, useState } from 'react';
import AnimateNumber from './AnimateNumber';

import clockLogo from './imgs/Clock.png';
import hourHandLogo from './imgs/HourHand.png';
import minuteHandLogo from './imgs/MinuteHand.png';

function TimeCalculator(){
  const [holdPrevValue, setHoldPrevValue] = useState(0);
  const [optionChosen, setOptionChosen] = useState("Seconds");
  const [secondsVal, setSecondsVal] = useState(0);
  const [minutesVal, setMinutesVal] = useState(0);
  const [hoursVal, setHoursVal] = useState(0);

  //Converts the time respectively
  function convertTime(value){
    // alert(value);
    if(optionChosen === "Seconds"){
      setSecondsVal(value);
      setMinutesVal(value / 60);
      setHoursVal(value / 3600);
    }
    else if(optionChosen === "Minutes"){
      setSecondsVal(value * 60);
      setMinutesVal(value);
      setHoursVal(value / 60);
    }
    else if(optionChosen === "Hours"){
      setSecondsVal(value * 3600);
      setMinutesVal(value * 60);
      setHoursVal(value);
    }

  }

  //Holds the previous user entered value
  //Will use previous value to calculate when the time type is changed
  useEffect(() => {
    if(isNaN(holdPrevValue)){
      setHoldPrevValue(0);
    }

    convertTime(holdPrevValue);
  }, [holdPrevValue, optionChosen]
  );

  
  return(
    <div className="timecalculator-main">
      <h1>Time Calculator</h1>
      <div className='logohold'>
        <img src={clockLogo} className="App-clock-logo" alt="clocklogo" />
        <img src={hourHandLogo} className="App-hourhand-logo" alt="hourlogo" />
        <img src={minuteHandLogo} className="App-minutehand-logo" alt="minutelogo" />
      </div>
      <div>
        <AnimateNumber preText={"Seconds: "} num={secondsVal}></AnimateNumber>
        <AnimateNumber preText={"Minutes: "} num={minutesVal}></AnimateNumber>
        <AnimateNumber preText={"Hours: "} num={hoursVal}></AnimateNumber>
      </div>
      <div>
        <label id='timeinputlabel' htmlFor="timeinput">{"Convert: "}</label>
        <input id='timeinput' type='number' min='0' placeholder='Insert number here...' onChange={(e) => { setHoldPrevValue(e.target.valueAsNumber); }}></input>
        <select name="time" id="time" onChange={(e) => { setOptionChosen(e.target.childNodes[e.target.selectedIndex].textContent); }}>
          <option value="seconds">Seconds</option>
          <option value="minutes">Minutes</option>
          <option value="hours">Hours</option>
        </select>
      </div>
    </div>
  );
}
  
export default TimeCalculator;