const shoose = document.querySelector('img')
const size = document.querySelector('.size')

footSize.addEventListener('input', (e) => {
    size.textContent = e.target.value
    newShooseSize = shoose.width + ((parseInt(e.target.value) * 100) / shoose.width)
    shoose.style.width = newShooseSize + 'px'
})