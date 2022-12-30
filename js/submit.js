
const verifyAndSubmit = () =>{
    const form = document.getElementById("form")
    const emailInput = document.getElementById("contactEmail")
    const error = document.getElementById("inputError")
    const nomeInput = document.getElementById("contactName")
    const nome = nomeInput.value
    const email = emailInput.value
    const loadingBar = document.getElementById('loadingBar')
    const successfulEmail = document.getElementById('successfulEmail')
    console.log(emailInput)
    console.log(email)
    const validEmail = isEmail(email)
    if (validEmail){
        successfulEmail.style.display = 'flex'
        loadingBar.style.display = 'flex'
        text.style.display = 'flex'
        write(successfulEmail, 100) 
        // alert(`obrigado ${nome} por entrar em contato ! Seu email esta sendo processado e será enviado dentro de alguns instantes`)
        setTimeout(() => {
            // form.submit();
        }, 7200);
    } else{
        error.innerHTML = 'Email invalido'
    }
}

const isEmail = (Email) => {
    if (Email.indexOf('@') > 0 && Email.indexOf('.com') > 1 + Email.indexOf('@')) {
        return true
    }
    else {
        return false
    }
}
document.getElementById("contactButton").addEventListener("click", function(event){
    event.preventDefault()
  });