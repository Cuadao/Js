const menu = [
  {
    title: 'Menu 1',
    soup: 'Minestrone',
    soupPrice: '2.85',
    salad: 'Greek',
    saladPrice: '4.50',
    lighterFare: 'Vegetable Biryani',
    lighterFarePrice: '5.00',
    entree: 'Breaded Chicken on a Bun',
    entreePrice: '6.00',
  },
  {
    title: 'Menu 2',
    soup: 'Red Lentil Dal',
    soupPrice: '3.95',
    salad: 'Julienne',
    saladPrice: '3.75',
    lighterFare: 'Madras Chicken Salad Wrap',
    lighterFarePrice: '5.95',
    entree: 'Fish & Chips',
    entreePrice: '6.50',
  },
  {
    title: 'Menu 3',
    soup: 'Spicy Squash & Pumpkin',
    soupPrice: '3.00',
    salad: 'Mediterranean',
    saladPrice: '3.95',
    lighterFare: 'Ham & Cheese Panini',
    lighterFarePrice: '5.25',
    entree: 'Butter Chicken with Rice Pilaf',
    entreePrice: '6.25',
  },
  {
    title: 'Menu 4',
    soup: 'Clam Chowder',
    soupPrice: '3.25',
    salad: 'Israeli Couscous & Feta',
    saladPrice: '4.75',
    lighterFare: 'Pulled Pork on a Bun',
    lighterFarePrice: '5.25',
    entree: 'Matar Paneer & Basmati Rice',
    entreePrice: '6.50',
  },
  {
    title: 'Menu 5',
    soup: 'Tomato',
    soupPrice: '2.95',
    salad: 'Caesar',
    saladPrice: '4.75',
    lighterFare: 'Burger & Fries',
    lighterFarePrice: '4.95',
    entree: 'Beef & Broccoli with Fried Rice',
    entreePrice: '5.95',
  },
];

// STEP 1 - Define your page variable.

var page = 0;//initial value


// STEP 2 - Define all your querySelector variables that you'll need to display all info.
// Consider using embedded objects that allows you use salad.title and salad.price to access the DOM elements

//var menuTitle = document.querySelector('.menu');
var menuTitle = document.getElementById('menu');
var soup = document.getElementById('soup');
var salad = document.getElementById('salad');
var lighterFare = document.getElementById('lighterfare');
var entree = document.getElementById('entree');

// STEP 3 - Define a function called display that accepts a parameter called todaysmenu (Which is an object)
// The function will display all prices and menu items based off of todaysmenu via your querySelector variables defined above


function display(todaysmenu){
  menuTitle.getElementsByTagName('h2')[0].innerHTML = todaysmenu.title;
  soup.getElementsByTagName('h1')[0].innerHTML = todaysmenu.soup;
  soup.getElementsByTagName('p')[0].innerHTML = todaysmenu.soupPrice;
  salad.getElementsByTagName('h1')[0].innerHTML = todaysmenu.salad;
  salad.getElementsByTagName('p')[0].innerHTML = todaysmenu.saladPrice;
  lighterFare.getElementsByTagName('h1')[0].innerHTML = todaysmenu.lighterFare;
  lighterFare.getElementsByTagName('p')[0].innerHTML = todaysmenu.lighterFarePrice
  entree.getElementsByTagName('h1')[0].innerHTML = todaysmenu.entree;
  entree.getElementsByTagName('p')[0].innerHTML = todaysmenu.entreePrice;
}

// STEP 4 - Create a function called next, that will increment your page counter by 1,
// then run your display function using as the argument, the current menu as determined by your page variable

function next(){
  page = page === menu.length - 1 ? 0 : page + 1;
  display(menu[page]);

  /* for (var i = 0; i < menu.length; i++){
    menu[i] += 1;
  }
  return page; */
}


// STEP 5 - Create a function called previous, that will decrement your page counter by 1,
// then run your display function using as the argument, the current menu as determined by your page varibale

function previous(){
  page = page === 0 ? menu.length - 1 : page - 1
  display(menu[page]);

  /* for (var i = 0; i < menu.length; i--){
    menu[i] -= 1;
  }
  return page; */
}
// STEP 6 - Ensure that you cover the potential bug of your functions next/prev being called multiple times
// which will eventually move the page value outside the bounds of your array.  Fix that.


// STEP 7 - Add click event listeners to both arrow buttons calling the appropriate function.

document.getElementById('menu').getElementsByTagName('button')[0].addEventListener('click',previous);
document.getElementById('menu',).getElementsByTagName('button')[1].addEventListener('click',next);



// STEP 8 - Almost done, but why doesn't the info display right away upon page load?  Fix it.
display(menu[0]);