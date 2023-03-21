"use strict"

let passwordInput = document.querySelector('#password')
let showHidePasswordBtn = document.querySelector('.showHidePasswordBtn')
let passwordImage = showHidePasswordBtn.querySelector('img')
let successfulMessage = document.querySelector('#successful')

let urlImagesWithAlt = [
    {
        urlEyeOff: './images/eye-off.svg',
        altEyeOff: 'Ícone de olho fechado que indica que a senha está oculta'
    },
    {
        urlEye: './images/eye-on.svg',
        altEye: 'Ícone de olho aberto que indica que a senha está visível'
    }
]

showHidePasswordBtn.addEventListener('click', showOrHidePassword)
function showOrHidePassword() {
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text'
        passwordImage.src = urlImagesWithAlt[1].urlEye
        passwordImage.alt = urlImagesWithAlt[1].altEye
    } else {
        passwordInput.type = 'password'
        passwordImage.src = urlImagesWithAlt[0].urlEyeOff
        passwordImage.alt = urlImagesWithAlt[0].altEyeOff
    }
}

passwordInput.addEventListener('input', () => {
    const passwordValue = passwordInput.value.length
    const isValidPassword = passwordValue >= 8 && passwordValue <= 12
  
})

