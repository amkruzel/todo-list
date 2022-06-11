import './style.css'

import buildHeader  from './buildHeader'
import buildSidebar from './buildSidebar'
import buildMain    from './buildMain'

import DOMmethods from './DOMmethods'
import LoadData   from './localStorage'

import Task        from './classes/task'
import TaskList    from './classes/taskList'
import Project     from './classes/project'
import ProjectList from './classes/projectList'

import PageProperties from './classes/PageProperties'

const Content = document.querySelector('.content')

const { header, newTaskBtn, newProjectBtn, clearStorageBtn }  = buildHeader()
const { sidebar, ulProjects } = buildSidebar()
const { main, mainFilter }    = buildMain()


const DOM         = DOMmethods()
const taskForm    = DOM.buildTaskFormModal()
const projectForm = DOM.buildProjectFormModal()
const taskDetails = DOM.buildTaskDetailsModal()

const Page        = new PageProperties()
const taskList    = new TaskList()
const projectList = new ProjectList()

LoadData(taskList, projectList)

Content.append(
  header, 
  sidebar, 
  main, 
  taskForm.modal, 
  projectForm.modal, 
  taskDetails.modal
)

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
  }
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

taskDetails.closeBtn.addEventListener('click', function() {
  DOM.closeAndClearForm(taskDetails)
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

  if (event.target === taskDetails.modal) {
    DOM.closeAndClearForm(taskDetails)
  }
}

main.addEventListener('click', function(e) {
  if (!e.target.classList.contains('task-name')) return
  
  taskList.all.forEach(function(t) {
    if (t.id == e.target.dataset.taskId) {
      console.log(t, e.target)
      DOM.showForm(taskDetails, projectList, t)
    }
  })
})

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
