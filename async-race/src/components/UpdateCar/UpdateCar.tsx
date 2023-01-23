import React, { useState, useEffect } from 'react';
import { ICar } from '../../types';
import { Button } from '../Button/Button';
import './UpdateCarStyles.css';

interface IUpdateCar {
  selectedCar: ICar | null;
  onUpdateCar: (carName: string, color: string) => void;
}

export const UpdateCar = ({ selectedCar, onUpdateCar }: IUpdateCar) => {
  const defaultName = selectedCar?.name || '';
  const [carName, setCarName] = useState<string>(defaultName);
  const [color, setColor] = useState('fff');
  const onUpdateCarClick = () => onUpdateCar(carName, color);

  useEffect(() => {
    setCarName(defaultName);
  }, [selectedCar]);

  return (
    <div className="update-car">
      <input
        type="text"
        className="update-car__input"
        value={carName}
        onChange={({ target }) => setCarName(target.value)}
      />
      <input
        type="color"
        name="head"
        value={color}
        className="update-car__input-color"
        onChange={({ target }) => setColor(target.value)}
      />
      <Button nameButton="Update" onClickButton={onUpdateCarClick} />
    </div>
  );
};
