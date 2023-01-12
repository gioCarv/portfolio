const changeBackgroundElements = (className, color) =>{
    const elements = document.getElementsByClassName(`${className}`)
    const elementsArray = Array.from(elements)
    elementsArray.forEach((element,i)=>{
        setTimeout(() => {
            element.style.backgroundColor = `${color}`
        }, (i*400 + 600));
    })      
}
export const darkMode = () =>{
    const isDark = localStorage.getItem('darkMode')
    const body = document.getElementById('body')
    const underline = document.getElementById('office')
    const sunOrMoon = document.getElementById('darkMode')
    const verticalShadow = document.getElementById('homeVerticalShadow')
    body.style.animation = ""
    if(isDark == 'true'){
        changeBackgroundElements('contactImgs', 'rgba(233, 167, 0, 0.63)')
        verticalShadow.style.background = 'transparent'
        body.className = 'bodyDark'
        underline.className = 'underlineDark'
        sunOrMoon.textContent = '🌙'
        
    }else{
        changeBackgroundElements('contactImgs', 'transparent')
        verticalShadow.style.background = 'linear-gradient(to top, rgb(245, 245, 245) 10%, transparent 90%)'
        body.className = 'bodyLight'
        underline.className = 'underlineLight'
        sunOrMoon.textContent = '🌞'
    }
}
darkMode()
export const setDark = ()=>{
    const isDark = localStorage.getItem('darkMode')
    if(isDark == 'true'){
        localStorage.setItem('darkMode', false)
    }else{
        localStorage.setItem('darkMode', true)
    }
        darkMode()
}

export const transitionDark = ()=> {
    const isDark = localStorage.getItem('darkMode')
    const body = document.getElementById('body')
    if(typeof isDark ==='undefined'){

    }else{
        if(isDark == 'true'){
            body.style.animation = "darkMode 0.75s linear"
        }else{
            body.style.animation = "darkMode 0.75s linear reverse"
        }
    }
    setTimeout(() => {
        body.style.animation = ''
    }, 750 );
}


