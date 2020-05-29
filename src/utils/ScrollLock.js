const $body = document.querySelector('body')
let scrollTop = 0

function enable() {
  $body.style.removeProperty('position')
  $body.style.removeProperty('overflowY')

  window.scrollTo(0, scrollTop)
}

function disable() {
  setTimeout(() => {
    scrollTop = (window.pageYOffset || document.documentElement.scrollTop)  - (document.documentElement.clientTop || 0)

    $body.style.position = 'fixed'
    $body.style.overflowY = 'scroll'
  }, 800) // Half the length of the menu transition
}

export default { enable, disable }