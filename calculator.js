'use strict';

const clearBtn = document.querySelector('[data-clear]');
const deleteBtn = document.querySelector('[data-delete]');
const equalsButton = document.querySelector('[data-equals]');
const operationBtns = document.querySelectorAll('[data-operation]');
const numberBtns = document.querySelectorAll('[data-number]');

const previousTextElement = document.querySelector('[data-previous-operation]');
const currentTextElement = document.querySelector('[data-current-operation]');

class Calculator {
  constructor(previousTextElement, currentTextElement) {
    this.previousTextElement = previousTextElement;
    this.currentTextElement = currentTextElement;
    this.operation = '';
    this.fetchedValue = '';
    this.previousFetchedValue = '';

    this.clear();
  }

  clear() {
    this.previousTextElement.innerHTML = '';
    this.currentTextElement.innerHTML = '0';
    this.operation = '';
    this.fetchedValue = '';
    this.previousFetchedValue = '';
  }

  delete() {
    this.fetchedValue = this.fetchedValue.slice(0, -1);
  }

  fetchValue(number) {
    if (number === '.' && this.fetchedValue.includes('.')) return;
    this.fetchedValue = this.fetchedValue.toString() + number.toString();
  }

  chooseOperation(operation) {
    if (this.fetchedValue === '') return;
    if (this.previousFetchedValue !== '') this.compute();
    this.operation = operation;
    this.previousFetchedValue = this.fetchedValue;
    this.fetchedValue = '';
  }

  compute() {
    let computation;
    const previousValue = parseFloat(this.previousFetchedValue);
    const currenValue = parseFloat(this.fetchedValue);
    if (isNaN(previousValue) || isNaN(currenValue)) return;
    switch (this.operation) {
      case '+':
        computation = previousValue + currenValue;
        break;
      case '-':
        computation = previousValue - currenValue;
        break;
      case '*':
        computation = previousValue * currenValue;
        break;
      case '/':
        computation = previousValue / currenValue;
    }
    this.fetchedValue = computation;
    this.previousFetchedValue = '';
  }

  updateOutput() {
    this.currentTextElement.innerText = this.fetchedValue;
    this.previousTextElement.innerText =
      this.previousFetchedValue + ' ' + this.operation;
  }
}

const calculator = new Calculator(previousTextElement, currentTextElement);

numberBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    calculator.fetchValue(btn.innerText);
    calculator.updateOutput();
  });
});

operationBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    calculator.chooseOperation(btn.innerText);
    calculator.updateOutput();
  });
});

clearBtn.addEventListener('click', () => {
  calculator.clear();
  calculator.updateOutput();
});

deleteBtn.addEventListener('click', () => {
  calculator.delete();
  calculator.updateOutput();
});

equalsButton.addEventListener('click', () => {
  calculator.compute();
  calculator.updateOutput();
});

// Customizer ----------------------------------------

const outputBGCColor = document.getElementById('output--background_color');
const outputBGText = document.getElementById('output--background_text');

const outputFCColor = document.getElementById('output--font-color_color');
const outputFCText = document.getElementById('output--font-color_text');

const buttonBGCColor = document.getElementById('buttons--background_color');
const buttonBGText = document.getElementById('buttons--background_text');

const buttonFCColor = document.getElementById('buttons--font-color_color');
const buttonFCText = document.getElementById('buttons--font-color_text');

const buttonBGCHoverColor = document.getElementById(
  'buttons--background--hover_color'
);
const buttonBGCHoverText = document.getElementById(
  'buttons--background--hover_text'
);

// Change output background color -------------

outputBGCColor.addEventListener('change', () => {
  const toChange = document.querySelector('.calculator');
  toChange.style.backgroundColor = outputBGCColor.value;
  outputBGText.value = outputBGCColor.value;
});

outputBGText.addEventListener('change', () => {
  const toChange = document.querySelector('.calculator');
  toChange.style.backgroundColor = outputBGText.value.toString();
  outputBGCColor.value = outputBGText.value;
});

// Change output font color ----------------

outputFCColor.addEventListener('change', () => {
  const toChange = document.querySelector('.output');
  toChange.style.color = outputFCColor.value.toString();
  outputFCText.value = outputFCColor.value;
});

outputFCText.addEventListener('change', () => {
  const toChange = document.querySelector('.output');
  toChange.style.color = outputFCText.value.toString();
  outputFCColor.value = outputFCText.value;
});

// Change button background color--------------------------

buttonBGCColor.addEventListener('change', () => {
  const buttons = document.querySelectorAll('button');
  buttons.forEach((btn) => {
    btn.style.backgroundColor = buttonBGCColor.value.toString();
  });
  buttonBGText.value = buttonBGCColor.value;
});

buttonBGText.addEventListener('change', () => {
  const buttons = document.querySelectorAll('button');
  buttons.forEach((btn) => {
    btn.style.backgroundColor = buttonBGText.value.toString();
  });
  buttonBGCColor.value = buttonBGText.value;
});

// Change button font color -----------------------

buttonFCColor.addEventListener('change', () => {
  const buttons = document.querySelectorAll('button');
  buttons.forEach((btn) => {
    btn.style.color = buttonFCColor.value.toString();
  });
  buttonFCText.value = buttonFCColor.value;
});

buttonFCText.addEventListener('change', () => {
  const buttons = document.querySelectorAll('button');
  buttons.forEach((btn) => {
    btn.style.color = buttonFCText.value.toString();
  });
  buttonFCColor.value = buttonFCText.value;
});

// Change background on hover -----------------------
let hoverColor = '#046b9f';
buttonBGCHoverColor.addEventListener('change', () => {
  hoverColor = buttonBGCHoverColor.value.toString();
  buttonBGCHoverText.value = buttonBGCHoverColor.value;
});

buttonBGCHoverText.addEventListener('change', () => {
  hoverColor = buttonBGCHoverText.value.toString();
  buttonBGCHoverColor.value = buttonBGCHoverText.value;
});

const buttons = document.querySelectorAll('button');
let previousBGCColor;
buttons.forEach((btn) => {
  btn.addEventListener('mouseover', () => {
    previousBGCColor = btn.style.backgroundColor;
    btn.style.backgroundColor = hoverColor;
  });
});

buttons.forEach((btn) => {
  btn.addEventListener('mouseout', () => {
    btn.style.backgroundColor = previousBGCColor;
  });
});
