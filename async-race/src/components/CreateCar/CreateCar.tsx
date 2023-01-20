import React from 'react';
import { Button } from '../Button/Button';
import './CreateCarStyles.css';

export const CreateCar = () => {
  const onCreateCarClick = (nameButton: string) => console.log(`Click to ${nameButton}`);

  return (
    <div className="create-car">
      <input type="text" className="create-car__input" />
      <input type="color" className="create-car__input-color" />
      <Button nameButton="Create" onClickButton={onCreateCarClick} />
    </div>
  );
};
