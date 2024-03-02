import React, { useState, useRef, useEffect } from 'react';
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import "../styles/Counter.css";

const Counter = (props) => {
  const [playing, setPlaying] = useState(false);
  const [resetVisible, setResetVisible] = useState(false);
  const [timer, setTimer] = useState(60);
  const [key, setKey] = useState(0);
  const [recordedBlob, setRecordedBlob] = useState(null);
  const [microphonePermission, setMicrophonePermission] = useState(false);

  const audioRef = useRef(null);
  const mediaRecorderRef = useRef(null);

  const increment = () => {
    setTimer(timer + 10);
  };

  const decrement = () => {
    if (timer - 10 <= 0) setTimer(0);
    else setTimer(timer - 10);
  };

  const startTimer = () => {
    props.setStarted(true);
    setPlaying(true);
    setResetVisible(false);
    startRecording()
  };

  const stopTimer = () => {
    props.setStarted(false);
    setPlaying(false);
    setResetVisible(true);
    stopRecording()
  };

  const resetTimer = () => {
    setTimer(60);
    setPlaying(false);
    setResetVisible(false);
    setKey(prevKey => prevKey + 1);

  };
  const startRecording = () => {
    const stream = navigator.mediaDevices.getUserMedia({ audio: true });
    stream.then(mediaStream => {
      const mediaRecorder = new MediaRecorder(mediaStream);
      mediaRecorderRef.current = mediaRecorder;
      const chunks = [];
      mediaRecorder.ondataavailable = event => {
        chunks.push(event.data);
      };
      mediaRecorder.onstop = () => {
        const blob = new Blob(chunks, { type: 'audio/wav' });
        setRecordedBlob(blob);
        sendAudioToAPI(blob);
      };
      mediaRecorder.start();
      setPlaying(true);
    }).catch(error => {
      console.error('Error accessing media devices:', error);
    });
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && playing) {
      mediaRecorderRef.current.stop();
      setPlaying(false);
    }
  };

  const getMicrophonePermission = async () => {
    try {
      // Request microphone permission
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      setMicrophonePermission(true);
      stream.getTracks().forEach(track => track.stop()); // Stop the stream immediately
    } catch (error) {
      if (error.name === 'NotAllowedError' || error.name === 'NotFoundError') {
        // Permission denied or no microphone found
        setMicrophonePermission(false);
      } else {
        // Other errors
        console.error('Error accessing microphone:', error);
        setMicrophonePermission('error');
      }
    }
  };



  return (
    <div className="counter">
      <CountdownCircleTimer
        key={key} // Use key prop to force remounting of CountdownCircleTimer
        isPlaying={playing}
        duration={timer}
        colors={"#443dff"}
        onComplete={() => {
          console.log("timer completed");
          setPlaying(false);
          setResetVisible(true);
          stopRecording()
          return { shouldRepeat: false };
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
      {!microphonePermission ?
        (<div className="counter-buttons">
          <button onClick={getMicrophonePermission} className="counter-button">Get Microphone Permission</button>
          
        </div>):
          (
            <div className="counter-buttons">
              {!playing ? (
                <button onClick={startTimer} className="counter-button">Start Timer</button>
              ) : (
                <button onClick={stopTimer} className="counter-button">Stop Timer</button>
              )}
              {resetVisible && <button onClick={resetTimer} className="counter-button">Reset Timer</button>}
            </div>)
}
      {recordedBlob && !playing && resetVisible &&
        <audio ref={audioRef} controls src={URL.createObjectURL(recordedBlob)} className='output-audio' />}
      

    </div>
  );
};

export default Counter;
