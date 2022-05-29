import './style.css'

function newElement(type, ...classes) {
  let el = document.createElement(type)
  classes.forEach((cl) => {
    el.classList.add(cl)
  })
  return el
}

const Content = document.querySelector('.content')

const header = newElement('div', 'header')
const sidebar = newElement('div', 'sidebar-container')

header.textContent = '// TO-DO'

const sidebarList= newElement('li', 'sidebar-list')


Content.append(header)
Content.append(sidebar)
