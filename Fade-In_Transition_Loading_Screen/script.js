const loadingText = document.querySelector('section')
const background = document.querySelector('main')

let loading = 0
let timer = setInterval(blurEffect, 35)

function blurEffect () {
    loading++

    if(loading > 99) {
        clearInterval(timer)
    }

    loadingText.innerText = `${loading}%`
    loadingText.style.opacity = 1 - (loading / 100);
    background.style.filter = `blur(${30 - ((loading / 100) * 30)}px)`;
}