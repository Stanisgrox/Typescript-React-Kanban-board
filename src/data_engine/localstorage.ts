import { FIRST_COLOUMN, SECOND_COLOUMN, THIRD_COLOUMN, FOURTH_COLOUMN } from "../App";
import { previousCard } from "../components/card-block/card-block";

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

const buttonHandler = (buttonRole: string, cardName:string) =>{ 
    switch (buttonRole) {
        case FIRST_COLOUMN.toLowerCase():
            if (cardName) cardCreator(cardName);
        break;
        case SECOND_COLOUMN.toLowerCase():
            cardMover(buttonRole, cardName)
        break;
        case THIRD_COLOUMN.toLowerCase():
            cardMover(buttonRole, cardName)
        break;
        case FOURTH_COLOUMN.toLowerCase():
            cardMover(buttonRole, cardName)
        break;
    }
}

//Функция удаления элемента из массива
function removeItem<T>(arr: Array<T>, value: T): Array<T> { 
    const index = arr.indexOf(value);
    if (index > -1) {
        arr.splice(index, 1);
    }
    return arr;
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

const getCardInfo  = (cardId: string) => {
    let cardData = JSON.parse(localStorage.getItem(cardId) || '{}');
    return cardData;
}

const cardMover = (currentCard:string, cardId:string) => {
    let moveFrom = previousCard(currentCard).toLowerCase();
    let keyDatabase = JSON.parse(localStorage.getItem(moveFrom.toLowerCase()) || '{}');
    keyDatabase = removeItem(keyDatabase, Number(cardId));
    //Удаление карточки из LocalStorage
    localStorage.setItem(moveFrom, JSON.stringify(keyDatabase));
    //Обновление массива новой колонки
    keyDatabase = JSON.parse(localStorage.getItem(currentCard.toLowerCase()) || '{}');
    keyDatabase.push(Number(cardId));
    localStorage.setItem(currentCard.toLowerCase(), JSON.stringify(keyDatabase))
}

const finishedCounter = ():number => {
    let finishedKeys = JSON.parse(localStorage.getItem(FOURTH_COLOUMN.toLowerCase()) || '{}');
    let counter: number =  0;
    finishedKeys.forEach(() => {
        counter++;
    });
    return counter;
}

export {storageStartup, buttonHandler, prepareCards, getCardInfo, finishedCounter};