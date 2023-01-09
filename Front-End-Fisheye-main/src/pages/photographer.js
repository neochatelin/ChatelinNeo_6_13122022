import { photographerModel } from "../factories/photographer.js";
import { photographerApiModel } from "../api/photographer_api.js";
import { MediaFactoriesModel } from "../factories/media.js";

let displayData = async ()=>{
    photographerModel.getUserProfileDOM();
    MediaFactoriesModel.getMediaCardDOM();
}
let init = async ()=>{
    let photographer = await photographerApiModel.getPhotographer(new URLSearchParams(window.location.search).get('photographer'));
    await photographerModel.loadUser(photographer);
    await MediaFactoriesModel.loadMedia(photographer);
    await displayData();
};init();
