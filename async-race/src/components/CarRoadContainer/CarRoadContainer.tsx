// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import React, { useRef, useState } from 'react';
import { ICar } from '../../types';
import './CarRoadContainerStyles.css';

interface ICarRoad {
  car: ICar;
  isRaced: boolean;
  velocity: number;
}
export const CarRoadContainer = ({ car, isRaced, velocity = 10 }: ICarRoad) => {
  const ref: React.RefObject<HTMLDivElement> = useRef(null);
  const [some, setSome] = useState('running');

  const left = isRaced ? '90%' : '1%';
  const transition = isRaced ? `${velocity / 10}s` : '0s';

  React.useEffect(() => {
    setTimeout(() => {
      setSome('paused');
    }, 12000);
  }, []);

  return (
    <div className="car-road__container">
      <div
        className="inner"
        style={{
          background: `${car.color}`,
          left,
          transition,
          animationPlayState: `${some}`,
        }}
        ref={ref}
      />
    </div>
  );
};
