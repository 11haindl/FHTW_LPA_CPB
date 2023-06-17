import React, { FC, useState, useEffect, useRef } from 'react';
import './StopWatch.css';

interface StopWatchProps { }

let hours = 0;
let minutes = 0;
let seconds = 0;

const delay = () => new Promise(resolve => setTimeout(resolve, 1000));

const StopWatch: React.FC<StopWatchProps> = () => {
   const [time, setTime] = useState('00:00:00');
   const isStopped = useRef(true);

   useEffect(() => {
      if (!isStopped.current) {
         increaseTime();
      }
   }, []);

   async function increaseTime() {
      while (seconds <= 59) {
         if (!isStopped.current) {
            await delay().then(() => {
               calculeteTime();
            });
         } else {
            break;
         }
      }
   }

   function calculeteTime() {
      let timeString = buildTime();
      if (seconds === 59) {
         seconds = 0;
         if (minutes === 59) {
            hours += 1;
            minutes = 0;
         } else {
            minutes += 1;
         }
      } else {
         seconds += 1;
      }
      setTime(timeString);
   }

   function buildTime() {
      let hoursAsString = hours < 10 ? '0' + hours.toString() : hours.toString();
      let minutesAsString = minutes < 10 ? '0' + minutes.toString() : minutes.toString();
      let secondsAsString = seconds < 10 ? '0' + seconds.toString() : seconds.toString();

      return hoursAsString + ':' + minutesAsString + ':' + secondsAsString;
   }

   function startStopWatch() {
      isStopped.current = false;
      increaseTime();
   }

   function stopStopWatch() {
      isStopped.current = true;
   }

   function resetStopWatch() {
      stopStopWatch();
      setTime('00:00:00');
      hours = 0;
      minutes = 0;
      seconds = 0;
   }

   return (
      <div className="container">
         <div className="time-display">{time}</div>
         <div>
            <button id="startButton" onClick={startStopWatch}>
               Start
            </button>
            <button id="stopButton" onClick={stopStopWatch}>
               Stop
            </button>
            <button id="resetButton" onClick={resetStopWatch}>
               Reset
            </button>
         </div>
      </div>
   );
};

export default StopWatch;
