    const allProjects = document.getElementsByClassName('project')
    const lengthProjects = allProjects.length
    let i = 0
    let cooldownArray = []
    while (i < lengthProjects){
        cooldownArray = [...cooldownArray, false]
        i += 1 
    }
    console.log(cooldownArray)
    var onCooldown = false
const animationPics = (e)=>{
    if(!onCooldown){
        console.log('entrei')
        onCooldown = true
        const elementFather = e.target
        const id = e.currentTarget.getAttribute('id')
        const idImage = id + 'Image'
        const image = document.getElementById(idImage)
        const path = image.getAttribute('src')
        let newPath = path.split('@')[0] + '@/image'    
        console.log(newPath)
        let i = 0
        let k = 0
        while (i < 5){
            i = i + 1
            console.log(i)
            setTimeout(() => {
                k= k+1
                console.log(i, 'I')
                image.setAttribute('src', `${newPath}${k}.png`)  
            }, k*1000);
        }
        setTimeout(() => {
            image.setAttribute('src', `${newPath}${1}.png`)  
        }, 3000);
        onCooldown = false
        console.log('sai')
    }
    
}

