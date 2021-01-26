const aumento = document.getElementById('aumento');
const diminuisci = document.getElementById('diminuisco');
const numeri = document.querySelector('span')
let contatore = 0;



aumento.addEventListener('click', () =>{
        numeri.innerText = ++contatore;
})


diminuisci.addEventListener('click', () =>{
        if(contatore <= 0 ){
          return contatore = 0;
        }
        else {
          numeri.innerText = --contatore;
        }


})
