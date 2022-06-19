import { newElement, newImg } from "./helperFunctions"

import viewSvg from './media/tune.svg'

const buildMain = () => {
  const viewIcon = newImg(viewSvg)

  const main = newElement('div', 'main-container')

  const mainHeaderContainer = newElement('div', 'main-header-container')
  const mainHeader = newElement('h3')
  mainHeader.textContent = 'Tasks'

  const mainSort = newElement('div', 'dropdown')

  const mainFilterContent = newElement('div', 'dropdown-content')
  const sortDateAsc     = newElement('div', 'date-asc')
  const sortDateDesc    = newElement('div', 'date-desc')

  sortDateAsc.textContent  = 'Date ↑'
  sortDateDesc.textContent = 'Date ↓'

  sortDateAsc.dataset.sortType  = 'dateAsc'
  sortDateDesc.dataset.sortType = 'dateDesc'

  mainFilterContent.append(
    sortDateAsc,
    sortDateDesc
  )

  mainSort.textContent = 'View'
  mainSort.prepend(viewIcon)
  mainSort.append(mainFilterContent)

  main
  .appendChild(mainHeaderContainer)
  .append(mainHeader, mainSort)

  return { main, mainSort }
}

export default buildMain