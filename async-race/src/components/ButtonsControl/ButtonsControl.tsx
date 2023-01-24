import React from 'react';
import { Button } from '../Button/Button';
import './ButtonsControlStyles.css';

interface IButtonsControl {
  setIsRaced: (isRaced: boolean) => void;
  onGenerateCars: () => void;
  onReset: () => void;
  // eslint-disable-next-line react/require-default-props
  isRaced: boolean;
}
export const ButtonsControl = ({
  isRaced,
  onReset,
  setIsRaced,
  onGenerateCars,
}: IButtonsControl) => {
  const onRaceClick = () => setIsRaced(true);
  const onResetClick = () => {
    onReset();
    setIsRaced(false);
  };

  return (
    <div className="buttons-control">
      <Button nameButton="Race" onClickButton={onRaceClick} disabled={isRaced} />
      <Button nameButton="Reset" onClickButton={onResetClick} disabled={!isRaced} />
      <Button nameButton="Generate Cars" onClickButton={onGenerateCars} disabled={isRaced} />
    </div>
  );
};
