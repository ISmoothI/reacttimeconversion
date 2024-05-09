import React, { useState } from 'react';
// import { useSpring, animated } from '@react-spring/web'

import './App.css';
// import Nav from './Nav.jsx';
import Home from './Home.jsx';
import AgeCalculator from './AgeCalculator.jsx';
import TimeCalculator from './TimeCalculator.jsx';
import Calculator from './Calculator.jsx';
import UnitCalculator from './UnitCalculator.jsx';


//Main website display
function App() {
  let component;
  const [count, setCount] = useState(0);
  const [components, setComponents] = useState([]);

  function addCalculatorComponent(){
    setComponents(a => a = [...a, React.cloneElement(<Calculator />, {key: count})]);
    setCount(count + 1);
    // console.log(components);
  }

  function addAgeCalcComponent(){
    setComponents(a => a = [...a, React.cloneElement(<AgeCalculator />, {key: count})]);
    setCount(count + 1);
    // console.log(components);
  }

  function addTimeCalcComponent(){
    setComponents(a => a = [...a, React.cloneElement(<TimeCalculator />, {key: count})]);
    setCount(count + 1);
    // console.log(components);
  }

  function addUnitCalcComponent(){
    setComponents(a => a = [...a, React.cloneElement(<UnitCalculator />, {key: count})]);
    setCount(count + 1);
    // console.log(components);
  }

  if(window.location.pathname === "/reacttimeconversion"){
    component = <Home/>;
  }
  else if(window.location.pathname === "/timecalculator"){
    component = <TimeCalculator/>;
  }
  else if(window.location.pathname === "/agecalculator"){
    component = <AgeCalculator/>;
  }
  else if(window.location.pathname === "/calculator"){
    component = <Calculator/>;
  }
  else if(window.location.pathname === "/unitcalculator"){
    component = <UnitCalculator/>;
  }

  return (
    <>
      {/* <Nav/> */}
      <div className="navbar-main">
        <header>
          <nav className="navbar">
            <h1 className="navbar-sitetitle">
              <a href="/reacttimeconversion">The (Almost) Everything Calculator</a>
            </h1>
            <ul>
              <li>
                <a href="/agecalculator"> Age Calculator </a>
                <button onClick={addAgeCalcComponent}>+</button>
              </li>
              <li>
                <a href="/timecalculator"> Time Calculator </a>
                <button onClick={addTimeCalcComponent}>+</button>
              </li>
              <li>
                <a href="/calculator"> Calculator </a>
                <button onClick={addCalculatorComponent}>+</button>
              </li>
              <li>
                <a href="/unitcalculator"> Unit Calculator </a>
                <button onClick={addUnitCalcComponent}>+</button>
              </li>
            </ul>
          </nav>
        </header>
      </div>
      {component}
      {components}
    </>
  );
}

export default App;
