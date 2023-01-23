import React, { useState, useEffect } from 'react';
import { CarApi } from './Api';
import { Header } from './components/Header';
import { Main } from './components/Main';
import { ModuleControl } from './components/ModuleControl';
import './styles.css';
import { IGarage } from './types';

const api = new CarApi('http://localhost:3000');

export const App: React.FC = () => {
  const [isRaced, setIsRaced] = useState<boolean>(false);
  const [garageData, setGarageData] = useState<IGarage[]>([]);
  const [velocities, setVelocities] = useState<Record<number, number>>({});
  const [brokenEngines, setBrokenEngines] = useState<number[]>([]);

  const startEngine = () => {
    garageData.forEach(async (car) => {
      const newBrokenEngines = [...brokenEngines];
      const { success } = await api.patchEngineDriveMode(car.id);

      if (!success) {
        newBrokenEngines.push(car.id);

        setBrokenEngines(newBrokenEngines);
      }
    });
  };

  useEffect(() => {
    if (isRaced) {
      startEngine();
    }
  }, [isRaced]);

  useEffect(() => {
    async function fetchMyAPI2() {
      const data: IGarage[] = await api.loadGarage();
      setGarageData(data);

      const newVelocities: Record<number, number> = {};

      data.forEach(async (car) => {
        const { velocity } = await api.patchVelocity(car.id);

        newVelocities[car.id] = velocity;

        setVelocities(newVelocities);
      });
    }

    fetchMyAPI2();
  }, []);

  return (
    <div className="App">
      <Header />
      <ModuleControl setIsRaced={setIsRaced} />
      <Main
        isRaced={isRaced}
        garageData={garageData}
        velocities={velocities}
        brokenEngines={brokenEngines}
      />
    </div>
  );
};

export default App;
