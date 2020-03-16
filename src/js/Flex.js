import ClassList from './ClassList';

class Flex {
  constructor(target) {
    this.container = target;
    this.classList = new ClassList(this.container);
  }

  apply = e => {
    const {
      target: {
        dataset: { name },
      },
    } = e;
    this.classList.toggle(name);
  };
}

export default Flex;
