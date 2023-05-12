// Copyright (c) 2020 Janet Do All rights reserved
//
// Created by: Janet Do
// Created on: Sep 2020
  // This function multiplies two numbers
"use strict"

function calculate() {


  // input
  const number1 = parseInt(document.getElementById("number1").value)
  const number2 = parseInt(document.getElementById("number2").value)

  // process
  let counter = 0
  let answer = 0
  while (counter < number2) {
    answer = answer + number1
    counter = counter + 1
  }

  // output
  document.getElementById("numberEntered").innerHTML =
    number1 + " x " + number2 + " = " + answer
}