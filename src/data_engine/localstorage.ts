const ID_LIMIT = 1000;


//Функция первоначальной настройки localstorage
const storageStartup = () => {
    if (localStorage.getItem('setted')) return
    localStorage.setItem('setted','true');
    localStorage.setItem('backlog','[]')
    localStorage.setItem('ready', '[]');
    localStorage.setItem('in progress', '[]');
    localStorage.setItem('finished', '[]');
}


const buttonHandler = (event: React.MouseEvent<HTMLElement>) =>{ 
    const buttonRole = (event.target as HTMLButtonElement).getAttribute('data-role');
    switch (buttonRole) {
        case 'backlog':
            cardCreator('new card');
        break;
        case 'ready':
            alert('ready');
        break;
        case 'in progress':
            alert('in progress');
        break;
        case 'finished':
            alert('finished');
        break;
    }
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

/*
const cardMover = (from:string, cardId:number) => {
    
}
*/

export {storageStartup, buttonHandler};