import {
    http
} from './http';
import {
    ui
} from './ui';

class Card {
    constructor(id, title, body) {
        this.urlConn = 'http://localhost:3000/posts';
        this.id = id;
        this.title = title;
        this.body = body;
    }

    render() {
        this.element = document.createElement('div');
        this.element.classList.add('card', 'mb-3');
        this.element.innerHTML = `
        <div class="card-body">
            <h4 class="card-title">${this.title}</h4>
            <p class="card-text">${this.body}</p>
            <a href="#" class="edit card-link" data-id="${this.id}">
                <i class="fa fa-pencil"></i>
            </a>
            <a href="#" class="delete card-link" data-id="${this.id}">
                <i class="fa fa-remove"></i>
            </a>
        </div>
        `;

        let deletePost = this.element.querySelector('.delete');
        deletePost.addEventListener('click', this.deletePostHandler.bind(this));

        let updatePost = this.element.querySelector('.edit');
        updatePost.addEventListener('click', this.update.bind(this));

        return this.element;
    }

    deletePostHandler(e) {
        if (e.target.parentElement.classList.contains('delete')) {
            http.delete(`${this.urlConn}/${this.id}`)
                .then(data => {
                    http.get(this.urlConn)
                        .then(res => ui.showPosts(res))
                        .catch(err => console.log(err));
                })
                .catch(err => console.log(err));

        }
    }

    // List for edit state
    update(e) {
        console.log(e, 'clicked');
        ui.update(this.id, this.title, this.body);

    }

    saveData() {
        http.put(`${this.urlConn}/${this.id}`, [1, 3])
            .then(data => {})
            .catch(err => console.log(err));
    }

    mount(parent) {
        parent.appendChild(this.render());
    }
}


export default Card;