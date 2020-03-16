import ClassList from './ClassList';

class Element {
  constructor(target) {
    this.element = target;
    this.classList = new ClassList();
  }

  toggleClass = e => {
    const {
      target: {
        dataset: { name },
      },
    } = e;

    if (typeof this.element.forEach == 'function') {
      return this.element.forEach(item => {
        this.classList.toggle(item, name);
      });
    }

    return this.classList.toggle(this.element, name);
  };
}

export default Element;
