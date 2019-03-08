class Slider {

    constructor() {
        this.root = document.querySelector('#app');
        this.left = 0;
        this.dragLeft = 0;
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
        const handle = this.element.querySelector('.handle');

        line.addEventListener('mouseup', this.moveElementHandler.bind(this));

        line.addEventListener('mousemove', this.dragMouse.bind(this));
        handle.addEventListener('mouseup', this.letGo.bind(this));
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
        this.mouseDrag = true;
        this.dragLeft = e.clientX;
        console.log(this.dragLeft);
        this.update();  
    }

    letGo (e) {
        this.mouseDrag = false;
    }

    update() {
        const handle = this.element.querySelector('.handle');
        const value = this.element.querySelector('.value');
        if(this.mouseDrag && this.dragLeft < 500 && this.dragLeft > 0) {
            value.textContent = this.dragLeft + ' px';
            // handle.style.left = (this.left - 20) + 'px';
            handle.style.left = (this.dragLeft - 20) + 'px';
        }
    }
}

const slider = new Slider();
slider.mount();