
<!-------------------------------------------------------Wrapper Function called Validate-----------------------------------------------------------------> 


function validate() {

	var valid = new Boolean(true);
	
<!-------------------------------------------------------------------- Check Name ------------------------------------------------------------------------->
	
	var validName= new Boolean(true);

	if (document.getElementById('name').value=="")
	{
		alert("Name is missing");
		document.getElementById('name').style.background="#5C8DFF";
		validName=false;
	}
	
<!---------------------------------------------------------------------- Address --------------------------------------------------------------------------->	
	
	var validAddress= new Boolean(true);
	if (document.getElementById('address').value=="")
	{
		alert("Address is missing");
		document.getElementById('address').style.background="#5C8DFF";
		validAddress=false;
	}
	

	
<!--------------------------------------------------------------- Check Phone Number ------------------------------------------------------------------------->	
	var validNumber= new Boolean(true);
	
	if (document.getElementById('number').value=="")
	{
		
		document.getElementById('number').style.background="#5C8DFF";
		validNumber = false;
	}

	if (document.getElementById('number').value.length != 10)
	{
		
		document.getElementById('number').style.background="#5C8DFF";
		validNumber = false;
	}

	if (!(document.getElementById('number').value.slice(0,3) == "021" || document.getElementById('number').value.slice(0,3) == "083" || document.getElementById('number').value.slice(0,3) == "085" || document.getElementById('number').value.slice(0,3) == "086" || document.getElementById('number').value.slice(0,3) == "087" || document.getElementById('number').value.slice(0,3) == "089"))
	{
		
		document.getElementById('number').style.background="#5C8DFF";
		validNumber= false;
	}
	
	if ( document.getElementById('number').value.indexOf("(")!=-1 ) 
	{
		document.getElementById('number').style.background="#5C8DFF";
		validNumber= false;
	}
	
	if ( document.getElementById('number').value.indexOf(")")!=-1 ) 
	{
		document.getElementById('number').style.background="#5C8DFF";
		validNumber= false;
	}
	
	if ( document.getElementById('number').value.indexOf("-")!=-1 ) 
	{
		document.getElementById('number').style.background="#5C8DFF";
		validNumber= false;
	}
	if (validNumber==false)
	{
		alert("Please check phone number");
	}

	
<!----------------------------------------------------------------------- Check Email ----------------------------------------------------------------------->
	
	var validEmail= new Boolean(true);	// Boolean to check the email 
	var EmailString = document.getElementById('mail').value; 
	if (EmailString.indexOf("@mycit.ie") != -1) 
	{
		alert("Valid CIT student\nYou receive a free drink");
		toggleVisibility('CIT');
	}
	
	
<!--------------------------------------------------------------------- Check credit card ------------------------------------------------------------------->	
	

	var validCc= new Boolean(true);
	var creditNum = document.getElementById('Card form').value;
	var checksum = 0;
	var factor = 0;
 
	if(creditNum.length < 16)
	{
     
      	document.getElementById('Card form').style.background="#5C8DFF";
		validCc = false;
	}
   
	if(creditNum.length %2 )	// modulus of credit card string is going to give you to factors 
	{
      	 factor = 1;	// This can be used for the first right to left number cause its not doubling anything
	}
	else
	{
         factor = 2;	// This is used for the second digits when its going to be doubled
	}
  
	for(x=0; x< creditNum.length; x++) // this is cycling through the string looking for digits
   {
        digit = creditNum.charAt(x);	

      	if(digit * factor > 9)		// Checking if each digit either by 1 or 2 is greater than 9 because there is only choice of 1-9 for each digit
		{
        checksum += (digit * factor) - 9;	// checksum is adding on the result of digit by factor -9 
		}
       else
		{
        checksum += digit * factor;		// Otherwise checksum still adds to result of digit by factor 
		}
      	factor = (factor%2)+1;
   
	}
   


 
   // Gets the checksum number, and does a modulus 10 to check if it is valid. As I am doing this the other way round, it is not valid if checksum mods 10
   
   if(checksum % 10)
   {
      document.getElementById('Card form').style.background="#5C8DFF";
      validCc = false;
   }
  
   // Checks if the first character of the number is 4, displays card image

   if (validCc==true && (creditNum.charAt(0)) == 4 ) 
   {
       toggleVisibility('Visa')
   } 
   if (validCc==true && (creditNum.charAt(0)) == 5 ) 
   {
       toggleVisibility('MC')
   } 
	
	
	
	
	if (validCc==false)
	{
		alert("Please check credit card number");
	}
	
	// Wasn't sure about what to do here, I think this is the majority of my problem. 
	// I don't have a function or if to check that if boolean is true send off to server, if false don't 
	// Don't know will this work. What I was thinking is that valid is running through all the form validation, at the end if it is true send to the server. 
	
	

	if (validName==false || validAddress==false|| validNumber==false || validCc==false)
	{
		valid=false;
	}
	return valid; 
	
}

