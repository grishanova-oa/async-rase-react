// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import React, { useRef, useState } from 'react';
import { ICar } from '../../types';
import './CarRoadContainerStyles.css';

interface ICarRoad {
  car: ICar;
  isRaced: boolean;
  velocity: number;
  isBroken: boolean;
}
export const CarRoadContainer = ({ car, isRaced, velocity = 10, isBroken }: ICarRoad) => {
  const ref: React.RefObject<HTMLDivElement> = useRef(null);
  const [some, setSome] = useState('running');

  const left = isRaced ? '90%' : '1%';

  //   const animate = (time) => {
  //     // The 'state' will always be the initial value here
  //     ref.current = requestAnimationFrame(animate);
  //   };

  React.useEffect(() => {
    //   ref.current = requestAnimationFrame(animate);

    setTimeout(() => {
      setSome('paused');
    }, 12000);
  }, []);

  if (isBroken) {
    // left = getComputedStyle(ref.current).left;
    console.log('@@@@@@', left);
  }

  return (
    <div className="car-road__container">
      <div
        className="inner"
        style={{
          background: `${car.color}`,
          left,
          transition: `${velocity / 10}s`,
          animationPlayState: `${some}`,
        }}
        ref={ref}
      />
    </div>
  );
};
