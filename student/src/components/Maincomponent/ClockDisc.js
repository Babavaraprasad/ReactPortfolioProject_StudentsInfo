import {} from 'react-router-dom';
import {useRef, useState}  from 'react';

export default function ClockDisc(){

const [degrees, setDegrees]=useState(0);


const style = {
    backgroundcolour:"red",
    transform:"rotate("+degrees+")"
}

function advanceTime(){
    setDegrees(x=> x + 6);
}

setInterval(advanceTime,1000)

return(
<div className="clock-hand" style={style}>

</div>
);

}
