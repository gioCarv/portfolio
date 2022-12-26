const darkMode = () =>{
    const isDark = localStorage.getItem('darkMode')
    const body = document.getElementById('body')
    const sunOrMoon = document.getElementById('darkMode')
    const verticalShadow = document.getElementById('homeVerticalShadow')
    body.style.animation = ""
    if(isDark == 'true'){
        // body.style.animation = "darkMode 1s linear"
        // verticalShadow.style.background = 'rgb(31, 30, 30)'
        verticalShadow.style.background = 'transparent'
        body.className = 'bodyDark'
        sunOrMoon.textContent = '🌙'
        
    }else{
        // body.style.animation = "darkMode 1s linear reverse"
        verticalShadow.style.background = 'linear-gradient(to top, rgb(192, 197, 202) 5%, transparent 90%)'
        body.className = 'bodyLight'
        sunOrMoon.textContent = '🌞'
    }
}
darkMode()
const setDark = ()=>{
    const isDark = localStorage.getItem('darkMode')
    if(isDark == 'true'){
        localStorage.setItem('darkMode', false)
    }else{
        localStorage.setItem('darkMode', true)
    }
        darkMode()
}

const transitionDark = ()=> {
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