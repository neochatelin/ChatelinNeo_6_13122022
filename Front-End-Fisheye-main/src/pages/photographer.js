import { photographerApiModel } from "../api/photographer_api.js";
import { photographerModel } from "../factories/photographer.js";

let displayData = async (media)=>{
    photographerModel.getUserProfileDOM();
    photographerModel.getMediaCardDOM(media);
}
let init = async ()=>{
    let photographer = await photographerApiModel.getPhotographer(new URLSearchParams(window.location.search).get('photographer'));
    const media = await photographerApiModel.getAllMedia(photographer.id);
    photographerModel.loadUser(photographer);
    await displayData(media);
};init();
