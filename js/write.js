const myName = document.getElementById('name')
const successfulEmail = document.getElementById('successfulEmail')
const write = (element, speed)=>{
    const textArray = element.innerHTML.split('');
    console.log(textArray)
    element.innerHTML = ''
    setTimeout(() => {
        textArray.forEach((letter,i)=>{
            setTimeout(() => {
                element.innerHTML += letter
            }, i*speed);
        })      
    }, 1100);
}
write(myName, 180)
// write(successfulEmail, 100) 

console.log('fui chamado')