'use strict';
var Store = function(location, open, close, minCust, maxCust, avgCookies, dailySales) {

var shopHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm' `Daily Total`];

//SEATTLE
var seattleStore = {
  location: 'Seattle',
  min: 23,
  max: 65,
  avgCookieSale: 6.3,
  cust1: randomMinCust(1, 100),
  cust2: randomMinCust(1, 100),
  hourlySales:[],
  dailySales:0,

  randomCust: function () {
    var range=seattleStore.max-seattleStore.min;
    var randomCount=Math.random() * range+seattleStore.min;
    return Math.ceil(randomCount);
  },

  hourlyDailySales :function () {
    for (var i=0;i<hours.length;i++){
      var numOfCookies= Math.ceil(seattleStore.randomCust() *seattleStore.avgCookieSale);
      seattleStore.hourlySales.push(numOfCookies);
      seattleStore.dailySales += numOfCookies;
    }
  },

  render :function(){
    var container=document.getElementById('content-area');
    var h2 =document.createElement('h2');
    container.appendChild(h2);
    h2.textContent='Seattle';
    container.appendChild(h2);
    var list=document.createElement('ul');
    container.appendChild(list);
    for (var i=0;i<hours.length;i++){
      let listItem = document.createElement('li');
      listItem.textContent = hours[i]+': '+seattleStore.hourlySales[i]+' cookies';
      list.appendChild(listItem);
    }
    var listItem = document.createElement('li');
    listItem.textContent ='Total: '+seattleStore.dailySales+' cookies';
    list.appendChild(listItem);

  },
};

seattleStore.hourlyDailySales();
seattleStore.render();

//Tokyo
let tokyoStore = {
  location: 'Tokyo',
  min: 3,
  max: 24,
  avgCookieSale: 1.2,
  hourlySales:[],
  dailySales:0,

  randomCust :function () {
    let range=tokyoStore.max-tokyoStore.min;
    let randomCount=Math.random() * range+tokyoStore.min;
    return Math.ceil(randomCount);
  },

  hourlyDailySales :function () {
    for (let i = 0; i < hours.length;i++){
      let numOfCookies = Math.ceil(tokyoStore.randomCust() *tokyoStore.avgCookieSale);
      tokyoStore.hourlySales.push(numOfCookies);
      tokyoStore.dailySales += numOfCookies;
    }
  },

  render: function(){
    let container=document.getElementById('content-area');
    let h2 =document.createElement('h2');
    container.appendChild(h2);
    h2.textContent='Tokyo';
    container.appendChild(h2);
    let list=document.createElement('ul');
    container.appendChild(list);
    for (let i = 0;i<hours.length;i++){
      let listItem = document.createElement('li');
      listItem.textContent =hours[i]+': '+tokyoStore.hourlySales[i]+' cookies';
      list.appendChild(listItem);
    }
    let listItem = document.createElement('li');
    listItem.textContent ='Total: '+tokyoStore.dailySales+' cookies';
    list.appendChild(listItem);

  },
};

tokyoStore.hourlyDailySales();
tokyoStore.render();

//Dubai
let dubaiStore = {
location: 'Dubai',
min: 11,
max: 38,
avgCookieSale: 3.7,
hourlySales:[],
dailySales:0,

randomCust :function () {
    let range=dubaiStore.max-dubaiCookies.min;
     let randomCount=Math.random() * range+dubaiStore.min;
     return Math.ceil(randomCount);
  },

hourlyDailySales :function () {
    for (let i=0;i<hours.length;i++){
        let numOfCookies= Math.ceil(this.randomCust() *this.avgCookieSale);
        dubaiStore.hourlySales.push(numOfCookies);
        dubaiStore.dailySales += numOfCookies;
    }
    },

render: function() {
   let container=document.getElementById('content-area');
   let h2 =document.createElement('h2');
   container.appendChild(h2);
   h2.textContent='Dubai';
   container.appendChild(h2);
   let list=document.createElement('ul');
   container.appendChild(list);
   for (let i=0;i<hours.length;i++){
    var listItem = document.createElement('li');
    listItem.textContent  =hours[i]+': '+dubaiStore.hourlySales[i]+' cookies';
    list.appendChild(listItem);
   }
   var listItem = document.createElement('li');
    listItem.textContent  ='Total: '+dubaiStore.dailySales+' cookies';
    list.appendChild(listItem);

},
}

dubaiStore.hourlyDailySales();
dubaiStore.render();

//Paris
let parisStore = {
location: 'Paris',
min: 20,
max: 38,
avgCookieSale: 3.7,
hourlySales:[],
dailySales:0,

randomCust :function () {
    let range=parisCookies.max-parisCookies.min;
     let randomCount=Math.random() * range+this.min;
     return Math.ceil(randomCount);
  },

hourlyDailySales :function () {
    for (let i=0;i<hours.length;i++){var numOfCookies= Math.ceil(parisStore.randomCust() *parisStore.avgCookieSale);
        parisStore.hourlySales.push(numOfCookies);
        parisStore.dailySales += numOfCookies;
    }
    },
   
render :function(){
   let container=document.getElementById('content-area');
   let h2 =document.createElement('h2');
   container.appendChild(h2);
   h2.textContent='Paris';
   container.appendChild(h2);
   let list=document.createElement('ul');
   container.appendChild(list);
   for (let i=0;i<hours.length;i++){
    let listItem = document.createElement('li');
    listItem.textContent = hours[i]+': '+parisStore.hourlySales[i]+' cookies';
    list.appendChild(listItem);
   }
   let listItem = document.createElement('li');
    listItem.textContent  ='Total: '+parisStore.dailySales+' cookies';
    list.appendChild(listItem);
},
}

parisStore.hourlyDailySales();
parisStore.render();

//Lima
let limaCookies = {
location: 'Lima',
min: 2,
max: 16,
avgCookieSale: 4.6,
hourlySales:[],
dailySales:0,

randomCust :function () {
    let range=limaStore.max-this.min;
     let randomCount=Math.random() * range+plimaStore.min;
     return Math.ceil(randomCount);
  },

hourlyDailySales :function () {
    for (let i=0;i<hours.length;i++){
        let numOfCookies= Math.ceil(limaStore.randomCust() *limaStore.avgCookieSale);
        limaStorehourlySales.push(numOfCookies);
        limaStore.dailySales += numOfCookies;
    }
    },
   
render :function(){
   let container=document.getElementById('content-area');
   let h2 =document.createElement('h2');
   container.appendChild(h2);
   h2.textContent='Lima';
   container.appendChild(h2);
   let list=document.createElement('ul');
   container.appendChild(list);
   for (let i=0;i<hours.length;i++){
    let listItem = document.createElement('li');
    listItem.textContent  =hours[i]+': '+limaStore.hourlySales[i]+' cookies';
    list.appendChild(listItem);
   }
   let listItem = document.createElement('li');
    listItem.textContent  ='Total: '+limaStore.dailySales+' cookies';
    list.appendChild(listItem); 
},
}

limaStore.hourlyDailySales();
limaStore.render(); 




