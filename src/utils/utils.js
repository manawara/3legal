export const setLinksToBreadCrumb = (arr) => {
  arr.unshift('/')
  let pathSeparate = []
  arr.reduce((prev, curr, index) => {
    let pathCurrent = ''
    if (prev === 0) {
      pathSeparate.push({ path: curr, name: 'Home' })
      pathCurrent += curr
    } else {
      pathCurrent += prev[index - 1].path + curr

      pathSeparate.push({ path: pathCurrent, name: curr.charAt(0).toUpperCase() + curr.slice(1) })
    }
    return pathSeparate
  }, 0)
  return pathSeparate
}
