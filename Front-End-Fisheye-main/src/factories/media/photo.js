/* eslint-disable camelcase */
class Photo {
  get (path, titre) {
    const media_elem = document.createElement('div')
    const img = document.createElement('img')
    img.src = path
    img.alt = titre
    media_elem.appendChild(img)
    return media_elem
  }
} export const photoCardDOM = new Photo()
