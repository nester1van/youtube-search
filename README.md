# youtube-search
[Live demo](https://youtube-search-five.vercel.app)

Проект построен на стеке ***React - Redux*** , для маршрутизации использовался ***react-router-dom*** . 
При реализации интерфейса использована UI-библиотека  ***react-bootstrap***. 
Для получения данных использовался ***Youtube API***, запросы выполнены с помощью ***axios***.
Видео на странице поиска реализовано с помощью ***react-youtube***.
Использована методология ***БЭМ***.

Для авторизации на сайте использовать:

  login: user1
  
  password: pw1

или

  login: user2
  
  password: pw2

\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

 ## Реализация SPA
В данном проекте реализовано приложение для поиска
youtube-видео по ключевым словам, а также сохранение запросов
поиска. 

### Ключевые моменты

1. Реализована страница авторизации пользователя с формой входа:
логин, пароль. Для аутентификации использован
json-файл со списком пользователей. После входа,
генерируется и сохраняется токен. Полученный токен
используется для авторизации - проверка наличия токена в
localStorage, если токена нет, значит пользователь не
авторизован (видит только страницу авторизации).

2. После авторизации пользователь попадает на главную
страницу сервиса, на которой расположена строка поиска.
Реализовать поиск youtube-видео, при помощи
Youtube API. Результаты поиска выведены на той же странице в
виде карточек видео (подобно тому, как оно реализовано в
youtube). Список видео может принимать два вида: список (одно
видео в строку с описанием) и карточки (несколько видео в
строку). По умолчанию выведено 12 видео в виде
списка.

3. Также, в приложении реализована страница
“Сохраненные запросы”, на которой выводится список
сохраненных запросов. Запросы этого списка можно
редактировать, удалить или выполнить.
Чтобы выполнить запрос, необходимо нажать кнопку “Выполнить”,
после чего происходит переход на главную страницу, на которой
отображаются результаты запроса, при этом, количество
выводимых видео равно количеству, указанному при сохранении
запроса (см. ниже, Максимальное количество)
Для сохранения запроса необходимо нажать в строке поиска на
главной странице иконку “Сохранить поиск”, при нажатии на
 открывается форма.
В форме заранее заполнено значение из строки поиска в
неизменяемом поле “Запрос” и отображается пустое поле
“Название”, а также дополнительные пустые поля: Сортировать
по (выпадающий список, доступные значения взяты из API
YouTube), Максимальное количество (числовое значение от 0 до
50).
Пользователь должен ввести название запроса, и, после этого,
может сохранить запрос, остальные поля - опциональные, т.е.
могут быть не заполнены.
Редактирование запроса происходит по нажатию на кнопку
“Редактировать”. После этого открывается форма
редактирования. При редактировании запроса можно изменять все поля формы,
включая сам запрос.

4. Реализован выход пользователя из сервиса.

5. После повторного входа пользователя отображаются сохраненные запросы. 
Если пользователь - другой, то
отображаются запросы соответствующие для него (другого). Для
хранения использован localStorage браузера. 
