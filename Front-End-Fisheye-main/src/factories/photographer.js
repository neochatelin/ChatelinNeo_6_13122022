/* eslint-disable array-callback-return */
/* eslint-disable camelcase */
/* eslint-disable no-unused-expressions */
import { photographerApiModel } from '../api/photographer_api.js'

class PhotographerFactory {
  constructor () {
    this.name
    this.id
    this.portrait
    this.city
    this.country
    this.tagline
    this.price
    this.media
    this.likes = 0
  }

  getUserCardDOM () {
    const article = document.createElement('article')
    const a = document.createElement('a')
    a.setAttribute('href', './photographer.html?photographer=' + this.id)
    const img = document.createElement('img')
    img.setAttribute('src', `../assets/photographers/${this.portrait}`)
    img.alt = this.name + ' profile picture'
    const h2 = document.createElement('h2')
    h2.textContent = this.name
    const p_location = document.createElement('p')
    const p_tagline = document.createElement('p')
    const p_price = document.createElement('p')
    p_location.textContent = this.city + ', ' + this.country
    p_location.setAttribute('class', 'location')
    p_tagline.textContent += this.tagline
    p_tagline.setAttribute('class', 'tagline')
    p_price.textContent += this.price + '€/jour'
    p_price.setAttribute('class', 'price')
    a.appendChild(img)
    a.appendChild(h2)
    article.appendChild(a)
    article.appendChild(p_location)
    article.appendChild(p_tagline)
    article.appendChild(p_price)
    return (article)
  }

  getUserProfileDOM () {
    const main = document.querySelector('main')
    const h2 = document.querySelector('h2')
    h2.textContent += ' ' + this.name

    // photograph-header DOM
    const header = document.querySelector('.photograph-header')
    const h1 = document.createElement('h1')
    const div = document.createElement('div')
    const p_location = document.createElement('p')
    const p_tagline = document.createElement('p')
    const img = document.createElement('img')

    h1.textContent = this.name
    p_location.textContent = this.city + ', ' + this.country
    p_location.setAttribute('class', 'location')
    p_tagline.textContent = this.tagline
    p_tagline.setAttribute('class', 'tagline')
    img.src = `../assets/photographers/${this.portrait}`
    img.alt = this.name

    div.appendChild(h1)
    div.appendChild(p_location)
    div.appendChild(p_tagline)

    header.insertBefore(div, document.querySelector('button'))
    header.appendChild(img)

    // photograph-main DOM
    const div_media = document.createElement('div')
    const label_filter = document.createElement('label')
    const select_filter = document.createElement('select')
    const option_popularite = document.createElement('option')
    const option_date = document.createElement('option')
    const option_titre = document.createElement('option')

    div_media.setAttribute('class', 'photograph-main')

    label_filter.textContent = 'Trier par '
    label_filter.setAttribute('for', 'filter-select')
    select_filter.setAttribute('name', 'filter')
    select_filter.setAttribute('id', 'filter-select')

    option_popularite.textContent = 'Popularité'
    option_popularite.setAttribute('value', 'popularite')
    option_date.textContent = 'Date'
    option_date.setAttribute('value', 'date')
    option_titre.textContent = 'Titre'
    option_titre.setAttribute('value', 'titre')

    select_filter.appendChild(option_popularite)
    select_filter.appendChild(option_date)
    select_filter.appendChild(option_titre)

    div_media.appendChild(label_filter)
    div_media.appendChild(select_filter)

    main.appendChild(div_media)

    // photograph-foot DOM
    const div_like = document.createElement('div')
    const p_like = document.createElement('div')
    const i_heart = document.createElement('i')
    const p_price = document.createElement('div')

    div_like.setAttribute('class', 'photograph-foot')
    p_like.textContent += this.likes + ' '
    p_like.setAttribute('class', 'like')
    i_heart.setAttribute('class', 'fa-solid fa-heart')
    p_price.textContent += this.price + '€/jour'
    p_price.setAttribute('class', 'price')

    p_like.appendChild(i_heart)
    div_like.appendChild(p_like)
    div_like.appendChild(p_price)
    main.appendChild(div_like)
  }

  addLike () {
    const i_heart = document.createElement('i')
    i_heart.setAttribute('class', 'fa-solid fa-heart')
    document.querySelector('.like').textContent = parseInt(document.querySelector('.like').textContent) + 1
    document.querySelector('.like').appendChild(i_heart)
  }

  removeLike () {
    const i_heart = document.createElement('i')
    i_heart.setAttribute('class', 'fa-solid fa-heart')
    document.querySelector('.like').textContent = parseInt(document.querySelector('.like').textContent) - 1
    document.querySelector('.like').appendChild(i_heart)
  }

  async loadUser (data) {
    const { name, id, portrait, city, country, tagline, price } = data
    this.name = name
    this.id = id
    this.portrait = portrait
    this.city = city
    this.country = country
    this.tagline = tagline
    this.price = price;
    (await photographerApiModel.getAllMedia(id)).map((e) => { this.likes += e.likes })
  }
} export const photographerModel = new PhotographerFactory()
