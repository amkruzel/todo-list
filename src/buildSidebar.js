import { newElement, newImg } from './helperFunctions'

import todaySvg        from './media/calendar-alert.svg'
import upcomingSvg     from './media/calendar-month-outline.svg'
import filterSvg       from './media/image-filter-none.svg'
import highPrioritySvg from './media/water-red.svg'
import recurringSvg    from './media/water-orange.svg'
import calendarSvg     from './media/tag.svg'
import circleGreenSvg  from './media/circle-green.svg'
import circleBlueSvg   from './media/circle-blue.svg'

import chevronDownSvg      from './media/chevron-down.svg'
import chevronRightSvg     from './media/chevron-right.svg'
import chevronDownSmallSvg from './media/chevron-down-small.svg'

const buildSidebar = () => {

  /* 
  
  If multiple instances of an icon are needed, must use newImg for each instance

  Therefore when using the following icons, you must call newImg on the svg element rather than using an Icon const:

  chevronDownSvg
  chevronRightSvg
  chevronDownSmallSvg
  chevronRightSmallSvg

  */

  // Icons
  const todayIcon        = newImg(todaySvg)
  const upcomingIcon     = newImg(upcomingSvg)
  const filterIcon       = newImg(filterSvg)
  const highPriorityIcon = newImg(highPrioritySvg)
  const recurringIcon    = newImg(recurringSvg)
  const calendarIcon     = newImg(calendarSvg)
  const circleGreenIcon  = newImg(circleGreenSvg)
  const circleBlueIcon   = newImg(circleBlueSvg)
  
  // Div containers
  const sidebar = newElement('div', 'sidebar-container')

  const mainTasksContainer = newElement('div')
  const favoritesContainer = newElement('div')
  const ProjectsContainer  = newElement('div')
  
  const ulMain      = newElement('ul')
  const ulFavorites = newElement('ul')
  const ulProjects  = newElement('ul')

  // Individual list items
  const mainToday             = newElement('li', 'selected-li')
  const mainUpcoming          = newElement('li')
  const mainFilter            = newElement('li')
  const favoritesHeader       = newElement('li', 'list-header')
  const favoritesHighPriority = newElement('li')
  const favoritesRecurring    = newElement('li')
  const favoritesCalendar     = newElement('li')
  const projectsHeader        = newElement('li', 'list-header', 'proj-header')
  const projectsPersonal      = newElement('li')
  const projectsWork          = newElement('li')

  // Project sub-items
  const personalHome   = newElement('li')
  const personalFamily = newElement('li')

  // Add text to each item
  mainToday.textContent             = 'Today'
  mainUpcoming.textContent          = 'Upcoming'
  mainFilter.textContent            = 'Filters & Labels'
  favoritesHeader.textContent       = 'Favorites'
  favoritesHighPriority.textContent = 'Highest Priority'
  favoritesRecurring.textContent    = 'Recurring'
  favoritesCalendar.textContent     = 'Calendar'
  projectsHeader.textContent        = 'Projects'
  projectsPersonal.textContent      = 'Personal'
  projectsWork.textContent          = 'Work'

  // Add text to project sub-items
  personalHome.textContent   = 'Home'
  personalFamily.textContent = 'Family'

  // Add icon(s) to each item
  mainToday.prepend(todayIcon)
  mainUpcoming.prepend(upcomingIcon)
  mainFilter.prepend(filterIcon)
  favoritesHeader.prepend(newImg(chevronDownSvg))
  favoritesHighPriority.prepend(highPriorityIcon)
  favoritesRecurring.prepend(recurringIcon)
  favoritesCalendar.prepend(calendarIcon)
  projectsHeader.prepend(newImg(chevronDownSvg))
  projectsPersonal.prepend(circleGreenIcon)
  projectsPersonal.prepend(newImg(chevronDownSmallSvg))
  projectsWork.prepend(circleBlueIcon)
  projectsWork.prepend(newImg(chevronDownSmallSvg))

  personalHome.prepend(newImg(circleGreenSvg))
  personalFamily.prepend(newImg(circleGreenSvg))

  // Add 'extra-chevron' class to items that have two icons
  projectsPersonal.classList.add('extra-chevron')
  projectsWork.classList.add('extra-chevron')

  // Add dataset to project category groupers
  projectsPersonal.dataset.isProjParent = '1'
  projectsPersonal.dataset.projName = 'personal'
  personalHome.dataset.isProjChild = '1'
  personalHome.dataset.projParent = 'personal'
  personalFamily.dataset.isProjChild = '1'
  personalFamily.dataset.projParent = 'personal'

  // Putting everything together
  sidebar
    .appendChild(mainTasksContainer)
    .appendChild(ulMain)
    .append(
      mainToday,
      mainUpcoming,
      mainFilter
    )

  sidebar
    .appendChild(favoritesContainer)
    .appendChild(ulFavorites)
    .append(
      favoritesHeader,
      favoritesHighPriority,
      favoritesRecurring,
      favoritesCalendar
    )
  
  sidebar
    .appendChild(ProjectsContainer)
    .appendChild(ulProjects)
    .append(
      projectsHeader,
      projectsPersonal,
      personalHome,
      personalFamily,
      projectsWork
    )

  return { sidebar, ulProjects }
}

export default buildSidebar