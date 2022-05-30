import './style.css'

import { newElement, newImg } from './helperFunctions'

import buildHeader  from './buildHeader'
import buildSidebar from './buildSidebar'
import buildMain    from './buildMain'

import DOM from './DOMmethods'

const Content = document.querySelector('.content')

const header  = buildHeader()
const sidebar = buildSidebar()
const main    = buildMain()

Content.append(header, sidebar, main)

// Add new task button functionality
const newTaskBtn = document.querySelector('.new-task-btn')
newTaskBtn.addEventListener('click', function() {
  console.log('hi')
  DOM()
  
})

/*

const modal = newElement('div', 'modal')
const modalContent = newElement('div', 'modal-content')
modal.append(modalContent)
main.append(modal) */
