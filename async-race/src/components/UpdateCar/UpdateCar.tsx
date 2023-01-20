import React from 'react';
import { Button } from '../Button/Button';
import './UpdateCarStyles.css';

export const UpdateCar = () => {
  const onUpdateCarClick = (nameButton: string) => console.log(`Click to ${nameButton}`);

  return (
    <div className="create-car">
      <input type="text" className="create-car__input" />
      <input type="color" className="create-car__input-color" />
      <Button nameButton="Update" onClickButton={onUpdateCarClick} />
    </div>
  );
};
