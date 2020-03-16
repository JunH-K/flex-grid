class Flex {
  constructor() {
    document.querySelector('.buttons').addEventListener('click', this.onClick);
  }

  onClick = () => {
    alert('aa');
  };
}

export default Flex;
