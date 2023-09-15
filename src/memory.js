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
    this.cards.sort(() => Math.random () - 0.5);
    if(this.cards.length === 0) {
      return undefined;
    }
  }



 
  checkIfPair(card1, card2) {
    // ... write your code here
    this.pairsClicked++;
      if(card1 === card2) {
        this.pairsGuessed++;
        return true;
      } else {
        return false;
      }
    }
  



  checkIfFinished() {
    //... write your code here
    if(this.pairsGuessed === this.cards.length / 2){
      return true;
    } else {
      return false;
    }
  }
}
  
  
  
  
  
  
  
