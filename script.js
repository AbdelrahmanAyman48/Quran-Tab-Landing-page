import {clickingLabelsWithEnter, observeElements } from './utils.js'

const labelElements = document.querySelectorAll("label");
const sectionElements = document.querySelectorAll("section");

clickingLabelsWithEnter(labelElements);

observeElements(sectionElements);



