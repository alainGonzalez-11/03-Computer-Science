/*
1.- Hacer una función que reciba como parámetros una pila, y un número. La función debe retornar tantos elementos como diga el número (segundo parámetro).
Entrada : mifuncion(['Manzana','Cebolla','Apio','Naranja','Papaya','Sandía','Melón'],4)
Salida: ['Manzana','Cebolla','Apio','Naranja'].
*/
document.getElementById('T01').addEventListener('click', task1);

function task1() {
    alert(dividirPila(['Manzana','Cebolla','Apio','Naranja','Papaya','Sandía','Melón'], 4));
}

function dividirPila(pila, numero){
    let nuevaPila = pila.slice(0, numero);
    return nuevaPila;
}