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

    this.clear();
  }

  clear() {}
}

const calculator = new Calculator(previousTextElement, currentTextElement);
