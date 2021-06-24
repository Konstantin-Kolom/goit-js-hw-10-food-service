// ВЫЗОВ ФУНКЦИЙ
outputTheme();

// КОНСТАНТЫ переменные
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

//ПЕРЕМЕННЫЕ, ССЫЛКИ
const refs = {
   bodyRef: document.querySelector('body'),
   inputTheme: document.querySelector('#theme-switch-toggle'),
};

const bodyClass = refs.bodyRef.classList;

// Body ПО УМОЛЧАНИЮ
refs.bodyRef.classList.add(Theme.LIGHT)

// СЛУШАТЕЛЬ ЧЕКБОКСА
refs.inputTheme.addEventListener('change', changesTheSubject);


// ИЗМЕНЕНИЕ ТЕМЫ ПО ЧЕКБОКСУ
function changesTheSubject() {
   if (refs.inputTheme.checked) {
      bodyClass.add(Theme.DARK);
      bodyClass.remove(Theme.LIGHT);
      localStorage.setItem('theme', Theme.DARK)
      // console.log(refs.inputTheme.checked);
		}
   else {
      bodyClass.add(Theme.LIGHT);
      bodyClass.remove(Theme.DARK);
      localStorage.setItem('theme', Theme.LIGHT)
      // console.log(refs.inputTheme.checked);
	}
}

// ВОЗВРАЩАЕТ ЗАЧЕНИЕ localStorage 
function outputTheme() {
   const saveTheme = localStorage.getItem('theme');
      if (saveTheme) {
         return saveTheme
      }
}

// УСТАНАВЛИВАЕТ true НА ЧЕКБОКС
function checkInpyt() {
   refs.inputTheme.checked = true;
}


// ПРИМЕНЯЕТ ТЕМУ ПРИ ЗАГРУЗКЕ (ИЗ localStorage )
appliesTheTheme()

function appliesTheTheme() {
   if (outputTheme() === Theme.DARK) {
      checkInpyt()
      changesTheSubject()
    }
}




