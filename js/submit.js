import {write} from "./write.js";
let cooldown = false
export const verifyAndSubmit = () =>{
    const form = document.getElementById("form")
    const emailInput = document.getElementById("contactEmail")
    const error = document.getElementById("inputError")
    const nomeInput = document.getElementById("contactName")
    const nome = nomeInput.value
    const email = emailInput.value
    const loadingBars = document.getElementsByClassName('loadingBar')
    const successfulEmail = document.getElementById('successfulEmail')
    const text = document.getElementById('successfulEmail').innerHTML
    console.log(emailInput)
    console.log(email)
    const validEmail = isEmail(email)
    if (validEmail){
        successfulEmail.style.display = 'flex'
        loadingBars[1].style.display = 'flex'
        if(window.innerWidth < 900){
            loadingBars[0].style.display = 'flex'
        }
        if(!cooldown){
            cooldown = true
            write(successfulEmail, 140, 400) 
            setTimeout(() => {
                form.submit();
                cooldown = false
            }, 6000);
        }else{
            console.log('no cd')
        }
    } else{
        emailInput.select()
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