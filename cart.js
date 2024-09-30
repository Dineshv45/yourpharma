var crsr = document.querySelector("#cursor");

document.addEventListener("mousemove", function(event) {
    const x = event.clientX - crsr.offsetWidth / 2 ; 
    const y = event.clientY - crsr.offsetHeight / 2; 

    crsr.style.transform = `translate(${x-675}px, ${y+10}px)`;
});


// Retrieve existing cart items from sessionStorage or initialize an empty array
let cartItems = JSON.parse(sessionStorage.getItem('cartItems')) || [];
console.log(cartItems);

let quantity = document.querySelector(".quantity");

let count = parseInt(sessionStorage.getItem('number')) || 0;
if (quantity) {
    quantity.innerText = count;
}


let empMsg = document.querySelector("#cart-empty"); 

let cart_body = document.querySelector(".cart-body");
let rowContainer = document.querySelector(".rows");

// Check if there are items in the cart
if (cartItems.length > 0) {
    // Hide the empty cart message and show the rows container
    if (empMsg) {
        empMsg.style.display = "none"; 
    }
    if (rowContainer) {
        rowContainer.style.display = "flex"; 
    }

    // Update the product details in the row container
    cartItems.forEach(item => {
        // Create a new row for each item
        var product1 = document.createElement('div');
        product1.className = 'rows';

        // Populate the new row with item details
        product1.innerHTML = `
            <span><img src="${item.image}" alt="" class="productimage"></span>
            <span class="productname">${item.Name}</span>
            <span class="productquantity"><input type="number" value="1" min="1"></span>
            <span class="productprice">Rs.${item.price}</span>
            <span class="remove-btn"><i class="fa-solid fa-trash"></i></span>
        `;

        // Append the new row to the rows container
        cart_body.appendChild(product1);
    });
} else {
    // Show the empty cart message and hide the rows container
    if (empMsg) {
        empMsg.style.display = "block"; // Show empty message
    }
    if (rowContainer) {
        rowContainer.style.display = "none"; // Hide rows container
    }
}


var del_btn = document.querySelectorAll(".remove-btn");
del_btn.forEach(del_btn =>{
    del_btn.addEventListener("click", ()=>{

        let del_product = del_btn.closest(".rows");
        console.log("del clicked");
        del_product.remove();
        let delete_prod = del_product.querySelector(".productname").innerText;
        cartItems = cartItems.filter(item=> item.Name !== delete_prod);
      
        sessionStorage.setItem('cartItems', JSON.stringify(cartItems));

        count--;
        if (quantity) {
            quantity.innerText = count;
            sessionStorage.setItem('number', count);
        }
    })
})

let total_amount=0;
let container = document.querySelector(".cart-container");


//-------------------calculating the total amount--------------
function calculateTotal() {
    let product_price = document.querySelectorAll(".productprice");
    let total = document.querySelector(".total-value");
    let cart_body = document.querySelector(".cart-body"); 
    let empMsg = document.querySelector("#cart-empty"); 

    total_amount = 0;

    // Check if cart is empty before calculating totals
    if (count<=0) {
        if (empMsg) {
            empMsg.style.display = "block"; // Show empty message
            console.log("hello")
        }
    
        total.innerText = "0";
        return; // Exit the function early since there's nothing to calculate
    } else {
        if (empMsg) {
            empMsg.style.display = "none"; // Hide empty message
        }
    }

    product_price.forEach(productPrice => {
        let priceText = productPrice.innerText.replace("Rs.", '').trim();
        console.log(priceText);

        let priceOfProduct = parseFloat(priceText) || 0;

        let productQuantity = productPrice.closest(".rows").querySelector(".productquantity input").value;
        let quantityOfProduct = parseInt(productQuantity) || 1;
        console.log(quantityOfProduct);

        let totalOfProduct = priceOfProduct * quantityOfProduct;

        total_amount += totalOfProduct;
    });

    total.innerText = total_amount;
    console.log(total_amount);
}


document.addEventListener("DOMContentLoaded", () => {
    calculateTotal();
});

del_btn.forEach(delbtn =>{
    delbtn.addEventListener("click",() =>{
        calculateTotal();
        pay_amount();
    })
})

let product_quantity = document.querySelectorAll(".productquantity input");

product_quantity.forEach(product_quantity =>{
    product_quantity.addEventListener("change",()=>{
        // console.log("quantity changed");
        calculateTotal();
        pay_amount();

    })
})
let selection = document.querySelectorAll('.selection select');
let selectVal='';
selection.forEach(select=>{
    selectVal= select.value;
})


let city = document.querySelector("#city-select");

let hydShops = document.querySelector("#Hyderabad-shops");
let mumbShops = document.querySelector("#Mumbai-shops");
let chenShops = document.querySelector("#Chennai-shops");
let bglShops = document.querySelector("#Bangalore-shops");
let delhShops = document.querySelector("#Delhi-shops");

