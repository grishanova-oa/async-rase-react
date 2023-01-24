import React from 'react';
import { ICar } from '../../types';
import { Button } from '../Button/Button';
import './BtnSelectRemoveStyles.css';

interface IBtnSelectRemove {
  car: ICar;
  onSelect: (car: ICar) => void;
  onRemove: (id: number) => void;
  isRaced: boolean;
}

export const BtnSelectRemove = ({ isRaced, car, onSelect, onRemove }: IBtnSelectRemove) => {
  const onSelectClick = () => onSelect(car);
  const onRemoveClick = () => onRemove(car.id);
  return (
    <div className="btn-select-remove">
      <Button nameButton="Select" onClickButton={onSelectClick} disabled={isRaced} />
      <Button nameButton="Remove" onClickButton={onRemoveClick} disabled={isRaced} />
    </div>
  );
};
