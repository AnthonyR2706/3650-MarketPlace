
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
