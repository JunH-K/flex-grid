import '../css/reset.css';
import '../css/styles.css';
import '../css/flex.css';
import Element from './Element';
import ButtonContainer from './ButtonContainer';

const container = document.querySelector('.container');
const items = document.querySelectorAll('.container .item');
const containerElement = new Element(container);
const itemsElement = new Element(items);

const containerButtons = document.querySelector('.buttons .btn-container');
const itemsButtons = document.querySelector('.buttons .btn-items');
const containerBtn = new ButtonContainer(containerButtons);
const itemsBtn = new ButtonContainer(itemsButtons);

containerBtn.addEvent('click', containerElement);
itemsBtn.addEvent('click', itemsElement);
