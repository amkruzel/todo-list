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
    this.id          = Date.now()
    this.#init()
  }

  #init() {
    this.tasks = new TaskList()
  }
}

export default Project