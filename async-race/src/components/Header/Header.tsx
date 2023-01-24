import React from 'react';
import { Button } from '../Button/Button';
import './HeaderStyles.css';

interface IHeader {
  setIsOpenGarage: (isOpen: boolean) => void;
  isRaced: boolean;
}
export const Header = ({ isRaced, setIsOpenGarage }: IHeader) => {
  const onGarageClick = () => setIsOpenGarage(false);
  const onWinnersClick = () => setIsOpenGarage(true);

  return (
    <div className="header">
      <Button nameButton="Garage" onClickButton={onGarageClick} disabled={isRaced} />
      <Button nameButton="Winners" onClickButton={onWinnersClick} disabled={isRaced} />
    </div>
  );
};
