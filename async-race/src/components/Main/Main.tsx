import React from 'react';
import { ICar } from '../../types';
import { GarageSection } from '../GarageSection';
import { Pagination } from '../Pagination/Pagination';
import './MainStyles.css';

interface IMain {
  page: number;
  isRaced: boolean;
  garageData: ICar[];
  velocities: Record<number, number>;
  brokenEngines: number[];
  onSelect: (car: ICar) => void;
  onRemove: (id: number) => void;
  onPaginationClick: (value: boolean) => void;
}
export const Main = ({
  page,
  isRaced,
  garageData,
  velocities,
  brokenEngines,
  onSelect,
  onRemove,
  onPaginationClick,
}: IMain) => {
  return (
    <div className="main">
      <Pagination onPaginationClick={onPaginationClick} />
      <h3>Garage: ({garageData.length})</h3>
      <h4>Page #{page}</h4>
      {garageData.map((car) => (
        <GarageSection
          key={car.id}
          car={car}
          isRaced={isRaced}
          velocity={velocities[car.id]}
          isBroken={brokenEngines.includes(car.id)}
          onSelect={onSelect}
          onRemove={onRemove}
        />
      ))}
    </div>
  );
};
