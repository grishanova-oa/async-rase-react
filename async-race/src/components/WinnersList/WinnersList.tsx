/* eslint-disable react/require-default-props */
import React from 'react';
import { ICar, IWinner } from '../../types';
import './WinnersListStyles.css';

interface IWinnersList {
  car?: ICar;
  winner?: IWinner;
  index: number;
}
export const WinnersList = ({ car, index, winner }: IWinnersList) => {
  return (
    <div className="winners-list">
      <ul className="winners-list__inner">
        <li className="winner">
          <span>{index}</span>
          <div
            className="winner__car"
            style={{
              background: `${car?.color}`,
            }}
          />
          <div>{car?.name}</div>
          <div>{winner?.wins}</div>
          <div>{winner?.time}</div>
        </li>
      </ul>
    </div>
  );
};
