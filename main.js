
suits = ['clubs', 'spades', 'diamonds', 'hearts'];
denominations = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

function insertImage(value, cardSuits, den) {
  if (den === 'J') {
    value.push(`<img class="person" src="images/jack.svg" alt="${cardSuits}">`);
  } else if (den === 'Q') {
    value.push(`<img class="person" src="images/queen.svg" alt="${cardSuits}">`);
  } else if (den === 'K') {
    value.push(`<img class="person" src="images/king.svg" alt="${cardSuits}">`);
  } else if (den === 'A') {
    value.push(`<img class="person" src="images/${cardSuits}.svg" alt="${cardSuits}">`);
  }
}

value = [];
for (i = 0; i < denominations.length; i++) {
  den = denominations[i];

  for (j = 0; j < suits.length; j++) {

   cardSuits = suits[j];
   value.push('<div class="card card--person">');
   value.push(`<div class="card__info ">${den}<img src="images/${cardSuits}.svg" alt="clubs"></div>`);
   insertImage(value, cardSuits, den);
   value.push(`<div class="card__info">${den}<img src="images/${cardSuits}.svg" alt="clubs"></div>`);
   value.push('</div>');
  }
}

document.write(`<div class="wrapper">${value.join('')}  </div>`);