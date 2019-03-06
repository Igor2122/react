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

        for(let post of posts){
            let card = new Card(post.id, post.title, post.body);
            card.mount(this.post);
        }
        
    }
}

export const ui = new UI();