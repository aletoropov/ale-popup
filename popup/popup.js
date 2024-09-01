class Popup {
    constructor(options) {
        this.modal = document.querySelector(options.modal);
        this.overlay = document.querySelector(options.overlay);
        
        this.overlay.onclick = () => this.close();
    }

    open(content) {
        this.modal.innerHTML = content;
        this.overlay.classList.add('open');
        this.modal.classList.add('open');
    }

    close() {
        this.overlay.classList.remove('open');
        this.modal.classList.remove('open');
    }
}