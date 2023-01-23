import React from 'react';
import { ButtonsControl } from '../ButtonsControl';
import { CreateCar } from '../CreateCar';
import { UpdateCar } from '../UpdateCar';
import './ModuleControlStyles.css';

interface IModuleControl {
  setIsRaced: (isRaced: boolean) => void;
}
export const ModuleControl = ({ setIsRaced }: IModuleControl) => {
  return (
    <div>
      <CreateCar />
      <UpdateCar />
      <ButtonsControl setIsRaced={setIsRaced} />
    </div>
  );
};
