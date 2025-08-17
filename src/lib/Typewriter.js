export default class Typewriter {
  constructor(
    parent,
    { loop = false, typingSpeed = 50, deletingSpeed = 50 } = {}
  ) {
    this.queue = [];

    // wrapper keeps text + cursor inline
    this.wrapper = document.createElement("span");
    this.wrapper.className = "typewriter-wrapper";

    this.element = document.createElement("span");
    this.element.className = "typewriter-text";

    this.cursor = document.createElement("span");
    this.cursor.className = "typewriter-cursor";
    this.cursor.textContent = "|";

    this.wrapper.append(this.element);
    this.wrapper.append(this.cursor);
    parent.append(this.wrapper);

    this.loop = loop;
    this.typingSpeed = typingSpeed;
    this.deletingSpeed = deletingSpeed;
  }

  typeString(string) {
    this._addToQueue((resolve) => {
      let i = 0;
      const interval = setInterval(() => {
        this.element.append(string[i]);
        i++;
        if (i >= string.length) {
          clearInterval(interval);
          resolve();
        }
      }, this.typingSpeed);
    });
    return this;
  }

  deleteChars(number) {
    this._addToQueue((resolve) => {
      let i = 0;
      const interval = setInterval(() => {
        this.element.innerText = this.element.innerText.substring(
          0,
          this.element.innerText.length - 1
        );
        i++;
        if (i >= number) {
          clearInterval(interval);
          resolve();
        }
      }, this.deletingSpeed);
    });
    return this;
  }

  deleteAll(deleteSpeed = this.deletingSpeed) {
    this._addToQueue((resolve) => {
      const interval = setInterval(() => {
        this.element.innerText = this.element.innerText.substring(
          0,
          this.element.innerText.length - 1
        );
        if (this.element.innerText.length === 0) {
          clearInterval(interval);
          resolve();
        }
      }, deleteSpeed);
    });
    return this;
  }

  pauseFor(duration) {
    this._addToQueue((resolve) => {
      setTimeout(resolve, duration);
    });
    return this;
  }

  async start() {
    let cb = this.queue.shift();
    while (cb != null) {
      await cb();
      if (this.loop) this.queue.push(cb);
      cb = this.queue.shift();
    }
    return this;
  }

  _addToQueue(cb) {
    this.queue.push(() => new Promise(cb));
  }

  getElement() {
    return this.element;
  }
}
