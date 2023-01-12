var onCoolDown = false

export const externalLink = (id, ...links)=>{
    const element = document.getElementById(`${id}`)
    const arrayLinks = [...links]
    element.addEventListener('mouseup', (event)=>{
        const clickEvent = event.button
        if((clickEvent == 0 || clickEvent == 1) && !onCoolDown){
            setCooldown(100)
            arrayLinks.forEach(arrayElement => {
                    window.open(`${arrayElement}`, "_blank")
            });
        }
    })
}

export const setCooldown = time =>{
    onCoolDown = true
    setTimeout(() => {
        onCoolDown = false
    }, time);
}
