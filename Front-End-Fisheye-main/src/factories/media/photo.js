/* eslint-disable camelcase */
class Photo {
  get (path, titre) {
    const media_elem = document.createElement('div')
    media_elem.setAttribute('class', 'media_element')
    const img = document.createElement('img')
    const i = document.createElement('i')
    i.setAttribute('class', 'fa-solid fa-image')
    img.src = path
    img.alt = titre
    media_elem.appendChild(i)
    media_elem.appendChild(img)
    return media_elem
  }
} export const photoCardDOM = new Photo()
