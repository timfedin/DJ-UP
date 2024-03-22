let user = document.getElementsByClassName('sign')[0];
let userTable = document.getElementsByClassName('userTable')[0];
let tel = "+7 925 777 22-44";

user.onclick = function(event) {
    event.stopPropagation(); // Предотвращаем всплытие события клика
    if (userTable.style.display === 'flex') {
        userTable.style.display = 'none'; // Закрываем userTable, если он уже открыт
    } else {
        userTable.style.display = 'flex'; // Иначе открываем userTable
    }
};

window.onclick = function(event) {
    if (event.target !== userTable && userTable.style.display === 'flex') {
        userTable.style.display = 'none';
    }
};

// Добавляем обработчик клика для userTable
userTable.onclick = function(event) {
    event.stopPropagation(); // Предотвращаем всплытие события клика
};



//  теперь само модальное окно

document.getElementsByClassName('tel')[0].textContent = tel