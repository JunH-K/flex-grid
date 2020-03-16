import ClassList from './ClassList';

class Flex {
  constructor(target) {
    this.container = target;
    this.classList = new ClassList(this.container);
  }

  apply = e => {
    console.log('그리드');
  };
}

export default Flex;
