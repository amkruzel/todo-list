import { newElement } from "./helperFunctions"

const buildHeader = () => {
  const header = newElement('div', 'header')
  const newTaskBtn = newElement('button', 'new-task-btn')

  newTaskBtn.textContent = 'New Task'
  header.textContent = '// TO-DO'
  
  header.append(newTaskBtn)

  return header
}

export default buildHeader