import './modules/isWebp.js';
import './libs/slick.min.js'
import './slider.js'
import hamburger from './modules/hamburger.js';
import scroll from './modules/scroll.js';

window.addEventListener('DOMContentLoaded', () => {
    hamburger('.hamburger', '.close', '.header__block')
    scroll('a[href*="#"]', '.scroll_top')
})