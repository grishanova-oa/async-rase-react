import React from 'react';
import { GarageSection } from '../GarageSection';
import './MainStyles.css';

export const Main = () => {
  return (
    <div className="main">
      <h3>Garage: (4)</h3>
      <h4>Page #1</h4>
      <GarageSection />
    </div>
  );
};
