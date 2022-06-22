import { 
  newElement, 
  newOption, 
  getDateTodayStr, 
  randomColor, 
} from './helperFunctions'
import format from 'date-fns/format'

const DOMmethods = () => {
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
    const nameLabel  = newElement('label')
    const descLabel  = newElement('label')
    const colorLabel = newElement('label')

    // Associate labels with inputs
    nameLabel.setAttribute('for', 'name')
    descLabel.setAttribute('for', 'desc')
    colorLabel.setAttribute('for', 'color')

    colorLabel.textContent = 'Color (used to identify the project): '

    // Create inputs
    const name             = newElement('input')
    const desc             = newElement('textarea')
    const color            = newElement('input')
    const projectSubmitBtn = newElement('button') 
    const formCloseBtn     = newElement('span', 'close')

    // Misc. attributes for each input
    name.type        = 'text'
    name.placeholder = 'Name'
    name.maxlength   = '20'
    name.id          = 'name'

    desc.rows        = '5'
    desc.cols        = '36'
    desc.placeholder = 'Description...'
    desc.id          = 'desc'

    color.type = 'color'
    color.id   = 'color'

    projectSubmitBtn.type        = 'button'
    projectSubmitBtn.textContent = 'Add'
    projectSubmitBtn.classList.add('new-task-proj-btn')

    formCloseBtn.textContent = '\u2715'

    // Input containers
    const nameContainer  = newElement('div')
    const descContainer  = newElement('div')
    const colorContainer = newElement('div', 'color-container')

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

  const buildTaskDetailsModal = () => {
    const modal      = newElement('div', 'modal')
    const detailsDiv = newElement('div', 'modal-content', 'task-details-container')

    // Divs to contain each task item
    const nameDiv     = newElement('div')
    const descDiv     = newElement('div')
    const dueDateDiv  = newElement('div')
    const priorityDiv = newElement('div')
    const projectDiv  = newElement('div')

    // Buttons
    const formCloseBtn = newElement('span', 'close')
    formCloseBtn.textContent = '\u2715'

    detailsDiv.append(
      nameDiv,
      descDiv,
      dueDateDiv,
      priorityDiv,
      projectDiv,
    )

    modal.append(detailsDiv)

    return {
      modal,
      nameDiv,
      descDiv,
      dueDateDiv,
      priorityDiv,
      projectDiv,
      context: 'taskDetails',
      closeBtn: formCloseBtn,
    }
  }

  const buildFilterModal = () => {
    const modal     = newElement('div', 'modal')
    const filterDiv = newElement('div', 'task-filters-modal', 'modal-content')
    const form      = newElement('form')
    const closeDiv  = newElement('div', 'filter-form-header')

    // Form element labels
    const formLabel         = newElement('p')
    const priorityLabel     = newElement('p')
    const highPriorityLabel = newElement('label')
    const medPriorityLabel  = newElement('label')
    const lowPriorityLabel  = newElement('label')
    const projectLabel      = newElement('label')

    // Associate labels with inputs
    highPriorityLabel.setAttribute('for', 'high-priority')
    medPriorityLabel.setAttribute('for', 'med-priority')
    lowPriorityLabel.setAttribute('for', 'low-priority')
    projectLabel.setAttribute('for', 'project')

    formLabel.textContent = 'Filters'
    priorityLabel.textContent = 'Priority: '
    projectLabel.textContent = 'Project: '

    // Create inputs
    const highPriority  = newElement('input')
    const medPriority   = newElement('input')
    const lowPriority   = newElement('input')
    const project       = newElement('select')
    const applyBtn = newElement('button') 
    const formCloseBtn  = newElement('span', 'close')

    // Misc. attributes for each input
    highPriorityLabel.textContent = 'High'
    medPriorityLabel.textContent  = 'Medium'
    lowPriorityLabel.textContent  = 'Low'

    highPriority.type  = 'checkbox'
    highPriority.name  = 'priority'
    highPriority.value = 'high-priority'
    highPriority.id    = 'high-priority'

    medPriority.type  = 'checkbox'
    medPriority.name  = 'priority'
    medPriority.value = 'med-priority'
    medPriority.id    = 'med-priority'

    lowPriority.type  = 'checkbox'
    lowPriority.name  = 'priority'
    lowPriority.value = 'low-priority'
    lowPriority.id    = 'low-priority'

    project.name = 'project'
    project.id   = 'project'

    applyBtn.type        = 'button'
    applyBtn.textContent = 'Apply'
    applyBtn.classList.add('filter-submit-btn')

    formCloseBtn.textContent = '\u2715'

    // Input containers
    const projectContainer  = newElement('div')
    const priorityContainer = newElement('div', 'form-priority-radios')

    projectContainer.append(projectLabel, project)

    closeDiv.append(formLabel, formCloseBtn)

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
      closeDiv,
      priorityContainer,
      projectContainer,
      applyBtn
    )

    filterDiv.append(form)

    modal.append(filterDiv)

    return {
      modal,
      project,
      applyBtn,
      context: 'filter',
      closeBtn: formCloseBtn,
      priority: {
        high: highPriority,
        med: medPriority,
        low: lowPriority
      }
    }
  }

  const showForm = (form, projList = [], task) => {

    // Task input form
    if (form.context === 'task') {
      // First item is 'None' so that is the default
      form.project.append(newOption('', 'None'))
      projList.all.forEach(proj => {
        form.project.append(
          newOption(proj.id, proj.name)
        )
      })
      form.priority.high.checked = false
      form.priority.med.checked  = false
      form.priority.low.checked  = false
    }

    // Project input form
    if (form.context === 'project') form.color.value = randomColor()

    // Task details modal
    if (form.context === 'taskDetails') {

      form.projectDiv.innerHTML = '<b>Project: </b>'

      projList.all.forEach(proj => {
        if (task.project == proj.id) {
          form.projectDiv.innerHTML = `<b>Project:</b> <span style="text-decoration: underline ${proj.color} 3px;">${proj.name}</span>`
        }
      })

      let pr = 
        task.priority === 'high' ? 'High ‼️' :
        task.priority === 'med' ? 'Medium ⚠️' :
        task.priority === 'low' ? 'Low 🟢' : ' '

      // This is a mess
      form.nameDiv.innerHTML = '<b>Name:</b> ' + task.name
      form.nameDiv.append(form.closeBtn)

      form.descDiv.innerHTML = '<b>Description:</b> <br>' + task.desc
      form.descDiv.style.whiteSpace = 'pre-line'

      form.dueDateDiv.innerHTML = '<b>Due date:</b> ' + format(task.dueDate, 'MMMM dd, yyyy')

      form.priorityDiv.innerHTML = '<b>Priority:</b> ' + pr
    }

    if (form.context === 'filter') {
      projList.all.forEach(proj => {
        form.project.append(
          newOption(proj.id, proj.name)
        )
      })

      form.priority.high.checked = true
      form.priority.med.checked  = true
      form.priority.low.checked  = true
    }

    form.modal.style.display = 'block'
  }

  const _clearForm = (...elements) => {
    elements.forEach((el) => {
      el.value = ''
    })
  }

  const _closeForm = form => form.style.display = 'none'

  const _createTask = (t, projects) => {
    const taskDiv      = newElement('div')
    const task         = newElement('div', 'task-name')
    const taskDate     = newElement('div')
    const taskRadio    = newElement('input')

    let pr = 
      t.priority === 'high' ? ' ‼️' :
      t.priority === 'med' ? ' ⚠️' :
      t.priority === 'low' ? ' 🟢' : ' '

    task.textContent     = t.name + pr
    taskDate.textContent = format(t.dueDate, 'MMMM dd, yyyy')

    task.dataset.taskId = t.id

    taskRadio.setAttribute('type', 'checkbox')
    taskDate.classList.add('task-due-date')

    // If the task is in a project, color the left border the correct color, add name of project to task display
    if (t.project) {
      projects.all.forEach(function(proj) {
        if (proj.id == t.project) {
          taskDiv.style.borderLeft = `3px solid ${proj.color}`
        }
      })
    }

    // If the task has been marked completed, strikethrough
    if (t.isComplete) {
      task.innerHTML     = `<s>${task.textContent}</s>`
      taskDate.innerHTML = `<s>${taskDate.textContent}</s>`
      taskRadio.checked  = true
    }

    // If the task is being unchecked, undo strikethrough
    if (!t.isComplete) {
      task.textContent     = task.innerHTML.replace(/<>/, '')
      taskDate.textContent = taskDate.innerHTML.replace(/<>/, '')
      taskRadio.checked    = false
    }

    taskDiv.append(
      taskRadio,
      task,
      taskDate
    )

    return taskDiv
  }

  const _createSidebarItem = (p, t = '') => {
    let isTask = t ? true : false

    const itemLi  = newElement('li')
    const itemDiv = newElement('div')

    if (isTask) {
      itemLi.dataset.projParent = t.project
      itemLi.dataset.isProjChild = '1'
    } else {
      itemLi.dataset.projName = p.name
      itemLi.dataset.isProjParent = '1'
      itemLi.classList.add('extra-chevron')
    }
    itemDiv.innerHTML = p.icon

    itemLi.textContent = isTask ? t.name : p.name
    itemLi.prepend(itemDiv)
    if (!isTask) itemLi.prepend(p.chevronDown)

    return itemLi
  }

  const _createProject = p => _createSidebarItem(p)

  const _createProjectTask = (task, p) => _createSidebarItem(p, task)

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
      _clearForm(form.name, form.desc, form.color)
    }
  }

  const refreshTasks = (main, taskList, projectList, sortType = '') => {
    taskList.filter()
    let ary = taskList.sort(sortType)

    let header = main.firstChild

    main.replaceChildren(header)

    ary.forEach(function(task) {
      main.append(_createTask(task, projectList))
    })
  }

  const refreshProjects = (projectUl, projectList) => {
    let header = projectUl.firstChild

    projectUl.replaceChildren(header)

    projectList.all.forEach(function(proj) {
      if (proj.tasks.all.length > 0) {
        proj.tasks.all.forEach(function(t) {
          if (t.isComplete) return
          header.after(_createProjectTask(t, proj))
        })
      }
      header.after(_createProject(proj))
    })
  }
  
  const refreshLi = (oldLi, newLi) => {
    oldLi.classList.remove('selected-li')
    newLi.classList.add('selected-li')
  }

  return { 
    buildTaskFormModal, 
    buildProjectFormModal,
    buildTaskDetailsModal,
    buildFilterModal,
    showForm,
    closeAndClearForm,
    refreshTasks, 
    refreshProjects,
    refreshLi
  }
}

export default DOMmethods