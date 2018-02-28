/*

 Some useful javascript functions and methods that can be used to build this.

 event.preventDefault();
 parseFloat()
 toFixed()
 jQuery().append();
 jQuery().val();
 jQuery().submit();


 */

// total will store the running total, starting at 0
var total = 0

// `enter()` reads the user's input, and updates the receipt
    function enter(e){

    // Set up variables to use
    var input
    var currency
    var total
    // Prevent form submission
    e.preventDefault();
    // Read the user input
    input = jQuery("#newEntry").val();
    // Convert to decimal
    parseFloat(input).toFixed(2);
    // Convert to currency
    currency = formatCurrency(input);
    // Add line item to table
     jQuery ("#entry").append(input);

    // Update the running total
    total = jQuery("#total").val();
    // Print the updated total with proper currency formatting

    // Clear out the input field, ready for next value

    };

   


// Use this to convert a number to U.S. currency format

    // Convert the number to decimal

    // Round to 2 decimal places

    // Add the $ before the number

    // Send back the result


// When the user submits the form, run the `enter` function
