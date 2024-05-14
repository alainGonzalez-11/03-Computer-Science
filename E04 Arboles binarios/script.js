/*
1.- Implemente un procedimiento que inserte un dato de modo similar al insertar, al final de la lista. Pero ahora, no se debe permitir insertar datos repetidos, si un dato ya está almacenado entonces la lista no cambia.
*/
document.getElementById("T01").addEventListener("click", task1);


/**
 * The function `task1` creates a linked list manually, inserts nodes with specific values, and prints
 * the resulting linked list.
 */
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

/* The ListNode class represents a node in a linked list with a data property and a reference to the
next node. */
class ListNode {
  /**
   * The above function is a constructor in JavaScript that initializes an object with a data property
   * and a next property set to null.
   * @param data - The `data` parameter in the constructor function is used to initialize the `data`
   * property of the object being created. It allows you to pass in a value that will be stored within
   * the object for later use.
   */
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

/* The class LinkedList represents a linked list data structure in JavaScript with methods for
inserting nodes, printing the list, getting the size, and creating a sublist based on a given limit. */
class LinkedList {
  /**
   * This JavaScript constructor function initializes an object with a head property that can be set to
   * a specified value or default to null.
   * @param [head=null] - The `constructor` function you provided is a constructor for a class or
   * object. It initializes the `head` property with the value passed as an argument or `null` if no
   * argument is provided.
   */
  constructor(head = null) {
    this.head = head;
  }
  /**
   * The insert function in JavaScript checks for repeated data in a linked list before adding a new
   * node.
   * @param node - The `node` parameter in the `insert` function represents a node that you want to
   * insert into a linked list. It typically contains two properties: `data`, which stores the value of
   * the node, and `next`, which points to the next node in the linked list.
   */
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
  /**
   * The `printList` function in JavaScript prints the data of each node in a linked list in sequence.
   */
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
  /**
   * The function `getSize()` calculates and returns the number of nodes in a linked list.
   * @returns The `getSize()` function is returning the number of nodes in a linked list. It counts the
   * nodes starting from the head node and iterates through the list until it reaches the last node,
   * incrementing the count at each step. The final count is returned as the size of the linked list.
   */
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

  /**
   * The function `subLista` creates a new linked list containing elements from the original list that
   * are greater than a specified limit.
   * @param limite - The `limite` parameter in the `subLista` function represents the threshold value
   * that is used to filter elements from the linked list. The function creates a new linked list
   * (`nuevaLista`) and inserts elements from the original list that are greater than the specified
   * `limite` value into the
   * @returns A new linked list containing nodes with data values greater than the specified limit is
   * being returned.
   */
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

/**
 * The function `task2` creates a list with random numbers between 1 and 100, prints the list, filters
 * out elements greater than 25, and prints the filtered list.
 */
function task2() {
  console.log('Creación de lista con números aleatorios (entre el 1 y el 100)')
  let list = createRandomList(25, 100);
  list.printList();
  console.log('Elementos mayores a 25')
  let newList = list.subLista(25);
  newList.printList();
}

/**
 * The function `createRandomList` generates a linked list with a specified number of random elements.
 * @param numberOfElements - The `numberOfElements` parameter specifies the number of elements you want
 * in the random list to be generated.
 * @param [max=1000] - The `max` parameter in the `createRandomList` function specifies the maximum
 * value that can be generated for each element in the random list. By default, if the `max` parameter
 * is not provided when calling the function, it is set to 1000. This means that each element in
 * @returns The function `createRandomList` is returning a linked list with a specified number of
 * elements, each containing a random integer value between 0 and the specified maximum value (default
 * is 1000).
 */
function createRandomList(numberOfElements, max = 1000) {
  let list = new LinkedList();
  while (list.getSize() < numberOfElements) {
    let node = new ListNode(Math.floor(Math.random() * max));

    list.insert(node);
  }

  return list;
}
