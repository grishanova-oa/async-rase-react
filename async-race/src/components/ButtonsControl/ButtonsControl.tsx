import React from 'react';
import { Button } from '../Button/Button';
import './ButtonsControlStyles.css';

interface IButtonsControl {
  setIsRaced: (isRaced: boolean) => void;
}
export const ButtonsControl = ({ setIsRaced }: IButtonsControl) => {
  const onRaceClick = () => setIsRaced(true);
  const onResetClick = () => console.log(`Click to`);
  const onGenerateCarsClick = () => console.log(`Click to`);

  return (
    <div className="buttons-control">
      <Button nameButton="Race" onClickButton={onRaceClick} />
      <Button nameButton="Reset" onClickButton={onResetClick} />
      <Button nameButton="Generate Cars" onClickButton={onGenerateCarsClick} />
    </div>
  );
};
