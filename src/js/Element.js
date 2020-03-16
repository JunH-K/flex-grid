import ClassList from './ClassList';

class Element {
  constructor(target) {
    this.container = target;
    this.classList = new ClassList();
  }

  toggleClass = e => {
    const {
      target: {
        dataset: { name },
      },
    } = e;
    this.classList.toggle(this.container, name);
  };
}

export default Element;
