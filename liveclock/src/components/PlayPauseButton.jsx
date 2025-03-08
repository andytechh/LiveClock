import React from 'react';
import { Play, Pause } from 'lucide-react';

const PlayPauseButton = ({ isRunning, toggleRunning }) => {
  return (
    <button
      onClick={toggleRunning}
      className="relative inline-flex items-center justify-center p-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:ring-offset-2"
      aria-label={isRunning ? "Pause clock" : "Start clock"}
    >
      <div className="relative z-10 animate-scale-in">
        {isRunning ? (
          <Pause size={20} className="stroke-[2.5px]" />
        ) : (
          <Play size={20} className="stroke-[2.5px]" />
        )}
      </div>
    </button>
  );
};

export default PlayPauseButton;