//Get all reqired elements
const form = document.querySelector("form"),
    eFiled = form.querySelector(".email"),
    eInput = eFiled.querySelector(".input-with-icon"),
    eRInput = eFiled.querySelector("input")
    pFiled = form.querySelector(".password"),
    pInput = pFiled.querySelector(".input-with-icon")
form.onsubmit = (e) => {
    if (eInput.value === '') {
        eFiled
            .classList
            .add("shake", "error-warn-d")
    }
    if (pInput.value === '') {
        pFiled
            .classList
            .add("shake", "error-warn-d")
    }
    setTimeout(() => {
        //remove shake class after 500ms
        eField
            .classList
            .remove("shake");
        pField
            .classList
            .remove("shake");
    }, 500);

    e.preventDefault()
}

eInput.onkeyup = () => {
    checkEmail()
} //calling checkEmail function on email input keyup
pInput.onkeyup = () => {
    checkPass();
} //calling checkPassword function on pass input keyup

function checkEmail() {
    alert()
}