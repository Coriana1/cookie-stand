'use strict';

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', 'Daily Total'];

const allShops=[]
const allStoresCookies = 0
const tableBodyEl = document.getElementById('table-values')
const tableHeadEl = document.getElementById('table-head')
const tableFootEl = document.getElementById('table-foot')

function StoreLocations(name, minCust, maxCust, avgCookie){
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookie = avgCookie;
  this.hourlyCust = [];
  this.hourlyCookie = [];
  this.totalCookies = [];
  allShops.push(this);
}

StoreLocations.prototype.getRNGcust = function(minCust, maxCust) {
  for(let i = 0; i < hours.length; i++){        
      this.hourlyCust.push((Math.round(Math.random() * (this.maxCust - this.minCust)) + this.minCust))
      
  }
}

StoreLocations.prototype.getHourlyCook = function(avgCookie, hourlyCust){
  for(let i = 0; i < hours.length; i++){
      this.hourlyCookie.push((Math.ceil(this.hourlyCust[i] * this.avgCookie)))
  }
}

StoreLocations.prototype.getTotalCookie = function(hourlyCookie, totalCookies){
  this.totalCookies.push(this.hourlyCookie.reduce((hourlyCookie, totalCookies) => hourlyCookie + totalCookies, 0))
}

StoreLocations.prototype.drawRow = function() {
  const tableRow = document.createElement('tr');
  tableBodyEl.appendChild(tableRow);
  const tableData = document.createElement('td')
  tableData.textContent = this.name;
  tableRow.appendChild(tableData);
  for(let i = 0; i < hours.length; i++){
  const tableData = document.createElement('td');
  tableData.textContent = this.hourlyCookie[i];
  tableRow.appendChild(tableData);
  }
  const tableCookies = document.createElement('td')
  tableCookies.textContent = this.totalCookies
  tableRow.appendChild(tableCookies)
}

let hourlyRow = function(){
  const tableHead = document.createElement('tr');
  tableHeadEl.appendChild(tableHead);
  const headData = document.createElement('th');
  headData.textContent = ''
  tableHead.appendChild(headData);
  for(let i = 0; i < hours.length; i++){
  const headData = document.createElement('th');
  headData.textContent = hours[i];
  tableHead.appendChild(headData);
  };
  const headTotal = document.createElement('th');
  headTotal.textContent = "Daily Location Total";
  tableHead.appendChild(headTotal);
}

let totalsRow = function(){
  const footer = document.getElementById('table-foot');
  footer.innerHTML = '';
  const tableFoot = document.createElement('tr');
  tableFootEl.appendChild(tableFoot);
  const footData = document.createElement('td');
  footData.textContent = "Totals";
  tableFoot.appendChild(footData);
  let h = 0;
  let grandTotal = 0;
  while (h < hours.length){
      let hourlyTotal = 0;
      for(let i = 0; i < allShops.length; i++){
      hourlyTotal += allShops[i].hourlyCookie[h];
      grandTotal += allShops[i].hourlyCookie[h];
      
  }
  const hourTotal = document.createElement('td');
  hourTotal.textContent = hourlyTotal;
  tableFoot.appendChild(hourTotal);
  h++;
  }
  const totalTotal = document.createElement('td');
  totalTotal.textContent = grandTotal;
  tableFoot.appendChild(totalTotal);
}

let runMath = function(store){
  store.getRNGcust();
  store.getHourlyCook();
  store.getTotalCookie();    
}

let submitEl = document.getElementById('submit-button')
let formEl = document.getElementById('store-form')

formEl.addEventListener('submit', function(event) {
  event.preventDefault();
 console.log('added stores');
  let { store_city, store_min, store_max, store_avg } = event.target;
  let additionalStores = new StoreLocations(
      store_city.value,
      parseInt(store_min.value),
      parseInt(store_max.value),
      parseInt(store_avg.value),
  )
  runMath(additionalStores)
  additionalStores.drawRow();
  console.log(allShops)
  totalsRow();
});

let Seattle = new StoreLocations("Seattle", 23, 65, 6.3);
let Tokyo = new StoreLocations("Tokyo", 3, 24, 1.2);
let Dubai = new StoreLocations("Dubai", 11, 38, 3.7);
let Paris = new StoreLocations("Paris", 20, 38, 3.7);
let Lima = new StoreLocations("Lima", 2, 16, 4.6);

for(let i = 0; i < allShops.length; i++){
  runMath(allShops[i])
}
console.log(allShops);
for (let i = 0; i < allShops.length; i++){
  allShops[i].drawRow();
};
hourlyRow();
totalsRow();
















