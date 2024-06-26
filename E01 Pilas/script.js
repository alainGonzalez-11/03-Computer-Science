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

/*
3.- Un conductor maneja de un pueblo origen a un pueblo destino, pasando por varios pueblos. Una vez en el pueblo destino, el conductor debe regresar a casa por el mismo camino. Muestre el camino recorrido tanto de ida como de vuelta.
Recorrido: Pueblo Origen → pueblo 1 → pueblo 2 → destino
Regreso: destino → pueblo 2’ → pueblo 1 → Pueblo Origen
*/
document.getElementById("T03").addEventListener("click", task3);

function task3() {
    recorrido(['Destino', 'Pueblo 2', 'Pueblo 1', 'Pueblo Origen'])
}

function recorrido(ruta) {
  console.log('---Ruta de ida---');
  let retorno = [];
  while (ruta.length > 0) {
    let parada = ruta.pop();
    console.log(parada);
    retorno.push(parada);
  }
  console.log('---Ruta de regreso---');
  while (retorno.length > 0) {
    console.log(retorno.pop());
  }
}



/*
4.- Un almacén tiene capacidad para apilar “n” contenedores. Cada contenedor tiene un número de identificación. Cuando se desea retirar un contenedor específico, deben retirarse primero los contenedores que están encima de él y colocarlos en otra pila, efectuar el retiro y regresarlos a su respectivo lugar.
*/

document.getElementById("T04").addEventListener("click", task4);

function task4() {
  var pokemons = [
    "bulbasaur",    "ivysaur",    "venusaur",
    "charmander",    "charmeleon",    "charizard",
    "squirtle",    "wartortle",    "blastoise",
    "caterpie",    "metapod",    "butterfree",
    "weedle",    "kakuna",
    "beedrill",
    "pidgey",    "pidgeotto",    "pidgeot",
    "rattata",    "raticate",
    "spearow",    "fearow",
    "ekans",    "arbok",
    "pikachu",    "raichu",
    "sandshrew",    "sandslash",
    "nidoran-f",    "nidorina",    "nidoqueen",    "nidoran-m",    "nidorino",    "nidoking",
    "clefairy",    "clefable",
    "vulpix",    "ninetales",
    "jigglypuff",    "wigglytuff",
    "zubat",    "golbat",
    "oddish",    "gloom",    "vileplume",
    "paras",    "parasect",
    "venonat",    "venomoth",
    "diglett",    "dugtrio",
    "meowth",    "persian",
    "psyduck",    "golduck",
    "mankey",    "primeape",
    "growlithe",    "arcanine",
    "poliwag",    "poliwhirl",    "poliwrath",
    "abra",    "kadabra",    "alakazam",
    "machop",    "machoke",    "machamp",
    "bellsprout",    "weepinbell",    "victreebel",
    "tentacool",    "tentacruel",
    "geodude",    "graveler",    "golem",
    "ponyta",    "rapidash",
    "slowpoke",    "slowbro",
    "magnemite",    "magneton",
    "farfetchd",
    "doduo",    "dodrio",
    "seel",    "dewgong",
    "grimer",    "muk",
    "shellder",    "cloyster",
    "gastly",    "haunter",    "gengar",
    "onix",
    "drowzee",    "hypno",
    "krabby",    "kingler",
    "voltorb",
  ];
    extractItem(pokemons, 3)
}

function extractItem(pila, id) {
  let pilaTemporal = []
  while (pila.length > id) {
    pilaTemporal.push(pila.pop());

  }

  console.log('Extrayendo ' + pila.pop());
  console.log('Pila temporal:');
  console.log(pilaTemporal);

  while (pilaTemporal.length > 0) {
    pila.push(pilaTemporal.pop());

  }
  
  console.log('Nueva pila:');
  console.log(pila);

}
