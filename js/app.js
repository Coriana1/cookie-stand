'use strict';

let shopHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', 'Daily Total'];

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
  for(i = 0; i < hours.length; i++){        
      this.hourlyCust.push((Math.round(Math.random() * (this.maxCust - this.minCust)) + this.minCust))
      
  }
}

StoreLocations.prototype.getHourlyCook = function(avgCookie, hourlyCust){
  for(i = 0; i < hours.length; i++){
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
  for(i = 0; i < hours.length; i++){
  const tableData = document.createElement('td');
  tableData.textContent = this.hourlyCookie[i];
  tableRow.appendChild(tableData);
  }
  const tableCookies = document.createElement('td')
  tableCookies.textContent = this.totalCookies
  tableRow.appendChild(tableCookies)
}

hourlyRow = function(){
  const tableHead = document.createElement('tr');
  tableHeadEl.appendChild(tableHead);
  const headData = document.createElement('th');
  headData.textContent = this.none;
  tableHead.appendChild(headData);
  for(i = 0; i < hours.length; i++){
  const headData = document.createElement('th');
  headData.textContent = hours[i];
  tableHead.appendChild(headData);
  };
  const headTotal = document.createElement('th');
  headTotal.textContent = "Daily Location Total";
  tableHead.appendChild(headTotal);
}

totalsRow = function(){
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
      for(i = 0; i < allShops.length; i++){
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

runMath = function(store){
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
  let additionalStores = new StoreLocation(
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

let Seattle = new StoreLocation("Seattle", 23, 65, 6.3);
let Tokyo = new StoreLocation("Tokyo", 3, 24, 1.2);
let Dubai = new StoreLocation("Dubai", 11, 38, 3.7);
let Paris = new StoreLocation("Paris", 20, 38, 3.7);
let Lima = new StoreLocation("Lima", 2, 16, 4.6);

for(let i = 0; i < allShops.length; i++){
  runMath(allShops[i])
}
console.log(allShops);
for (let i = 0; i < allShops.length; i++){
  allShops[i].drawRow();
};
hourlyRow();
totalsRow();
















/*let shopHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', 'Daily Total'];


let shopOpen = 6;
let shopClose = 20;
let hoursOpen = shopClose - shopOpen;
let newStores = [];

function StoreLocation(standLocation, minCust, maxCust, avgSale) {
  this.location = standLocation;
  this.min = minCust;
  this.max = maxCust;
  this.avgSale = avgSale;
  this.customersPerHour = [];
  this.cookiesPerHour = [];
  this.totalCookiesSold = 0;
  newStores.push(this);
}

let addLocation = document.getElementById('addLocation');

addLocation.addEventListener('submit', addALocation);

function addALocation(event){
  event.preventDefault();
  // get params from inputs
  let param1 = event.target.cityName.value;
  let param2 = event.target.min.value;
  let param3 = event.target.max.value;
  let param4 = event.target.avgCookies.value;
  let param5 = 6;
  let param6 = 20;

  let newCity = new StoreLocation(param1, param2, param3, param4, param5, param6);

  let footerElement = document.getElementById('footer');
  footerElement.parentNode.removeChild(footerElement); 

  newCity.renderTableData(); 
  renderTableFooter(newStores); 
}


StoreLocation.prototype.randomCustomers = function(){
  let min = Math.ceil(this.min);
  let max = Math.floor(this.max);
  let randomNum = Math.floor(Math.random() * (max - min + 1) + min);
  return randomNum;
};

StoreLocation.prototype.dailyCookiesSold = function(){
 
  for (let i = shopOpen; i <= shopClose; i++) {
    let customers = this.randomCustomers();
    this.customersPerHour.push(customers);
    let cookies = Math.round(customers * this.avgSale);
    this.cookiesPerHour.push(cookies);
    this.totalCookiesSold += cookies;
  } 
};

StoreLocation.prototype.render = function(){
  // this.createHeader();
  let table = document.getElementById('dataTable');
  let tbody = document.createElement('tbody');

  table.appendChild(tbody);
  let dataRow = document.createElement('tr');
  table.appendChild(tbody);

  let tableData = document.createElement('td');
  tbody.appendChild(dataRow);
  tableData.textContent = this.location;
  dataRow.appendChild(tableData);

  let cookiesPerHour = this.cookiesPerHour;
  cookiesPerHour.forEach(cookie =>{
    // console.log(cookie);
    let tableDataCookies = document.createElement('td');
    tableDataCookies.textContent = cookie;
    dataRow.appendChild(tableDataCookies);
  });

  let totalCookiesSold = this.totalCookiesSold;
  let tableDataTotal = document.createElement('td');
  tableDataTotal.textContent = totalCookiesSold;
  // tableDataTotal.style='font-weight: 600; list-style:none; padding: 10px 0;';
  dataRow.appendChild(tableDataTotal);
};

function displayTableHeader(){
  //looks for the table by id='dataTable'
  let table = document.getElementById('dataTable');
  // creates a <thead> element to store the header
  let thead = document.createElement('thead');
  // creates <tr> to hold each time cell
  let headerRow = document.createElement('tr');

  //Add the <thead> to the <table>
  table.appendChild(thead);

  //add headerRow <tr> to the <thead>
  thead.appendChild(headerRow);

  //creates a blank <th> variable so i can put it before the times
  let blankTh = document.createElement('th');

  // add blank <th> to <tr>
  headerRow.appendChild(blankTh);

  function renderTableFooter (allLocations) {
    let table = document.getElementById('cookieData');
    let row = document.createElement('tr');
    let tableFootCell = document.createElement('th');
    let hoursOfDay = 14;
    tableFootCell.textContent = 'Totals';
    row.appendChild(tableFootCell);


  for (let i = shopOpen; i <= shopClose; i++) {
    // create <th>
    let thead = document.createElement('th');

  
    if (i === 12) {
      thead.textContent = `${i}pm`;
    } else if (i > 12) {
      thead.textContent = `${i - 12}pm`;
    } else {
      thead.textContent = `${i}am`;
    }
   
    headerRow.appendChild(thead);
  }

  let totalHeader = document.createElement('th');
  totalHeader.textContent = 'Total';
  headerRow.appendChild(totalHeader);
}

function displayTableBody(){
  for (let i = 0; i < newStores.length; i++){
    let store = newStores[i];
    store.dailyCookiesSold();
    store.render();
  }
}

function displayTableFooter(){
  console.log('tableFooter');
  let table = document.getElementById('dataTable');

  let tfoot = document.createElement('tfoot');
  let footerRow = document.createElement('tr');

  table.appendChild(tfoot);
  tfoot.appendChild(footerRow);

  let totalFooter = document.createElement('td');

  totalFooter.textContent = 'Total';

  footerRow.appendChild(totalFooter);

  let grandTotal = 0;


  let h = 0;
  while (h <= hoursOpen){
    let hourlyTotal = 0;

    for (let i = 0; i < newStores.length; i++){
      hourlyTotal += newStores[i].cookiesPerHour[h];
      grandTotal += newStores[i].cookiesPerHour[h];
    }
    let tableFooterTotal = document.createElement('td');
    tableFooterTotal.textContent = hourlyTotal;
    // tableFooterTotal.style='font-weight: 600; list-style:none; padding: 10px 0;';
    footerRow.appendChild(tableFooterTotal);

    h++;
  }

  let grandTotalFooter = document.createElement('td');
  grandTotalFooter.textContent = grandTotal;

  footerRow.appendChild(grandTotalFooter);
}

new StoreLocation('Seattle', 23, 65, 6.3);
new StoreLocation('Tokyo', 3, 24, 1.2);
new StoreLocation('Dubai', 11, 38, 3.7);
new StoreLocation('Paris',20,38,2.3);
new StoreLocation('Lima', 2, 16, 4.6);

renderTableHeaders(); 


for(let i = 0; i < newStores.length; i++) {
  console.log(newStores)
  newStores[i].renderTableData();
}


renderTableFooter(newStores); 

displayTableHeader();
displayTableBody();
displayTableFooter(); */

