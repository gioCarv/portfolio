import {write} from "./geral/write.js";
import { verifyAndSubmit } from "./geral/submit.js";
import { scrollDown, scrollAnaliser, home } from "./geral/scrollDown.js";
import { externalLink } from "./geral/externalLinks.js";
import { setDark, darkMode, transitionDark} from "./geral/darkmode.js";
import { copy } from "./geral/copy.js";
import { setCooldown } from "./geral/externalLinks.js";
import { moreInfos } from "./geral/moreInfo.js";
import { showMore } from "./geral/showMore.js";
import {menuClick } from "./geral/menuDropDown.js";
import {resetVideo} from "./geral/resetProjectVideo.js"

resetVideo()
menuClick()
showMore()
const myName = document.getElementById('name')
write(myName, 180, 1100)
darkMode()
moreInfos()

externalLink('project1', 'https://projectnetflix.netlify.app/')
externalLink('githubProjectNetflix', 'https://github.com/gioCarv/nodejs-netflix','https://github.com/gioCarv/netflix-front')
externalLink('githubPortifolio', 'https://github.com/gioCarv/portifolio')
externalLink('project2', 'https://giocarv.github.io/portifolio/')



window.setCooldown = setCooldown
window.copy = copy
window.verifyAndSubmit = verifyAndSubmit
window.scrollDown = scrollDown
window.scrollAnaliser = scrollAnaliser
window.home = home
window.externalLink = externalLink
window.setDark = setDark
window.transitionDark = transitionDark