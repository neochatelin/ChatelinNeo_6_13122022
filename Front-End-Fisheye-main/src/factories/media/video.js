/* eslint-disable camelcase */
class Video {
  get (path) {
    const media_elem = document.createElement('section')
    media_elem.setAttribute('class', 'media_element')
    const video = document.createElement('video')
    const i = document.createElement('i')
    i.setAttribute('class', 'fa-solid fa-video')
    video.src = path
    media_elem.appendChild(i)
    media_elem.appendChild(video)
    return media_elem
  }
} export const videoCardDOM = new Video()
