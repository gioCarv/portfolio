const projectVideo = document.getElementsByClassName('projectVideo')
const projectVideoArray = [...projectVideo]
export const resetVideo = ()=>{
    projectVideoArray.forEach(element => {
        element.addEventListener('mouseenter', ()=>{
            element.currentTime = 0;
        })
    });
}
