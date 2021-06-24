import eventsTemples from '../templates/events.hbs'
import munuEvents from '../menu.json'

const menuList = document.querySelector('.js-menu');
menuList.innerHTML = eventsTemples((munuEvents));



