import { FIRST_COLOUMN, SECOND_COLOUMN, THIRD_COLOUMN, FOURTH_COLOUMN } from "../App";

const ID_LIMIT = 1000;


//Функция первоначальной настройки localstorage
const storageStartup = () => {
    if (localStorage.getItem('setted')) return
    localStorage.setItem('setted','true');
    localStorage.setItem(FIRST_COLOUMN.toLowerCase(),'[]')
    localStorage.setItem(SECOND_COLOUMN.toLowerCase(), '[]');
    localStorage.setItem(THIRD_COLOUMN.toLowerCase(), '[]');
    localStorage.setItem(FOURTH_COLOUMN.toLowerCase(), '[]');
}


const buttonHandler = (event: React.MouseEvent<HTMLElement>) =>{ 
    const buttonRole = (event.target as HTMLButtonElement).getAttribute('data-role');
    switch (buttonRole) {
        case FIRST_COLOUMN.toLowerCase():
            cardCreator('new card');
        break;
        case SECOND_COLOUMN.toLowerCase():
            alert('ready');
        break;
        case THIRD_COLOUMN.toLowerCase():
            alert('in progress');
        break;
        case FOURTH_COLOUMN.toLowerCase():
            alert('finished');
        break;
    }
}

//Функция для записи  карточки
const cardCreator = (name: string) => {
    //Последовательные ID не безопасны, поэтому генерируется случайное число.
    let newId = Math.floor(Math.random()*ID_LIMIT);
    //Если этот ID уже встречается, то генерируется новое число.
    while (localStorage.getItem(newId.toString())) {
        newId = Math.floor(Math.random()*ID_LIMIT);
    }
    //Карточка записывается в формате ID: объект
    localStorage.setItem(newId.toString(),'{"name": "' + name +'", "description": "This task has no description"}');

    //В массив ID карточек backlog записывается ID новой карточки
    let keyDatabase = JSON.parse(localStorage.getItem(FIRST_COLOUMN.toLowerCase()) || '{}');
    keyDatabase.push(newId);
    localStorage.setItem(FIRST_COLOUMN.toLowerCase(), JSON.stringify(keyDatabase))
}

//Не смотря на то, что в LocalStorage записывается валидный массив, TypeScript не позволяет применять к нему методы работы с массивами
//Потому программа обрабатывает массив в LocalStorage как строку
const arrayBuilder = (name: string) => {
    let string: string;
    string = localStorage.getItem(name) || '';
    string = string?.replace('[','');
    string = string?.replace(']','');
    let array = string.split(',');
    return array;
}

const prepareCards = (colName: string) => {
    let array_of_indexes = arrayBuilder(colName);
    return array_of_indexes;
}


/*
const cardMover = (from:string, cardId:number) => {
    
}
*/

export {storageStartup, buttonHandler, prepareCards};