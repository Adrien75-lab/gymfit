import React from 'react';
import { Button, Slider } from "@mui/material";

const ProfilSliderMembers = ({ title, value, onChange, imageUrl, min, max, step, unit }) => {
  return (
    
    <div className="tile-container">
      <div className="image-container">
        <img src={imageUrl} className="sc-bqyKva XCdxT sc-dWrNqi kURnQM" draggable="false" />
      </div>
      <div className="tile-overlay">
        <div className="tile-corner-container"></div>
        <div className="tile-corner-container"></div>
      </div>

      <div className="tile-text-container">
        <div className="tile-title" data-test="tile-item-title">{title}</div>
        <Slider value={value} onChange={onChange} aria-labelledby="continuous-slider" min={min} max={max} step={step} />
        <div className="tile-subtitle" data-test="tile-item-title">{value} {unit}</div>
      </div>
    </div>
  );
};

export default ProfilSliderMembers;