var inputField = document.getElementById("txt1");

var eraseVal = function () {
  inputField.value = inputField.value.slice(0, -1);
};

function displayNum(elem) {
  var val = elem.value;
  inputField.value += val.trim();
}

function clearFun() {
  inputField.value = "";
}

function displaOptions() {
  var sel = document.getElementById("menu");
  var selectedOptions = [];
  for (var i = 0; i < sel.options.length; i++) {
    if (sel.options[i].selected) {
      selectedOptions.push(sel.options[i].text);
    }
  }

  document.getElementById("div1id").innerHTML = "<h1>"+selectedOptions+"</h1>";
}

document.getElementById("diplayBtn").addEventListener("click", displaOptions);


