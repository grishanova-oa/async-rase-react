import React, { useState, useEffect } from 'react';
import { CarApi } from './Api';
import { Header } from './components/Header';
import { Main } from './components/Main';
import { ModuleControl } from './components/ModuleControl';
import { generatedCars } from './generatedCars';
import './styles.css';
import { ICar } from './types';

const api = new CarApi('http://localhost:3000');

export const App: React.FC = () => {
  const [isRaced, setIsRaced] = useState<boolean>(false);
  const [garageData, setGarageData] = useState<ICar[]>([]);
  const [velocities, setVelocities] = useState<Record<number, number>>({});
  const [brokenEngines, setBrokenEngines] = useState<number[]>([]);
  const [selectedCar, setSelectedCar] = useState<ICar | null>(null);
  const [page, setPage] = useState<number>(1);
  const [winner, setWinner] = useState<ICar | null>(null);

  const startEngine = () => {
    const valKeys = Object.entries(velocities);
    const [winnerId] = valKeys.sort((first, second) => first[1] - second[1])[0];
    const winnerCar = garageData.find((car) => car.id === +winnerId);
    if (winnerCar) {
      setTimeout(() => {
        setWinner(winnerCar);
      }, velocities[winnerCar?.id] * 100);
    }
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

  const updateGarage = async () => {
    const data: ICar[] = await api.loadGarage(page);
    setGarageData(data);
  };

  useEffect(() => {
    async function fetchMyAPI2() {
      const data: ICar[] = await api.loadGarage(page);
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

  const onCreateCar = async (name: string, color: string) => {
    const res = await api.createCar(name, color);

    if (res) {
      updateGarage();
    }
  };

  const onSelect = (car: ICar) => setSelectedCar(car);
  const onUpdateCar = async (carName: string, color: string) => {
    const id = selectedCar?.id || 0;
    const res = await api.updateCar(carName, color, id);

    if (res) {
      updateGarage();
      setSelectedCar(null);
    }
  };

  const onRemove = async (id: number) => {
    const res = await api.deleteCar(id);

    if (res) {
      updateGarage();
    }
  };

  const onGenerateCars = async () => {
    const promisesList = generatedCars.map((car) => api.createCar(car.name, car.color));

    const res = await Promise.all(promisesList);

    if (res) {
      updateGarage();
    }
  };

  const onPaginationClick = (value: boolean) => {
    if (value) {
      setPage(page + 1); // Needs to correct
    } else {
      const newPage = page === 1 ? 1 : page - 1;
      setPage(newPage);
    }

    updateGarage();
  };

  return (
    <div className="App">
      <Header />
      <ModuleControl
        onUpdateCar={onUpdateCar}
        selectedCar={selectedCar}
        setIsRaced={setIsRaced}
        onCreateCar={onCreateCar}
        onGenerateCars={onGenerateCars}
      />
      {winner && <div>Winner is {winner.name}</div>}
      <Main
        page={page}
        isRaced={isRaced}
        garageData={garageData}
        velocities={velocities}
        brokenEngines={brokenEngines}
        onSelect={onSelect}
        onRemove={onRemove}
        onPaginationClick={onPaginationClick}
      />
    </div>
  );
};

export default App;
