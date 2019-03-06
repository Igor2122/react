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
        </div>
        `;

        return this.element;
    }

    mount(parent) {
        parent.appendChild(this.render());
    }
}

export default Card;