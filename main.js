/*let corn = 4;
let Name = `maria`;
console.log(corn + 2);
console.log(Name);
console.log(10 < 5);
console.log(`10` == 10);

13 < 12 ? console.log(`verno`) : console.log(`ne verno`)

function sayHi(){
   console.log('Hi friend')
}
sayHi()

function say(){
   alert('hi my friend');
}
say()*/

const button = document.querySelector('.button');//document.querySelector находим элемент в дом
console.log(button);
const open = document.querySelector('#content');
console.log(open);


button.addEventListener("click", function () { // addEventListener("click" прослушивает событие клик

   console.log('click!!!');
   content.classList.toggle('title_close'); //toggle работает как выключатель,добавляет или убирает класс

   if(content.classList.contains('title_close')){ //contains возвращает тру или фолс в зависимости есть такой класс или нет 
      button.textContent = "Открыть блок"; // textContent с помощью него можно добраться до текста в блоке и поменять его
   }else{
      button.textContent = "Закрыть блок";
   }

});
