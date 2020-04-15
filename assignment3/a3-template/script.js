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
    entreePrice: '6.00'
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
    entreePrice: '6.50'
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
    entreePrice: '6.25'
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
    entreePrice: '6.50'
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
    entreePrice: '5.95'
  }
]

const app = {
  data: menu,
  currentIndex: 0,

  init: () => {
    // Get Menu nav and set title to 1st item in data array
    this.displayNavTitle();
    // Display rest of menu items and prices
    this.displayMenu();

  },

  
  next: () => {
    // If user clicks on nav arrow right, then increment currentIndex
    this.currentIndex = this.currentIndex === this.data.length - 1 ? 0 : this.currentIndex + 1;
    
    // Display menu nav title
    this.displayNavTitle()
    // Display rest of menu items and prices
    this.displayMenu();
  },
  prev: () => {
    // If user clicks on nav arrow right, then decrement currentIndex
    this.currentIndex = this.currentIndex === 0 ? this.data.length - 1 : this.currentIndex - 1;

    // Display menu nav title
    this.displayNavTitle()
    // Display rest of menu items and prices
    this.displayNavTitle()
  },

  displayNavTitle: function() {
    document.getElementById('menu').getElementsByTagName('h2')[0].innerHTML = this.data[this.currentIndex].title;
  },
  displayMenu: function() {
    document.getElementById('soup').getElementsByTagName('h1')[0].innerHTML = this.data[this.currentIndex].soup;
    document.getElementById('soup').getElementsByTagName('p')[0].innerHTML = this.data[this.currentIndex].soupPrice;
    document.getElementById('salad').getElementsByTagName('h1')[0].innerHTML = this.data[this.currentIndex].salad;
    document.getElementById('salad').getElementsByTagName('p')[0].innerHTML = this.data[this.currentIndex].saladPrice;
    document.getElementById('lighterfare').getElementsByTagName('h1')[0].innerHTML = this.data[this.currentIndex].lighterFare;
    document.getElementById('lighterfare').getElementsByTagName('p')[0].innerHTML = this.data[this.currentIndex].lighterFarePrice;
    document.getElementById('entree').getElementsByTagName('h1')[0].innerHTML = this.data[this.currentIndex].entree;
    document.getElementById('entree').getElementsByTagName('p')[0].innerHTML = this.data[this.currentIndex].entreePrice;
  },
  
}
document.getElementById('menu').getElementsByTagName('button')[0].addEventListener('click',app.previous);
document.getElementById('menu',).getElementsByTagName('button')[1].addEventListener('click',app.next);

app.init();