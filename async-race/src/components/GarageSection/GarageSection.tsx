import React from 'react';
import { ICar } from '../../types';
import { BtnSelectRemove } from '../BtnSelectRemove';
import { BtnStartBack } from '../BtnStartBack';
import { CarRoadContainer } from '../CarRoadContainer';
import './GarageSectionStyles.css';

interface IGarageSection {
  car: ICar;
  isRaced: boolean;
  velocity: number;
  isBroken: boolean;
  onSelect: (car: ICar) => void;
  onRemove: (id: number) => void;
}
export const GarageSection = ({
  car,
  isRaced,
  velocity,
  isBroken,
  onSelect,
  onRemove,
}: IGarageSection) => {
  return (
    <div className="garage">
      <section className="garage__section">
        <div className="car-container">
          <div className="car-container__btn">
            <BtnStartBack />
            <BtnSelectRemove car={car} onRemove={onRemove} onSelect={onSelect} />
            <h3>{car.name}</h3>
          </div>
          <CarRoadContainer car={car} isRaced={isRaced} velocity={velocity} isBroken={isBroken} />
        </div>
      </section>
    </div>
  );
};
