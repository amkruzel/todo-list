import './style.css'

import { newElement, newImg } from './helperFunctions'

import buildHeader  from './buildHeader'
import buildSidebar from './buildSidebar'
import buildMain    from './buildMain'

import { buildTaskFormModal, closeTaskForm, clearTaskForm } from './DOMmethods'

import Task        from './classes/task'
import TaskList    from './classes/taskList'
import Project     from './classes/project'
import ProjectList from './classes/projectList'

import PageProperties from './classes/PageProperties'

const Page        = new PageProperties()
const taskList    = new TaskList()
const projectList = new ProjectList()

const Content = document.querySelector('.content')

const header  = buildHeader()
const sidebar = buildSidebar()
const main    = buildMain()

const taskForm = buildTaskFormModal()

Content.append(header, sidebar, main, taskForm.modal)

// New task button functionality
const newTaskBtn = document.querySelector('.new-task-btn')

newTaskBtn.addEventListener('click', function() {
  if (!Page.isTaskFormOpen) {
    Page.isTaskFormOpen = true
    taskForm.modal.style.display = 'block'
    
    //buildNewTaskForm(modal, taskSubmitBtn, formDiv ,formCloseBtn)
  } else {
    alert('You must save or close the current task before creating a new one.')
  }
})

const closeAndClearForm = function() {
  closeTaskForm(taskForm.modal)
  clearTaskForm(
    taskForm.name, 
    taskForm.desc, 
    taskForm.dueDate, 
    taskForm.priority.high, 
    taskForm.priority.med, 
    taskForm.priority.low, 
    taskForm.project)
  Page.isTaskFormOpen = false
}

taskForm.closeBtn.addEventListener('click', function() {
  closeAndClearForm()
})

window.onclick = function(event) {
  if (event.target === taskForm.modal) {
    closeAndClearForm()
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
    dueDate: taskForm.dueDate.value,
    priority: selectedPriority,
    project: taskForm.project.value
  }

  taskList.add(new Task(results))

  console.log(results)
  
  closeAndClearForm()
  Page.isTaskFormOpen = false
/*
  taskForm.animate([
    { transform: 'scale(1,1)' },
    { transform: 'scale(0,0)' }
  ], { duration: 500 },
  function() {
    taskForm.remove()
  })


  let sc = 1
 

  setInterval(function() {
    sc -= .1
    taskForm.style.transform = 'scale(sc, sc)'
    console.log(taskForm.style)
    
  }, 200)

  function doThis() { taskForm.remove() }
  setInterval(doThis, 1000)


  

  console.log(taskList)
  */
  
})