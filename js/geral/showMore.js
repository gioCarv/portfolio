var swapVariable = true

export const showMore = ()=>{
    const text = document.getElementsByClassName('textBox')[0]
    const button = document.getElementById('showMore')
    button.addEventListener("click", ()=>{
        if(swapVariable){
            button.innerHTML = 'Mostrar menos'
            text.style.display = 'inherit'
        }else{
            button.innerHTML = 'Mostrar mais'
            text.style.display = '-webkit-box'          
        }
        swapVariable = !swapVariable
    })

}
