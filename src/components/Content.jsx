import React, { useState } from 'react';
import "../styles/Content.css";
import Counter from './Counter';
import JamTopic from './JamTopic';

const Content = () => {
  const [started, setStarted] = useState(false);

  return (
    <>
    <div className='content' id="content">
      <h1 className='content-heading'>Just A Minute.</h1>
      <div className='content-container'>
      <div className="topic-container">
        <JamTopic started={started} setStarted={setStarted}/>
      </div>
      <div className="counter-container ">
        <Counter started={started} setStarted={setStarted}/>
      </div>
      </div>
    </div>
      </>
  );
};


export default Content