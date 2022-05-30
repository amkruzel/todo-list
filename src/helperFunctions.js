function newElement(type, ...classes) {
  let el = document.createElement(type)
  classes.forEach((cl) => {
    el.classList.add(cl)
  })
  return el
}

function newImg(src) {
  let tmp = new Image()
  tmp.src = src
  return tmp
}

export { newElement, newImg }