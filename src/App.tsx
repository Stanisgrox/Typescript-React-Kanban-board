import React from 'react';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import CardBlock from './components/card-block/card-block';
import * as storage from './data_engine/localstorage';

/*
export interface Cards {
  card: {
    id: number,
    name: string,
    description: string,
    coloumn: string
  }[]
}
*/

//Конфигурация - названия групп карточек.
export const FIRST_COLOUMN = 'Backlog';
export const SECOND_COLOUMN = 'Ready';
export const THIRD_COLOUMN = 'In Progress';
export const FOURTH_COLOUMN = 'Finished';

function App() {
  //Функция для первоначальной настройки localstorage
  storage.storageStartup();
  
  //const [cards, changeCards] = useState<Cards["card"]>([]);

  return (
    <div className="App">
      <Header />
      <main className = 'card-wrapper'>
        <CardBlock cardname = {FIRST_COLOUMN} />
        <CardBlock cardname = {SECOND_COLOUMN} />
        <CardBlock cardname = {THIRD_COLOUMN} />
        <CardBlock cardname = {FOURTH_COLOUMN} />
      </main>
      <Footer active={1} finished={1} author = '<NAME>' year={2023} />
    </div>
  );
}

export default App;
