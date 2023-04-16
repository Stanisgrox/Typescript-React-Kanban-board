# React+Typescript канбан

Простая доска-канбан с четыремя полями, сохраняющая данные в LocalStorage.

## Возможность конфигурации
Есть возможность настроить названия полей. Для этого надо изменить значения констант в App.tsx: FIRST_COLOUMN, SECOND_COLOUMN, THIRD_COLOUMN, FOURTH_COLOUMN. После изменения значений констант нужно вручную отчистить LocalStorage для исправной работы.

## Структура данных
Данные, хранящиеся в LocalStorage разбиты на 2 категории: каталог карточек и подробные данные карточек.

Каталог карточек является парой "название стобца" : "массив ID карточек", где в массиве ID хранятся integer идентификаторы карточек, содержащихся в этом столбце.

Подробные данные карточек являются парой "ID карточки"  : "JSON-объект". В JSON хранятся значения name - название карточки и descripton - подробное описание задачи. Так же можно добавить в структуру данных такие вариации как цвет фона карточки для более наглядного отображения задачи на доске, но для этого придется доработать поля ввода, например добавив Input для HEX-кода цвета.

### БД - подобная структура данных
Структура данных больше всего похожа на БД MySQL, при определенных доработках, Backend доски может быть перенесен на сервер с любой SQL базой данных для синхронизации между клиентами.

##Редактирование подробного описания задачи

-На данный момент не имплементировано
