const qs = s => document.querySelector(s)

// const main = () => {
  // document.getElementById('root').textContent = 'Hello, World!'
// const main = () => {
//   const drop = qs('.drop')
//
//   drop.style.top = '0px'
//
//   setInterval(() => {
//     drop.style.top = '0px'
//   }, 6000)
//
//   const animate = () => {
//     drop.style.top = `${parseInt(drop.style.top) + 1}px`
//   }
//
//   setInterval(animate, 14)
// }

const drop = document.querySelector('.drop')

setInterval(() => {
  drop.style.top = '0px'
}, 1000)

const animate = () => {
  drop.style.top = `${parseInt(drop.style.top) + 3}px`
}

setInterval(animate, 3)

object.addEventListener('click', drop)

document.addEventListener('DOMContentLoaded', drop)
