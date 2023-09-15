const cards = [
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' },
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' }
];

const memoryGame = new MemoryGame(cards);

memoryGame.shuffleCards();

window.addEventListener('load', (event) => {
  let html = '';
  memoryGame.cards.forEach((pic) => {
    html += `
      <div class="card" class="turned" data-card-name="${pic.name}">
        <div class="back" name="${pic.img}"></div>
        <div class="front" style="background: url(img/${pic.img}) no-repeat"></div>
      </div>
    `;
  });

  // Add all the divs to the HTML
  document.querySelector('#memory-board').innerHTML = html;

  //Selecting the elements to update

  const pairsClicked = document.getElementById("pairs-clicked");
  const pairsGuessed = document.getElementById("pairs-guessed");

  const cardCounter = 0;


  // Bind the click event of each element to a function
  document.querySelectorAll('.card').forEach((card) => {
    card.addEventListener('click', () => {
      // TODO: write some code here
      card.classList.toggle("turned", true);
      memoryGame.pickedCards.push(card);
      if (MemoryGame.pickedCards.length === 2){
        pairsClicked.innerText = memoryGame.pairsClicked;

        let card1 = memoryGame.pickedCards[0].getAttribute("data-card-name");
        let card2 = memoryGame.pickedCards[1].getAttribute("data-card-name");
        if(memoryGame.checkIfPair(card1,card2)){
          memoryGame.pickedCards = [];
  
          pairsGuessed.innerText = memoryGame.pairsGuessed;

          if(memoryGame.checkIfFinished()) {
            alert("You Won!");
          }
        }else{
          setTimeout(() => {
            memoryGame.pickedCards[0].classList.toggle("turned", false);
            memoryGame.pickedCards[1].classList.toggle("turned", false);
            memoryGame.pickedCards = [];
            counter = 0;
          }, 1000);
        }
      }
      console.log('Card clicked: ${card}');
    });
  });
});

