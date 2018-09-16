'use strict'
<<<<<<< HEAD
var templateSlide = document.getElementById('template-slide-mustache').innerHTML,
    templateLinks = document.getElementById('template-my-links').innerHTML,
    slideItems = '',
    slideLinks = '';

Mustache.parse(templateSlide);
Mustache.parse(templateLinks);	
=======
window.initMap = function initMap() {
  var yellowstone = {lat: 44.405268, lng: -110.016558};
  var map = new google.maps.Map (
      document.getElementById('map'),
      {zoom: 4, center: yellowstone});

  var marker = new google.maps.Marker({position: yellowstone, map: map});
  
  for ( var i = 0; i < slidesInnerData.length; i++) {
    console.log(slidesInnerData);
    marker = new google.maps.Marker({position: slidesInnerData[i].coords, map: map});
  }
}

var templateSlide = document.getElementById('template-slide-mustache').innerHTML,
    templateLinks = document.getElementById('template-my-links').innerHTML,
    slideItems = '',
    slideLinks = '';
>>>>>>> task-10.3

Mustache.parse(templateSlide);
Mustache.parse(templateLinks);	
		
for ( var i = 0; i < slidesInnerData.length; i++) {
<<<<<<< HEAD
    console.log(slidesInnerData);

    slideItems += Mustache.render(templateSlide, slidesInnerData[i]);
    slideLinks += Mustache.render(templateLinks, slidesInnerData[i]);
}
	
generatedMySlides.insertAdjacentHTML('beforeend', slideItems);
generatedMyLinks.insertAdjacentHTML('beforeend', slideLinks);
=======
  console.log(slidesInnerData);
  slideItems += Mustache.render(templateSlide, slidesInnerData[i]);
  slideLinks += Mustache.render(templateLinks, slidesInnerData[i]);
}
>>>>>>> task-10.3
  
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

//get buttons from the page
var reStartButton = document.getElementById('goBack');
var goBackButton = document.getElementById('prevBtn');
var goForwardButton = document.getElementById('nextBtn');

//flickity code for buttons next prev and re-start
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