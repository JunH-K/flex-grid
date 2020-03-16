import '../css/reset.css';
import '../css/styles.css';
import Flex from './Flex';
import Grid from './Grid';
import Buttons from './Buttons';

const target = document.querySelector('.container');
const flex = new Flex(target);
const grid = new Grid(target);
const buttons = new Buttons();

buttons.addEvent(flex);
buttons.addEvent(grid);
