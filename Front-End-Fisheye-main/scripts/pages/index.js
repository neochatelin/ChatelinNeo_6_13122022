    async function getPhotographers() {
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

    async function displayData(photographers) {
        const photographersSection = document.querySelector(".photographer_section");

        photographers.forEach((photographer) => {
            photographerModel.loadUser(photographer)
            const userCardDOM = photographerModel.getUserCardDOM();
            photographersSection.appendChild(userCardDOM);
        });
    };

    async function init() {
        // Récupère les datas des photographes
        const { photographers } = await getPhotographers();
        displayData(photographers);
    };
    
    init();
    
