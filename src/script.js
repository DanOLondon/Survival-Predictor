//the max is 18 days as that is what I did
var days = {
  totalDays: 18,
  generate: function () {
    var randomNumber = Math.floor(Math.random() * this.totalDays) + 1;
    return randomNumber;
  }
}

//Reveals how many days you will survive

function showNumber(number) {
  var placeholder = document.getElementById('placeholder');
  placeholder.innerHTML = number;
}

var button = document.getElementById('button');

button.onclick = function() {
  var result = days.generate();
  showNumber(result);
};

