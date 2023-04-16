import React from 'react';
import Header from './components/header/header';
import * as storage from './data_engine/localstorage';
import MainRouter from './components/router/router';

//Конфигурация - названия групп карточек.
export const FIRST_COLOUMN = 'Backlog';
export const SECOND_COLOUMN = 'Ready';
export const THIRD_COLOUMN = 'In Progress';
export const FOURTH_COLOUMN = 'Finished';

function App() {
  //Функция для первоначальной настройки localstorage
  storage.storageStartup();
  
  return (
    <div className="App">
      <Header />
      <MainRouter />
    </div>
  );
}

export default App;
