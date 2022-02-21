const containerEl = document.getElementById('container');
const card_length = 16;
const cards = [];
let previousShowCard = undefined;

let icons = [
  'chrome',  
  'google',  
  'firefox',  
  'facebook',  
  'opera',  
  'telegram',  
  'apple',  
  'amazon',
]
//copy the icons again (double them)
icons.push(...icons);
for (let i = 0; i < 100; i++) {
  const index1 = Math.floor(Math.random() * icons.length);
  const index2 = Math.floor(Math.random() * icons.length);
  const temp = icons[index1];
  icons[index1] = icons[index2];
  icons[index2] = temp;
}
for(let i = 0; i < card_length; i++) {
  const cardEl = document.createElement('div');
  cardEl.classList.add('card');
  cardEl.innerHTML = `
  <div class="front">
    <i class="bx bxl-${icons[i]}"> </i>
  </div>
  <div class="back"><small>Click Me</small></div>`
  cardEl.addEventListener('click', () => {
    if (!cardEl.classList.contains('show')) {
      cardEl.classList.add('show');
    } 

    if(!previousShowCard) {
      previousShowCard = cardEl;
    } else {
      const iconOne = previousShowCard.querySelector('i').classList[1];
      const iconTwo = cardEl.querySelector('i').classList[1];
      if (iconOne !== iconTwo) {
        const temp = previousShowCard;
        setTimeout(() => {
          temp.classList.remove('show');
          cardEl.classList.remove('show');
        }, 500);
      }
      previousShowCard = undefined;
    }
  })
  cards.push(cardEl);
  containerEl.appendChild(cardEl);
}