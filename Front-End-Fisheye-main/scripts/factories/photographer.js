class PhotographerFactory{
    constructor(){
        this.name
        this.portrait
        this.city
        this.country
        this.tagline
        this.price
    }

    async getPhotographers() {
        // Ceci est un exemple de données pour avoir un affichage de photographes de test dès le démarrage du projet, 
        // mais il sera à remplacer avec une requête sur le fichier JSON en utilisant "fetch".
        return new Promise((resolve, reject) => {
            fetch('data/photographers.json').then((response)=>{
                response.json().then((e)=>{
                    resolve({
                        photographers: [...e.photographers]
                    });
                })
            })
        })
        // et bien retourner le tableau photographers seulement une fois récupéré
    }
    getUserCardDOM() {
        const picture = `assets/photographers/${this.portrait}`;
        const article = document.createElement( 'article' );
        const a = document.createElement( 'a' );
        a.setAttribute("href", './photographer.html?photographer='+this.name)
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)
        const h2 = document.createElement( 'h2' );
        h2.textContent = this.name;
        const p_location = document.createElement( 'p' );
        const p_tagline = document.createElement( 'p' );
        const p_price = document.createElement( 'p' );
        p_location.textContent = this.city+', '+this.country;
        p_location.setAttribute("class", "location");
        p_tagline.textContent += this.tagline;
        p_tagline.setAttribute("class", "tagline");
        p_price.textContent += this.price+"€/jour";
        p_price.setAttribute("class", "price");
        a.appendChild(img);
        a.appendChild(h2);
        article.appendChild(a);
        article.appendChild(p_location);
        article.appendChild(p_tagline);
        article.appendChild(p_price);
        return (article);
    }
    loadUser(data){
        let { name, portrait, city, country, tagline, price } = data;
        this.name = name;
        this.portrait = portrait
        this.city = city
        this.country = country
        this.tagline = tagline
        this.price = price
    }
}const photographerModel = new PhotographerFactory();