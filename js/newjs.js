var allCheckboxes = document.querySelectorAll('input[type=checkbox]');
var allItems = Array.from(document.querySelectorAll('.item'));
var checked = {};

getChecked('textbooks');
getChecked('electronics');

Array.prototype.forEach.call(allCheckboxes, function (el) {
  el.addEventListener('change', toggleCheckbox);
});

function toggleCheckbox(e) {
  getChecked(e.target.name);
  setVisibility();
}

function getChecked(name) {
  checked[name] = Array.from(document.querySelectorAll('input[name=' + name + ']:checked')).map(function (el) {
    return el.value;
  });
}

function setVisibility() {
  allItems.map(function (el) {
    var electronics = checked.electronics.length ? _.intersection(Array.from(el.classList), checked.electronics).length : true;
    var textbooks = checked.textbooks.length ? _.intersection(Array.from(el.classList), checked.textbooks).length : true;
    if (electronics && textbooks) {
      el.style.display = '';
    } else {
      el.style.display = 'none';
    }
  });
}

const navBarElements = document.getElementsByClassName("navBar");
let cur = 0;

function changePage(){
  console.log("test");
  
}
document.getElementById('home').onclick = function() {
   this.classList.toggle('current');
   navBarElements[cur].classList.toggle('current');
   cur = 0;
   console.log(navBarElements[cur]);
}
document.getElementById('categories').onclick = function() {
  this.classList.toggle('current');
  navBarElements[cur].classList.toggle('current');
  cur = 1;
  console.log(navBarElements[cur]);
}
document.getElementById('myInfo').onclick = function() {
  this.classList.toggle('current');
  navBarElements[cur].classList.toggle('current');
  cur = 2;
  console.log(navBarElements[cur]);
}
document.getElementById('createListing').onclick = function() {
  this.classList.toggle('current');
  navBarElements[cur].classList.toggle('current');
  cur = 3;
  console.log(navBarElements[cur]);
}
