const progress = document.getElementById('progress')
const next = document.getElementById('next')
const back = document.getElementById('back')
const circles = document.querySelectorAll('.circle')

let steps = 1;

next.addEventListener('click', ()=> {
    steps++;

    if (steps > circles.length) {
        steps = circles.length
    }
    // console.log(steps)
    updatesteps()
})

back.addEventListener('click', ()=> {
    steps--;

    if (steps < 1) {
        steps = 1;
    }
    // console.log(steps)
    updatesteps()
})


function updatesteps(){
    circles.forEach((circle, i) => {
        if (i < steps){
            circle.classList.add('active')

        } else {
            circle.classList.remove('active')
        }
    })

    const actives = document.querySelectorAll('.active')
    progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%'

    if(steps === 1){
        back.disabled = true

    } else if(steps === circles.length) {
        next.disabled = true

    } else {
        back.disabled = false
        next.disabled = false
    }
}
