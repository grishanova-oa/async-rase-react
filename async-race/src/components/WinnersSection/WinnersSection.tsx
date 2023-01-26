import React from 'react';
import { ICar, IWinner } from '../../types';
import { WinnersList } from '../WinnersList';
import './WinnersSectionStyles.css';

interface IWinnersSection {
  winnersList: IWinner[];
  garageData: ICar[];
}
export const WinnersSection = ({ winnersList, garageData }: IWinnersSection) => {
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
      {winnersList.map((winner, index) => {
        const car = garageData.find((cr) => cr.id === winner.id);

        return <WinnersList key={car?.name} car={car} winner={winner} index={index + 1} />;
      })}
    </div>
  );
};
