// TaskList class 

class TaskList {
  constructor() {
    this.#init()
    this.curFilter = {
      priority: "",
      project: ""
    }
  }

  #init() {
    this.all        = []
    this.visible    = []
    this.amtAll     = 0
    this.amtVisible = 0
  }

  add(task) {
    this.all.push(task)
    this.amtAll++

    if (this.#shouldBeVisible(task)) {
      this.visible.push(task)
      this.amtVisible += 1
    }
  }

  delete(task) {
    this.all = this.all.filter(t => t.id != task.id)
    this.visible = this.all
    this.amtAll -= 1
    this.amtVisible -= 1
  }

  /*
  sortType is one of:
  - 'dateAsc'
  - 'dateDesc'
  */
  sort(sortType) {
    let tmp = this.visible

    if (sortType === 'dateAsc') {
      return tmp.sort((a, b) => a.dueDate - b.dueDate)
    }

    if (sortType === 'dateDesc') {
      return tmp.sort((a, b) => b.dueDate - a.dueDate)
    }

    return tmp
  }

  filter() {

  }

  #shouldBeVisible(task) {
    if (this.curFilter.priority === '' && this.curFilter.project === '') {
      return true
    }

    if (this.curFilter.priority) {
      if (task.priority === this.curFilter.priority) return true
    }

    if (this.curFilter.project) {
      if (task.project === this.curFilter.project) return true
    }

    return false
  }
}

export default TaskList