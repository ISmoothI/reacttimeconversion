import { useEffect, useState } from 'react';
import AnimateNumber from './AnimateNumber';
import UnitCheckbox from './UnitCheckbox';

import unitLogo from './imgs/Ruler.png'

function UnitCalculator() {
    const [holdPrevValue, setHoldPrevValue] = useState(0);
    const [optionChosen, setOptionChosen] = useState("Inch");
    const [inches, setInches] = useState({value: 0, visible: true});
    const [foot, setFoot] = useState({value: 0, visible: true});
    const [kilometers, setKilometers] = useState({value: 0, visible: true});
    const [meters, setMeters] = useState({value: 0, visible: true});
    const [centimeters, setCentimeters] = useState({value: 0, visible: true});
    const [millimeters, setMillimeters] = useState({value: 0, visible: true});
    const [mile, setMile] = useState({value: 0, visible: true});
    const [yard, setYard] = useState({value: 0, visible: true});

    //Converts the unit respectively
    function convertUnits(num){
        // alert(value);
        if(optionChosen === "Kilometer"){
            setInches({...inches, value: num * 39370});
            setFoot({...foot, value: num * 3281});
            setKilometers({...kilometers, value: num});
            setMeters({...meters, value: num * 1000});
            setCentimeters({...centimeters, value: num * 100000});
            setMillimeters({...millimeters, value: num * 1000000});
            setMile({...mile, value: num /  1.609});
            setYard({...yard, value: num * 1094});
        }
        else if(optionChosen === "Meter"){
            setInches({...inches, value: num * 39.37});
            setFoot({...foot, value: num * 3.281});
            setKilometers({...kilometers, value: num / 1000});
            setMeters({...meters, value: num});
            setCentimeters({...centimeters, value: num * 100});
            setMillimeters({...millimeters, value: num * 1000});
            setMile({...mile, value: num /  1609});
            setYard({...yard, value: num * 1.094});
        }
        else if(optionChosen === "Centimeter"){
            setInches({...inches, value: num / 2.54});
            setFoot({...foot, value: num / 30.48});
            setKilometers({...kilometers, value: num / 100000});
            setMeters({...meters, value: num / 100});
            setCentimeters({...centimeters, value: num});
            setMillimeters({...millimeters, value: num * 10});
            setMile({...mile, value: num /  160900});
            setYard({...yard, value: num / 91.44});
        }
        else if(optionChosen === "Millimeter"){
            setInches({...inches, value: num / 25.4});
            setFoot({...foot, value: num / 304.8});
            setKilometers({...kilometers, value: num / 1000000});
            setMeters({...meters, value: num / 100});
            setCentimeters({...centimeters, value: num / 10});
            setMillimeters({...millimeters, value: num});
            setMile({...mile, value: num /  1.609000000});
            setYard({...yard, value: num / 914.4});
        }
        else if(optionChosen === "Inch"){
            setInches({...inches, value: num});
            setFoot({...foot, value: num / 12});
            setKilometers({...kilometers, value: num / 39370});
            setMeters({...meters, value: num / 39.37});
            setCentimeters({...centimeters, value: num * 2.54});
            setMillimeters({...millimeters, value: num * 25.4});
            setMile({...mile, value: num /  63360});
            setYard({...yard, value: num / 36});
        }
        else if(optionChosen === "Foot"){
            setInches({...inches, value: num * 12});
            setFoot({...foot, value: num});
            setKilometers({...kilometers, value: num / 3281});
            setMeters({...meters, value: num / 3.281});
            setCentimeters({...centimeters, value: num * 30.48});
            setMillimeters({...millimeters, value: num * 304.8});
            setMile({...mile, value: num /  5280});
            setYard({...yard, value: num / 3});
        }
        else if(optionChosen === "Yard"){
            setInches({...inches, value: num * 12});
            setFoot({...foot, value: num * 3});
            setKilometers({...kilometers, value: num / 3281});
            setMeters({...meters, value: num / 3.281});
            setCentimeters({...centimeters, value: num * 30.48});
            setMillimeters({...millimeters, value: num * 304.8});
            setMile({...mile, value: num /  1760});
            setYard({...yard, value: num});
        }
        else if(optionChosen === "Mile"){
            setInches({...inches, value: num * 12});
            setFoot({...foot, value: num * 5280});
            setKilometers({...kilometers, value: num / 3281});
            setMeters({...meters, value: num / 3.281});
            setCentimeters({...centimeters, value: num * 30.48});
            setMillimeters({...millimeters, value: num * 304.8});
            setMile({...mile, value: num});
            setYard({...yard, value: num * 1760});
        }
        

    }

    //Holds the previous user entered value
    //Will use previous value to calculate when the unit type is changed
    useEffect(() => {
        if(isNaN(holdPrevValue)){
            setHoldPrevValue(0);
        }

        convertUnits(holdPrevValue);
    }, [holdPrevValue, optionChosen]
    );

    return(

        <div className='unitcalculator-main'>
            <div>
                <h1>Unit Calculator</h1>
                <img src={unitLogo} alt='Pixel art of a ruler'  className='pagelogo'></img>
            </div>
            <div className='wholecontainer'>
                <div className='checkboxcontainer'>
                    <h3>Hide: </h3>
                    <UnitCheckbox idName={'checkbox-inch'} unitType={'Inch'} func={() => { setInches({value: inches.value, visible: !inches.visible}); }}></UnitCheckbox>
                    <UnitCheckbox idName={'checkbox-foot'} unitType={'Foot'} func={() => { setFoot({value: foot.value, visible: !foot.visible}); }}></UnitCheckbox>
                    <UnitCheckbox idName={'checkbox-kilometer'} unitType={'Kilometer'} func={() => { setKilometers({value: kilometers.value, visible: !kilometers.visible}); }}></UnitCheckbox>
                    <UnitCheckbox idName={'checkbox-meter'} unitType={'Meter'} func={() => { setMeters({value: meters.value, visible: !meters.visible}); }}></UnitCheckbox>
                    <UnitCheckbox idName={'checkbox-centimeter'} unitType={'Centimeter'} func={() => { setCentimeters({value: centimeters.value, visible: !centimeters.visible}); }}></UnitCheckbox>
                    <UnitCheckbox idName={'checkbox-millimeter'} unitType={'Millimeter'} func={() => { setMillimeters({value: millimeters.value, visible: !millimeters.visible}); }}></UnitCheckbox>
                    <UnitCheckbox idName={'checkbox-mile'} unitType={'Mile'} func={() => { setMile({value: mile.value, visible: !mile.visible}); }}></UnitCheckbox>
                    <UnitCheckbox idName={'checkbox-yard'} unitType={'Yard'} func={() => { setYard({value: yard.value, visible: !yard.visible}); }}></UnitCheckbox>
                </div>
                <div className='contentcontainer'>
                    <div className='unit-values'>
                        { inches.visible && <AnimateNumber preText={'Inches: '} num={inches.value}></AnimateNumber> }
                        { foot.visible && <AnimateNumber preText={'Feet: '} num={foot.value}></AnimateNumber> }
                        { kilometers.visible && <AnimateNumber preText={'Kilometers: '} num={kilometers.value}></AnimateNumber> }
                        { meters.visible && <AnimateNumber preText={'Meters: '} num={meters.value}></AnimateNumber> }
                        { centimeters.visible && <AnimateNumber preText={'Centimeters: '} num={centimeters.value}></AnimateNumber> }
                        { millimeters.visible && <AnimateNumber preText={'Millimeters: '} num={millimeters.value}></AnimateNumber> }
                        { mile.visible && <AnimateNumber preText={'Miles: '} num={mile.value}></AnimateNumber>}
                        { yard.visible &&<AnimateNumber preText={'Yards: '} num={yard.value}></AnimateNumber> }
                    </div>
                    <div className='unit-userinputs'>
                        <label id='unitinput-label' htmlFor='unitinput'>{"Convert: "}</label>
                        <input id='unitinput' type='number' min='0' placeholder='Insert number here...' onChange={(e) => { setHoldPrevValue(e.target.valueAsNumber); }}></input>
                        <select className='unitselect' name='unit' id='unit' onChange={(e) => { setOptionChosen(e.target.childNodes[e.target.selectedIndex].textContent); }}>
                            <option value='inch'>Inch</option>
                            <option value='foot'>Foot</option>
                            <option value='kilometer'>Kilometer</option>
                            <option value='meter'>Meter</option>
                            <option value='centimeter'>Centimeter</option>
                            <option value='millimeter'>Millimeter</option>
                            <option value='mile'>Mile</option>
                            <option value='yard'>Yard</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UnitCalculator;