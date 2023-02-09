/* eslint-disable camelcase */
class Video {
  get (path) {
    const media_elem = document.createElement('section')
    const video = document.createElement('video')
    video.src = path
    media_elem.appendChild(video)
    return media_elem
  }
} export const videoCardDOM = new Video()
