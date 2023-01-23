import React from 'react';
import { ICar } from '../../types';
import { ButtonsControl } from '../ButtonsControl';
import { CreateCar } from '../CreateCar';
import { UpdateCar } from '../UpdateCar';
import './ModuleControlStyles.css';

interface IModuleControl {
  selectedCar: ICar | null;
  setIsRaced: (isRaced: boolean) => void;
  onCreateCar: (name: string, color: string) => void;
  onUpdateCar: (carName: string, color: string) => void;
  onGenerateCars: () => void;
}
export const ModuleControl = ({
  onUpdateCar,
  selectedCar,
  setIsRaced,
  onCreateCar,
  onGenerateCars,
}: IModuleControl) => {
  return (
    <div>
      <CreateCar onCreateCar={onCreateCar} />
      <UpdateCar selectedCar={selectedCar} onUpdateCar={onUpdateCar} />
      <ButtonsControl setIsRaced={setIsRaced} onGenerateCars={onGenerateCars} />
    </div>
  );
};
