// ProjectList class

class ProjectList {
  constructor() {
    this.#init()
  }

  add(project) {
    this.all.push(project)
  }

  addTaskToProject(t) {
    this.all.forEach(function(p) {
      if (p.id == t.project) p.tasks.add(t)
    })
  }

  getProjByID(id) {
    let p = ''
    this.all.forEach(function(proj) { if (proj.id == id) p = proj })
    return p
  }

  #init() {
    this.all = []
  }
}

export default ProjectList