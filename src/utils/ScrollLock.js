const $body = document.querySelector('body')
let scrollTop = 0

function enable() {
  $body.style.removeProperty('position')
  $body.style.removeProperty('overflow-y')

  window.scrollTo(0, scrollTop)
}

function disable(delay) {
  setTimeout(() => {
    scrollTop = (window.pageYOffset || document.documentElement.scrollTop)  - (document.documentElement.clientTop || 0)

    $body.style.position = 'fixed'
    $body.style.overflowY = 'scroll'
  }, delay)
}

export default { enable, disable }