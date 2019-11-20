function calculate() {
    "use strict";

    // Get a reference to the form - Use the ID of the form
    var form = $( "#myform" );
    
    // If all of the form elements are valid, the get the form values
    if (form.valid()) {
        
        // Operand 1
        var FromValue = document.getElementById("Operand1").value;

        // Operator
        // Get the value associated with the operator that was checked (+, -, *, or /)
        var FromUnit;
        if (document.getElementById("centimeters").checked) {
            FromUnit = document.getElementById("centimeters").value;
        }
        if (document.getElementById("meters").checked) {
            FromUnit = document.getElementById("meters").value;
        }
        if (document.getElementById("kilometers").checked) {
            FromUnit = document.getElementById("kilometers").value;
        }
        if (document.getElementById("inches").checked) {
            FromUnit = document.getElementById("inches").value;
        }
        if (document.getElementById("feet").checked) {
            FromUnit = document.getElementById("feet").value;
        }
        if (document.getElementById("yards").checked) {
            FromUnit = document.getElementById("yards").value;
        }
        if (document.getElementById("miles").checked) {
            FromUnit = document.getElementById("miles").value;
        }
        
        var ToUnit;
        if (document.getElementById("centimeters2").checked) {
            ToUnit = document.getElementById("centimeters2").value;
        }
        if (document.getElementById("meters2").checked) {
            ToUnit = document.getElementById("meters2").value;
        }
        if (document.getElementById("kilometers2").checked) {
            ToUnit = document.getElementById("kilometers2").value;
        }
        if (document.getElementById("inches2").checked) {
            ToUnit = document.getElementById("inches2").value;
        }
        if (document.getElementById("feet2").checked) {
            ToUnit = document.getElementById("feet2").value;
        }
        if (document.getElementById("yards2").checked) {
            ToUnit = document.getElementById("yards2").value;
        }
        if (document.getElementById("miles2").checked) {
            ToUnit = document.getElementById("miles2").value;
        }

        
        // URL and method used with AJAX Call
        var myURL = "https://brucebauer.info/assets/ITEC3650/unitsconversion.php";
        var myMethod = "POST";

        /* AJAX calculator requires Operand1, Operator, and Operand 2 */
        
        /* Create the data object and add the values as properties to the object 
        The names of the properties must EXACTLY match the names required by the AJAX page  */
        var myData = {};
        myData.FromValue = FromValue;
        myData.FromUnit = FromUnit;
        myData.ToUnit = ToUnit;
        
        /* Make sure document is ready */
        $(document).ready(function() {

            /* Perform AJAX call to process data */
            $.ajax({
              method: myMethod,
              data: myData,
              url: myURL
            })

            /* AJAX complete - display the result */
            .done(function( msg ) {
                document.getElementById("Result").innerHTML = msg;
            });
        });
    }
}

function clearform() {
    
    
    /* Set all of the form values to blank or false */
    document.getElementById("Operand1").value = "";
    document.getElementById("Operand1Msg").innerHTML = "";
    document.getElementById("meters").checked = false;
    document.getElementById("meters2").checked = false;
    document.getElementById("centimeters").checked = false;
    document.getElementById("centimeters2").checked = false;
    document.getElementById("kilometers").checked = false;
    document.getElementById("kilometers2").checked = false;
    document.getElementById("inches").checked = false;
    document.getElementById("inches2").checked = false;
    document.getElementById("feet").checked = false;
    document.getElementById("feet2").checked = false;
    document.getElementById("yards").checked = false;
    document.getElementById("yards2").checked = false;
    document.getElementById("miles").checked = false;
    document.getElementById("miles2").checked = false;
    document.getElementById("OperatorMsg").innerHTML = "";
    document.getElementById("Result").innerHTML = "";
}

$( "#myform" ).validate({

});