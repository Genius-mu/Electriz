let require = document.querySelectorAll('.require')
let inputs = document.querySelectorAll('input')

inputs[0].addEventListener('keyup', () => {
    if (inputs[0].value == '') {
        require[0].style.display = 'flex'
    } else if (inputs[0].value !== '') {
        require[0].style.display = 'none'
    }
})


inputs[1].addEventListener('keyup', () => {
    if (inputs[1].value == '') {
        require[1].style.display = 'flex'
    } else if (inputs[1].value !== '') {
        require[1].style.display = 'none'
    }
})


inputs[2].addEventListener('keyup', () => {
    if (inputs[2].value == '') {
        require[2].style.display = 'flex'
    } else if (inputs[2].value !== '') {
        require[2].style.display = 'none'
    }
})


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