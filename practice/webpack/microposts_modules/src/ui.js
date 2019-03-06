import  Card  from './Card';
class UI {
    constructor () {
        this.post = document.querySelector('#posts');
        this.titleInput = document.querySelector('#title');
        this.body = document.querySelector('#body');
        this.id = document.querySelector('#id');
        this.submit = document.querySelector('.submit');
        this.fromState = 'add';
    }

    showPosts (posts) {
        this.post.innerHTML = '';
        for(let post of posts){
            let card = new Card(post.id, post.title, post.body);
            card.mount(this.post);
        }
        
    }

    showAlert (message, parent) {
        let alert = document.createElement('div');
        alert.classList.add('alert', 'alert-primary');
        alert.textContent = message;
        parent.appendChild(alert);
        setTimeout(() => {
            parent.removeChild(alert);
        }, 1000);
        
    }

    clearFields (inputs) {
        for(let input of inputs){
            input.value = '';
        }
    }
}

export const ui = new UI();