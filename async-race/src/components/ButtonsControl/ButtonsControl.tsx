import React from 'react';
import { Button } from '../Button/Button';
import './ButtonsControlStyles.css';

export const ButtonsControl = () => {
  const onRaceClick = (nameButton: string) => console.log(`Click to ${nameButton}`);
  const onResetClick = (nameButton: string) => console.log(`Click to ${nameButton}`);
  const onGenerateCarsClick = (nameButton: string) => console.log(`Click to ${nameButton}`);

  return (
    <div className="buttons-control">
      <Button nameButton="Race" onClickButton={onRaceClick} />
      <Button nameButton="Reset" onClickButton={onResetClick} />
      <Button nameButton="Generate Cars" onClickButton={onGenerateCarsClick} />
    </div>
  );
};
