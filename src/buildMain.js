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

  mainFilterContent.append(
    filterDateAsc,
    filterDateDesc
  )

  mainFilter.textContent = 'View'
  mainFilter.prepend(viewIcon)
  mainFilter.append(mainFilterContent)
  
  /*
  const practiceTask = newElement('div')
  const pracTaskRadio = newElement('input')
  pracTaskRadio.setAttribute('type', 'checkbox')
  const pracTask = newElement('div')
  pracTask.textContent = 'Read work emails'
  const pracDate = newElement('div')
  pracDate.classList.add('task-due-date')
  pracDate.textContent = 'June 16, 2022'

  practiceTask.append(
    pracTaskRadio,
    pracTask,
    pracDate
  )
  
  main.append(
    practiceTask,
    newElement('div'),
    newElement('div'),
    newElement('div'))
  
    */

  main
  .appendChild(mainHeaderContainer)
  .append(mainHeader, mainFilter)
  return main
}

export default buildMain