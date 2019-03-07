import Card from './Card';
import {
    http
} from './http';

class UI {
    constructor() {
        this.postsContainer = document.querySelector('.postsContainer');
        // this.titleInput = element.querySelector('#title');
        // this.body = element.querySelector('#body');
        // this.id = element.querySelector('#id');
        // this.submit = element.querySelector('.submit');
        // this.fromState = 'add';
    }

    render() {
        this.element = document.createElement('div')
        this.element.className = 'card card-body card-form';
        this.element.innerHTML = `
            <h1>Say Something</h1>
            <div class="lead">What's on your mind</div>
            <div class="form-group">
            <input type="text" id="title" class="form-control" placeholder="Post Title">
            </div>
            <div class="form-group">
            <textarea class="form-control" name="" id="body" cols="30" rows="10" placeholder="Post Body"></textarea>
            </div>
            <input type="hidden" id="id" value="">
            <div class="alert-messages"></div>
            <button class="post-submit btn btn-primary btn-block">Post it!</button> 
            <span class="from-end"></span>
        <br>
        <div id="posts"></div>
        `
        const addPost = this.element.querySelector('.post-submit');
        addPost.addEventListener('click', () => {
            const card = new Card();
            card.addPost();
            this.getPosts();
        });

        


        return this.element;
    }

    mount() {
        this.postsContainer.appendChild(this.render());
        this.getPosts();
    }

    getPosts() {
        http.get('http://localhost:3000/posts')
            .then(data => this.showPosts(data))
            .catch(err => console.log(err));

    }

    showPosts(posts) {
        const postListParent = document.querySelector('#posts');

        postListParent.innerHTML = '';
        for (let post of posts) {
            let card = new Card(post.id, post.title, post.body);
            card.mount(postListParent);
        }

    }

    showAlert(message, parent, type) {
        let alert = document.createElement('div');
        alert.classList.add('alert', `alert-${type}`);
        alert.textContent = message;
        parent.appendChild(alert);
        setTimeout(() => {
            parent.removeChild(alert);
        }, 1000);

    }

    clearFields(inputs) {
        for (let input of inputs) {
            input.value = '';
        }
    }

    update(id, title, body) {
        this.id.value = id;
        this.titleInput.value = title;
        this.body.value = body;

    }
}

export const ui = new UI;