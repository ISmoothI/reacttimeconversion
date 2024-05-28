import { useSpring, animated } from "react-spring";

//Animates the numbers to flip as the user input changes
function AnimateNumber({  preText, num }){
    const { val } = useSpring({ from: { val: 0 }, val: num });
    
    return(
        <div className="animatednumber">
            <h3>{preText}</h3>
            <animated.h3 id='animnumbers'>{val.to((num) => num.toFixed(5))}</animated.h3>
        </div>
    );
}

export default AnimateNumber;