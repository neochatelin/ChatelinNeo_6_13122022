class Lightbox{
    constructor(){
        this.media;
        this.LightboxDOM();
    }
    LightboxDOM(){
        const body = document.querySelector('body');
        const lightbox = document.createElement('div');
        const h1 = document.createElement('h1');

        h1.textContent = 'test';
        lightbox.appendChild(h1);
        lightbox.setAttribute('class', 'light-box')
        lightbox.onclick = ()=>this.closeLightbox();
        
        body.appendChild(lightbox);
    }
    closeLightbox(){
        console.log('close')
        document.querySelector('.light-box').remove();
    }
    loadMedia(media){
        this.media = media;
    }
}
const LightboxModel = new Lightbox();