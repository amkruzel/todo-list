import './style.css'
import { newElement, newImg } from './helperFunctions'
import buildHeader from './buildHeader'
import buildSidebar from './buildSidebar'

import viewSvg from './media/tune.svg'
const viewIcon = newImg(viewSvg)

const Content = document.querySelector('.content')

const header = buildHeader()
const sidebar = buildSidebar()

const main = newElement('div', 'main-container')

const mainHeaderContainer = newElement('div', 'main-header-container')
const mainHeader = newElement('h3')
mainHeader.textContent = 'Today'

const mainFilter = newElement('div')
mainFilter.textContent = 'View'
mainFilter.prepend(viewIcon)



main
.appendChild(mainHeaderContainer)
.append(mainHeader, mainFilter)


/*

const modal = newElement('div', 'modal')
const modalContent = newElement('div', 'modal-content')
modal.append(modalContent)
main.append(modal)

*/

Content.append(header, sidebar, main)
