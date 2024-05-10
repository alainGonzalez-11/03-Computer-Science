/*
1.- Se tiene una cola de colores y se tiene que dividir en dos colas, respetando el orden y alternando a partir de su índice. los pares en una y los nones en otra.
Cola original: [ amarillo, rosa, rojo, verde, azul, negro, morado, blanco]
Cola 1: [ amarillo, rojo, azul, morado]
Cola 2: [rosa, verde, negro, blanco]
*/
document.getElementById("T01").addEventListener("click", task1);

function task1() {
  let colas = recortarPila([
    "amarillo",
    "rosa",
    "rojo",
    "verde",
    "azul",
    "negro",
    "morado",
    "blanco",
  ]);
  alert("Cola 1: " + colas[0]);
  alert("Cola 2: " + colas[1]);
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

/*
2.- Se tiene una cola en la cual se han repartido tickets con el orden de atención. Sin embargo, llegada la hora de inicio hay muchos “colados”, es por esto que se le ordena al vigilante que retire a todos aquellos que no tienen ticket. Muestra la cola inicial, qué elementos fueron retirados de la cola y la cola final.
Sugerencia: desencolar cada elemento, si tiene el ticket se vuelve a encolar, si no se retira.
*/

let ColaEjemplo = [
  { user: "User1", ticket: true },
  { user: "User2", ticket: true },
  { user: "User3", ticket: false },
  { user: "User4", ticket: true },
  { user: "User5", ticket: false },
  { user: "User6", ticket: false },
  { user: "User7", ticket: true },
  { user: "User8", ticket: true },
  { user: "User9", ticket: true },
  { user: "User10", ticket: false },
  { user: "User11", ticket: true },
];

document.getElementById("T02").addEventListener("click", task2);

function task2() {
  validarCola(ColaEjemplo);

}

function validarCola(cola) {
  const ITERACIONES = cola.length;
  let colaValidada = [];
  for (let i = 0; i < ITERACIONES; ++i) {
    let registro = cola.shift();
    if (registro.ticket) {
      colaValidada.push(registro);
    } else {
      continue;
    }
  }
  console.log(colaValidada);
  return colaValidada;
}
