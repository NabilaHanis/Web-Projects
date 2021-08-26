const main = document.querySelector('main')
const button = document.querySelector('.button')
const input = document.querySelector('.input')


button.addEventListener('click', () => {
    main.classList.toggle('active')
    input.focus()
})
