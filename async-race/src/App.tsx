import React from 'react';
import { Header } from './components/Header';
import { Main } from './components/Main';
import { ModuleControl } from './components/ModuleControl';
import './styles.css';

export const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <ModuleControl />
      <Main />
    </div>
  );
};

export default App;
