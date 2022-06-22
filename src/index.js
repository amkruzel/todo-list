import './style.css'

import addDays from 'date-fns/addDays'

import buildHeader  from './buildHeader'
import buildSidebar from './buildSidebar'
import buildMain    from './buildMain'

import DOMmethods from './DOMmethods'

import Task           from './classes/task'
import TaskList       from './classes/taskList'
import Project        from './classes/project'
import ProjectList    from './classes/projectList'
import PageProperties from './classes/PageProperties'

import { LoadData, SaveData } from './localStorage'

const Content = document.querySelector('.content')

const { 
  header, 
  newTaskBtn, 
  newProjectBtn, 
  clearStorageBtn 
} = buildHeader()
const { 
  sidebar, 
  ulProjects 
} = buildSidebar()
const { 
  main, 
  mainSort 
} = buildMain()


const DOM         = DOMmethods()
const taskForm    = DOM.buildTaskFormModal()
const projectForm = DOM.buildProjectFormModal()
const taskDetails = DOM.buildTaskDetailsModal()
const filterForm  = DOM.buildFilterModal()

const Page        = new PageProperties()
const taskList    = new TaskList()
const projectList = new ProjectList()

// If there is data on localStorage, it will be loaded
LoadData(taskList, projectList)

// Put everything in the HTML
Content.append(
  header, 
  sidebar, 
  main, 
  taskForm.modal, 
  projectForm.modal, 
  taskDetails.modal,
  filterForm.modal
)

// Refresh tasks and projects - this will do nothing if there is nothing in localSorage
DOM.refreshTasks(main, taskList, projectList)
DOM.refreshProjects(ulProjects, projectList)

/////////////////////
// Event listeners // 
/////////////////////

// HEADER //

header.addEventListener('click', function(e) {
  if (e.target === newTaskBtn) {
    if (!Page.isTaskFormOpen) {
      //Page.isTaskFormOpen = true
      DOM.showForm(taskForm, projectList)
      
    } else {
      alert('You must save or close the current task before creating a new one.')
    }
  }

  if (e.target === newProjectBtn) {
    if (!Page.isProjectFormOpen) {
      //Page.isProjectFormOpen = true
      DOM.showForm(projectForm)
    } else {
      alert('You must save or close the current project before creating a new one.')
    }
  }

  if (e.target === clearStorageBtn) {
    localStorage.clear()
  }
})

// SIDEBAR //

sidebar.addEventListener('click', function(e) {
  let f = e.target.dataset.filter
  if (f === undefined) return

  let oldLi = document.querySelector('.selected-li')
  let newLi = e.target

  taskList.clearFilters()
  if (f === 'all') taskList.clearFilters()
  if (f === 'today') taskList.addFilter('dueDate', new Date())
  if (f === 'upcoming') {
    taskList.addFilter('dateRange', [
      new Date(),
      addDays(new Date(), 7)
    ])
  }

  if (f === 'filter') {
    DOM.showForm(filterForm, projectList)
  }
  
  
  DOM.refreshTasks(main, taskList, projectList)
  DOM.refreshLi(oldLi, newLi)
})

// MAIN //

// Sort tasks
mainSort.addEventListener('click', function(e) {
  DOM.refreshTasks(
    main, 
    taskList, 
    projectList, 
    e.target.dataset.sortType)
})

// MODALS //

// Close modals by clicking outside of them
window.onclick = function(event) {
  if (event.target === taskForm.modal) DOM.closeAndClearForm(taskForm)
  if (event.target === projectForm.modal) DOM.closeAndClearForm(projectForm)
  if (event.target === taskDetails.modal) DOM.closeAndClearForm(taskDetails)
  if (event.target === filterForm.modal) DOM.closeAndClearForm(filterForm)
}

// Close modals by clicking 'x'
taskForm.closeBtn.addEventListener('click', function() { 
  DOM.closeAndClearForm(taskForm) 
})
projectForm.closeBtn.addEventListener('click', function() { 
  DOM.closeAndClearForm(projectForm) 
})
taskDetails.closeBtn.addEventListener('click', function() {
  DOM.closeAndClearForm(taskDetails)
})
filterForm.closeBtn.addEventListener('click', function() {
  DOM.closeAndClearForm(filterForm)
})

// Main event listeners
main.addEventListener('click', function(e) {
  // Open task details modal
  if (e.target.classList.contains('task-name')) {
    taskList.all.forEach(function(t) {
      if (t.id == e.target.dataset.taskId) {
        DOM.showForm(taskDetails, projectList, t)
      }
    })
  }
  if (e.target.type === 'checkbox') {

    const refresh = function() {
      SaveData(taskList, projectList)
      DOM.refreshTasks(main, taskList, projectList)
      DOM.refreshProjects(ulProjects, projectList)
    }

    // Mark task as complete when it is checked
    taskList.all.forEach(function(t) {
      if (t.id == e.target.nextSibling.dataset.taskId) {
        let p = projectList.getProjByID(t.project)
        t.isComplete = e.target.checked ? true : false
        if (p != '') {
          if (t.isComplete) p.markTaskComplete(t.id)
          if (!t.isComplete) p.markTaskIncomplete(t.id)
        }
        refresh()
      }
    })
  }
})

// New task submit 
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
    project: taskForm.project.value,
    id: Date.now()
  }

  let newTask = new Task(results)
  taskList.add(newTask)

  // If task is added to a project, must do this:
  if (taskForm.project.value) projectList.addTaskToProject(newTask)

  // Update sidebar
  DOM.refreshProjects(ulProjects, projectList)
  
  DOM.closeAndClearForm(taskForm)

  // return if new task does not show
  // also show msg to user

  // push new task to tasklist visible
  DOM.refreshTasks(main, taskList, projectList)
  
  SaveData(taskList, projectList)
})

// New project submit
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
  DOM.refreshProjects(ulProjects, projectList)
  SaveData(taskList, projectList)
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
