"use strict";

const divButtons = document.querySelector(".header-buttons");

const hourBtn = document.getElementById("btn-hour");

const nowBtn = document.getElementById("btn-now");

const daysBtn = document.getElementById("btn-days");


const hourBlock = document.getElementById("hour");

const nowBlock = document.getElementById("now");

const daysBlock = document.getElementById("days");


const nowContentItems = document.querySelectorAll("#now-content");


const buttons = {
  hour: hourBtn,
  now: nowBtn,
  days: daysBtn,
};

const contentBlocks = {
  hour: hourBlock,
  now: nowBlock,
  days: daysBlock,
}

export {divButtons, nowContentItems, contentBlocks, buttons};  
