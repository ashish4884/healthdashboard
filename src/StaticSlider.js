import React from 'react';

const StaticSlider = ({fillColor,fillPercentage,backgroundColor}) => {


  return (
    <div
      className="slider-container"
      style={{
        width: '160px',
        height: '8px',
        borderRadius: '5px',
        backgroundColor: backgroundColor,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        className="slider-fill"
        style={{
          width: `${fillPercentage}%`,
          height: '100%',
          backgroundColor: fillColor,
          borderRadius: '5px',
        }}
      ></div>
      
    </div>
  );
};

export default StaticSlider;
