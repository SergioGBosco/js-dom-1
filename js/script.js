//definisco le variabili e le collego a gli elementi prensenti all'interno dell'html 
const lamp = document.getElementById(`lamp`)
const button = document.getElementById(`switch`)

//creo la funzione che mi permette di cliccare il bottone e contemporaneamente questo mi cambia l'immagine 
button.addEventListener(`click`, function () {

  //con questa funzione vado a modificare direttamente il valore del src cosi da alternare l'immagine
  //creo la condizione per permettere alla lampadina di essere accesa o spenta ad ogni click

  lamp.src = (`img/yellow_lamp.png`)

  // if (lamp.src.contains(`img/yellow_lamp.png`)) {
  //   lamp.src.add(`img/white_lamp.png`);
  //   lamp.src.remove(`img/yellow_lamp.png`)
  // }
  // else (lamp.src.contains(`img/white_lamp.png`))
  // lamp.src.add(`img/yellow_lamp.png`);
  // lamp.src.remove(`img/white_lamp.png`)



})