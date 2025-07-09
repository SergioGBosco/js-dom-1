//definisco le variabili e le collego a gli elementi prensenti all'interno dell'html 
const lamp = document.getElementById(`lamp`)
const button = document.getElementById(`switch`)

//creo la funzione che mi permette di cliccare il bottone e contemporaneamente questo mi cambia l'immagine 
button.addEventListener(`click`, function () {

  //con questa funzione vado a modificare direttamente il valore del src cosi da alternare l'immagine


  // lamp.src = (`img/yellow_lamp.png`)

  //creo la condizione per permettere alla lampadina di essere accesa o spenta ad ogni click

  //se la lampadina è accesa, la spengo, altrimenti l'accendo 

  if (lamp.src.includes(`img/yellow_lamp.png`)) {
    lamp.src = `img/white_lamp.png`
  }
  else
    lamp.src = `img/yellow_lamp.png`




})