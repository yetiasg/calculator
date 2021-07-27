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
