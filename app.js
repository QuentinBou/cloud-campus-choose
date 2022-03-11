const container = document.querySelector('.container')
const choose = document.querySelector('img')
const size = document.querySelector('.size')

footSize.addEventListener('input', (e) => {
    console.log(e);
    size.textContent = e.target.value
    newChooseSize = choose.width + ((parseInt(e.target.value) * 100) / choose.width)
    choose.style.width = newChooseSize + 'px'
    console.log(newChooseSize);
})