hydShops.disabled= true;

city.addEventListener("change",()=>{
    hydShops.disabled=false;
    let cityName = city.value
    console.log(cityName);

  

    if(cityName==='Hyderabad'){
        console.log("hyderabad");
        hydShops.style.display='block';

        mumbShops.style.display='none';
        chenShops.style.display='none';
        bglShops.style.display='none';
        delhShops.style.display='none';
    }
    else if(cityName==='Mumbai'){
        console.log("mumbai");
        mumbShops.style.display='block';

        hydShops.style.display='none';
        chenShops.style.display='none';
        bglShops.style.display='none';
        delhShops.style.display='none';
    }
    else if(cityName==='Chennai'){
        console.log("chennai");
        chenShops.style.display='block';

        hydShops.style.display='none';
        mumbShops.style.display='none';
        bglShops.style.display='none';
        delhShops.style.display='none';
    }
    else if(cityName==='Banglore'){
        console.log("banglore");
        bglShops.style.display='block';

        hydShops.style.display='none';
        mumbShops.style.display='none';
        chenShops.style.display='none';
        delhShops.style.display='none';
    }
    else{
        console.log("Delhi");
        delhShops.style.display='block';

        hydShops.style.display='none';
        mumbShops.style.display='none';
        chenShops.style.display='none';
        bglShops.style.display='none';
    }
        
});

let pay_btn = document.querySelector("#pay-btn");
let buy_btn = document.querySelector(".buy-btn");
function pay_amount(){
        calculateTotal(); // Ensure total is updated
       
        pay_btn.textContent = `Pay Rs.${total_amount}`; // Correct template literal usage

}
buy_btn.addEventListener("click", () => {
    let cityValue = city.value; 
    let selectedShop = null;

    // Determine which shop dropdown is currently visible (based on the selected city)
    if (cityValue === "Hyderabad") {
        selectedShop = hydShops.value;
    } else if (cityValue === "Mumbai") {
        selectedShop = mumbShops.value;
    } else if (cityValue === "Chennai") {
        selectedShop = chenShops.value;
    } else if (cityValue === "Banglore") {
        selectedShop = bglShops.value;
    } else if (cityValue === "Delhi") {
        selectedShop = delhShops.value;
    }

    // Validation check: If no valid city or shop is selected
    if (cityValue === "City" || selectedShop === "0") {
        alert("Please, select both a City and a Shop before proceeding.");
    } else {
        // Proceed with payment amount display
        pay_amount();
    }
});

document.getElementById('pay-btn').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get input values
    const email = document.getElementById('email').value;
    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;
    const cardNumber = document.getElementById('card-number').value;
    const expiryDate = document.getElementById('expiry-date').value;
    const cvv = document.getElementById('cvv').value;

    // Regular expressions for validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const cardNumberRegex = /^\d{16}$/;
    const expiryDateRegex = /^(0[1-9]|1[0-2])\/\d{2}$/;
    const cvvRegex = /^\d{3}$/;

    // Initialize an array to store error messages
    let errorMessages = [];

    // Validate fields
    if (!emailRegex.test(email)) {
        errorMessages.push('Please enter a valid email.');
    }

    if (name.trim() === '') {
        errorMessages.push('Name is required.');
    }

    if (address.trim() === '') {
        errorMessages.push('Address is required.');
    }

    if (!cardNumberRegex.test(cardNumber)) {
        errorMessages.push('Please enter a valid 16-digit card number.');
    }

    if (!expiryDateRegex.test(expiryDate)) {
        errorMessages.push('Please enter a valid expiry date (MM/YY).');
    }

    if (!cvvRegex.test(cvv)) {
        errorMessages.push('Please enter a valid 3-digit CVV.');
    }

    // If there are errors, show them in a prompt
    if (errorMessages.length > 0) {
        alert(errorMessages.join('\n'));
    } else {
        // If no errors, proceed with form submission or payment processing
        alert('Payment successful!');
        // You can redirect or send data to your backend here
    }
});




  document.getElementById('pay-btn').addEventListener('click', function (event) {
    event.preventDefault(); // Prevent form submission

    // Get input values
    const email = document.getElementById('email').value;
    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;
    const cardNumber = document.getElementById('card-number').value;
    const totalAmount = total_amount;  // Assuming total_amount is calculated

    // Validate the input fields...

    // If validation passes, send payment details to the backend
    const paymentDetails = {
      email: email,
      name: name,
      address: address,
      cardNumber: cardNumber,
      amount: totalAmount
    };

    // Send payment details to the server via fetch POST request
    fetch('http://localhost:3000/send-payment-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(paymentDetails),
    })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          alert('Payment successful! Confirmation email has been sent.');
        } else {
          alert('Error sending email: ' + data.message);
        }
      })
      .catch((error) => {
        console.error('Error:', error);
        alert('There was an error processing your payment.');
      });
  });










