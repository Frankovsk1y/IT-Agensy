const buttonClick = document.querySelector(".form__btn")
const dropdownForm = document.querySelector(".dropdown__form")
buttonClick.onclick=function(){
    dropdownForm.classList.toggle("dropdown__form--active")
}

const settingsBtn = document.querySelector(".settings")
const settingsText = document.querySelector(".settings__text")
settingsBtn.onclick = function(){
    settingsText.classList.toggle("settings__text--active")
}
