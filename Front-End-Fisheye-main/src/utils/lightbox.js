class Lightbox{
    constructor(){
        this.media;
        this.name = 'Mimi';
        this.path = `../assets/images/${this.name.split(' ')[0].replace('-', ' ')}/`;
        this.img = '../assets/images/Mimi/Event_BenevidesWedding.jpg';
        this.modal = this.LightboxDOM();
    }
    LightboxDOM(){
        const lightbox = document.createElement('div');
        const div_container = document.createElement('div');
        const div_img = document.createElement('div');
        const x = document.createElement('i');
        const i_arrow_left = document.createElement('i');
        const img = document.createElement('img');
        const i_arrow_right = document.createElement('i');
        const p_titre = document.createElement('p');

        x.setAttribute('class', 'fa-sharp fa-solid fa-x X');
        div_container.setAttribute('class', 'div_container');
        div_img.setAttribute('class', 'div_img');
        img.src = this.img;
        i_arrow_left.setAttribute('class', 'fa-sharp fa-solid fa-chevron-left');
        i_arrow_right.setAttribute('class', 'fa-sharp fa-solid fa-chevron-right');
        p_titre.setAttribute('class', 'titre');
        p_titre.textContent = "titre";

        div_img.appendChild(img)
        div_img.appendChild(p_titre)

        div_container.appendChild(i_arrow_left);
        div_container.appendChild(div_img);
        div_container.appendChild(i_arrow_right);
        div_container.appendChild(x);

        lightbox.appendChild(div_container);
        lightbox.setAttribute('class', 'light-box')
        
        x.onclick = ()=>this.closeLightbox();
        i_arrow_left.onclick = ()=>this.leftArrow();
        i_arrow_right.onclick = ()=>this.rightArrow();
        
        return lightbox;
    }
    openLightbox(){
        document.querySelector('body').appendChild(this.modal);
    }
    closeLightbox(){
        document.querySelector('.light-box').remove();
    }
    leftArrow(){

    }
    rightArrow(){

    }
    loadMedia(media){
        this.media = media;
        console.log(media);
    }
}export const LightboxModel = new Lightbox();