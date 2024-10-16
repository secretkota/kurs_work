const form = document.getElementById("registrationForm")
const emailInput = form["email"]
const nameInput = form["name"]
const passInput = form["password"]
const emailError = document.getElementById("emailError")
const nameError = document.getElementById("nameError")
const passError = document.getElementById("passwordError")

const checkName = (name) => {
    const nameCheked = /^(?=.{1,32}$)([A-Za-zА-Яа-я]+(?:[-.\s][A-Za-zА-Яа-я]+)*)$/
    return nameCheked.test(name)
}

const checkEmail = (email) => {
    const emailCheked = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    return emailCheked.test(email)
}

// todo: сделать норм валидацию
const checkPassword = (password) => {
    const passCheked = /[A-Za-z]/
    return passCheked.test(password)
}



form.addEventListener("submit", (event) => {
    let hasError = false
    
    if (!checkName(nameInput.value)){
        nameError.innerHTML = "Invalid Name" 
        hasError = true
    } else {
        nameError.innerHTML = ""
    }

    if (!checkEmail(emailInput.value)){
        emailError.innerHTML = "Invalid Email"
        hasError = true
    } else {
        emailError.innerHTML = ""
    }

    if (!checkPassword(passInput.value)){
        passError.innerHTML = "Invalid Password"
        hasError = true
    } else {
        passError.innerHTML = ""
    }

    if (hasError){
        event.preventDefault(); 
    }else
        console.log("Success")
})
