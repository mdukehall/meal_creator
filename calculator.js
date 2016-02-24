function addDiner() {
  //alert("add a diner");
  var currentDiners = document.getElementById("diners").innerHTML;
  currentDiners++;
  document.getElementById("diners").innerHTML = currentDiners;
};

function addDish() {
  //alert("add a dish");
  var currentDishes = document.getElementById("dishes").innerHTML;
  currentDishes++;
  document.getElementById("dishes").innerHTML = currentDishes;
  //update total
  var total = Number(document.getElementById("total").innerHTML);
  total = total + 10;
  document.getElementById("total").innerHTML = total;
};

function checkout() {
  /*
  <!-- Add a fixed tax percentage to the total bill -->
  <!-- Add a percentage tip to the total bill -->
  <!-- Split the bill fairly among the diners -->
  <!-- Each diner should pay the tax on their own food -->
  <!-- Each diner should pay an equal share of the tip -->
  */
  //alert("checkout");
  var currentDiners = Number(document.getElementById("diners").innerHTML);
  var currentDishes = document.getElementById("dishes").innerHTML;
  if (currentDiners <= 0) {
    document.getElementById("receipt").innerHTML = "";
    document.getElementById("receipt").innerHTML = "Dine and dash alert!  No diners present";
  } else if (currentDiners > 0) {
    var totalTaxTip = Number(currentDishes*10*1.1*1.2);
    //var dinersOwe = Math.round((totalTaxTip/currentDiners*100)) / 100;
    var dinersOwe = totalTaxTip/currentDiners;
    document.getElementById("receipt").innerHTML = "";
    document.getElementById("receipt").innerHTML = "The total bill plus 10% tax and 20% tip comes to $" + totalTaxTip.toFixed(2) + " and each diner owes $" +dinersOwe.toFixed(2);
  }

};
