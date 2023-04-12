const ID_LIMIT = 1000;


const mockWriter = () =>{
    localStorage.setItem('ready', '[2]');
    localStorage.setItem('in progress', '[3]');
    localStorage.setItem('finished', '[4]');
    cardCreator('new card');
}

//Функция для записи  карточки
const cardCreator = (name:string) => {
    //Последовательные ID не безопасны, поэтому генерируется случайное число.
    let newId = Math.floor(Math.random()*ID_LIMIT);
    //Если этот ID уже встречается, то генерируется новое число.
    while (localStorage.getItem(newId.toString())) {
        newId = Math.floor(Math.random()*ID_LIMIT);
    }
    //Карточка записывается в формате ID: объект
    localStorage.setItem(newId.toString(),'{"name": "' + name +'", "description": "This task has no description"}');

    //В массив ID карточек backlog записывается ID новой карточки
    let keyDatabase = JSON.parse(localStorage.getItem('backlog') || '{}');
    keyDatabase.push(newId);
    localStorage.setItem('backlog', JSON.stringify(keyDatabase))
}

export default mockWriter;