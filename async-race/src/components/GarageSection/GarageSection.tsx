import React from 'react';
import { IGarage } from '../../types';
import { BtnSelectRemove } from '../BtnSelectRemove';
import { BtnStartBack } from '../BtnStartBack';
import { CarRoadContainer } from '../CarRoadContainer';
import './GarageSectionStyles.css';

interface IGarageSection {
  car: IGarage;
  isRaced: boolean;
  velocity: number;
  isBroken: boolean;
}
export const GarageSection = ({ car, isRaced, velocity, isBroken }: IGarageSection) => {
  return (
    <div className="garage">
      <section className="garage__section">
        <div className="car-container">
          <div className="car-container__btn">
            <BtnStartBack />
            <BtnSelectRemove />
            <h3>{car.name}</h3>
          </div>
          <CarRoadContainer car={car} isRaced={isRaced} velocity={velocity} isBroken={isBroken} />
        </div>
      </section>
    </div>
  );
};
