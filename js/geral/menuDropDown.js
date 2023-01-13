export const menuClick = () => {
    const button = document.getElementById('buttonMenu')
    const textMenu = document.getElementById('whoIAm')
    const menu = document.getElementById('menu')
    const swapVisible = (boolean) => {
        if (boolean) {
            button.style.background = '#79727248'
            menu.style.display = 'flex'
        } else {
            menu.style.display = 'none'
            button.style.background = 'transparent'
        }
    }
    let swapVariable = false
    document.addEventListener('click', (event) => {
        const element = event.target
        if(window.screen.width <= 900){
            if (element == menu || element == textMenu) {
                swapVariable = true
            }
            if (element == button) {
                swapVariable = !swapVariable
            }
            if (element != button && element != menu && element != textMenu) {
                swapVariable = false
            }
            swapVisible(swapVariable)
        }
    })
    window.addEventListener('resize', ()=>{
        if(window.innerWidth > 900){
            swapVisible(true)
        }else{
            swapVisible(false)
        }
    })
}

