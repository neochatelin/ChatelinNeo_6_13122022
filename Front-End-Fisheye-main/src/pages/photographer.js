import { photographerModel } from '../factories/photographer.js'
import { photographerApiModel } from '../api/photographer_api.js'
import { MediaFactoriesModel } from '../factories/media.js'

const displayData = async () => {
  await photographerModel.getUserProfileDOM()
  MediaFactoriesModel.getMediaCardDOM()
}
const init = async () => {
  const photographer = await photographerApiModel.getPhotographer(new URLSearchParams(window.location.search).get('photographer'))
  await photographerModel.loadUser(photographer)
  await MediaFactoriesModel.loadMedia(photographer)
  await displayData()
  document.querySelector('.options').addEventListener('click', async () => {
    await MediaFactoriesModel.getMediaCardDOM()
  })
}; init()
