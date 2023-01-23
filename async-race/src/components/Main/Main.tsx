import React from 'react';
import { IGarage } from '../../types';
import { GarageSection } from '../GarageSection';
import './MainStyles.css';

interface IMain {
  isRaced: boolean;
  garageData: IGarage[];
  velocities: Record<number, number>;
  brokenEngines: number[];
}
export const Main = ({ isRaced, garageData, velocities, brokenEngines }: IMain) => {
  return (
    <div className="main">
      <h3>Garage: (4)</h3>
      <h4>Page #1</h4>
      {garageData.map((car) => (
        <GarageSection
          key={car.id}
          car={car}
          isRaced={isRaced}
          velocity={velocities[car.id]}
          isBroken={brokenEngines.includes(car.id)}
        />
      ))}
    </div>
  );
};
