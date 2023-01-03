import {write} from "./write.js";
import { verifyAndSubmit } from "./submit.js";
import { scrollDown, scrollAnaliser, home } from "./scrollDown.js";
import { externalLink } from "./externalLinks.js";
import { setDark, darkMode, transitionDark} from "./darkmode.js";
import { copy } from "./copy.js";


const myName = document.getElementById('name')
const successfulEmail = document.getElementById('successfulEmail')
write(myName, 180, 1100)
darkMode()

window.copy = copy
window.verifyAndSubmit = verifyAndSubmit

window.scrollDown = scrollDown
window.scrollAnaliser = scrollAnaliser
window.home = home
window.externalLink = externalLink

window.setDark = setDark
window.transitionDark = transitionDark