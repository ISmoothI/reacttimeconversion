
//Animates the numbers to flip as the user input changes
function UnitCheckbox({  idName, unitType, func }){
    
    return(
        <div className="unitcheckbox">
            <input id={idName} type='checkbox' onChange={func}></input>
            <label htmlFor={idName}>{unitType}</label>
        </div>
    );
}

export default UnitCheckbox;