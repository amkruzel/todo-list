// methods to store and retrieve data

/*
Data will be saved in two objects:

{ 'page': Page }
- this is the Page object

{ 'state':
  { page,
    projectList,
    taskList } }
- this is the projectList and taskList objects

*/

const Database = () => {
  const save = (page, projLi, taskLi) => {
    localStorage.setItem('Page', JSON.stringify(page))
    localStorage.setItem('projectList', JSON.stringify(projLi))
    localStorage.setItem('taskList', JSON.stringify(taskLi))
  }

  const load = (key) => {
    return JSON.parse(localStorage.getItem(key))
  }

  return { save, load }
}

export default Database
