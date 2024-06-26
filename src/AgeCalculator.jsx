import { useState } from 'react';

import cakeLogo from './imgs/Cake.png'

function AgeCalculator(){
    var maxDate = new Date().toISOString().split("T")[0];
    const [age, setAge] = useState("today");

    function checkBirthday(birthdate){
        var currentDate = new Date();

        if(currentDate.getMonth() > birthdate.getMonth()){
            setAge(currentDate.getFullYear() - birthdate.getFullYear());
        }
        else if(currentDate.getMonth() === birthdate.getMonth()){
            if(currentDate.getDate() >= birthdate.getDate() + 1){
                setAge(currentDate.getFullYear() - birthdate.getFullYear());
            }
            else{
                setAge((currentDate.getFullYear() - birthdate.getFullYear()) - 1);
            }
        }
        else{
            setAge((currentDate.getFullYear() - birthdate.getFullYear()) - 1);
        }
    }

    return(
        <div className='agecalc-home'>
            <div>
                <h1> Age Calculator </h1>
                <img src={cakeLogo} alt='Pixel art of a cake'  className='pagelogo'/>
            </div>
            <div>
                <label htmlFor='dateinput' className='dateinput-label'> Enter your birth date: </label>
                <input id='dateinput' type='date' max={maxDate} onChange={(e) => { checkBirthday(new Date(e.target.value));}}></input>
            </div>
            <div>
                <h1> You are {age} years old! </h1>
            </div>
        </div>
    );
}

export default AgeCalculator;