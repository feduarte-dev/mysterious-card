const inputText = document.getElementById('carta-texto');
const cartaGerada = document.getElementById('carta-gerada');
const cardBtn = document.getElementById('criar-carta');

cardBtn.addEventListener('click', () => {
  let card = inputText.value;
  let cardArray = card.split(' ');
  cartaGerada.innerText = '';
  for (let index = 0; index < cardArray.length; index += 1) {
    const span = document.createElement('span');
    span.innerText = cardArray[index];
    cartaGerada.appendChild(span);
  }
});
