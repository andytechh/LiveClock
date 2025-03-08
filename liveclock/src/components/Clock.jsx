import React, { useState, useEffect } from 'react';
import PlayPauseButton from './PlayPauseButton';
import TimeFormatToggle from './TimeFormatToggle';

const Clock = () => {
  const [time, setTime] = useState(new Date());
  const [isRunning, setIsRunning] = useState(true);
  const [is24Hour, setIs24Hour] = useState(false);
  const [prevSecond, setPrevSecond] = useState(time.getSeconds());
  
  // Format time based on 12/24 hour setting
  const formatTime = () => {
    let hours = time.getHours();
    const minutes = time.getMinutes().toString().padStart(2, '0');
    const seconds = time.getSeconds().toString().padStart(2, '0');
    let period = '';
    
    if (!is24Hour) {
      period = hours >= 12 ? 'PM' : 'AM';
      hours = hours % 12 || 12;
    } else {
      hours = hours.toString().padStart(2, '0');
    }
    
    return { hours, minutes, seconds, period };
  };
  
  // Update clock every second if running
  useEffect(() => {
    let intervalId;
    
    if (isRunning) {
      intervalId = setInterval(() => {
        const newDate = new Date();
        setPrevSecond(time.getSeconds());
        setTime(newDate);
      }, 1000);
    }
    
    return () => clearInterval(intervalId);
  }, [isRunning, time]);
  
  const { hours, minutes, seconds, period } = formatTime();
  
  // Determine if seconds changed for animation
  const secondChanged = prevSecond !== parseInt(seconds);
  
  // Toggle clock running state
  const toggleRunning = () => setIsRunning(!isRunning);
  
  // Toggle between 12/24 hour format
  const toggleTimeFormat = () => setIs24Hour(!is24Hour);
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-50 to-white p-4">
    <div className="clock-container glass-morphism rounded-2xl p-8 md:p-10 max-w-md mx-auto ">
      <div className="clock-display mb-8 flex flex-col items-center justify-center">
        <div className="relative">
          <div className="text-5xl md:text-7xl font-medium tracking-tight text-gray-800 flex items-baseline">
            <span className={`transition-opacity duration-300 ${secondChanged ? 'clock-digit-appear' : ''}`}>
              {hours}
            </span>
            <span className="mx-2 animate-pulse-soft">:</span>
            <span className={`transition-opacity duration-300 ${secondChanged ? 'clock-digit-appear' : ''}`}>
              {minutes}
            </span>
            <span className="mx-2 animate-pulse-soft">:</span>
            <span 
              className={`transition-opacity duration-300 ${secondChanged ? 'clock-digit-appear' : ''}`}
            >
              {seconds}
            </span>
            {!is24Hour && (
              <span className="ml-3 text-lg md:text-xl text-gray-500 font-normal animate-fade-in">
                {period}
              </span>
            )}
          </div>
        </div>
        
        <div className="text-sm text-gray-500 mt-3 font-medium tracking-wide uppercase animate-fade-in">
          {time.toLocaleDateString(undefined, { 
            weekday: 'long', 
            month: 'long', 
            day: 'numeric',
            year: 'numeric'
          })}
        </div>
      </div>
      
      <div className="flex items-center justify-between">
        <TimeFormatToggle is24Hour={is24Hour} toggleFormat={toggleTimeFormat} />
        <PlayPauseButton isRunning={isRunning} toggleRunning={toggleRunning} />
      </div>
    </div>
    </div>
  );
};

export default Clock;