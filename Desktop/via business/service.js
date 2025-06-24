let drop1 = document.querySelector('#drop1')
let drop2 = document.querySelector('#drop2')
let drop3 = document.querySelector('#drop3')
let drop4 = document.querySelector('#drop4')

// Selecting The DROP's Content
let first = document.querySelectorAll('#first')
let second = document.querySelectorAll('#second')
let third = document.querySelectorAll('#third')
let fourth = document.querySelectorAll('#fourth')

first.forEach(data => {
    data.style.color = '#fff'
})

second.forEach(data => {
    data.style.color = '#000'
})

third.forEach(data => {
    data.style.color = '#000'
})

fourth.forEach(data => {
    data.style.color = '#000'
})

// It Ends Here
let one = document.querySelector('#one')
let two = document.querySelector('#two')
let three = document.querySelector('#three')
let four = document.querySelector('#four')

one.style.display = 'flex'
two.style.display = 'none'
three.style.display = 'none'
four.style.display = 'none'

drop1.addEventListener('click', () => {
    one.style.display = 'flex'
    two.style.display = 'none'
    three.style.display = 'none'
    four.style.display = 'none'

    first.forEach(data => {
        data.style.color = '#fff'
    })

    second.forEach(data => {
        data.style.color = '#000'
    })

    third.forEach(data => {
        data.style.color = '#000'
    })

    fourth.forEach(data => {
        data.style.color = '#000'
    })
})

drop2.addEventListener('click', () => {
    one.style.display = 'none'
    two.style.display = 'flex'
    three.style.display = 'none'
    four.style.display = 'none'
    drop2.classList.add('active_service')

    first.forEach(data => {
        data.style.color = '#000'
    })

    second.forEach(data => {
        data.style.color = '#fff'
    })

    third.forEach(data => {
        data.style.color = '#000'
    })

    fourth.forEach(data => {
        data.style.color = '#000'
    })
})

drop3.addEventListener('click', () => {
    one.style.display = 'none'
    two.style.display = 'none'
    three.style.display = 'flex'
    four.style.display = 'none'
    drop2.classList.add('active_service')

    first.forEach(data => {
        data.style.color = '#000'
    })

    second.forEach(data => {
        data.style.color = '#000'
    })

    third.forEach(data => {
        data.style.color = '#fff'
    })

    fourth.forEach(data => {
        data.style.color = '#000'
    })
})

drop4.addEventListener('click', () => {
    one.style.display = 'none'
    two.style.display = 'none'
    three.style.display = 'none'
    four.style.display = 'flex'

    first.forEach(data => {
        data.style.color = '#000'
    })

    second.forEach(data => {
        data.style.color = '#000'
    })

    third.forEach(data => {
        data.style.color = '#000'
    })

    fourth.forEach(data => {
        data.style.color = '#fff'
    })
})


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