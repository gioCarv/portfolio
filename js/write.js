const title = document.getElementById('name')
const write = (element)=>{
    const textArray = title.innerHTML.split('');
    element.innerHTML = ''
    setTimeout(() => {
        textArray.forEach((letter,i)=>{
            setTimeout(() => {
                element.innerHTML += letter
            }, i*180);
        })      
    }, 500);
}
write(title)
console.log('fui chamado')