class ClassList {
  toggle = (target, name) => {
    if (this.contains(target, name)) {
      this.removeClass(target, name);
    } else {
      this.addClass(target, name);
    }
  };

  addClass = (target, className) => {
    target.classList.add(className);
  };

  removeClass = (target, className) => {
    target.classList.remove(className);
  };

  contains = (target, className) => {
    return target.classList.contains(className);
  };
}

export default ClassList;
