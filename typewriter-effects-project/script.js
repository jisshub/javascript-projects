// const typeWrite = (textElement, words, wait = 3000) => {
//   this.textElement = textElement;
//   this.words = words;
//   this.wait = parseInt(wait, 5);
//   this.wordIndex = 0;

// };

class TypeWriter {
  constructor(textElement, words, wait = 3000) {
    this.textElement = textElement;
    this.words = words;
    this.wait = parseInt(wait, 10);
    this.wordIndex = 0;
    this.txt = '';
    this.isDelete = false;
  }
}
document.addEventListener('DOMContentLoaded', () => {
  // grab the text element
  const textElement = document.querySelector('.txt-type');
  // grab the words.
  const words = textElement.getAttribute('data-words');
});
