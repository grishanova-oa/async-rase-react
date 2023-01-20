import React from 'react';
import { ButtonsControl } from '../ButtonsControl';
import { CreateCar } from '../CreateCar';
import { UpdateCar } from '../UpdateCar';
import './ModuleControlStyles.css';

export const ModuleControl = () => {
  return (
    <div>
      <CreateCar />
      <UpdateCar />
      <ButtonsControl />
    </div>
  );
};
