function CreateOrder() {
    if($("#NewOrderRegistration").valid()){
        
    
        var pType = document.getElementById("PizzaSize").value;
        
        var pPrice = 10.99;
        
        if(pType == "Small"){
            pPrice = 10.99;
        }
        if(pType == "Medium"){
            pPrice = 12.99;
        }
        if(pType == "Large"){
            pPrice = 15.99;
        }
        var bType = document.getElementById("Breadsticks").value;
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
        var hPrice = hS * 2.99;
        
        var dPrice = 1.50;
        
        if(document.getElementById("DrinkFlavor").value == ""){
            dPrice = 0;
        }
        var salesTotal;
        salesTotal = dPrice + hPrice + bPrice + pPrice;
        
        
        var today = new Date();
        var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        var CrustTypeOperator;
        
        if (document.getElementById("Thick").checked) {
            CrustTypeOperator = document.getElementById("Thick").value;
        }
    
        if (document.getElementById("Thin").checked) {
            CrustTypeOperator = document.getElementById("Thin").value;
        }

 
        /* URL of the restapi.php script followed by the table (patient) that we want to insert */   
        /* You will need to customize the root of the URL to your Cloud 9 */
        var myURL= "https://bixbiteprototype-amtopete.c9users.io/bixbite-prototype/restapi.php/Order/";
        
        /* POST method means insert a new record */
        var myMethod = "POST";
 
        /* Create the data object and add the values as properties to the object 
        The names of the properties must EXACTLY match the column names in the table  */

        var myData = {};
        myData.SalesTotal = salesTotal;
        myData.DateOrdered = date;
        myData.CustomerName = document.getElementById("CustomerName").value;
        myData.PizzaFlavor = document.getElementById("PizzaFlavor").value;
        myData.PizzaSize = document.getElementById("PizzaSize").value;
        myData.CrustType = CrustTypeOperator;
        myData.PizzaQuantity = document.getElementById("pQuantity").value;
        myData.Breadsticks = document.getElementById("Breadsticks").value;
        myData.BreadstickQuantity = document.getElementById("bQuantity").value;
        myData.HouseSalad = document.getElementById("HouseSalad").value;
        myData.DrinkFlavor = document.getElementById("DrinkFlavor").value;
        myData.AdditionalInstructions = document.getElementById("Comments").value;


        
        /* Perform AJAX call to process data 
        You have to supply the method, data, and url
        Also set the asynchronous flag to false, it seems to run better with the database */
        
        $.ajax({
          method: myMethod,
          data: myData,
          url: myURL,
          asynch: false
        })
        
        /* AJAX complete - display the result in msg */
        
        .done(function( msg ) {
            alert(msg);
        });
    }
}