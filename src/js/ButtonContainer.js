import ClassList from './ClassList';

class ButtonContainer {
  constructor() {
    this.buttons = document.querySelector('.buttons');
    this.classList = new ClassList();
  }

  addEvent = (type, target) => {
    this.buttons.addEventListener(type, e => {
      if (e.target.tagName.toUpperCase() === 'BUTTON') {
        this.classList.toggle(e.target, 'on');
        this.classList.toggle(e.target, 'off');
        target.toggleClass(e);
      }
    });
  };
}

export default ButtonContainer;
