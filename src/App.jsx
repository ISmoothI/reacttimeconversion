import React, { useState } from 'react';
// import { useSpring, animated } from '@react-spring/web'

import './App.css';
// import Nav from './Nav.jsx';
import Home from './Home.jsx';
import AgeCalculator from './AgeCalculator.jsx';
import TimeCalculator from './TimeCalculator.jsx';
import Calculator from './Calculator.jsx';
import UnitCalculator from './UnitCalculator.jsx';
import calcLogo from './imgs/Calculator.png';

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
      <div className='navbar-main'>
        <header>
          <nav className='navbar'>
            <h1 className='navbar-sitetitle'>
              <a href='/reacttimeconversion'>YACW</a>
            </h1>
            <ul className='navbar-siteoptions'>
              <li className='navbar-calculator-dropdown'>
                <div>
                  <h4>Calculators</h4>
                  <div className='navbar-calculator-content'>
                    <div className='nav-options'>
                      <button onClick={addAgeCalcComponent}>+</button>
                      <a href='/agecalculator'>Age</a>
                    </div>
                    <div>
                      <button onClick={addCalculatorComponent}>+</button>
                      <a href='/calculator'>Basic</a>
                    </div>
                  </div>
                </div>
              </li>
              <li className='navbar-conversions-dropdown'>
                <div>
                  <h4>Conversions</h4>
                  <div className='navbar-conversions-content'>
                    <div>
                      <button onClick={addTimeCalcComponent}>+</button>
                      <a href='/timecalculator'>Time</a>
                    </div>
                    <div>
                      <button onClick={addUnitCalcComponent}>+</button>
                      <a href='/unitcalculator'>Unit</a>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
            <img className='navbar-modetoggle' src={calcLogo} alt='Pixel art of a calculator'/>
          </nav>
        </header>
      </div>
      {component}
      {components}
      {/* <footer>
        <p>
          Author: 
        </p>
      </footer> */}
    </>
  );
}

export default App;
