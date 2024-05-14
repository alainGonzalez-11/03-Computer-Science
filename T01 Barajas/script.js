/* The class "card" has properties for value and symbol. */
class card {
  /**
   * The above function is a constructor in JavaScript that initializes an object with a value and
   * symbol.
   * @param value - The `value` parameter in the constructor function is used to store the value of the card,
   * it can have a value of 1 to 10, J, Q or K.
   * @param symbol - The `symbol` parameter in the constructor function is used to store  the card symbol, it
   * can be Clubs, diamonds, hearts and spades.
   */
  constructor(value, symbol) {
    this.value = value;
    this.symbol = symbol;
  }
}

/* The class `deck` represents a deck of playing cards with methods to create, shuffle, deal, and
display the cards. */
class deck {
  /**
   * The constructor function initializes an empty array called "cards" and then calls the "createDeck"
   * method to populate the array with a deck of cards.
   */
  constructor() {
    this.cards = [];
    this.createDeck();
  }
  /**
   * The function `createDeck` generates a standard 52 card deck of playing cards with symbols and values.
   */
  createDeck() {
    let symbols = ["Clubs", "Diamons", "Hearts", "Spades"];
    let values = [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "Q",
      "K",
    ];
    symbols.forEach((symbol) => {
      values.forEach((value) => {
        this.cards.push(new card(value, symbol));
      });
    });
  }
  /**
   * The `shuffleDeck` function shuffles the cards in a deck by randomly rearranging them.
   */
  shuffleDeck() {
    let temporalDeck = [];
    while (this.cards.length > 0) {
      let randomNumber = Math.ceil(Math.random() * this.cards.length);
      let carta = this.extractCard(randomNumber);
      temporalDeck.push(carta);
    }
    this.cards = temporalDeck;
  }

  /**
   * The `extractCard` function extracts a card from a specific position in an array of cards while
   * maintaining the order of the remaining cards.
   * @param id - The `id` parameter in the `extractCard` function is used to specify the index of the
   * card that needs to be extracted from the `cards` array. The function removes the card at the
   * specified index from the array and returns it.
   * @returns The `extractCard` function is returning the card at the specified `id` index from the
   * `cards` array.
   */
  extractCard(id) {
    let pilaTemporal = [];
    while (this.cards.length > id) {
      pilaTemporal.push(this.cards.pop());
    }
    let carta = this.cards.pop();

    while (pilaTemporal.length > 0) {
      this.cards.push(pilaTemporal.pop());
    }
    return carta;
  }

  /**
   * The `dealCard` function returns and removes the last card from an array of cards.
   * @returns The `dealCard()` function is returning the last element (card) from the `cards` array by
   * using the `pop()` method.
   */
  dealCard() {
    return this.cards.pop();
  }

  /**
   * The `showDeck` function logs each card's value and symbol in the deck.
   */
  showDeck() {
    this.cards.forEach(card => {
        console.log(`${card.value} of ${card.symbol}`);
    });
  }
}

/*
♣ (clubs)
♦ (diamonds)
♥ (hearts)
♠ (spades)
*/

let baraja = new deck();
baraja.showDeck();
baraja.shuffleDeck();

baraja.showDeck();

console.log(baraja.dealCard());
baraja.showDeck();
