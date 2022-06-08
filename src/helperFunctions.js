function newElement(type, ...classes) {
  let el = document.createElement(type)
  classes.forEach((cl) => {
    el.classList.add(cl)
  })
  return el
}

function newOption(value, text) {
  let el = document.createElement('option')
  el.value = value
  el.textContent = text

  return el
}

function newImg(src) {
  let tmp = new Image()
  tmp.src = src
  return tmp
}

function getDateTodayStr() {
  let date = new Date()
  let year = date.getFullYear()
  let month = date.getMonth() + 1
  let day = date.getDate()

  if (month < 10) month = `0${month}`
  if (day < 10) day = `0${day}`

  return `${year}-${month}-${day}`
}

export { newElement, newOption, newImg, getDateTodayStr }