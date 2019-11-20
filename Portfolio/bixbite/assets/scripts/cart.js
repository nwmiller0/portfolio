function AddToCart(){
    var pSize = document.getElementById("PizzaSize").value;
    var pFlavor = document.getElementById("PizzaFlavor").value;
if(pFlavor == "" || pFlavor == "N/A"){
    pFlavor = "None";
}
if (pSize == ""){
    pSize = "None";
}
    
    var CrustTypeOperator;
        
    if (document.getElementById("Thick").checked) {
        CrustTypeOperator = document.getElementById("Thick").value;
    }
    
    if (document.getElementById("Thin").checked) {
        CrustTypeOperator = document.getElementById("Thin").value;
    }
    
    var pQuantity = document.getElementById("pQuantity").value;
    var bType = document.getElementById("Breadsticks").value;
    var bQuantity = document.getElementById("bQuantity").value;
    var sQuantity = document.getElementById("HouseSalad").value;
    var dType = document.getElementById("DrinkFlavor").value;
    var dQuantity = document.getElementById("dQuantity").value;
     var pPrice = 10.99;
        
        if(pSize == "Small"){
            pPrice = 10.99;
        }
        if(pSize == "Medium"){
            pPrice = 12.99;
        }
        if(pSize == "Large"){
            pPrice = 15.99;
        }

        var bPrice = 0;
        
        if(bType == ""){
            bPrice = 0;
        }
        if(bType == "Regular"){
            bPrice = 3.99;
        }
        if(bType == "Stuffed"){
            bPrice = 5.99;
        }
        var hS = document.getElementById("HouseSalad").value;
        var hPrice = hS * 2.99
        
        var dPrice = 1.50
        
        if(document.getElementById("DrinkFlavor").value == ""){
            dPrice = 0;
        }
        var salesTotal;
        salesTotal = dPrice + hPrice + bPrice + pPrice;
        
    
var pSizeArray = [];
var pFlavorArray = [];
var pTypeArray = [];
var pQuantityArray = [];
var bTypeArray = [];
var bQuantityArray = [];
var sQuantityArray = [];
var dTypeArray = [];
var dQuantityArray = [];

pSizeArray.push(pSize);
pFlavorArray.push(pFlavor);
pTypeArray.push(CrustTypeOperator);
pQuantityArray.push(pQuantity);
bTypeArray.push(bType);
bQuantityArray.push(bQuantity);
sQuantityArray.push(sQuantity);
dTypeArray.push(dType);
dQuantityArray.push(dQuantity);

var OrderArray = [pFlavor,pSize,CrustTypeOperator,pQuantity,bType,bQuantity,sQuantity,dType,dQuantity];

function totalCalc() {
    var nTotal;
    nTotal = document.getElementById("orderTotal");
    nTotal = parseInt(nTotal) + salesTotal;
    $("#totalCounter orderTotal").append(
        "Total:" + nTotal);
}

function productAddToTable() {
      
  // Append product to the table
  $("#OrderTable tbody").append(
      "<tr>" +
        "<td>" + $("#PizzaFlavor").val() + "</td>" +
        "<td>" + $("#PizzaSize").val() + "</td>" +
        "<td>" + CrustTypeOperator + "</td>" +
        "<td>" + pQuantity + "</td>" +
        "<td>" + bType + "</td>" +
        "<td>" + bQuantity + "</td>" +
        "<td>" + sQuantity + "</td>" +
        "<td>" + dType + "</td>" +
        "<td>" + dQuantity + "</td>" +
        "<td>" + "$" + salesTotal + "</td>" +
      "</tr>"
      );
}



function productUpdate() {
  if ($("#PizzaFlavor").val() != null &&
      $("#PizzaFlavor").val() != '') {
    // Add product to Table
    productAddToTable();
    totalCalc();
    // Clear form fields

    // Focus to product name field
    $("#PizzaFlavor").focus();
  }
}
productUpdate();
document.getElementById("NewOrderRegistration").reset();


}


