
class card {
    constructor(value, symbol) {
        this.value = value;
        this.symbol = symbol;
    }

}

class deck {
    constructor(){
        this.cards = [];
        this.createDeck();
    }
    createDeck() {
        let symbols = ['Clubs', 'Diamons', 'Hearts', 'Spades'];
        let values = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
        symbols.forEach(symbol => {
            values.forEach(value => {
                this.cards.push(new card(value, symbol));
            });
        });
    }
    shuffleDeck() {
        let temporalDeck = []
        while (this.cards.length > 0) {
            let randomNumber = Math.ceil(Math.random() * this.cards.length);
            let carta =this.extractCard(randomNumber);
            temporalDeck.push(carta);
        }
        this.cards = temporalDeck;
    }


    extractCard(id) {
        let pilaTemporal = []
        while (this.cards.length > id) {
          pilaTemporal.push(this.cards.pop());
      
        }
        let carta = this.cards.pop();
      
        while (pilaTemporal.length > 0) {
            this.cards.push(pilaTemporal.pop());
      
        }
        return carta;
      }
      
}

/*
♣ (clubs)
♦ (diamonds)
♥ (hearts)
♠ (spades)
*/

let baraja = new deck();
console.log(baraja.cards);
baraja.shuffleDeck();

console.log(baraja.cards);