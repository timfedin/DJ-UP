// Получаем ссылку на модальное окно и кнопку закрытия
var modal1 = document.getElementById("myModaltwo");
var btn2 = document.getElementsByClassName("signo")[0];
var span = document.getElementsByClassName("closetwo")[0];
var sign = document.getElementsByClassName("sig")[0];

// Когда пользователь кликает на ссылку, открываем модальное окно
btn2.onclick = function() {
    modal1.style.display = "block";
    document.body.style.overflow = "hidden"; // Запрещаем прокрутку фона
}
sign.onclick = function() {
    modal1.style.display = "none";
    modal.style.display = "block";
    document.body.style.overflow = "hidden"; // Запрещаем прокрутку фона
}



// Когда пользователь кликает на кнопку закрытия, закрываем модальное окно
span.onclick = function() {
    modal1.style.display = "none";
    document.body.style.overflow = "auto"; // Разрешаем прокрутку фона
}
