'use strict';

class Options {
    constructor(height, width, bg, fontSize, textAlign) {
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;
        this.textAlign = textAlign;
    }
    createDiv() {
        let div = document.createElement('div');  
        div.innerHTML = "lalala";
        div.style.cssText = `height: ${this.height}px; width: ${this.width}px; background-color: ${this.bg}; font-size: ${this.fontSize}pt; text-align: ${this.textAlign};`;
        document.body.appendChild(div);
    }
}

const elem = new Options('100', '200', 'red', '26', 'left');
elem.createDiv();