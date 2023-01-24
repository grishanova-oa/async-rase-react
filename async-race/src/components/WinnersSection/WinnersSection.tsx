import React from 'react';
import { WinnersList } from '../WinnersList';
import './WinnersSectionStyles.css';

export const WinnersSection = () => {
  return (
    <div className="winners-section">
      <h3>Winners: (1)</h3>
      <h4>Page #{1}</h4>
      <WinnersList />
    </div>
  );
};
