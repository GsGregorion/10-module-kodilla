'use strict'
var templateSlide = document.getElementById('template-slide-mustache').innerHTML,
    templateLinks = document.getElementById('template-my-links').innerHTML,
    slideItems = '',
    slideLinks = '';

Mustache.parse(templateSlide);
Mustache.parse(templateLinks);	

		
for ( var i = 0; i < slidesInnerData.length; i++) {
    console.log(slidesInnerData);
    
		slideItems += Mustache.render(templateSlide, slidesInnerData[i]);
    slideLinks += Mustache.render(templateLinks, slidesInnerData[i]);
}
	
generatedMySlides.insertAdjacentHTML('beforeend', slideItems);
generatedMyLinks.insertAdjacentHTML('beforeend', slideLinks);
  

var elem = document.querySelector('.main-carousel');
var flkty = new Flickity( elem, {
  // options
  pageDots: false,
  hash: true,
  setGallerySize: false,
  wrapAround: true,
  cellAlign: 'center',
  contain: true
});

var progressBar = document.querySelector('.progress-bar')

flkty.on( 'scroll', function( progress ) {
  progress = Math.max( 0, Math.min( 1, progress ) );
  progressBar.style.width = progress * 100 + '%';
});

var reStartButton = document.getElementById('goBack');
var goBackButton = document.getElementById('prevBtn');
var goForwardButton = document.getElementById('nextBtn');


reStartButton.addEventListener( 'click', function( event ) {
  // filter for button clicks
  flkty.select( 0 );
});

goBackButton.addEventListener( 'click', function( event ) {
  // filter for button clicks
  flkty.previous(  );
});

goForwardButton.addEventListener( 'click', function( event ) {
  // filter for button clicks
  flkty.next(  );
});