<!---------------------------------------------------------- Toggle Images Visability --------------------------------------------------------------->
// This function is taking in the id of the images when it is called
// It then assigns a1 to the element
// It can hide and make image visible 
function toggleVisibility(id)
{
   var topImg = document.getElementById(id);

   if (topImg.style.visibility=="visible")
   {
          topImg.style.visibility="hidden";
	}
  else 
  {
          topImg.style.visibility="visible";
  }
	
 
	calcPrice() 
}


 <!--------------------------------------------------------- Calculate Pizza Cost ------------------------------------------------------------------->
 // This calculates the the total price of the order 
 // This also resizes the order image, adjusts size of base and toppings depending on the size
 // Getting the image id and using the .style properties to alter the image size and position 
 
 
 function calcPrice()
{ 
	var baseCost=9.00;
	var total=0; 
	var topCounter = 0; 

	if (document.getElementById('small').checked) 
	{
	total += baseCost;
	document.getElementById('pBase').style.width = "200px"
	
	document.getElementById('Bacon').style.width = "100px"
	document.getElementById('Bacon').style.marginLeft = "660px"	
	document.getElementById('Bacon').style.marginTop = "1000px"	
	
	
	document.getElementById('Onion').style.width = "100px"
	document.getElementById('Onion').style.marginLeft = "700px"	
	document.getElementById('Onion').style.marginTop = "1010px"	
	

	document.getElementById('Pep').style.width = "100px"
	document.getElementById('Pep').style.marginLeft = "620px"	
	document.getElementById('Pep').style.marginTop = "995px"


	document.getElementById('Peppers').style.width = "100px"
	document.getElementById('Peppers').style.marginLeft = "640px"	
	document.getElementById('Peppers').style.marginTop = "985px"


	document.getElementById('Tuna').style.width = "90px"
	document.getElementById('Tuna').style.marginLeft = "640px"	
	document.getElementById('Tuna').style.marginTop = "1050px"


	document.getElementById('Cheese').style.width = "100px"
	document.getElementById('Cheese').style.marginLeft = "690px"	
	document.getElementById('Cheese').style.marginTop = "950px"


	document.getElementById('Spinach').style.width = "100px"
	document.getElementById('Spinach').style.marginLeft = "670px"	
	document.getElementById('Spinach').style.marginTop = "1050px"
	}

	if (document.getElementById('medium').checked) 
	{
	total += baseCost+3.00
	document.getElementById('pBase').style.width = "300px"
	
	document.getElementById('Bacon').style.width = "200px"
	document.getElementById('Bacon').style.marginLeft = "660px"	
	document.getElementById('Bacon').style.marginTop = "1000px"	
	

	document.getElementById('Onion').style.width = "200px"
	document.getElementById('Onion').style.marginLeft = "700px"	
	document.getElementById('Onion').style.marginTop = "1010px"	
	

	document.getElementById('Pep').style.width = "200px"
	document.getElementById('Pep').style.marginLeft = "620px"	
	document.getElementById('Pep').style.marginTop = "995px"

	document.getElementById('Peppers').style.width = "200px"
	document.getElementById('Peppers').style.marginLeft = "640px"	
	document.getElementById('Peppers').style.marginTop = "985px"


	document.getElementById('Tuna').style.width = "180px"
	document.getElementById('Tuna').style.marginLeft = "640px"	
	document.getElementById('Tuna').style.marginTop = "1050px"


	document.getElementById('Cheese').style.width = "200px"
	document.getElementById('Cheese').style.marginLeft = "690px"	
	document.getElementById('Cheese').style.marginTop = "950px"


	document.getElementById('Spinach').style.width = "200px"
	document.getElementById('Spinach').style.marginLeft = "670px"	
	document.getElementById('Spinach').style.marginTop = "1050px"
	}


	if (document.getElementById('large').checked) 
	{
	total += baseCost+7.00
	document.getElementById('pBase').style.width = "400px"
	
	
	document.getElementById('Bacon').style.width = "300px"
	document.getElementById('Bacon').style.marginLeft = "730px"	
	document.getElementById('Bacon').style.marginTop = "1050px"	
	
	
	document.getElementById('Onion').style.width = "300px"
	document.getElementById('Onion').style.marginLeft = "700px"	
	document.getElementById('Onion').style.marginTop = "1010px"	
	

	document.getElementById('Pep').style.width = "300px"
	document.getElementById('Pep').style.marginLeft = "620px"	
	document.getElementById('Pep').style.marginTop = "995px"


	document.getElementById('Peppers').style.width = "190px"
	document.getElementById('Peppers').style.marginLeft = "700px"	
	document.getElementById('Peppers').style.marginTop = "985px"


	document.getElementById('Tuna').style.width = "180px"
	document.getElementById('Tuna').style.marginLeft = "640px"	
	document.getElementById('Tuna').style.marginTop = "1100px"


	document.getElementById('Cheese').style.width = "300px"
	document.getElementById('Cheese').style.marginLeft = "690px"	
	document.getElementById('Cheese').style.marginTop = "950px"


	document.getElementById('Spinach').style.width = "300px"
	document.getElementById('Spinach').style.marginLeft = "670px"	
	document.getElementById('Spinach').style.marginTop = "1050px"


}


	// If the pepperoni tickbox is checked 
	if(document.getElementById ('Pepron').checked)
	{
	topCounter++	// add one to counter 
	if(topCounter > 2) // if counter is greater than 2, so if there is more than two toppings
	{
		total += 0.50 // than it starts charging 50c each for every small topping
		if (document.getElementById('medium').checked || document.getElementById('large').checked) // if medium or large size is ticked
		{
			total +=0.50 // price is doubled
		}
	
	}
	
	
	
}
// If the cheese tickbox is checked
if(document.getElementById ('Cheesey').checked )
{
	topCounter++ // add one to counter
	if(topCounter > 2) // if counter is greater than 2, so if there is more than two toppings
	{
		total += 0.50 // than it starts charging 50c each for every small topping
		if (document.getElementById('medium').checked || document.getElementById('large').checked) // if medium or large size is ticked
		{
			total +=0.50 // price is doubled
		}
	}
}
// If the cheese tickbox is checked
if(document.getElementById ('Bac').checked )
{
	topCounter++ // add one to counter
	if(topCounter > 2) // if counter is greater than 2, so if there is more than two toppings
	{
		total += 0.50 // than it starts charging 50c each for every small topping
		if (document.getElementById('medium').checked || document.getElementById('large').checked)
		{
			total +=0.50 // price is doubled
		}
	}
}

// If the Onions tickbox is checked
if(document.getElementById ('onions').checked )
{
	topCounter++ // add one to counter
	if(topCounter > 2)// if counter is greater than 2, so if there is more than two toppings
	{
		total += 0.50
		if (document.getElementById('medium').checked || document.getElementById('large').checked)
		{
			total +=0.50 // price is doubled
		}
	
	}
}

// If the Peppers tickbox is checked
if(document.getElementById ('Pepper').checked )
{
	topCounter++ // add one to counter
	if(topCounter > 2) // if counter is greater than 2, so if there is more than two toppings
	{
		total += 0.50
		if (document.getElementById('medium').checked || document.getElementById('large').checked) // if counter is greater than 2, so if there is more than two toppings
		{
			total +=0.50 // price is doubled
		}
	
	}
}
// If the Spinach tickbox is checked
if(document.getElementById ('Spin').checked )
{
	topCounter++ // add one to counter
	if(topCounter > 2) // if counter is greater than 2, so if there is more than two toppings
	{
		total += 0.50
		if (document.getElementById('medium').checked || document.getElementById('large').checked)
		{
			total +=0.50 // price is doubled
		}
	}
}

// If the Spinach tickbox is checked
if(document.getElementById ('tuna1').checked )
{
	topCounter++ // add one to counter
	if(topCounter > 2) // if counter is greater than 2, so if there is more than two toppings
	{
		total += 0.50
	if (document.getElementById('medium').checked || document.getElementById('large').checked)
		{
			total +=0.50 // price is doubled
		}
	}
}

document.getElementById("totCost").innerHTML = "Total Cost: &euro;" + total.toFixed(2); // Changing the dispaly of the cost price using inner html, then to get the two decimal places, toFixed method
}
