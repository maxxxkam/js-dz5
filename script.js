const btn1 = document.querySelector('#btn1')
const btn2 = document.querySelector('#btn2')
const btn3 = document.querySelector('#btn3')
const btn4 = document.querySelector('#btn4')
const body = document.querySelector('body')
const img = document.querySelector('.img')
const h1 = document.querySelector('.h1')
const h2 = document.querySelector('.h2')



btn1.onclick = () => {
    body.classList.toggle('body1')
}

btn2.onclick = () => {
    img.classList.toggle('hidden')
}
btn3.onclick = () => {
    h1.classList.toggle('hidden')
}
btn4.onclick = () => {
    h1.classList.toggle('h2')
}