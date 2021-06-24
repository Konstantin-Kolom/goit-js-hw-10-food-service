import eventsTemples from '../templates/events.hbs'
import munuEvents from '../menu.json'
// console.log(munuEvents);
// console.log(typeof munuEvents);
// console.log(munuEvents.id);

const menuList = document.querySelector('.js-menu');
menuList.innerHTML = eventsTemples((munuEvents));
// console.log(menuList);

// const indigMas = munuEvents.map(({ingredients}) => {
      // return ingredients
      // console.log(ingredients)
// })

// console.log(indigMas);

// for (indigMas )

// for(var i=0; i < country.languages.length; i++)
//     document.write(country.languages[i] + "<br/>");

// indigMas.forEach(ingredient => {
//    console.log(ingredient);
// })

   // .array.forEach(element => {
      
   // });
   
// munuEvents.forEach(ingredients)


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



