import React from 'react';
import { Button } from '../Button/Button';
import './BtnStartBackStyles.css';

export const BtnStartBack = () => {
  const onStartClick = () => console.log(`Click to`);
  const onBackClick = () => console.log(`Click to`);
  return (
    <div className="btn-start-back">
      <Button nameButton="Start" onClickButton={onStartClick} />
      <Button nameButton="Back" onClickButton={onBackClick} />
    </div>
  );
};
