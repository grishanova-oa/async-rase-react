import React from 'react';
import { Button } from '../Button/Button';
import './BtnStartBackStyles.css';

interface IBtnStartBack {
  isRaced: boolean;
}
export const BtnStartBack = ({ isRaced }: IBtnStartBack) => {
  const onStart = () => console.log(`Click to`);
  const onBackClick = () => console.log(`Click to`);
  return (
    <div className="btn-start-back">
      <Button nameButton="Start" onClickButton={onStart} disabled={isRaced} />
      <Button nameButton="Back" onClickButton={onBackClick} disabled={!isRaced} />
    </div>
  );
};
