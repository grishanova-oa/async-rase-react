import React, { useRef, useState } from 'react';
import { Button } from '../Button/Button';
import './CreateCarStyles.css';

interface ICreateCar {
  onCreateCar: (name: string, color: string) => void;
  isRaced: boolean;
}

export const CreateCar = ({ onCreateCar, isRaced }: ICreateCar) => {
  const [name, setName] = useState('');
  const colorInput = useRef<HTMLInputElement>(null);
  const onCreateCarClick = () => {
    if (colorInput.current) {
      onCreateCar(name, colorInput.current.value);
      setName('');
    }
  };
  return (
    <div className="create-car">
      <input
        type="text"
        className="create-car__input"
        value={name}
        onChange={({ target }) => setName(target.value)}
      />
      <input type="color" name="head" className="create-car__input-color" ref={colorInput} />
      <Button nameButton="Create" onClickButton={onCreateCarClick} disabled={isRaced} />
    </div>
  );
};
