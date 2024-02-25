import React from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { useState } from "react";
import "../styles/Counter.css"
const Counter = () => {
    const [playing, setPlaying] = useState(true);
    const [timer, setTimer] = useState(60);

    const increment=()=>{
        setTimer(timer+10);
    }
    const decrement=()=>{
        if(timer-10<=0)setTimer(0)
        else setTimer(timer-10);
    }
  return (  
    <div className="counter">
      <CountdownCircleTimer
        isPlaying={playing}
        duration={timer}
        colors={"#443dff"}
        onComplete={() => {
            console.log('timer completed')
            setPlaying(false)
            return { shouldRepeat: false } 
          }}
      >
        {({ remainingTime }) => remainingTime}
      </CountdownCircleTimer>
<div className="counter-timer">
      <button className="minus" onClick={decrement}>
        -
      </button>
      <button className="plus" onClick={increment}>
        +
      </button>
</div>
    <div className="start-button" >
            <button>Start Timer</button>
        </div>
    </div>
  );
};

export default Counter;
