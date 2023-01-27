/* eslint-disable no-unused-expressions */
import { photographerApiModel } from '../api/photographer_api.js'

class Filter {
  media

  async #getMedia () {
    const user = await photographerApiModel.getPhotographer(new URLSearchParams(window.location.search).get('photographer'))
    this.media = await photographerApiModel.getAllMedia(user.id)
  }

  async orderBy (filter) {
    (!this.media) ? await this.#getMedia() : ''
    switch (filter) {
      case 'popularité':
        this.media = this.media.sort((a, b) => b.likes - a.likes)
        break
      case 'date':
        this.media = this.media.sort((a, b) => new Date(b.date) - new Date(a.date))
        break
      case 'titre':
        this.media = this.media.sort((a, b) => a.title > b.title)
        break
      default:
        break
    }
    return this.media
  }
} export const filterModel = new Filter()
