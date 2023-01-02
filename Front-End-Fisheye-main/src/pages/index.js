import { photographerApiModel } from "../api/photographer_api.js";
import { photographerModel } from "../factories/photographer.js";

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
    const { photographers } = await photographerApiModel.getAllPhotographers();
    displayData(photographers);
};
init();