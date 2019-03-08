class Slider {

    constructor() {
        this.root = document.querySelector('#app');
        this.left = 0;
        this.mouseDrag = false;
    }

    render() {
        this.element = document.createElement('div');
        this.element.innerHTML = `
         <div class="line">
            <div class="handle"></div>
        </div> 
        <h3 class="value">${this.left}</h3>
        `;

        const line = this.element.querySelector('.line');

        line.addEventListener('mouseup', this.moveElementHandler.bind(this));
        line.addEventListener('mousedown', this.dragMouse.bind(this));
        return this.element;
    }

    mount() {
        this.root.appendChild(this.render());
    }

    moveElementHandler(e) {
        this.mouseDrag = true;
        if(this.mouseDrag) {
            this.left = e.clientX
            this.update();
        }
    }

    dragMouse (e) {
        this.mouseDrag = false;
    }

    update() {
        const handle = this.element.querySelector('.handle');
        const value = this.element.querySelector('.value');
        value.textContent = this.left + ' px';
        if(this.mouseDrag) {
            handle.style.left = (this.left - 20) + 'px';
        }
    }
}

const slider = new Slider();
slider.mount();