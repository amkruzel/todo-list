// ProjectList class

class ProjectList {
  constructor() {
    this.#init()
  }

  add(project) {
    this.all.push(project)
  }

  #init() {
    this.all = []
  }
}

export default ProjectList