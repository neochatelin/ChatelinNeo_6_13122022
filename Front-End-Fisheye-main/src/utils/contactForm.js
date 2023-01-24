/* eslint-disable no-unused-vars */
function displayModal () {
  const modal = document.getElementById('contact_modal')
  const form = document.querySelector('form')
  modal.style.display = 'block'
  document.querySelector('.contact_submit_button').addEventListener('click', (e) => {
    e.preventDefault()
    console.log(form.elements[0].value)
    console.log(form.elements[1].value)
    console.log(form.elements[2].value)
    console.log(form.elements[3].value)
  })
}

function closeModal () {
  const modal = document.getElementById('contact_modal')
  modal.style.display = 'none'
}
