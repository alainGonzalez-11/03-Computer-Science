/*
1.- Implemente un procedimiento que inserte un dato de modo similar al insertar, al final de la lista. Pero ahora, no se debe permitir insertar datos repetidos, si un dato ya está almacenado entonces la lista no cambia.
*/
document.getElementById("T01").addEventListener("click", task1);

function task1() {
  let nodo1 = new ListNode(1);
  let nodo2 = new ListNode(2);
  let nodo3 = new ListNode(3);
  let nodo4 = new ListNode(4);

  let list = new LinkedList(nodo1);

  nodo1.next = nodo2;
  nodo2.next = nodo3;
  nodo3.next = nodo4;

  console.log("Lista enlazada creada de forma manual");
  list.printList();

  console.log("Resultado de agregar un segundo nodo con valor 3");
  list.insert(new ListNode("3"));
  list.printList();

  console.log("Resultado de agregar un segundo nodo con valor 11");
  list.insert(new ListNode(11));
  list.printList();
}

class ListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head;
  }
  insert(node) {
    let repeatedFlag = false;
    if (this.head == null) {
      this.head = node;
    } else {
      let nodo = this.head;
      while (nodo.next != null) {
        if (nodo.data == node.data) {
          repeatedFlag = true;
        }
        nodo = nodo.next;
      }
      if (!repeatedFlag) {
        nodo.next = node;
      }
    }
  }
  printList() {
    if (this.head == null) {
      console.log("Empty list");
    } else {
      let nodo = this.head;
      let mensaje = "" + nodo.data;
      while (nodo.next != null) {
        nodo = nodo.next;
        mensaje += " -> " + nodo.data;
      }
      console.log(mensaje);
    }
  }
  getSize() {
    let count = 0;
    if (this.head !== null) {
      let nodo = this.head;
      count++;
      while (nodo.next != null) {
        nodo = nodo.next;
        count++;
      }
    }
    return count;
  }

  subLista(limite) {
    let nuevaLista = new LinkedList();
    if (this.head == null) {
      console.log("Empty list");
    } else {
      let nodo = this.head;
      if (nodo.data > limite) {
        nuevaLista.insert(new ListNode(nodo.data));
      }
      while (nodo.next != null) {
        nodo = nodo.next;
        if (nodo.data > limite) {
          nuevaLista.insert(new ListNode(nodo.data));
        }        
      }
    }
    return nuevaLista;
  }
}

/*
2.- Escribir un programa para formar una lista que realice las siguientes tareas:
Crear una Lista Enlazadas de Números Enteros Positivos al azar, la inserción se realiza por el último nodo.
Crear una Lista Enlazadas de Números Enteros Positivos al azar, la inserción se realiza por el último nodo.
Mostrar todos los Nodos que superen un valor determinado.
*/

document.getElementById("T02").addEventListener("click", task2);

function task2() {
  console.log('Creación de lista con números aleatorios (entre el 1 y el 100)')
  let list = createRandomList(25, 100);
  list.printList();
  console.log('Elementos mayores a 25')
  let newList = list.subLista(25);
  newList.printList();
}

function createRandomList(numberOfElements, max = 1000) {
  let list = new LinkedList();
  while (list.getSize() < numberOfElements) {
    let node = new ListNode(Math.floor(Math.random() * max));

    list.insert(node);
  }

  return list;
}
