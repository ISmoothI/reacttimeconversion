import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { useSpring, animated } from '@react-spring/web'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <Dropdown />
        </div>
      </header>
    </div>
  );
}

function AnimNum({ num }){
  const { val } = useSpring({
    from: { val: 0 },
    val: num
  });
  
  return <animated.h2 style={{"display" : "inline-block"}}>{val.to((num) => num.toFixed(5))}</animated.h2>
}

function Dropdown(){
  const [holdPrevValue, setHoldPrevValue] = useState(0);
  const [optionChosen, setOptionChosen] = useState("Seconds");
  const [secondsVal, setSecondsVal] = useState(0);
  const [minutesVal, setMinutesVal] = useState(0);
  const [hoursVal, setHoursVal] = useState(0);

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

  useEffect(() => {
    convertTime(holdPrevValue);
  }
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
      <label for="timeinput">{"Convert: "}</label>
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
