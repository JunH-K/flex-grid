class ClassList {
  constructor(target) {
    this._element = target;
  }

  toggle = name => {
    if (this._contains(name)) {
      this._remove(name);
    } else {
      this._add(name);
    }
  };

  _contains = className => {
    return this._element.classList.contains(className);
  };

  _add = className => {
    this._element.classList.add(className);
  };

  _remove = className => {
    this._element.classList.remove(className);
  };
}

export default ClassList;
