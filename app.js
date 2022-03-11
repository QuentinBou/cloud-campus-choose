const choose = document.querySelector('img')
const size = document.querySelector('.size')

footSize.addEventListener('input', (e) => {
    size.textContent = e.target.value
    newChooseSize = choose.width + ((parseInt(e.target.value) * 100) / choose.width)
    choose.style.width = newChooseSize + 'px'
})