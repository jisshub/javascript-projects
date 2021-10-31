class TypeWrite {
  constructor(textElement, words, wait = 3000) {
    this.textElement = textElement;
    this.words = words;
    this.wait = parseInt(wait, 5);
    this.wordIndex = 0;
    this.txt = '';
    this.isDelete = false;
  }
  // define type method
  type() {
    // get the current index of data-words.
    const currentIndex = this.wordIndex % this.words.length;
    // full text of current word
    const fullText = this.words[currentIndex];
    if (this.isDelete) {
      // remove character
      this.txt = fullText.substring(0, this.txt.length - 1);
    } else {
      // add character
      this.txt = fullText.substring(0, this.txt.length + 1);
    }
    // insert txt to text Element in a span element
    this.textElement.innerHTML = `<span class="txt">${this.txt}</span>`;

    // set initial type speed
    let typeSpeed = 300;
    if (this.isDelete) {
      typeSpeed /= 300;
    }

    // if word is complete
    if (!this.isDelete && fullText === this.txt) {
      // make a pause at end
      typeSpeed = this.wait;
      // set delete to true
      this.isDelete = true;
    } else if (this.isDelete && this.txt === '') {
      this.isDelete = false;
      // move to next word
      this.wordIndex++;
      typeSpeed = 500;
    }

    // call type() after 3sec expires.
    setTimeout(() => this.type(), typeSpeed);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  // grab the text element
  const textElement = document.querySelector('.txt-type');
  // grab the words -convert to js object
  const words = JSON.parse(textElement.getAttribute('data-words'));
  // grab the value of data-wait attribute
  const wait = textElement.getAttribute('data-wait');
  // initialize the typeWriter class here
  const n1 = new TypeWrite(textElement, words, wait);
  n1.type();
});
