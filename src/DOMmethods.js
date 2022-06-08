import { newElement, newOption, getDateTodayStr } from './helperFunctions'

/*////////////////////// 

Description:
  Build form to get new task from user. It is built as a modal window

Parameters:
  projList - the current list of projects. Used to generate option inputs for the user to select a project to make the new task a part of

Returns:
  modal     - the modal div, which contains the form
  name      - task name input
  desc      - task description input
  dueDate   - task due date input
  project   - task project input
  closeBtn  - the button that can be clicked to close the form
  submitBtn - the button that can be clicked to submit the form
  priority  - object containing the three priority inputs:
    high, med, low

//////////////////////*/

const buildTaskFormModal = (projList = []) => {

  const modal   = newElement('div', 'modal')
  const formDiv = newElement('div', 'new-task-form', 'modal-content')
  const form    = newElement('form')

  // Form element labels
  const nameLabel         = newElement('label')
  const descLabel         = newElement('label')
  const priorityLabel     = newElement('p')
  const highPriorityLabel = newElement('label')
  const medPriorityLabel  = newElement('label')
  const lowPriorityLabel  = newElement('label')
  const dueDateLabel      = newElement('label')
  const projectLabel      = newElement('label')

  // Associate labels with inputs
  nameLabel.setAttribute('for', 'name')
  descLabel.setAttribute('for', 'desc')
  highPriorityLabel.setAttribute('for', 'high-priority')
  medPriorityLabel.setAttribute('for', 'med-priority')
  lowPriorityLabel.setAttribute('for', 'low-priority')
  dueDateLabel.setAttribute('for', 'due-date')
  projectLabel.setAttribute('for', 'project')

  priorityLabel.textContent = 'Priority: '
  dueDateLabel.textContent = 'Due date: '
  projectLabel.textContent = 'Project: '

  // Create inputs
  const name          = newElement('input')
  const desc          = newElement('textarea')
  const highPriority  = newElement('input')
  const medPriority   = newElement('input')
  const lowPriority   = newElement('input')
  const dueDate       = newElement('input')
  const project       = newElement('select')
  const taskSubmitBtn = newElement('button') 
  const formCloseBtn  = newElement('span', 'close')

  // Misc. attributes for each input
  name.type        = 'text'
  name.placeholder = 'Name'
  name.maxlength   = '20'
  name.id          = 'name'

  desc.rows        = '5'
  desc.cols        = '40'
  desc.placeholder = 'Description...'
  desc.id          = 'desc'

  highPriorityLabel.textContent = 'High'
  medPriorityLabel.textContent  = 'Medium'
  lowPriorityLabel.textContent  = 'Low'

  highPriority.type  = 'radio'
  highPriority.name  = 'priority'
  highPriority.value = 'high-priority'
  highPriority.id    = 'high-priority'

  medPriority.type  = 'radio'
  medPriority.name  = 'priority'
  medPriority.value = 'med-priority'
  medPriority.id    = 'med-priority'

  lowPriority.type  = 'radio'
  lowPriority.name  = 'priority'
  lowPriority.value = 'low-priority'
  lowPriority.id    = 'low-priority'

  dueDate.type = 'date'
  dueDate.id   = 'due-date'
  dueDate.min  = getDateTodayStr()

  project.name = 'project'
  project.id   = 'project'

  taskSubmitBtn.type        = 'button'
  taskSubmitBtn.textContent = 'Add'
  taskSubmitBtn.classList.add('new-task-submit-btn')

  formCloseBtn.textContent = '\u2715'

  // Input containers
  const nameContainer    = newElement('div')
  const descContainer    = newElement('div')
  const dueDateContainer = newElement('div')
  const projectContainer = newElement('div')

  nameContainer.append(nameLabel, name)
  descContainer.append(descLabel, desc)
  dueDateContainer.append(dueDateLabel, dueDate)
  projectContainer.append(projectLabel, project)

  project.append(
    newOption('none', 'None')
  )
  
  projList.forEach((proj) => {
    project.append(
      newOption(proj.value, proj.name)
    )
  })

  const priorityContainer = newElement('div', 'form-priority-radios')
  priorityContainer.append(
    priorityLabel,
    highPriority, 
    highPriorityLabel,
    medPriority, 
    medPriorityLabel,
    lowPriority,
    lowPriorityLabel
  )

  form.append(
    formCloseBtn, 
    nameContainer,
    descContainer,
    priorityContainer,
    dueDateContainer,
    projectContainer,
    taskSubmitBtn
  )

  formDiv.append(form)

  modal.append(formDiv)

    return {
      modal,
      name,
      desc,
      dueDate,
      project,
      closeBtn: formCloseBtn,
      submitBtn: taskSubmitBtn,
      priority: {
        high: highPriority,
        med: medPriority,
        low: lowPriority
      }
    }
}

const clearTaskForm = (...elements) => {
  elements.forEach((el) => {
    el.value = ''
  })
}

const closeTaskForm = (form) => {
  form.style.display = 'none'
}

export { buildTaskFormModal, clearTaskForm, closeTaskForm }