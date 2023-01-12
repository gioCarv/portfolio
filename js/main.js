import {write} from "./write.js";
import { verifyAndSubmit } from "./submit.js";
import { scrollDown, scrollAnaliser, home } from "./scrollDown.js";
import { externalLink } from "./externalLinks.js";
import { setDark, darkMode, transitionDark} from "./darkmode.js";
import { copy } from "./copy.js";
import { setCooldown } from "./externalLinks.js";
import { moreInfos } from "./moreInfo.js";
import { showMore } from "./showMore.js";
import {menuClick } from "./menuDropDown.js";
import {resetVideo} from "./resetProjectVideo.js"

resetVideo()
menuClick()
showMore()
const myName = document.getElementById('name')
const successfulEmail = document.getElementById('successfulEmail')
write(myName, 180, 1100)
darkMode()
moreInfos()
// setCooldown('teste', 100)
externalLink('project1', 'https://projectnetflix.netlify.app/')
externalLink('githubProjectNetflix', 'https://github.com/gioCarv/nodejs-netflix','https://github.com/gioCarv/netflix-front')

window.setCooldown = setCooldown
window.copy = copy
window.verifyAndSubmit = verifyAndSubmit

window.scrollDown = scrollDown
window.scrollAnaliser = scrollAnaliser
window.home = home
window.externalLink = externalLink

window.setDark = setDark
window.transitionDark = transitionDark