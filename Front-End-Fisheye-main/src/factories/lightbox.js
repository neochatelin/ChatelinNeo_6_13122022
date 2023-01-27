/* eslint-disable no-unused-expressions */
/* eslint-disable camelcase */
import { photographerApiModel } from '../api/photographer_api.js'
import { filterModel } from '../utils/filter.js'
class Lightbox {
  constructor () {
    this.bool = false
    this.cursor
    this.user
    this.img = '../assets/images/Mimi/Event_BenevidesWedding.jpg'
  }

  async LightboxDOM () {
    if (document.querySelector('.light-box')) {
      document.querySelector('.light-box').remove()
    }
    if (!this.user) { this.user = await photographerApiModel.getPhotographer(new URLSearchParams(window.location.search).get('photographer')) }
    const lightbox = document.createElement('div')
    const div_container = document.createElement('div')
    const x = document.createElement('i')
    const i_arrow_left = document.createElement('i')
    const i_arrow_right = document.createElement('i')
    const p_titre = document.createElement('p')

    x.setAttribute('class', 'fa-sharp fa-solid fa-x X')
    div_container.setAttribute('class', 'div_container')

    const div_media = document.createElement('div')
    div_media.setAttribute('class', 'div_media')

    if (this.media[this.cursor].image) {
      const img = document.createElement('img')
      img.src = `../assets/images/${this.user.name.split(' ')[0].replace('-', ' ')}/${this.media[this.cursor].image}`
      img.alt = this.media[this.cursor].title
      div_media.appendChild(img)
    } else {
      const video = document.createElement('video')
      video.src = `../assets/images/${this.user.name.split(' ')[0].replace('-', ' ')}/${this.media[this.cursor].video}`
      video.setAttribute('controls', 'controls')
      div_media.appendChild(video)
    }

    i_arrow_left.setAttribute('class', 'fa-sharp fa-solid fa-chevron-left')
    i_arrow_right.setAttribute('class', 'fa-sharp fa-solid fa-chevron-right')
    p_titre.setAttribute('class', 'titre')
    p_titre.textContent = this.media[this.cursor].title

    div_media.appendChild(p_titre)

    div_container.appendChild(i_arrow_left)
    div_container.appendChild(div_media)
    div_container.appendChild(i_arrow_right)
    div_container.appendChild(x)

    lightbox.appendChild(div_container)
    lightbox.setAttribute('class', 'light-box')

    x.onclick = () => this.closeLightbox()
    i_arrow_left.onclick = () => this.leftArrow()
    i_arrow_right.onclick = () => this.rightArrow()
    addEventListener('keydown', async (e) => {
      if (!this.bool) {
        switch (e.key) {
          case 'ArrowRight':
            this.rightArrow()
            this.bool = true
            break
          case 'ArrowLeft':
            this.leftArrow()
            this.bool = true
            break
          case 'Escape':
            this.closeLightbox()
            this.bool = true
            break
        }
      }
    }); addEventListener('keyup', async (e) => {
      switch (e.key) {
        case 'ArrowRight':
          this.bool = false
          break
        case 'ArrowLeft':
          this.bool = false
          break
        case 'Escape':
          this.bool = false
          break
      }
    })
    return lightbox
  }

  async openLightbox (id) {
    this.media = await filterModel.orderBy(document.querySelector('.select').value)
    for (let index = 0; index < this.media.length; index++) {
      if (this.media[index].id === id) {
        this.cursor = index
        break
      }
    }
    document.querySelector('body').appendChild(await this.LightboxDOM())
  }

  closeLightbox () {
    document.querySelector('.light-box').remove()
  }

  async leftArrow () {
    (this.cursor !== 0) ? this.cursor-- : this.cursor = this.media.length - 1
    this.closeLightbox()
    document.querySelector('body').appendChild(await this.LightboxDOM())
  }

  async rightArrow () {
    (this.cursor !== this.media.length - 1) ? this.cursor++ : this.cursor = 0
    this.closeLightbox()
    document.querySelector('body').appendChild(await this.LightboxDOM())
  }

  loadMedia (media) {
    this.media = media
  }
} export const LightboxModel = new Lightbox()
