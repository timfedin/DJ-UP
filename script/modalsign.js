// Получаем ссылку на модальное окно и кнопку закрытия
var modal = document.getElementById("myModal");
var btn2 = document.getElementsByClassName("sign")[0];
var span = document.getElementsByClassName("close")[0];
var reg = document.getElementsByClassName("reg")[0];

// Когда пользователь кликает на ссылку, открываем модальное окно
btn2.onclick = function() {
    modal.style.display = "block";
    document.body.style.overflow = "hidden"; // Запрещаем прокрутку фона
}
reg.onclick = function() {
    modal.style.display = "none";
    modal1.style.display = "block";
    
    document.body.style.overflow = "hidden"; // Запрещаем прокрутку фона
}

// Когда пользователь кликает на кнопку закрытия, закрываем модальное окно
span.onclick = function() {
    modal.style.display = "none";
    document.body.style.overflow = "auto"; // Разрешаем прокрутку фона
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        document.body.style.overflow = "auto"; // Разрешаем прокрутку фона
    }
    if (event.target == modal1) {
        modal1.style.display = "none";
        document.body.style.overflow = "auto"; // Разрешаем прокрутку фона
    }
}