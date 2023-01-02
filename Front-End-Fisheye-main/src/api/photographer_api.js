class PhotographerApi{
    async getAllPhotographers() {
        return new Promise((resolve) => {
            fetch('../data/photographers.json').then((response)=>{
                response.json().then((e)=>{
                    resolve({
                        photographers: [...e.photographers]
                    });
                })
            })
        })
    }
    async getPhotographer(photographerId) {
        return new Promise((resolve) => {
            fetch('../data/photographers.json').then((response)=>{
                response.json().then((e)=>{
                    e.photographers.forEach(element => {
                        if(parseInt(photographerId) === element.id){
                            resolve(element);
                        }
                    });
                })
            })
        })
    }
    async getAllMedia(photographerId) {
        let media = [];
        return new Promise((resolve) => {
            fetch('../data/photographers.json').then((response)=>{
                response.json().then((e)=>{
                    e.media.forEach(element => {
                        if(photographerId === element.photographerId){
                            media.push(element);
                        }
                    });
                    let order = [];
                    media.forEach(element=>{
                        order.push(element.likes);
                    })
                    order.sort((a,  b)=> a - b);
                    resolve(media)
                })
            })
        })
    }
}export const photographerApiModel = new PhotographerApi();