const headers = document.querySelectorAll('[data-name="accordion-title"]');
console.log(headers);

headers.forEach(function(item){

   console.log(item);

   item.addEventListener('click', function(){

     console.log(this);
     console.log(this.nextElementSibling);

     this.nextElementSibling.classList.toggle('nidden');//nextElementSibling.classList следующий жлемент добавляет или убирает класс 

   })

})