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
      console.log('yes')
      
      this.visible.push(task)
      this.visible.sort()
    }
  }

  sort() {

  }

  filter() {

  }

  #shouldBeVisible(task) {
    if (this.curFilter === '' && this.curFilter.project === '') return true

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