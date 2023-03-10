/* eslint-disable camelcase */
/* eslint-disable no-unused-expressions */
import { photoCardDOM } from './media/photo.js'
import { videoCardDOM } from './media/video.js'
import { filterModel } from '../utils/filter.js'

import { LightboxModel } from './lightbox.js'
import { photographerModel } from './photographer.js'

class MediaFactories {
  constructor () {
    this.user
    this.media
  }

  async getMediaCardDOM () {
    this.media = await filterModel.orderBy(document.querySelector('.select').value);
    (document.querySelector('.media_grid')) ? document.querySelector('.media_grid').remove() : ''
    const main = document.querySelector('.photograph-main')
    const media_grid = document.createElement('article')
    media_grid.setAttribute('class', 'media_grid');
    (this.media).forEach(element => {
      const media_button = document.createElement('button')
      media_button.setAttribute('aria-label', element.title)
      media_button.setAttribute('class', 'media_button')
      const media_elem = document.createElement('section')
      media_elem.setAttribute('class', 'media_element')

      if (element.image) {
        const i_image = document.createElement('i')
        i_image.setAttribute('class', 'fa-solid fa-image')
        media_button.appendChild(i_image)
        media_button.appendChild(photoCardDOM.get(`../assets/images/${this.user.name.split(' ')[0].replace('-', ' ')}/${element.image}`, element.title))
        media_elem.appendChild(media_button)
      } else if (element.video) {
        const i_video = document.createElement('i')
        i_video.setAttribute('class', 'fa-solid fa-video')
        media_button.appendChild(i_video)
        media_button.appendChild(videoCardDOM.get(`../assets/images/${this.user.name.split(' ')[0].replace('-', ' ')}/${element.video}`))
        media_elem.appendChild(media_button)
      }

      media_button.addEventListener('click', async (e) => { if (e.target.tagName !== 'P') await LightboxModel.openLightbox(element.id) })
      const media_titre = document.createElement('div')
      const p_titre = document.createElement('p')
      const button_likes = document.createElement('button')
      const p_likes = document.createElement('p')
      p_titre.textContent = element.title
      p_titre.setAttribute('class', 'titre')
      p_likes.setAttribute('class', 'fa-regular heart')
      p_likes.setAttribute('liked', 'false')
      button_likes.setAttribute('liked', 'false')
      p_likes.textContent = element.likes + ' '
      media_titre.appendChild(p_titre)
      button_likes.appendChild(p_likes)
      media_titre.appendChild(button_likes)
      media_elem.appendChild(media_titre)

      button_likes.onclick = (e) => {
        if (e.target.attributes.liked.value === 'false') {
          p_likes.textContent = parseInt(p_likes.textContent) + 1
          photographerModel.addLike()
          p_likes.setAttribute('class', 'fa-solid heart')
          p_likes.setAttribute('liked', 'true')
          button_likes.setAttribute('liked', 'true')
        } else {
          p_likes.textContent = parseInt(p_likes.textContent) - 1
          photographerModel.removeLike()
          p_likes.setAttribute('class', 'fa-regular heart')
          p_likes.setAttribute('liked', 'false')
          button_likes.setAttribute('liked', 'false')
        }
      }

      media_grid.appendChild(media_elem)
    })
    main.appendChild(media_grid)
  }

  async loadMedia (photographer) {
    this.user = photographer
    LightboxModel.loadMedia(this.media)
  }
} export const MediaFactoriesModel = new MediaFactories()
