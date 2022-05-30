import './style.css'

import { newElement, newImg } from './helperFunctions'

import buildHeader  from './buildHeader'
import buildSidebar from './buildSidebar'
import buildMain    from './buildMain'

const Content = document.querySelector('.content')

const header  = buildHeader()
const sidebar = buildSidebar()
const main    = buildMain()
/*

const modal = newElement('div', 'modal')
const modalContent = newElement('div', 'modal-content')
modal.append(modalContent)
main.append(modal)

*/

Content.append(header, sidebar, main)
