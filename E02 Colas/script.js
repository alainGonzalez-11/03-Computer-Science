/*
1.- Se tiene una cola de colores y se tiene que dividir en dos colas, respetando el orden y alternando a partir de su índice. los pares en una y los nones en otra.
Cola original: [ amarillo, rosa, rojo, verde, azul, negro, morado, blanco]
Cola 1: [ amarillo, rojo, azul, morado]
Cola 2: [rosa, verde, negro, blanco]
*/
document.getElementById("T01").addEventListener("click", task1);

function task1() {
  let colas =     recortarPila([
      "amarillo",
      "rosa",
      "rojo",
      "verde",
      "azul",
      "negro",
      "morado",
      "blanco",
    ]);
  alert('Cola 1: ' + colas[0]);
  alert('Cola 2: ' + colas[1]);
}

function recortarPila(cola) {
  colaimpares = [];
  colaPares = [];
  let iteraciones = cola.length;
  for (let index = 0; index < iteraciones; index++) {
    if (index % 2 == 0) {
      colaPares.push(cola.shift());
    } else {
      colaimpares.push(cola.shift());
    }
    
  }
  return [colaPares, colaimpares];
}
