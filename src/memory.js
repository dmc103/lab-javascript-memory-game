class MemoryGame {
  constructor(cards) {
    // add the rest of the class properties here
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
    
  }

  shuffleCards(array) {
    // ... write your code here
    if(!this.cards || this.cards.length === 0){
      return undefined;
    }
    for (let i = this.cards.length -1; i > 0; i --) {
      const randomCard = Math.floor(Math.random() * (i + 1));
      [this.cards[i], this.cards[randomCard]] = [this.cards[randomCard], this.cards[i]];
    } 
    return this.cards;
  }



 
  checkIfPair(card1, card2) {
    // ... write your code here
    this.pairsClicked++;

    if (card1.getAttribute('data-card-name') === card2.getAttribute('data-card-name')) {
      this.pairsGuessed++;
      return true;
    } else {
      return false;
    }
  }



  checkIfFinished() {
    // ... write your code here
    const totalCardPairs = this.cards.length /2;

    if(this.pairsGuessed === totalCardPairs){
      return true;
    } else {
      return false;
    }
  }
}
