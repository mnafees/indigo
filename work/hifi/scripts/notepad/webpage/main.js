'use strict';

var KEYBOARD_FIRST_ROW_TOP = "~!@#$%^&*()_+";
var KEYBOARD_FIRST_ROW_BOTTOM = "`1234567890-=";
var KEYBOARD_SECOND_ROW_TOP = "QWERTYUIOP{}|";
var KEYBOARD_SECOND_ROW_BOTTOM = "qwertyuiop[]\\";
var KEYBOARD_THIRD_ROW_TOP = "ASDFGHJKL:\"";
var KEYBOARD_THIRD_ROW_BOTTOM = "asdfghjkl;'";
var KEYBOARD_FOURTH_ROW_TOP = "ZXCVBNM<>?";
var KEYBOARD_FOURTH_ROW_BOTTOM = "zxcvbnm,./";
var BACK_KEY = "Back";
var ENTER_KEY = "Enter";
var SHIFT_KEY = "Shift";
var SPACE_KEY = "                                                                          ";
var SHIFT_KEYS_EL = [];
var SHIFT_KEY_PRESSED = false;

var onShiftKeyPressed = () => {
  var alphanumsymKeys = document.querySelectorAll(".alphanumsym");
  for (var i = 0; i < alphanumsymKeys.length; ++i) {
    if (SHIFT_KEY_PRESSED) {
      alphanumsymKeys[i].value = alphanumsymKeys[i].getAttribute("data-shift-on");
    } else {
      alphanumsymKeys[i].value = alphanumsymKeys[i].getAttribute("data-shift-off");
    }
  }
};

var onKeyboardButtonClicked = (e) => {
  var buttonVal = e.srcElement.value;
  var textArea = document.querySelector("textarea");
  if (buttonVal === BACK_KEY) {
    if (textArea.value.length > 0) {
      textArea.value = textArea.value.substring(0, textArea.value.length - 1);
    }
  } else if (buttonVal === ENTER_KEY) {
    textArea.value += "\n";
  } else if (buttonVal === SHIFT_KEY) {
    if (SHIFT_KEY_PRESSED) {
      SHIFT_KEY_PRESSED = false;
      SHIFT_KEYS_EL[0].classList.remove("shift-button-down");
      SHIFT_KEYS_EL[1].classList.remove("shift-button-down");
    } else {
      SHIFT_KEY_PRESSED = true;
      SHIFT_KEYS_EL[0].classList.add("shift-button-down");
      SHIFT_KEYS_EL[1].classList.add("shift-button-down");
    }
    onShiftKeyPressed();
  } else if (buttonVal === SPACE_KEY) {
    textArea.value += " ";  
  } else {
    textArea.value += buttonVal;
  }
  textArea.focus();
};

var enableKeyboard = (keyboardElem) => {
  keyboardElem.classList.add("mn-keyboard");

  var firstRow = document.createElement("p");
  firstRow.classList.add("mn-keyboard-first-row");
  for (var i = 0; i < KEYBOARD_FIRST_ROW_TOP.length; ++i) {
    var input = document.createElement("input");
    input.type = "button";
    input.value = KEYBOARD_FIRST_ROW_BOTTOM.charAt(i);
    input.setAttribute("data-shift-on", KEYBOARD_FIRST_ROW_TOP.charAt(i));
    input.setAttribute("data-shift-off", KEYBOARD_FIRST_ROW_BOTTOM.charAt(i));
    input.classList.add("alphanumsym");
    firstRow.appendChild(input);  
  }
  var backButton = document.createElement("input");
  backButton.classList.add("back-button");
  backButton.type = "button";
  backButton.value = BACK_KEY;
  firstRow.appendChild(backButton); 

  var secondRow = document.createElement("p");
  secondRow.classList.add("mn-keyboard-second-row");
  for (var i = 0; i < KEYBOARD_SECOND_ROW_TOP.length; ++i) {
    var input = document.createElement("input");
    input.type = "button";
    input.value = KEYBOARD_SECOND_ROW_BOTTOM.charAt(i);
    input.setAttribute("data-shift-on", KEYBOARD_SECOND_ROW_TOP.charAt(i));
    input.setAttribute("data-shift-off", KEYBOARD_SECOND_ROW_BOTTOM.charAt(i));
    input.classList.add("alphanumsym");
    secondRow.appendChild(input);  
  }

  var thirdRow = document.createElement("p");
  thirdRow.classList.add("mn-keyboard-third-row");
  for (var i = 0; i < KEYBOARD_THIRD_ROW_TOP.length; ++i) {
    var input = document.createElement("input");
    input.type = "button";
    input.value = KEYBOARD_THIRD_ROW_BOTTOM.charAt(i);
    input.setAttribute("data-shift-on", KEYBOARD_THIRD_ROW_TOP.charAt(i));
    input.setAttribute("data-shift-off", KEYBOARD_THIRD_ROW_BOTTOM.charAt(i));
    input.classList.add("alphanumsym");
    thirdRow.appendChild(input);  
  }
  var enterButton = document.createElement("input");
  enterButton.classList.add("back-button");
  enterButton.type = "button";
  enterButton.value = ENTER_KEY;
  thirdRow.appendChild(enterButton);

  var fourthRow = document.createElement("p");
  fourthRow.classList.add("mn-keyboard-fourth-row");
  var shiftButton = document.createElement("input");
  shiftButton.classList.add("back-button");
  shiftButton.type = "button";
  shiftButton.value = SHIFT_KEY;
  SHIFT_KEYS_EL.push(shiftButton);
  fourthRow.appendChild(shiftButton);
  for (var i = 0; i < KEYBOARD_FOURTH_ROW_TOP.length; ++i) {
    var input = document.createElement("input");
    input.type = "button";
    input.value = KEYBOARD_FOURTH_ROW_BOTTOM.charAt(i);
    input.setAttribute("data-shift-on", KEYBOARD_FOURTH_ROW_TOP.charAt(i));
    input.setAttribute("data-shift-off", KEYBOARD_FOURTH_ROW_BOTTOM.charAt(i));
    input.classList.add("alphanumsym");
    fourthRow.appendChild(input);  
  }
  var shiftButtonClone = shiftButton.cloneNode(true);
  SHIFT_KEYS_EL.push(shiftButtonClone);
  fourthRow.appendChild(shiftButtonClone);

  var fifthRow = document.createElement("p");
  fifthRow.classList.add("mn-keyboard-fifth-row");
  var spaceButton = document.createElement("input");
  spaceButton.classList.add("back-button");
  spaceButton.type = "button";
  spaceButton.value = SPACE_KEY;
  fifthRow.appendChild(spaceButton);

  keyboardElem.appendChild(firstRow);
  keyboardElem.appendChild(secondRow);
  keyboardElem.appendChild(thirdRow);
  keyboardElem.appendChild(fourthRow);
  keyboardElem.appendChild(fifthRow);

  var allButtons = document.querySelectorAll(".mn-keyboard input");
  for (var i = 0; i < allButtons.length; ++i) {
    var el = allButtons[i];
    el.addEventListener("click", onKeyboardButtonClicked);
  }
};