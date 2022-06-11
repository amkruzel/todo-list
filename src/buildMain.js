import { newElement, newImg } from "./helperFunctions"

import viewSvg from './media/tune.svg'

const buildMain = () => {
  const viewIcon = newImg(viewSvg)

  const main = newElement('div', 'main-container')

  const mainHeaderContainer = newElement('div', 'main-header-container')
  const mainHeader = newElement('h3')
  mainHeader.textContent = 'Tasks'

  const mainFilter = newElement('div', 'dropdown')

  const mainFilterContent = newElement('div', 'dropdown-content')
  const filterDateAsc     = newElement('div', 'date-asc')
  const filterDateDesc    = newElement('div', 'date-desc')

  filterDateAsc.textContent  = 'Date ↑'
  filterDateDesc.textContent = 'Date ↓'

  filterDateAsc.dataset.filterType  = 'dateAsc'
  filterDateDesc.dataset.filterType = 'dateDesc'

  mainFilterContent.append(
    filterDateAsc,
    filterDateDesc
  )

  mainFilter.textContent = 'View'
  mainFilter.prepend(viewIcon)
  mainFilter.append(mainFilterContent)

  main
  .appendChild(mainHeaderContainer)
  .append(mainHeader, mainFilter)

  return { main, mainFilter }
}

export default buildMain