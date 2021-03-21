

function getResult(){
   return document.getElementById("result-final").innerText;
}

function printResult(num){
    return document.getElementById("result-final").innerText=num;
 }

function currencySelect() {
    var selectedCurrency = document.getElementById('currencyType').value;
    console.log(selectedCurrency);
}


var operator = document.getElementsByClassName("operator");
for (var i = 0; i<operator.length; i++) {
    operator[i].addEventListener('click', function() {
        if (this.id == "clear") {
          printResult("Awaiting input from user");
        }
        if (this.id=="calculate") {
            var UsdAmt = document.getElementById("usd-amt").value;
            var select1 = document.getElementById('currencyType');

            document.getElementById('result-final').innerHTML=(UsdAmt * select1);
        }
        
    });
}