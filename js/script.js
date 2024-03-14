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

// раздел статей
for(let blogArticle of blogArticles){
  let moreButton = blogArticle.querySelector('.more');
  moreButton.onclick = function(){
    blogArticle.classList.remove('short');
  };
};

//раскладка карточек

cardViewGrid.onclick = function(){
  cardViewGrid.classList.add('active');
  cardViewList.classList.remove('active');
  rentCards.classList.remove('list');
};

cardViewList.onclick = function() {
  cardViewGrid.classList.remove('active');
  cardViewList.classList.add('active');
  rentCards.classList.add('list');
};

//галерея
let mainGalleryImage = document.querySelector('.gallery-main-img');
let galleryImages = document.querySelectorAll('.gallery-list a');

for(let galleryImage of galleryImages){
  galleryImage.onclick = function(evt) {
    evt.preventDefault();

    let currentActiveImage = document.querySelector('.active-item');
    mainGalleryImage.src = galleryImage.href;
    galleryImage.classList.add('active-item');
    currentActiveImage.classList.remove('active-item');
  };
};