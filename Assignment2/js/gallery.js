var displayBar = document.querySelector('figure.displayBar');
var thumbBar = document.querySelector('ul.thumbBarImgs');
var thumbBarRoll = document.querySelector('div.thumbBarImgs');

// Thumbnail images list
var imgList = [
	{	'src' : 'images/flowers-pink-small.jpg', 'title' : 'Chrysanthmums'},
	{	'src' : 'images/flowers-purple-small.jpg', 'title' : 'Bluebell'},
	{	'src' : 'images/flowers-red-small.jpg', 'title' : 'Poppies'},
	{	'src' : 'images/flowers-white-small.jpg', 'title' : 'Daffodils in Sentmaring park'},
	{	'src' : 'images/flowers-yellow-small.jpg', 'title' : 'Sunflowers'}];

// Setup the thumbnail bar
for(var i = 0; i < imgList.length; i++) {
	var newLi = document.createElement('li');
	var newImage = document.createElement('img');
	newImage.setAttribute('src', imgList[i].src);
	newImage.setAttribute('title', imgList[i].title);
	newImage.index = i;
	newImage.className = 'thumbnail';
	newLi.appendChild(newImage);
	thumbBar.appendChild(newLi);
}

// Call and display the first image to display Bar
var slideIndex = 0;
currentSlide(slideIndex);

// Thumbnail clickable to change the image on display bar
thumbBar.onclick = function (event) {
	if(event.target && event.target.nodeName === 'IMG') {
		currentSlide(event.target.index);
	}
};

// Slider image
function displayImage(img) {
	displayBar.querySelector('img').setAttribute('src', img.getAttribute('src').replace('small', 'large'));
	displayBar.querySelector('img').setAttribute('alt', img.getAttribute('alt'));
	displayBar.querySelector('h3').innerHTML = img.getAttribute('title');
}

// thumbnails
function outlineClearing() {
	var thumbImgs = document.querySelectorAll('img.thumbnail');
	for(var i = 0; i < thumbImgs.length; i++) {
		thumbImgs[i].className = thumbImgs[i].className.replace (' active', '');
	}
}

// set and show the slide by the slide index
function plusSlides(n) {
	showSlide(slideIndex += n);
	console.log(n);
}

function currentSlide(n) {
	showSlide(slideIndex = n);
}

function showSlide(n) {
	var thumbImgs = document.querySelectorAll('img.thumbnail');
	if (n >= thumbImgs.length) {
		slideIndex = 0;
	}
	if (n < 0) {
		slideIndex = thumbImgs.length - 1;
	}

	outlineClearing();

	thumbImgs[slideIndex].className += ' active';
	displayImage(thumbImgs[slideIndex]);
}

