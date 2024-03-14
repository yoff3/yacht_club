let darkTheme = document.querySelector('.theme-button-dark');
let lightTheme = document.querySelector('.theme-button-light');
let mainPage = document.querySelector('.page');

/*Шрифты и тема*/

darkTheme.onclick = function(){
  darkTheme.classList.add('active');
  lightTheme.classList.remove('active');
  mainPage.classList.add('dark');
};

lightTheme.onclick = function(){
  darkTheme.classList.remove('active');
  lightTheme.classList.add('active');
  mainPage.classList.remove('dark');
};

serifFont.onclick = function(){
  serifFont.classList.add('active');
  sansSerifFont.classList.remove('active');
  mainPage.classList.add('serif');
};

sansSerifFont.onclick = function(){
  serifFont.classList.remove('active');
  sansSerifFont.classList.add('active');
  mainPage.classList.remove('serif');
};