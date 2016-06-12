# Урок 5 - Взаимодействие с API и Flux

[мини-тест по содержанию урока (5 минут)](http://itsquiz.com/activations/575824c2a26fab800747629a?ref=reactjs-essential)

## Резюме

## Вопросы к самопроверке

 - Что такое архитектура Flux?
 - Как происходит взаимодействие с данными во Flux?
 - Для чего нужны константы в Flux?
 - За что отвечает Dispatcher?

## Примеры из видео

 - Almost google tasks [[код]](/05-flux/00-tasks-app)

## Материалы

**Flux**

 - [Oфициальный сайт](https://facebook.github.io/flux/)

Google API

 - https://console.developers.google.com/iam-admin/projects
 - https://developers.google.com/google-apps/tasks/v1/reference

Дополнительно

 - [Библиотека material-ui](http://material-ui.com)

## Домашнее задание

**Задание 1 : Удаление задач**

_Уровень сложности: низкий_

Нужно реализовать удаление задач из списка (по клику в меню) и при редактировании. Для этого нужно создать методы для API, константы, экшены и обработчики в сторах.

Документация: https://developers.google.com/google-apps/tasks/v1/reference/tasks/delete

**Задание 2 : Выделение выбранного списка задач**

_Уровень сложности: низкий_

В меню слева должен подсвечиваться выбранный список. Почитайте в документации react-router о том, как можно это сделать.

**Задание 3 : Отображение названия выбранного списка**

_Уровень сложности: средний_

Вверху списка задач должно отображаться название открытого списка.

Документация: https://developers.google.com/google-apps/tasks/v1/reference/tasklists/get

**Задание 4 : Срок и описание задач**

_Уровень сложности: высокий_

При создании (и, соответственно, редактировании) задач должна быть возможность добавить к ним описание и срок выполнения. Используйте компоненты material-ui. Также подумайте, как это лучше отобразить в приложении при просмотре списка.

Создание задачи: https://developers.google.com/google-apps/tasks/v1/reference/tasks/insert

Изменение задачи: https://developers.google.com/google-apps/tasks/v1/reference/tasks/update

Компонент для выбора даты: http://www.material-ui.com/v0.14.4/#/components/date-picker

**Задание 5 : Редактирование и удаление списков**

_Уровень сложности : высокий_

При открытии списка вверху (рядом с кнопкой для добавления задачи) должны быти кнопки для редактирования и удаления открытого списка. Предусмотрите обновление информации о списке в приложении после ее изменения. Также добавьте диалог с предупреждением при удалении списка.

Изменение списка: https://developers.google.com/google-apps/tasks/v1/reference/tasklists/update

Удаление списка: https://developers.google.com/google-apps/tasks/v1/reference/tasklists/delete

**Если есть вопросы [пишите сюда](https://github.com/krambertech/react-essential-course/issues/new)**
