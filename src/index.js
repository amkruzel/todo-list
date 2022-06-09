import './style.css'

import { newElement, newImg } from './helperFunctions'

import buildHeader  from './buildHeader'
import buildSidebar from './buildSidebar'
import buildMain    from './buildMain'

import { 
  buildTaskFormModal, 
  buildProjectFormModal,
  showForm,
  closeAndClearForm,
  refreshTasks,
} from './DOMmethods'

import Task        from './classes/task'
import TaskList    from './classes/taskList'
import Project     from './classes/project'
import ProjectList from './classes/projectList'

import PageProperties from './classes/PageProperties'

const Page        = new PageProperties()
const taskList    = new TaskList()
const projectList = new ProjectList()

const Content = document.querySelector('.content')

const { header, newTaskBtn, newProjectBtn }  = buildHeader()
const sidebar = buildSidebar()
const main    = buildMain()

const taskForm    = buildTaskFormModal()
const projectForm = buildProjectFormModal()

Content.append(header, sidebar, main, taskForm.modal, projectForm.modal)

//////////////////
// Event listeners 
//////////////////

header.addEventListener('click', function(e) {
  if (e.target === newTaskBtn) {
    if (!Page.isTaskFormOpen) {
      Page.isTaskFormOpen = true
      showForm(taskForm, projectList)
    } else {
      alert('You must save or close the current task before creating a new one.')
    }
  }

  if (e.target === newProjectBtn) {
    if (!Page.isProjectFormOpen) {
      Page.isProjectFormOpen = true
      showForm(projectForm)
    } else {
      alert('You must save or close the current project before creating a new one.')
    }
  }
})

taskForm.closeBtn.addEventListener('click', function() {
  closeAndClearForm(taskForm)
  Page.isTaskFormOpen = false
})

projectForm.closeBtn.addEventListener('click', function() {
  closeAndClearForm(projectForm)
  Page.isProjectFormOpen = false
})

window.onclick = function(event) {
  if (event.target === taskForm.modal) {
    closeAndClearForm(taskForm)
    Page.isTaskFormOpen = false
  }

  if (event.target === projectForm.modal) {
    closeAndClearForm(projectForm)
    Page.isProjectFormOpen = false
  }

}

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
    dueDate: new Date(taskForm.dueDate.value),
    priority: selectedPriority,
    project: taskForm.project.value
  }

  taskList.add(new Task(results))

  console.log(results)
  
  closeAndClearForm(taskForm)
  Page.isTaskFormOpen = false

  // return if new task does not show
  // also show msg to user

  // push new task to tasklist visibl
  refreshTasks(main, taskList)
})

projectForm.submitBtn.addEventListener('click', function() {
  if (!projectForm.name.value) {
    alert('A project name is required.')
    return
  }

  let results = {
    name: projectForm.name,
    desc: projectForm.desc,
    color: projectForm.color.value
  }

  projectList.add(new Project(results))

  console.log(results)

  closeAndClearForm(projectForm)

  Page.isProjectFormOpen = false

  refreshProjects()
  
})