import { newElement, newOption, getDateTodayStr, randomColor } from './helperFunctions'
import format from 'date-fns/format'

/*////////////////////// 

Description:
  Build form to get new task from user. It is built as a modal window

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
const DOMmethods = () => {
  const buildTaskFormModal = () => {

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
    desc.cols        = '36'
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

    nameContainer.append(nameLabel, name, formCloseBtn)
    descContainer.append(descLabel, desc)
    dueDateContainer.append(dueDateLabel, dueDate)
    projectContainer.append(projectLabel, project)

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
      context: 'task',
      closeBtn: formCloseBtn,
      submitBtn: taskSubmitBtn,
      priority: {
        high: highPriority,
        med: medPriority,
        low: lowPriority
      }
    }
  }

  /*////////////////////// 

  Description:
    Build form to get new project from user. It is built as a modal window

  Returns:
    modal     - the modal div, which contains the form
    name      - project name input
    desc      - project description input
    color     - color used to distinguish the project
    closeBtn  - the button that can be clicked to close the form
    submitBtn - the button that can be clicked to submit the form

  //////////////////////*/

  const buildProjectFormModal = () => {
    const modal      = newElement('div', 'modal')
    const projectDiv = newElement('div', 'new-proj-form', 'modal-content')
    const form       = newElement('form')

    // Form element labels
    const nameLabel         = newElement('label')
    const descLabel         = newElement('label')
    const colorLabel        = newElement('label')

    // Associate labels with inputs
    nameLabel.setAttribute('for', 'name')
    descLabel.setAttribute('for', 'desc')
    colorLabel.setAttribute('for', 'color')

    colorLabel.textContent  = 'Color (used to identify the project): '

    // Create inputs
    const name          = newElement('input')
    const desc          = newElement('textarea')
    const color         = newElement('input')
    const projectSubmitBtn = newElement('button') 
    const formCloseBtn  = newElement('span', 'close')

    // Misc. attributes for each input
    name.type        = 'text'
    name.placeholder = 'Name'
    name.maxlength   = '20'
    name.id          = 'name'

    desc.rows        = '5'
    desc.cols        = '36'
    desc.placeholder = 'Description...'
    desc.id          = 'desc'

    color.type  = 'color'
    color.id    = 'color'

    projectSubmitBtn.type        = 'button'
    projectSubmitBtn.textContent = 'Add'
    projectSubmitBtn.classList.add('new-task-proj-btn')

    formCloseBtn.textContent = '\u2715'

    // Input containers
    const nameContainer    = newElement('div')
    const descContainer    = newElement('div')
    const colorContainer   = newElement('div', 'color-container')

    // Need an additional one for color to style it
    const colorSelectorcontainer = newElement('span')
    colorSelectorcontainer.classList.add('color-selector-container')

    colorSelectorcontainer.append(color)

    nameContainer.append(nameLabel, name, formCloseBtn)
    descContainer.append(descLabel, desc)
    colorContainer.append(colorLabel, colorSelectorcontainer)


    form.append(
      nameContainer,
      descContainer,
      colorContainer,
      projectSubmitBtn
    )

    projectDiv.append(form)

    modal.append(projectDiv)

    return {
      modal,
      name,
      desc,
      color,
      context: 'project',
      closeBtn: formCloseBtn,
      submitBtn: projectSubmitBtn,
    }
  }

  const showForm = (form, projList = []) => {
    if (form.context === 'task') {
      projList.all.forEach((proj) => {
        form.project.append(
          newOption(proj.id, proj.name)
        )
      })
      form.project.append(newOption('', 'None'))
    }

    if (form.context === 'project') {
      form.color.value = randomColor()
    }

    form.modal.style.display = 'block'
  }

  const _clearForm = (...elements) => {
    elements.forEach((el) => {
      el.value = ''
    })
  }

  const _closeForm = (form) => {
    form.style.display = 'none'
  }

  const _createTask = (t) => {
    const taskDiv = newElement('div')
    const taskRadio = newElement('input')
    taskRadio.setAttribute('type', 'checkbox')
    const task = newElement('div')
    task.textContent = t.name
    const taskDate = newElement('div')
    taskDate.classList.add('task-due-date')
    taskDate.textContent = format(t.dueDate, 'MMMM dd, yyyy')

    taskDiv.append(
      taskRadio,
      task,
      taskDate
    )

    return taskDiv
  }

  const _createProject = (p) => {
    const projLi = newElement('li', 'extra-chevron')
    const projLiSpan = newElement('span')

    projLi.dataset.isProjParent = '1'
    projLi.dataset.projName = p.name
    projLiSpan.innerHTML = p.icon

    projLi.textContent = p.name
    projLi.prepend(projLiSpan)
    projLi.prepend(p.chevronDown)

    return projLi
  }

  const closeAndClearForm = (form) => {
    _closeForm(form.modal)
    if (form.context === 'task') {
      _clearForm(
        form.name, 
        form.desc, 
        form.dueDate, 
        form.priority.high, 
        form.priority.med, 
        form.priority.low
      )
      form.project.replaceChildren()
    } 
    if (form.context === 'project') {
      _clearForm(
        form.name,
        form.desc,
        form.color
      )
    }
  }


  const refreshTasks = (main, taskList) => {
    taskList.sort()

    let header = main.firstChild
    
    main.replaceChildren(header)

    taskList.visible.forEach(function(task) {
      main.append(_createTask(task))
    })
  }

  const refreshProjects = (projectUl, projectList) => {
    let header = projectUl.firstChild

    projectUl.replaceChildren(header)

    projectList.all.forEach(function(proj) {
      header.after(_createProject(proj))
    })
  }
  return { 
    buildTaskFormModal, 
    buildProjectFormModal,
    showForm,
    closeAndClearForm,
    refreshTasks, 
    refreshProjects
  }
}

export default DOMmethods