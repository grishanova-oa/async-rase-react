import React from 'react';
import './WinnersListStyles.css';

export const WinnersList = () => {
  return (
    <div className="winners-list">
      <div className="table-header">
        <span>Number</span>
        <span>Car</span>
        <span>Name</span>
        <span>Wins</span>
        <span>Best time</span>
      </div>
      <ul className="winners-list__inner">
        <li className="winner">
          <span>1</span>
          <div className="winner__car" />
          <div>a</div>
          <div>2</div>
          <div>1</div>
        </li>
      </ul>
    </div>
  );
};
