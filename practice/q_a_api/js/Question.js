class Question {
    constructor(title, body, vote) {
        this.title = title;
        this.body = body;
        this.votes = vote;
    }

    render() {
        this.element = document.createElement('li');
        this.element.className = 'list-group-item d-flex justify-content-between align-items-center'
        this.element.innerHTML = `
            ${ this.title}
            <br>
            ${ this.body }
            <div class="btn-group" role="group" aria-label="Basic example">
            <button type="button" class="ml-5 m-1 up_vote btn btn-secondary"> Up Vote</button>
            <button type="button" class="down_vote btn btn-secondary"> Down Vote</button>
            </div>
            <span class="voteCount badge badge-primary badge-pill">${this.votes}</span>
        `;
        
        const buttons = this.element.querySelector('.btn-group');
        buttons.addEventListener('click', e => {
            if(e.target.classList.contains('up_vote')){
                this.votes++;
            } else if(e.target.classList.contains('down_vote')) {
                this.votes --;
            }

            console.log(this.votes);
            this.update()
        })

        return this.element;
    }

    mount(parent) {
        parent.appendChild(this.render())
        
    }

    update() {
        this.element.querySelector('.voteCount').textContent = this.votes;
    }
}