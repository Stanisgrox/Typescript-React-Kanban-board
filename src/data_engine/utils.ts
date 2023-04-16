//  Функция получения integer ID массива из полей для столбиков
export function getIDArray (id:string):number[] {
    id = id.toLowerCase();
    return JSON.parse(localStorage.getItem(id.toLowerCase()) || '{}');
}