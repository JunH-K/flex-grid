class Buttons {
  constructor() {
    this.buttons = document.querySelector('.buttons');
  }

  addEvent = target => {
    this.buttons.addEventListener('click', target.apply);
  };
}

export default Buttons;
