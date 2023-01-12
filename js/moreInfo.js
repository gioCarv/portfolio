const allMoreInfos = document.getElementsByClassName("moreInfos")
const arrayMoreInfos = [...allMoreInfos]
export const moreInfos = () =>{
    arrayMoreInfos.forEach(element =>{
        const id = element.getAttribute('id')
        let number = id.split('@')[1]   
        let projectVideo = document.getElementById(`projectVideo${number}`)
        let image = element.firstElementChild
        let path = image.getAttribute('src') 
        let newPath = path.split('@')[0] + '@'        
        let adjacentElement = document.getElementById(`infoProject${number}`)
        element.addEventListener('click', (event)=>{
            if (adjacentElement.style.display == 'flex'){
                projectVideo.style.display = 'none'
                projectVideo.pause()
                projectVideo.currentTime = 0;
                image.setAttribute('src',`${newPath}1.png` )    
                adjacentElement.style.display = 'none'
            }else{
                projectVideo.style.display = 'unset'
                projectVideo.play()
                image.setAttribute('src',`${newPath}2.png` )
                adjacentElement.style.display = 'flex'
            }
        })
    })
}
