function calculateTax() {
  var grossIncome = parseFloat(document.getElementById("gross-income").value);
  var extraIncome = parseFloat(document.getElementById("extra-income").value);
  var ageGroup = document.getElementById("ageGroup").value;
  var deductions = parseFloat(document.getElementById("deductions").value);

if (isNaN(grossIncome))
{
console.log("dgds");
  //document.getElementsByClassName('tooltiptext2').style.visibility = 'visiable';
  var elements = document.getElementsByClassName('tooltiptext2');

// Loop through each element
for (var i = 0; i < elements.length; i++) {
    // Set the visibility style for each element
    elements[i].style.visibility = 'visible';
}
return false;
}
else{
  var elements = document.getElementsByClassName('tooltiptext2');

// Loop through each element
for (var i = 0; i < elements.length; i++) {
    // Set the visibility style for each element
    elements[i].style.visibility = 'hidden';
}
}
  var totalIncome = grossIncome + extraIncome - deductions;
  console.log(totalIncome);
  var tax = 0;
 



if (isNaN(extraIncome))
{
console.log("dgds");
  //document.getElementsByClassName('tooltiptext2').style.visibility = 'visiable';
  var elements = document.getElementsByClassName('tooltiptext3');

// Loop through each element
for (var i = 0; i < elements.length; i++) {
    // Set the visibility style for each element
    elements[i].style.visibility = 'visible';
}
return false;
}
else{
  var elements = document.getElementsByClassName('tooltiptext3');

// Loop through each element
for (var i = 0; i < elements.length; i++) {
    // Set the visibility style for each element
    elements[i].style.visibility = 'hidden';
}
}
  var totalIncome = grossIncome + extraIncome - deductions;
  console.log(totalIncome);
  var tax = 0;
 






  if (isNaN(deductions))
  {
  console.log("dgds");
    //document.getElementsByClassName('tooltiptext2').style.visibility = 'visiable';
    var elements = document.getElementsByClassName('tooltiptext4');
  
  // Loop through each element
  for (var i = 0; i < elements.length; i++) {
      // Set the visibility style for each element
      elements[i].style.visibility = 'visible';
  }
  return false;
  }
  else{
    var elements = document.getElementsByClassName('tooltiptext4');
  
  // Loop through each element
  for (var i = 0; i < elements.length; i++) {
      // Set the visibility style for each element
      elements[i].style.visibility = 'hidden';
  }
  }
  var totalIncome = grossIncome + extraIncome - deductions;
  console.log(totalIncome);
  var tax = 0;
   


  if (totalIncome > 800000) {
    if (ageGroup === "<40") {
      tax = (totalIncome - 800000) * 0.3;
    } else if (ageGroup === ">=40 & <60") {
      tax = (totalIncome - 800000) * 0.4;
    } else if (ageGroup === ">=60") {
      tax = (totalIncome - 800000) * 0.1;
    }
  }

  var overallIncome = totalIncome - tax;

  document.getElementById("overall-income").innerText =
    overallIncome.toLocaleString("en-IN");
  document.getElementById("result-box").style.display = "block";
  document.getElementById("btn btn-submit btn-block").style.display = "none";
}

function closeResult() {
  document.getElementById("result-box").style.display = "none";
}

$(document).ready(function(){
  $('[data-toggle="tooltip"]').tooltip();
});

//sum2 javascript
// document.getElementById('incomeCalculatorForm').addEventListener('submit', function(event) {
//   event.preventDefault();
//   var totalEarning = document.getElementById('gross-income').value;
//   // var extraIncome = document.getElementById('extraIncome').value;
//   // var sideEarning = document.getElementById('sideEarning').value;
//   // var deductions = document.getElementById('deductions').value;
//   // var errorIcons = document.querySelectorAll('.error-icon');
//   errorIcons.forEach(function(icon) {
//     icon.style.display = 'none';
//   });

//   if (!isNumeric(totalEarning)) {
//     document.querySelector('.gross-income-error').style.display = 'inline-block';
//   }

//   // if (!isNumeric(extraIncome)) {
//   //   document.querySelector('.extraIncome-error').style.display = 'inline-block';
//   // }

//   // if (!isNumeric(sideEarning)) {
//   //   document.querySelector('.sideEarning-error').style.display = 'inline-block';
//   // }

//   // if (!isNumeric(deductions)) {
//   //   document.querySelector('.deductions-error').style.display = 'inline-block';
//   // }

//   // if (!isNumeric(totalEarning) || !isNumeric(extraIncome) || !isNumeric(sideEarning) || !isNumeric(deductions)) {
//   //   return;
//   // }

// });

