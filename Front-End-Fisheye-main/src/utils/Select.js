/* eslint-disable array-callback-return */
/* eslint-disable camelcase */
class Select {
  setOptions (options) {
    this.options = options
    this.activeOption = 0
  }

  #onChange () {
    document.querySelector('.select').textContent = this.options[this.activeOption]
    document.querySelector('.select').setAttribute('value', this.options[this.activeOption])

    document.querySelector('.options').innerHTML = '';

    (this.options).map((e, i) => {
      if (e !== this.options[this.activeOption]) {
        const elem = document.createElement('button')
        elem.textContent = e;
        (e === this.options[this.activeOption]) ? elem.setAttribute('class', 'item active') : elem.setAttribute('class', 'item')
        elem.onclick = (e) => {
          this.activeOption = i
          this.#onChange()
        }
        document.querySelector('.options').appendChild(elem)
      }
    })
  }

  getDom () {
    const select = document.createElement('div')
    select.setAttribute('class', 'select_container')

    const select_button = document.createElement('button')
    select_button.setAttribute('class', 'select')
    select_button.setAttribute('name', 'select')
    select_button.setAttribute('value', this.options[this.activeOption])
    select_button.textContent = this.options[this.activeOption]

    select.appendChild(select_button)

    const select_options = document.createElement('div')
    select_options.setAttribute('class', 'options')
    select_options.setAttribute('tabindex', '1');

    (this.options).map((e, i) => {
      if (e !== this.options[this.activeOption]) {
        const elem = document.createElement('button')
        elem.textContent = e
        elem.setAttribute('value', this.options[this.activeOption])
        elem.setAttribute('tabindex', '0');
        (e === this.options[this.activeOption]) ? elem.setAttribute('class', 'item active') : elem.setAttribute('class', 'item')
        elem.addEventListener('click', (e) => {
          this.activeOption = i
          this.#onChange()
        })
        select_options.appendChild(elem)
      }
    })

    select.appendChild(select_options)

    window.onclick = (e) => {
      if (!e.target.className.includes('select')) {
        select_button.classList.remove('active')
        select_options.classList.remove('active')
      } else {
        select_button.classList.toggle('active')
        select_options.classList.toggle('active')
      }
    }

    return select
  }
} export const selectModel = new Select()
