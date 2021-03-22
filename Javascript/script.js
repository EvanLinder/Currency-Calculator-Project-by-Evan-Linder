

function getResult(){
   return document.getElementById("result-final").innerText;
}

function printResult(num){
    return document.getElementById("result-final").innerText=num;
 }

    function currencySelect() {
     var selectedCurrency = document.getElementById('currencyType').value;
    console.log(selectedCurrency);
    var value = document.getElementById('currencyType');
    var getValue = value.options[value.selectedIndex].value;
    document.getElementById("currency-value").value=getValue;
}


var operator = document.getElementsByClassName("operator");
for (var i = 0; i<operator.length; i++) {
    operator[i].addEventListener('click', function() {
        if (this.id == "clear") {
          printResult("Awaiting input from user");
        }
        if (this.id=="calculate") {
            var myBox1 = document.getElementById('usd-amt').value; 
            var myBox2 = document.getElementById('currency-value').value;
            var result = document.getElementById('result-final'); 
            var myResult = myBox1 * myBox2;
            result.innerHTML = myResult;

        }
        
    });
}