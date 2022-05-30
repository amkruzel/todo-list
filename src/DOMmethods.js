import { newElement } from './helperFunctions'

const DOM = () => {
  const mainHeaderContainer = document.querySelector('.main-header-container')

  mainHeaderContainer.insertAdjacentElement('afterend', newElement('div'))
}

export default DOM