//clearInterval server para cancelar um setInterval

const timeOut = 1000
const checking = () => console.log('checking')

let interval = setInterval(checking, timeOut)
clearInterval(interval)

setTimeout( () =>clearInterval(interval), 3000)