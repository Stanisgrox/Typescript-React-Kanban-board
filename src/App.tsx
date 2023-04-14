import React, { useState } from 'react';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import CardBlock from './components/card-block/card-block';
import TaskCardWrapper from './components/task-card/task-card';
import * as storage from './data_engine/localstorage';


export interface Cards {
  card: {
    id: number,
    name: string,
    description: string,
    coloumn: string
  }[]
}


//Конфигурация - названия групп карточек.
export const FIRST_COLOUMN = 'Backlog';
export const SECOND_COLOUMN = 'Ready';
export const THIRD_COLOUMN = 'In Progress';
export const FOURTH_COLOUMN = 'Finished';

function App() {
  //Функция для первоначальной настройки localstorage
  storage.storageStartup();

  const [makingCard, makeCard] = useState(false);
  const [cards, changeCards] = useState<Cards["card"]>([]);

  return (
    <div className="App">
      <Header />
      <main className = 'card-wrapper'>
        <CardBlock cardname = {FIRST_COLOUMN}>
          <TaskCardWrapper cards = {storage.prepareCards(FIRST_COLOUMN.toLowerCase())} />
        </CardBlock>
        <CardBlock cardname = {SECOND_COLOUMN}>
          <TaskCardWrapper cards = {storage.prepareCards(SECOND_COLOUMN.toLowerCase())} />
        </CardBlock>
        <CardBlock cardname = {THIRD_COLOUMN}>
          <TaskCardWrapper cards = {storage.prepareCards(THIRD_COLOUMN.toLowerCase())} />
        </CardBlock>
        <CardBlock cardname = {FOURTH_COLOUMN}>
          <TaskCardWrapper cards = {storage.prepareCards(FOURTH_COLOUMN.toLowerCase())} />
        </CardBlock>
      </main>
      <Footer active={1} finished={1} author = '<NAME>' year={2023} />
    </div>
  );
}

export default App;
