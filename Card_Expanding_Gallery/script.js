const panels = document.querySelectorAll('.panel')

panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        removeActiveStatus()
        panel.classList.add('active')
    })
})

function removeActiveStatus() {
    panels.forEach((panel) => {
        panel.classList.remove('active')
    })
}