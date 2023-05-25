const inputText = document.getElementById('carta-texto');
const cartaGerada = document.getElementById('carta-gerada');
const cardBtn = document.getElementById('criar-carta');
const contador = document.getElementById('carta-contador');
const contapalavra = document.getElementsByTagName('span');

const randomThree = () => {
  return Math.floor(Math.random() * 3);
};

const randomTwo = () => {
  return Math.floor(Math.random() * 2);
};

const count = () => {
  contador.innerText = contapalavra.length;
};


cardBtn.addEventListener('click', () => {
  if (inputText.value === '' || inputText.value === ' ') {
    cartaGerada.innerText = 'Por favor, digite o conteúdo da carta.';
  } else {
    let card = inputText.value;
    let cardArray = card.split(' ');
    cartaGerada.innerText = '';
    for (let index = 0; index < cardArray.length; index += 1) {
      const span = document.createElement('span');
      
      if (randomThree() === 0) {
        span.classList.add('newspaper');
      } else if (randomThree() === 1) {
        span.classList.add('magazine1');
      } else {
        span.classList.add('magazine2');
      }

      if (randomThree() === 0) {
        span.classList.add('medium');
      } else if (randomThree() === 1) {
        span.classList.add('big');
      } else {
        span.classList.add('reallybig');
      }

      if (randomTwo() === 0) {
        span.classList.add('rotateleft');
      } else {
        span.classList.add('rotateright');
      }

      if (randomTwo() === 0) {
        span.classList.add('skewleft');
      } else {
        span.classList.add('skewright');
      }

      span.innerText = cardArray[index];
      cartaGerada.appendChild(span);
    }
  } count();
});


const styleGroup = () => {
  if (randomThree() === 0) {
    span.classList.add('newspaper');
  } else if (randomThree() === 1) {
    span.classList.add('magazine1');
  } else {
    span.classList.add('magazine2');
  }
};

const sizeGroup = () => {
  if (randomThree() === 0) {
    span.classList.add('medium');
  } else if (randomThree() === 1) {
    span.classList.add('big');
  } else {
    span.classList.add('reallybig');
  }
};

const rotateGroup = () => {
  if (randomTwo() === 0) {
    span.classList.add('rotateleft');
  } else {
    span.classList.add('rotateright');
  }
};

const skewGroup = () => {
  if (randomTwo() === 0) {
    span.classList.add('skewleft');
  } else {
    span.classList.add('skewright');
  }
};

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