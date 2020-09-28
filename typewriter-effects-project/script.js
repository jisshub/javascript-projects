class TypeWrite {
  constructor(textElement, words, wait = 3000) {
    this.textElement = textElement;
    this.words = words;
    this.wait = parseInt(wait, 5);
    this.wordIndex = 0;
    this.txt = '';
    this.isDelete = false;
    this.type();
  }
  // define type method
  type() {
    // get the current index of data-words.
    const currentIndex = this.wordIndex % this.words.length;
    // full text of current word
    const fullText = this.words[currentIndex];
    if (this.isDelete) {
      // remove character
      this.txt = fullText.substring(0, -1);
    } else {
      // add character
      this.txt = fullText.substring(0, 1);
    }
    const g = document.getElementsByClassName('txt-type');
    g[0].innerText = this.txt;
    console.log(g);
    // call type() after 3sec expires.
    setTimeout(() => this.type(), 3000);
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
  new TypeWrite(textElement, words, wait);
});
