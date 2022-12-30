export const scrollAnaliser = (time) =>{
    setTimeout(() => {
        const text = document.getElementById('scrollDown')
        if (window.scrollY === 0){
            text.style.display = 'unset'            
        }    
    }, time);
}

scrollAnaliser(7000)

export const scrollDown = (idElement, marginTop) =>{
    const element = document.getElementById(idElement)
    const size = element.clientHeight - marginTop
    console.log(window.scrollY)
    window.scrollTo({
        top: size,
        left: 0,
        behavior: 'smooth'
      });
}

export const home = () =>{
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
}