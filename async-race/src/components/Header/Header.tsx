import React from 'react';
import { Button } from '../Button/Button';
import './HeaderStyles.css';

export const Header = () => {
  const onGarageClick = (nameButton: string) => console.log(`Click to ${nameButton}`);
  const onWinnersClick = (nameButton: string) => console.log(`Click to ${nameButton}`);

  return (
    <div className="header">
      <Button nameButton="Garage" onClickButton={onGarageClick} />
      <Button nameButton="Winners" onClickButton={onWinnersClick} />
    </div>
  );
};
