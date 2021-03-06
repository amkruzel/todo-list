// TaskList class 

import isAfter   from "date-fns/isAfter"
import isBefore  from "date-fns/isBefore"
import isSameDay from "date-fns/isSameDay"

class TaskList {
  constructor() {
    this.#init()
  }

  #init() {
    this.all        = []
    this.visible    = []
    this.amtAll     = 0
    this.amtVisible = 0
    this.curFilter = {
      dueDate: '',
      dateRange: '',
      priority: '',
      project: ''
    }
  }

  add(task) {
    this.all.push(task)
    this.amtAll += 1

    if (this.#shouldBeVisible(task)) {
      this.visible.push(task)
      this.amtVisible += 1
    }
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

  addFilter(type, filter) { this.curFilter[type] = filter }

  removeFilter(type) { this.curFilter[type] = '' }

  clearFilters() { 
    this.curFilter = {
      dueDate: '',
      dateRange: '',
      priority: '',
      project: ''
    }
  }

  /*
  filterType is one of:
  - 'dueDate'
    - a Date() object
  - 'dateRange'
    - two Date objects in an array - ex. [d1, d2]
  - 'priority'
    - 'high', 'med', or 'low'
  - 'project'
    - project ID
  */

  filter() {
    this.visible = this.all.filter((task) => {
      return this.#filterOneTask(task)
    })
  }

  #filterOneTask(task) {
    if (
      this.curFilter.dueDate === '' &&
      this.curFilter.dateRange === '' &&
      this.curFilter.priority === '' &&
      this.curFilter.project === ''
    ) { return true }
    
    for (const [key, value] of Object.entries(this.curFilter)) {
      if (value === '') continue
      if (key === 'dateRange') {
        if (
          isSameDay(value[0], task.dueDate) || 
          isSameDay(value[1], task.dueDate)
        ) { return true }
        if (
          isBefore(value[0], task.dueDate) &&
          isAfter(value[1], task.dueDate)
        ) { return true }
      }
      if (isSameDay(value, task[key])) return true
    }
    return false
  }

  #shouldBeVisible(task) { return this.#filterOneTask(task) }
}

export default TaskList