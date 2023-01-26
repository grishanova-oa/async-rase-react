import React from 'react';
import { ICar } from '../../types';
import { WinnersList } from '../WinnersList';
import './WinnersSectionStyles.css';

interface IWinnersSection {
  newWinner: ICar[];
}
export const WinnersSection = ({ newWinner }: IWinnersSection) => {
  return (
    <div className="winners-section">
      <h3>Winners: (1)</h3>
      <h4>Page #{1}</h4>
      <div className="table-header">
        <span>Number</span>
        <span>Car</span>
        <span>Name</span>
        <span>Wins</span>
        <span>Best time</span>
      </div>
      {newWinner.map((car, index) => (
        <WinnersList key={car.name} car={car} name={car.name} index={index + 1} />
      ))}
    </div>
  );
};
