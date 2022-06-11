// used to make classes of localStorage is empty

import TaskList    from './classes/taskList'
import ProjectList from './classes/projectList'

import PageProperties from './classes/PageProperties'

const buildClasses = () => {
  const Page        = new PageProperties()
  const taskList    = new TaskList()
  const projectList = new ProjectList()

  return { Page, taskList, projectList }
}

export default buildClasses