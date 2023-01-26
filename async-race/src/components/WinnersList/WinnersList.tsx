import React from 'react';
import { ICar } from '../../types';
import './WinnersListStyles.css';

interface IWinnersList {
  car: ICar;
  name: string;
  index: number;
}
export const WinnersList = ({ car, name, index }: IWinnersList) => {
  return (
    <div className="winners-list">
      <ul className="winners-list__inner">
        <li className="winner">
          <span>{index}</span>
          <div
            className="winner__car"
            style={{
              background: `${car.color}`,
            }}
          />
          <div>{name}</div>
          <div>1</div>
          <div>3.71</div>
        </li>
      </ul>
    </div>
  );
};
