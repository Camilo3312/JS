const textarea = document.getElementById("textarea");
const btn_mayuscula = document.querySelector(".btn_mayuscula");
const btn_minuscula = document.querySelector(".btn_minuscula");
const btn_capitalzar = document.querySelector(".btn_capitalzar");
const btn_limpiar = document.querySelector(".btn_limpiar");

btn_mayuscula.addEventListener('click', () => {
    textarea.value = textarea.value.toUpperCase()
})

btn_minuscula.addEventListener('click', () => {
    textarea.value = textarea.value.toLowerCase()
})

btn_capitalzar.addEventListener('click', () => {
    let global = ''
    let arr = textarea.value.split(' ')  
    const newArr = arr.map(item => {
        return item.slice(0,1).toUpperCase() + item.slice(1);
    })
    textarea.value = newArr.toString().split(',').join(' ')
})

btn_limpiar.addEventListener('click', () => {
    textarea.value = ''
})