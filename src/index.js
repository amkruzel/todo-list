import './style.css'

import { newElement, newImg } from './helperFunctions'

import buildHeader  from './buildHeader'
import buildSidebar from './buildSidebar'
import buildMain    from './buildMain'

import DOMmethods from './DOMmethods'

import Task        from './classes/task'
import TaskList    from './classes/taskList'
import Project     from './classes/project'
import ProjectList from './classes/projectList'

import PageProperties from './classes/PageProperties'

import Database from './localStorage'
import buildClasses from './buildClasses'

/*
const Page
const taskList
const projectList

window.addEventListener('load', function() {
  try {
    ({ Page, projectList, taskList } = Data.load())
  } catch {
    Page        = new PageProperties()
    taskList    = new TaskList()
    projectList = new ProjectList()
  }
})
*/



const Content = document.querySelector('.content')

const { header, newTaskBtn, newProjectBtn, clearStorageBtn }  = buildHeader()
const { sidebar, ulProjects } = buildSidebar()
const { main, mainFilter }    = buildMain()


const DOM         = DOMmethods()
const taskForm    = DOM.buildTaskFormModal()
const projectForm = DOM.buildProjectFormModal()
/*
if (!localStorage.getItem('Page')) {
  const { Page, taskList, projectList } = buildClasses()
} else {

}
*/

const Page        = new PageProperties()
const taskList    = new TaskList()
const projectList = new ProjectList()

if (localStorage.getItem('projectList')) {
  let pl = JSON.parse(localStorage.getItem('projectList'))
  pl.all.forEach(function(p) {
    projectList.add(new Project( {
      name: p.name,
      desc: p.desc,
      color: p.color,
      id: p.id
    }))
  })
}

if (localStorage.getItem('taskList')) {
  let tl = JSON.parse(localStorage.getItem('taskList'))
  tl.all.forEach(function(t) {
    taskList.add(new Task( { 
      name: t.name,
      desc: t.desc,
      dueDate: new Date(t.dueDate),
      priority: t.priority,
      project: t.project  
    }))

    // If task is added to a project, must do these things:
    if (t.project) {
      projectList.all.forEach(function(proj) {
        if (proj.id == t.project) {
          // Add task to project if one is selected
          proj.tasks.add(t)
        }
      })
    }
  })
}


/*
const { Page, taskList, projectList } = (() => {
  if (!localStorage.getItem('Page')) {
    console.log('no LC')
    return buildClasses()
  } else {
    console.log('LC')
    console.log(JSON.parse(localStorage.getItem('taskList')))
    
    return {
      Page: JSON.parse(localStorage.getItem('Page')),
      taskList: JSON.parse(localStorage.getItem('taskList')),
      projectList: JSON.parse(localStorage.getItem('projectList'))
    }
  }
})()
*/

/*
const Data = Database()

const Page = Data.load('Page') ? Data.load('Page') : new PageProperties()
const taskList = Data.load('taskList') ? Data.load('taskList') : new TaskList()
const projectList = Data.load('projectList') ? Data.load('projectList') : new ProjectList()

window.addEventListener('load', function() {
  console.log(taskList)
  
  DOM.refreshProjects(ulProjects, projectList)
  DOM.refreshTasks(main, taskList, projectList)
})

*/
Content.append(header, sidebar, main, taskForm.modal, projectForm.modal)

DOM.refreshTasks(main, taskList, projectList)
DOM.refreshProjects(ulProjects, projectList)

//////////////////
// Event listeners 
//////////////////

header.addEventListener('click', function(e) {
  if (e.target === newTaskBtn) {
    if (!Page.isTaskFormOpen) {
      Page.isTaskFormOpen = true
      DOM.showForm(taskForm, projectList)
      
    } else {
      alert('You must save or close the current task before creating a new one.')
    }
  }

  if (e.target === newProjectBtn) {
    if (!Page.isProjectFormOpen) {
      Page.isProjectFormOpen = true
      DOM.showForm(projectForm)
    } else {
      alert('You must save or close the current project before creating a new one.')
    }
  }

  if (e.target === clearStorageBtn) {
    localStorage.clear()
    console.log('clear')
    
  }
  console.log(e.target)
  
})

