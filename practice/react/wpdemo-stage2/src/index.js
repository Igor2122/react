import Message from './Message/message.js';
import './index.html';

document.addEventListener('DOMContentLoaded', () => {
  const message = new Message();
  message.mount(document.querySelector('#app'));
});