const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const refs = {
   bodyRef: document.querySelector('body'),
   inputTheme: document.querySelector('#theme-switch-toggle'),
};
// console.log(refs.bodyRef);
// console.log(refs.inputTheme);

refs.bodyRef.classList.add('light-theme')

// inputTheme.addEventListener('change', changesTheSubject);

// function changesTheSubject(event) {
//    refs.bodyRef.classList.add('dark-theme');
//    refs.bodyRef.classList.remove('light-theme');

//    console.log(event);
// }
