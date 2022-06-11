// methods for storing and retrieving data from local storage

import Project from "./classes/project"
import Task    from "./classes/task"

const LoadData = (taskList, projectList) => {
  if (localStorage.getItem('projectList')) {
    let pl = JSON.parse(localStorage.getItem('projectList'))
    pl.all.forEach(function(p) {
      projectList.add(new Project( {
        name: p.name,
        desc: p.desc,
        color: p.color,
        id: p.id
      }))
    })
  }
  
  if (localStorage.getItem('taskList')) {
    let tl = JSON.parse(localStorage.getItem('taskList'))
    tl.all.forEach(function(t) {
      taskList.add(new Task( { 
        name: t.name,
        desc: t.desc,
        dueDate: new Date(t.dueDate),
        priority: t.priority,
        project: t.project,
        id: t.id
      }))
  
      // If task is added to a project, must do these things:
      if (t.project) {
        projectList.all.forEach(function(proj) {
          if (proj.id == t.project) {
            // Add task to project if one is selected
            proj.tasks.add(t)
          }
        })
      }
    })
  }
}

export default LoadData