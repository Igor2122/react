import './message.css';
import image from './img/baby-goat.jpg' ;

export default class Message {
  render() {
    this.element = document.createElement('div');
    this.element.innerHTML = (
      '<h1>Hello Webpack</h1>' + 
      `<img src="/${image}" />`
    );
    return this.element;
  }

  mount(parent) {
    parent.appendChild(this.render());
  }
}
