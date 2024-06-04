import React, { useState } from 'react';
import { HashRouter, Route, Routes, Link } from 'react-router-dom';

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

  function removeComponents(){
    setComponents([]);
  }

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

  return (
    <>
      {/* <Nav/> */}
      <div className='navbar-main'>
        <header>
          <HashRouter>
            <nav className='navbar'>
              <h1 className='navbar-sitetitle'>
                <Link to="/" onClick={removeComponents}>YACW</Link>
              </h1>
              <ul className='navbar-siteoptions'>
                <li className='navbar-calculator-dropdown'>
                  <div>
                    <h4>Calculators</h4>
                    <div className='navbar-calculator-content'>
                      <div className='nav-options'>
                        <button onClick={addAgeCalcComponent}>+</button>
                        <Link to="/agecalculator" onClick={removeComponents}>Age</Link>
                      </div>
                      <div>
                        <button onClick={addCalculatorComponent}>+</button>
                        <Link to="/calculator" onClick={removeComponents}>Basic</Link>
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
                        <Link to="/timecalculator" onClick={removeComponents}>Time</Link>
                      </div>
                      <div>
                        <button onClick={addUnitCalcComponent}>+</button>
                        <Link to="/unitcalculator" onClick={removeComponents}>Unit</Link>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
              <img className='navbar-modetoggle' src={calcLogo} alt='Pixel art of a calculator'/>
            </nav>
            <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='/agecalculator' element={<AgeCalculator/>} />
              <Route path='/calculator' element={<Calculator/>} />
              <Route path='/timecalculator' element={<TimeCalculator/>} />
              <Route path='/unitcalculator' element={<UnitCalculator/>} />
            </Routes>
          </HashRouter>
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
