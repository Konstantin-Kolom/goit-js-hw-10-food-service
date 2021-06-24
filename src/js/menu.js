import eventsTemples from '../templates/events.hbs'
import munuEvents from '../menu.json'
// console.log(munuEvents);

const menuList = document.querySelector('.js-menu');
menuList.innerHTML = eventsTemples((munuEvents));
console.log(menuList);




// const galleryMarkup = createGalleryMarkup(munuEvents);
// console.log(galleryMarkup);

// function createGalleryMarkup(munuEvents) {
//    return munuEvents.map(({ingredients}) => {
//       // console.log(ingredient)
//       return `
//       <li class="tag-list__item">
//         ${ingredients} 
//       </li>`
//    })
//          .join("\n");
// }

// const li = document.querySelector('.tag-list')
// li.insertAdjacentHTML('beforeend', galleryMarkup);



