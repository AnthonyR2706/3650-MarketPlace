var allCheckboxes = document.querySelectorAll('input[type=checkbox]');
var allItems = Array.from(document.querySelectorAll('.item'));
var checked = {};

window.onload = turnOff;

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

const pages = document.getElementsByClassName("page");

function changePage(){
  console.log("test");  
}
function loginPage(){
  console.log("test");  
}
document.getElementById('home').onclick = function() {
  if(cur != 0){
    this.classList.toggle('current');
    navBarElements[cur].classList.toggle('current');
    pages[cur].style.display = 'none';
    cur = 0;
    pages[cur].style.display = '';
    console.log(navBarElements[cur]);
  }
}
document.getElementById('categories').onclick = function() {
  if(cur != 1){
    this.classList.toggle('current');
    navBarElements[cur].classList.toggle('current');
    pages[cur].style.display = 'none';
    cur = 1;
    pages[cur].style.display = '';
    console.log(navBarElements[cur]);
  }
}
document.getElementById('myInfo').onclick = function() {
  if(cur != 2){
    this.classList.toggle('current');
    navBarElements[cur].classList.toggle('current');
    pages[cur].style.display = 'none';
    cur = 2;
    pages[cur].style.display = '';
    console.log(navBarElements[cur]);
  }
}
document.getElementById('createListing').onclick = function() {
  if(cur != 3){
    this.classList.toggle('current');
    navBarElements[cur].classList.toggle('current');
    pages[cur].style.display = 'none';
    cur = 3;
    pages[cur].style.display = '';
    console.log(navBarElements[cur]);
  }
}

const sideNavBarElements = document.getElementsByClassName("sideNavBar");
let curAccount = 0;
const infoPages = document.getElementsByClassName("infoPage");
document.getElementById('accountSettings').onclick = function() {
  if(curAccount != 0){
    this.classList.toggle('current');       sideNavBarElements[curAccount].classList.toggle('current');
    infoPages[curAccount].style.display = 'none';
    curAccount = 0;
    infoPages[curAccount].style.display = '';
    console.log(sideNavBarElements[curAccount]);
  }
}
document.getElementById('yourListings').onclick = function() {
  if(curAccount != 1){
    this.classList.toggle('current');       sideNavBarElements[curAccount].classList.toggle('current');
    infoPages[curAccount].style.display = 'none';
    curAccount = 1;
    infoPages[curAccount].style.display = '';
    console.log(sideNavBarElements[curAccount]);
  }
}
document.getElementById('wishlist').onclick = function() {
  if(curAccount != 2){
    this.classList.toggle('current');       sideNavBarElements[curAccount].classList.toggle('current');
    infoPages[curAccount].style.display = 'none';
    curAccount = 2;
    infoPages[curAccount].style.display = '';
    console.log(sideNavBarElements[curAccount]);
  }
}
document.getElementById('inbox').onclick = function() {
  if(curAccount != 3){
    this.classList.toggle('current');       sideNavBarElements[curAccount].classList.toggle('current');
    infoPages[curAccount].style.display = 'none';
    curAccount = 3;
    infoPages[curAccount].style.display = '';
    console.log(sideNavBarElements[curAccount]);
  }
}
document.getElementById('changeButton1').onclick = function(){
  alert("You have been sent an email allowing you to change your username");
}
document.getElementById('changeButton2').onclick = function(){
  alert("You have been sent an email allowing you to change your password");
}
document.getElementById('changeButton3').onclick = function(){
  alert("You have been sent an email allowing you to change your email");
}

let loggedIn = false;
document.getElementById('logIn').onclick = function(){
  pages[cur].style.display = 'none';
  document.getElementsByClassName('topNavBar')[0].style.display = 'none';
  document.getElementsByClassName('login')[0].style.display = '';
}
document.getElementById('signIn').onclick = function() {
  loggedIn = true;
  pages[cur].style.display = '';
  document.getElementsByClassName('topNavBar')[0].style.display = '';
  document.getElementsByClassName('login page')[0].style.display = 'none';
  document.getElementById('logOut').style.display = '';
  document.getElementById('logIn').style.display = 'none';
}
document.getElementById('cancel').onclick = function() {
  pages[cur].style.display = '';
  document.getElementsByClassName('topNavBar')[0].style.display = '';
  document.getElementsByClassName('login')[0].style.display = 'none';
}

document.getElementById('haveAccount').onclick = function(){
  document.getElementsByClassName('login')[0].style.display = 'none';
  document.getElementsByClassName('signUpPage')[0].style.display = '';
}

document.getElementById('forgotPassword').onclick = function(){
  alert("Recovery email sent");
}

document.getElementById('signInButton').onclick = function(){
  document.getElementsByClassName('login')[0].style.display = '';
  document.getElementsByClassName('signUpPage')[0].style.display = 'none';
}

document.getElementById('logOut').onclick = function(){
  loggedIn = true;
  document.getElementById('logOut').style.display = 'none';
  document.getElementById('logIn').style.display = '';
}

document.getElementById('signIn2').onclick = function() {
  loggedIn = true;
  pages[cur].style.display = '';
  document.getElementsByClassName('topNavBar')[0].style.display = '';
  document.getElementsByClassName('signUpPage')[0].style.display = 'none';
  document.getElementById('logOut').style.display = '';
  document.getElementById('logIn').style.display = 'none';
}
document.getElementById('cancel2').onclick = function() {
  pages[cur].style.display = '';
  document.getElementsByClassName('topNavBar')[0].style.display = '';
  document.getElementsByClassName('signUpPage')[0].style.display = 'none';
}

function turnOff(){
  document.getElementsByClassName('signUpPage')[0].style.display = 'none';
  document.getElementsByClassName('login')[0].style.display = 'none';
  document.getElementById('logOut').style.display = 'none';
  pages[1].style.display = 'none';
  pages[2].style.display = 'none';
  pages[3].style.display = 'none';
  infoPages[1].style.display = 'none';
  infoPages[2].style.display = 'none';
  infoPages[3].style.display = 'none';
}
document.getElementById('removeListing').onclick = function(){
  alert("Confirmation to remove listing has been sent to your email");
}

function newMessage() {
        var li = document.createElement("li");
        var inputValue = document.getElementById("inputMessage").value;
        console.log(inputValue);
        var t = document.createTextNode(inputValue); 
        li.appendChild(t);
        if (inputValue.replace(/\s/g, '').length) {
          document.getElementById("myUL").appendChild(li);
        }
        document.getElementById("input").value = "";
      }
      var list = document.querySelector('ul');
