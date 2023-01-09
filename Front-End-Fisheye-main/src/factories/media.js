import { photographerApiModel } from "../api/photographer_api.js";
import { photoCardDOM } from "./media/photo.js";
import { videoCardDOM } from "./media/video.js";

import { LightboxModel } from "../utils/lightbox.js";

class MediaFactories{
    constructor(){
        this.user;
        this.media;
    }
    getMediaCardDOM() {
        const main = document.querySelector(".photograph-main");
        const media_grid = document.createElement('div');
        media_grid.setAttribute('class', 'media_grid');
        (this.media).forEach(element => {
            let media_elem;
            
            if(element.image){
                media_elem = photoCardDOM.get(`../assets/images/${this.name.split(' ')[0].replace('-', ' ')}/${element.image}`);
            }
            else if(element.video){
                media_elem = videoCardDOM.get(`../assets/images/${this.name.split(' ')[0].replace('-', ' ')}/${element.video}`);
            }
            
            media_elem.setAttribute('onclick', `console.log(${element.id})`);
            const media_titre = document.createElement('div');
            const p_titre = document.createElement('p');
            const p_likes = document.createElement('p');
            p_titre.textContent = element.title;
            p_likes.setAttribute("class", "fa-solid heart");
            p_likes.textContent = element.likes+' ';
            media_titre.appendChild(p_titre);
            media_titre.appendChild(p_likes);
            media_elem.appendChild(media_titre);

            media_grid.appendChild(media_elem);
        });
        main.appendChild(media_grid);
    }
    async loadMedia(photographer){
        this.media = await photographerApiModel.getAllMedia(photographer.id);
        this.name = photographer.name;
        LightboxModel.loadMedia(this.media);
    }
}export const MediaFactoriesModel = new MediaFactories();