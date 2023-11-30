import clockLogo from './imgs/Clock.png';
import hourHandLogo from './imgs/HourHand.png';
import minuteHandLogo from './imgs/MinuteHand.png';
import './App.css';
import { useEffect, useState } from 'react';
import { useSpring, animated } from '@react-spring/web'

//Main website display
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='logohold'>
          <img src={clockLogo} className="App-clock-logo" alt="clocklogo" />
          <img src={hourHandLogo} className="App-hourhand-logo" alt="hourlogo" />
          <img src={minuteHandLogo} className="App-minutehand-logo" alt="minutelogo" />
        </div>
        <div>
          <Dropdown />
        </div>
      </header>
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

//Creates the input field related UI
//Changes the number values as the user enters data or changes time type
function Dropdown(){
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
  //Will use previous value to calculate when time type is changed
  useEffect(() => {
    if(isNaN(holdPrevValue)){
      setHoldPrevValue(0);
    }

    convertTime(holdPrevValue);
  }, [holdPrevValue, convertTime]
  );

  return (
    <>
      <div>
        <h2>Seconds: </h2>
        <AnimNum num={secondsVal}></AnimNum>
      </div>
      <div>
        <h2>Minutes: </h2>
        <AnimNum num={minutesVal}></AnimNum>
      </div>
      <div>
        <h2>Hours: </h2>
        <AnimNum num={hoursVal}></AnimNum>
      </div>
      <label id='timeinputlabel' for="timeinput">{"Convert: "}</label>
      <input id='timeinput' type='number' min='0' placeholder='Insert number here...' 
        onChange={(e) => {
          setHoldPrevValue(e.target.valueAsNumber);
        }}>
      </input>
      <select name="time" id="time" onChange={(e) => {
        setOptionChosen(e.target.childNodes[e.target.selectedIndex].textContent);
        }}>
        <option value="seconds">Seconds</option>
        <option value="minutes">Minutes</option>
        <option value="hours">Hours</option>
      </select>
    </>
  );
}

export default App;
