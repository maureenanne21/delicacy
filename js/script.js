function getReceipt() {
    text1 = "";
    text2 = "";
    var runningTotal = 0;
    var sizeTotal = 0;
    var sizeArray = document.getElementsByClassName("size");
    for (var i = 0; i < sizeArray.length; i++) {
        if (sizeArray[i].checked) {
            var selectedSize = sizeArray[i].value;
            text1 = text1+selectedSize+"<br>";
        }
    }
    f (selectedSize === "Personal Pizza") {
        sizeTotal = 6;
        text2 = text2+sizeTotal+"<br>";
    } else if (selectedSize === "Medium Pizza") {
        sizeTotal = 10;
        text2 = text2+sizeTotal+"<br>";
    } else if (selectedSize === "Large Pizza") {
        sizeTotal = 14;
        text2 = text2+sizeTotal+"<br>";
    } else if (selectedSize === "Extra Large Pizza") {
        sizeTotal = 16;
        text2 = text2+sizeTotal+"<br>";
    }
    runningTotal = sizeTotal;
    getCrust(runningTotal,text1,text2);
};
function getCrust(runningTotal,text1,text2) {
    var crustTotal = 0;
    var selectedCrust;
    var crustArray = document.getElementsByClassName("crust");
    for (var j = 0; j < crustArray.length; j++) {
        if (crustArray[j].checked) {
            selectedCrust = crustArray[j].value;
            text1 = text1 + selectedCrust + "<br>";
        }
        if (selectedCrust === "Cheese Stuffed Crust") {
            crustTotal = 3;
        }
    }
    runningTotal = (runningTotal + crustTotal);
    text2 = text2 + crustTotal + "<br>";
    getSauce(runningTotal,text1,text2);
};
