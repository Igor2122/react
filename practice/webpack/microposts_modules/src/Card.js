class Card  {
    constructor (id, title, body){
        this.id = id;
        this.title = title;
        this.body = body;
    }

    render () {
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
        deletePost.addEventListener('click', this.deletePostHandler);

        return this.element;
    }

    deletePostHandler() {
        
    }

    mount(parent) {
        parent.appendChild(this.render());
    }
}

export default Card;