import eventsTemples from '../templates/events.hbs'
import munuEvents from '../menu.json'
console.log(munuEvents);

const menuList = document.querySelector('.js-menu');
menuList.innerHTML = eventsTemples((munuEvents));

// console.log(munuEvents); 




// const galleryMarkup = createGalleryMarkup(menuList);

// function createGalleryMarkup(menuList) {
//    return menuList.map(({ingredients}) => {
//       return `
//       <li class="tag-list__item"">
//         ${ingredients} 
//       </li>`
//    })
//       .join("");

// }

// menuList.insertAdjacentHTML('beforeend', galleryMarkup);