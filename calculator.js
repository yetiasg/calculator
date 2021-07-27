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

    // this.clear();
  }

  clear() {
    this.previousTextElement.innerHTML = '';
    this.currentTextElement.innerHTML = '0';
  }

  clearAll() {}

  delete() {}

  fetchNumber(number) {
    console.log(Number(number));
  }

  chooseOperation(operation) {
    console.log(operation);
  }

  compute() {}

  updateOutput() {}
}

const calculator = new Calculator(previousTextElement, currentTextElement);

numberBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    calculator.fetchNumber(btn.innerText);
  });
});

operationBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    calculator.chooseOperation(btn.innerText);
  });
});
