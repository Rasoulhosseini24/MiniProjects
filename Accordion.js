const container = document.querySelector('.containerr')
const sec = container.querySelector('.sec')
const accordion = sec.querySelector('.accordion')
const span = accordion.querySelectorAll('span')

Array.from(span).forEach(e => {
    let content = e.querySelector('.content')

    e.addEventListener('click', (t) => {
        let pp = content.parentElement
        content.classList.toggle('active')
        Array.from(span).forEach(ee => {
            let cc = ee.querySelector('.content')
            if (cc != content) {
                cc.classList.remove('active')
            }

        })
    })
})
