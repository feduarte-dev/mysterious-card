const inputText = document.getElementById('carta-texto');
const cartaGerada = document.getElementById('carta-gerada');
const cardBtn = document.getElementById('criar-carta');
const contador = document.getElementById('carta-contador');
const contapalavra = document.getElementsByTagName('span');

const randomThree = () => Math.floor(Math.random() * 3);

const randomTwo = () => Math.floor(Math.random() * 2);

const count = () => {
  contador.innerText = contapalavra.length;
};
// Função refatorada com ajuda da Nat
const functionMainGenerateCards = (styleFn, sizeFn, rotateFn, skewFn) => {
  if (inputText.value === '' || inputText.value === ' ') {
    cartaGerada.innerText = 'Por favor, digite o conteúdo da carta.';
  } else {
    let card = inputText.value;
    let cardArray = card.split(' ');
    cartaGerada.innerText = '';
    for (let index = 0; index < cardArray.length; index += 1) {
      const span = document.createElement('span');
      styleFn(span);
      sizeFn(span);
      rotateFn(span);
      skewFn(span);
      span.innerText = cardArray[index];
      cartaGerada.appendChild(span);
    }
  }
  count();
};

const styleGroup = (span) => {
  if (randomThree() === 0) {
    span.classList.add('newspaper');
  } else if (randomThree() === 1) {
    span.classList.add('magazine1');
  } else {
    span.classList.add('magazine2');
  }
};

const sizeGroup = (span) => {
  if (randomThree() === 0) {
    span.classList.add('medium');
  } else if (randomThree() === 1) {
    span.classList.add('big');
  } else {
    span.classList.add('reallybig');
  }
};

const rotateGroup = (span) => {
  if (randomTwo() === 0) {
    span.classList.add('rotateleft');
  } else {
    span.classList.add('rotateright');
  }
};

const skewGroup = (span) => {
  if (randomTwo() === 0) {
    span.classList.add('skewleft');
  } else {
    span.classList.add('skewright');
  }
};

cardBtn.addEventListener('click', () => {
  functionMainGenerateCards(styleGroup, sizeGroup, rotateGroup, skewGroup);
});

cartaGerada.addEventListener('click', (event) => {
  if (randomThree() === 0) {
    event.target.classList.remove('big');
    event.target.classList.remove('reallybig');
    event.target.classList.add('medium');
  } else if (randomThree() === 1) {
    event.target.classList.remove('medium');
    event.target.classList.remove('reallybig');
    event.target.classList.add('big');
  } else {
    event.target.classList.remove('big');
    event.target.classList.remove('medium');
    event.target.classList.add('reallybig');
  }
});
