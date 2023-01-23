import React from 'react';
import { Button } from '../Button/Button';
import './HeaderStyles.css';

export const Header = () => {
  const onGarageClick = () => console.log(`Click to`);
  const onWinnersClick = () => console.log(`Click to`);

  return (
    <div className="header">
      <Button nameButton="Garage" onClickButton={onGarageClick} />
      <Button nameButton="Winners" onClickButton={onWinnersClick} />
    </div>
  );
};
