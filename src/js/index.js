import '../css/reset.css';
import '../css/styles.css';
import '../css/flex.css';
import Element from './Element';
import ButtonContainer from './ButtonContainer';

const target = document.querySelector('.container');
const element = new Element(target);
const buttonContainer = new ButtonContainer();
buttonContainer.addEvent('click', element);
