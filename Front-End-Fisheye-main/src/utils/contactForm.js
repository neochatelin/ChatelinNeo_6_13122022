/* eslint-disable no-unused-vars */
function displayModal () {
  const modal = document.getElementById('contact_modal')
  modal.style.display = 'block'
  document.querySelector('.contact_button').addEventListener('click', (e) => { e.preventDefault(); console.log(e) })
}

function closeModal () {
  const modal = document.getElementById('contact_modal')
  modal.style.display = 'none'
}
