/*
1.- Hacer una función que reciba como parámetros una pila, y un número. La función debe retornar tantos elementos como diga el número (segundo parámetro).
Entrada : mifuncion(['Manzana','Cebolla','Apio','Naranja','Papaya','Sandía','Melón'],4)
Salida: ['Manzana','Cebolla','Apio','Naranja'].
*/
document.getElementById("T01").addEventListener("click", task1);

function task1() {
  alert(
    recortarPila(
      ["Manzana", "Cebolla", "Apio", "Naranja", "Papaya", "Sandía", "Melón"],
      4
    )
  );
}

function recortarPila(pila, numero) {
  while (pila.length > numero) {
    pila.pop();
  }
  return pila;
}

/*
2.- Escribe una función “reemplazar” que tenga como parámetros una pila de elementos de tipo Number, y dos valores también de tipo Number “nuevo” y “viejo”, de forma que si el segundo valor aparece en algún lugar de la pila, sea reemplazado por el primero (Solo la primera vez), y hará pop de los elementos más nuevos.
Entrada: reemplazar([3,2,3,4,6,8,1,2,5,5], 7, 2)
Salida: [3,2,3,4,6,8,1,7]
*/
document.getElementById("T02").addEventListener("click", task2);

function task2() {
  alert(
    reemplazarPila([3,2,3,4,6,8,1,2,5,5], 7, 2)
  );
}

function reemplazarPila(pila, nuevo, viejo) {
  let finalizado = false;
  do {
    if (pila.pop() == viejo){
      pila.push(nuevo);
      finalizado = true;
    }
  } while (!finalizado);
  return pila;
}

// Ejemplo de uso
//let pila = ['Manzana','Cebolla','Apio','Naranja','Papaya','Sandía','Melón'];
//let elementos = 4;
//console.log(obtenerElementos(pila, elementos)); // Salida: ['Manzana','Cebolla','Apio','Naranja']
