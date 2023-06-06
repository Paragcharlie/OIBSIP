function convert() {
    var temp = document.getElementById("validationCustom05");
    var result = document.getElementById("validationCustom06");

    var e = document.getElementById("sel");
    var optionSelIndex = e.options[e.selectedIndex].value;
    var optionSelText = e.options[e.selectedIndex].text;

    if(temp.value != ""){
        if(optionSelIndex == 0){
            alert("Please select a unit");
        } else{
            if(optionSelText === "Farenheit"){
                result.value = ((temp.value - 32)*5) /9 + " Celsius";
            }
            if(optionSelText === "Celsius"){
                result.value = (temp.value * 9)/5 +32 + " Farenheit";
            }
        }
    }else{
        alert("Please enter temperature to convert");
    }

}
