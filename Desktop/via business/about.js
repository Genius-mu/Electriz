let open = document.querySelector('.open')
let closed = document.querySelector('.closed')
let anchors = document.querySelector('.anchors')

anchors.style.display = 'none'
closed.style.display = 'none'

open.addEventListener('click', () => {
    anchors.style.display = 'flex'
    closed.style.display = 'block'
    open.style.display = 'none'
})

closed.addEventListener('click', () => {
    anchors.style.display = 'none'
    closed.style.display = 'none'
    open.style.display = 'block'
})