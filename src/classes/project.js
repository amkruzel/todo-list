// Project class

import TaskList from "./taskList"

import { newImg, newProjectIcon } from '../helperFunctions'

import chevronDownSmallSvg from '../media/chevron-down-small.svg'

class Project {
  constructor(obj) { //color in hex format
    this.name        = obj.name
    this.desc        = obj.desc
    this.color       = obj.color
    this.icon        = newProjectIcon(obj.color)
    this.chevronDown = newImg(chevronDownSmallSvg)
    this.id          = obj.id
    this.#init()
  }

  markTaskComplete(taskID) {
    this.tasks.all.forEach(function(t) { 
      if (t.id == taskID) t.isComplete = true 
    })
  }

  markTaskIncomplete(taskID) {
    this.tasks.all.forEach(function(t) {
      if (t.id == taskID) t.isComplete = false
    })
  }

  #init() {
    this.tasks = new TaskList()
  }
}

export default Project