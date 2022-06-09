import { newElement } from "./helperFunctions"

const buildHeader = () => {
  const header        = newElement('div', 'header')
  const newTaskBtn    = newElement('button', 'new-task-btn', 'new-item-btn')
  const newProjectBtn = newElement('button', 'new-proj-btn', 'new-item-btn')

  newTaskBtn.textContent    = 'New Task'
  newProjectBtn.textContent = 'New Project'
  header.textContent        = '// TO-DO'
  
  header.append(newTaskBtn, newProjectBtn)

  return { header, newTaskBtn, newProjectBtn }
}

export default buildHeader