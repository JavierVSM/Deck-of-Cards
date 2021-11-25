suit = ["Hearts", "Clubs", "Diamonds", "Spades"];

values = [
    {
      number: 1,
      text: "Ace"
    },
    {
      number: 2,
      text: "Two"
    },
    {
      number: 3,
      text: "Three"
    },
    {
      number: 4,
      text: "Four"
    },
    {
      number:5,
      text: "Five"
    },
    {
      number:6,
      text: "Six"
    },
    {
      number:7,
      text: "Seven"
    },
    {
      number:8,
      text: "Eight"
    },
    {
      number:9,
      text: "Nine"
    },
    {
      number:10,
      text: "Ten"
    },
    {
      number:11,
      text: "Jack"
    },
    {
      number:12,
      text: "Queen"
    },
    {
      number:13,
      text: "King"
    },
  ];

class Card {
    constructor(suit, string, numerical) {
        this.suit = suit;
        this.string = string;
        this.numerical= numerical
    }       
    showCard() {
        console.log(this.string + " of " + this.suit);
    }
}

class Deck{
    constructor(){
        this.deck= [];
    }
    deckSetUp(){   //reset
        for (let x of suit) {
            for (let y of values) {
                this.deck.push(new Card (x, y.text, y.number));
            }
        }
    }
    shuffle() {
        var m = this.deck.length, t, i;
        while (m) {
            i = Math.floor(Math.random() * m--);
            t = this.deck[m];
            this.deck[m] = this.deck[i];
            this.deck[i] = t;
        }
        return this.deck;
    }
    randomCard() {
        var m = this.deck.length, i;
        i = Math.floor(Math.random() * m--);
        return  (this.deck[i].showCard());
    }
    deal() {
        var m = this.deck.length, i, t;
        i = Math.floor(Math.random() * m--);
        t = this.deck[i];
        this.deck.splice(i,1);
        return (t);
    }
}

class Player {
    constructor(name) {
        this.name = name;
        this.hand= [];
    }
    takeACard(deck){
        this.hand.push(deck.deal());
    }
    discardACard(i){
        this.hand.splice(i,1);
    }
    displayhand(){
        for (let values of this.hand) {
          console.log (values.showCard());
        }
    }
}

///TEST

let game = new Deck;
game.deckSetUp();
console.log ("Deck in order:");
console.log (game);
console.log ("_______________________");
game.shuffle();
console.log ("Deck with shuffle:");
console.log (game);
console.log ("_______________________");
console.log ("Here it is your random card:");
game.randomCard()
console.log ("_______________________");
console.log (" ---- The Player");

let luis = new Player ("Luis");
luis.takeACard(game);
luis.takeACard(game);
luis.takeACard(game);
luis.takeACard(game);
luis.takeACard(game);
console.log ("Welcome " + luis.name + " this is your hand:");
luis.displayhand();
luis.discardACard(1);
console.log ("_______________________");
console.log ("After discard one card:");
luis.displayhand();
luis.discardACard(2);
console.log ("_______________________");
console.log ("After discard one card:");
luis.displayhand();
console.log ("_______________________");
console.log ("The deck without the players hand:");
console.log (game);
