import React, { useState, useEffect } from 'react';
import { CarApi } from './Api';
import { Header } from './components/Header';
import { Main } from './components/Main';
import { ModuleControl } from './components/ModuleControl';
import { WinnersSection } from './components/WinnersSection';
import { generatedCars } from './generatedCars';
import './styles.css';
import { ICar, IWinner } from './types';

const api = new CarApi('http://localhost:3000');

export const App: React.FC = () => {
  const [isRaced, setIsRaced] = useState<boolean>(false);
  const [garageData, setGarageData] = useState<ICar[]>([]);
  const [velocities, setVelocities] = useState<Record<number, number>>({});
  const [brokenEngines, setBrokenEngines] = useState<number[]>([]);
  const [selectedCar, setSelectedCar] = useState<ICar | null>(null);
  const [page, setPage] = useState<number>(1);
  const [winner, setWinner] = useState<ICar | null>(null);
  const [isOpenGarage, setIsOpenGarage] = useState(false);
  const [allCarsCount, setAllCarsCount] = useState<number>(0);
  const [newWinner, setAddNewWinner] = useState<ICar[]>([]);
  const [winnersList, setWinnersList] = useState<IWinner[]>([]);

  const createWinner = async (data: IWinner) => {
    const isWinnersContain = winnersList.find((car) => car.id === data.id);

    if (isWinnersContain) {
      await api.updateWinner(data);
    } else {
      await api.createWinner(data);
    }
    const winners = await api.getWinners();

    setWinnersList(winners);
  };

  const startWinnerCount = () => {
    const valKeys = Object.entries(velocities);
    const [winnerId] = valKeys.sort((first, second) => first[1] - second[1])[0];
    const winnerCar = garageData.find((car) => car.id === +winnerId);
    if (winnerCar) {
      setTimeout(() => {
        setWinner(winnerCar);
        newWinner.push(winnerCar);
        setAddNewWinner(newWinner);
      }, velocities[winnerCar?.id] * 80);

      const win = winnersList.find((car) => car.id === winnerCar.id);
      const wins = win ? win.wins + 1 : 1;
      createWinner({ id: winnerCar.id, wins, time: velocities[winnerCar.id] });
    }
  };

  const startEngine = (carList: ICar[] | { id: number }[]) => {
    carList.forEach(async (car) => {
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
      startEngine(garageData);
      startWinnerCount();
    }
  }, [isRaced]);

  const updateGarage = async (actualPage = page) => {
    const data: ICar[] = await api.loadGarage({ actualPage });
    setGarageData(data);

    const allCars: ICar[] = await api.loadGarage({ allCars: true });
    setAllCarsCount(allCars.length);
  };

  const countVelocity = () => {
    const newVelocities: Record<number, number> = {};

    garageData.forEach(async (car) => {
      const { velocity } = await api.patchVelocity(car.id);

      newVelocities[car.id] = velocity;

      setVelocities(newVelocities);
    });
  };

  useEffect(() => {
    countVelocity();
  }, [garageData]);

  useEffect(() => {
    async function fetchMyAPI2() {
      const data: ICar[] = await api.loadGarage({ actualPage: page });
      setGarageData(data);

      const allCars: ICar[] = await api.loadGarage({ allCars: true });
      setAllCarsCount(allCars.length);

      countVelocity();

      const winners = await api.getWinners();

      setWinnersList(winners);
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

  const onReset = () => {
    setWinner(null);
    countVelocity();
  };

  const onPaginationClick = (value: boolean) => {
    if (value) {
      const lastPage = Math.ceil(allCarsCount / 7);
      if (page < lastPage) {
        setPage(page + 1);
        updateGarage(page + 1);
      }
    } else {
      const newPage = page === 1 ? 1 : page - 1;
      setPage(newPage);
      updateGarage(newPage);
    }
  };

  return (
    <div className="App">
      <Header setIsOpenGarage={setIsOpenGarage} isRaced={isRaced} />
      {!isOpenGarage && (
        <ModuleControl
          onUpdateCar={onUpdateCar}
          selectedCar={selectedCar}
          setIsRaced={setIsRaced}
          onCreateCar={onCreateCar}
          onGenerateCars={onGenerateCars}
          onReset={onReset}
          isRaced={isRaced}
        />
      )}
      {winner && <div className="winner-name">Winner is {winner.name}</div>}
      {isOpenGarage && <WinnersSection winnersList={winnersList} garageData={garageData} />}

      {!isOpenGarage && (
        <Main
          allCarsCount={allCarsCount}
          page={page}
          isRaced={isRaced}
          garageData={garageData}
          velocities={velocities}
          onSelect={onSelect}
          onRemove={onRemove}
          onPaginationClick={onPaginationClick}
        />
      )}
    </div>
  );
};

export default App;
