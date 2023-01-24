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
  onReset: () => void;
  isRaced: boolean;
}
export const ModuleControl = ({
  isRaced,
  onUpdateCar,
  onReset,
  selectedCar,
  setIsRaced,
  onCreateCar,
  onGenerateCars,
}: IModuleControl) => {
  return (
    <div>
      <CreateCar isRaced={isRaced} onCreateCar={onCreateCar} />
      <UpdateCar isRaced={isRaced} selectedCar={selectedCar} onUpdateCar={onUpdateCar} />
      <ButtonsControl
        isRaced={isRaced}
        onReset={onReset}
        setIsRaced={setIsRaced}
        onGenerateCars={onGenerateCars}
      />
    </div>
  );
};