mainFilter.addEventListener('click', function(e) {
  DOM.refreshTasks(
    main, 
    taskList, 
    projectList, 
    e.target.dataset.filterType)
})

taskForm.closeBtn.addEventListener('click', function() {
  DOM.closeAndClearForm(taskForm)
  Page.isTaskFormOpen = false
})

projectForm.closeBtn.addEventListener('click', function() {
  DOM.closeAndClearForm(projectForm)
  Page.isProjectFormOpen = false
})

window.onclick = function(event) {
  if (event.target === taskForm.modal) {
    DOM.closeAndClearForm(taskForm)
    Page.isTaskFormOpen = false
  }

  if (event.target === projectForm.modal) {
    DOM.closeAndClearForm(projectForm)
    Page.isProjectFormOpen = false
  }

}

taskForm.submitBtn.addEventListener('click', function() {
  
  let selectedPriority = 
    taskForm.priority.high.checked ? 'high' : 
    taskForm.priority.med.checked  ? 'med' : 
    taskForm.priority.low.checked  ? 'low' : undefined

  if (!taskForm.name.value) {
    alert('A task name is required.')
    return
  }

  if (!taskForm.dueDate.value) {
    alert('A due date is required.')
    return
  }

  let results = {
    name: taskForm.name.value,
    desc: taskForm.desc.value,
    dueDate: new Date(taskForm.dueDate.value.replace(/-/g, '\/')),
    priority: selectedPriority,
    project: taskForm.project.value
  }

  let newTask = new Task(results)
  taskList.add(newTask)

  // If task is added to a project, must do these things:
  if (taskForm.project.value) {
    projectList.all.forEach(function(proj) {
      if (proj.id == newTask.project) {
        // Add task to project if one is selected
        proj.tasks.add(newTask)
      }
    })

    // Update sidebar
    DOM.refreshProjects(ulProjects, projectList)
  }
  
  DOM.closeAndClearForm(taskForm)
  Page.isTaskFormOpen = false

  // return if new task does not show
  // also show msg to user

  // push new task to tasklist visible
  DOM.refreshTasks(main, taskList, projectList)
  console.log(JSON.stringify(taskList))
  
  localStorage.setItem('projectList', JSON.stringify(projectList))
  localStorage.setItem('taskList', JSON.stringify(taskList))
  localStorage.setItem('Page', JSON.stringify(Page))
})

projectForm.submitBtn.addEventListener('click', function() {
  if (!projectForm.name.value) {
    alert('A project name is required.')
    return
  }

  let results = {
    name: projectForm.name.value,
    desc: projectForm.desc.value,
    color: projectForm.color.value,
    id: Date.now()
  }

  projectList.add(new Project(results))

  DOM.closeAndClearForm(projectForm)

  Page.isProjectFormOpen = false

  DOM.refreshProjects(ulProjects, projectList)
  localStorage.setItem('projectList', JSON.stringify(projectList))
  localStorage.setItem('Page', JSON.stringify(Page))
})

// This and the following function allow the priority radio buttons to be de-selected
document
  .querySelectorAll('input[type=radio][name=priority]')
  .forEach((elem) => {
  elem.addEventListener('click', allowUncheck);
  // only needed if elem can be pre-checked
  elem.previous = elem.checked;
});

function allowUncheck(e) {
  if (this.previous) this.checked = false
  // need to update previous on all elements of this group
  // (either that or store the id of the checked element)
  document
  .querySelectorAll(`input[type=radio][name=${this.name}]`)
  .forEach((elem) => {
    elem.previous = elem.checked;
  });
}
