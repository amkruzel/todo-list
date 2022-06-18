// Task class

class Task {
  constructor(obj, isComplete = false) {
    this.name       = obj.name
    this.dueDate    = obj.dueDate
    this.desc       = obj.desc
    this.priority   = obj.priority
    this.project    = obj.project
    this.id         = obj.id
    this.isComplete = isComplete
  }
}

export default Task