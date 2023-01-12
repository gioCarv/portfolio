var cooldown = [false, false, false]
export const copy  = (e, number)=>{
    const element = e.currentTarget.children[0]
    const text = e.currentTarget.children[2].textContent
    element.style.display = 'initial'
    navigator.clipboard.writeText(`${text}`)
    if (!cooldown[number]){
        cooldown[number] = true
        setTimeout(() => {
            element.style.display = 'none'
            cooldown[number] = false
        }, 5000);  
    }
}
