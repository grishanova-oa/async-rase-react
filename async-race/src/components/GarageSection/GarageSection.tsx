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
  onSelect: (car: ICar) => void;
  onRemove: (id: number) => void;
}
export const GarageSection = ({ car, isRaced, velocity, onSelect, onRemove }: IGarageSection) => {
  return (
    <div className="garage">
      <section className="garage__section">
        <div className="car-container">
          <div className="car-container__btn">
            <BtnStartBack isRaced={isRaced} />
            <BtnSelectRemove car={car} onRemove={onRemove} onSelect={onSelect} isRaced={isRaced} />
            <h3>{car.name}</h3>
          </div>
          <CarRoadContainer car={car} isRaced={isRaced} velocity={velocity} />
        </div>
      </section>
    </div>
  );
};
