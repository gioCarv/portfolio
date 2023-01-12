const myName = document.getElementById('name')
const successfulEmail = document.getElementById('successfulEmail')
export const write = (element, speed, start)=>{
    const textArray = element.innerHTML.split('');
    element.innerHTML = ''
    setTimeout(() => {
        textArray.forEach((letter,i)=>{
            setTimeout(() => {
                element.innerHTML += letter
            }, i*speed);
        })      
    }, start);
}

