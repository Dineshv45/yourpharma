var crsr = document.querySelector("#cursor");

document.addEventListener("mousemove", function(event) {
    const x = event.clientX - crsr.offsetWidth / 2; // Adjust for cursor width
    const y = event.clientY - crsr.offsetHeight / 2; // Adjust for cursor height

    // Move the cursor to the mouse position, adjusted to center
    crsr.style.transform = `translate(${x}px, ${y-90}px)`;
    ease: "power2.out";
});



//------Animations------------
let t1 = gsap.timeline();

    t1.from("#navbar h1",{
        y:-30,
        duration:0.3,
        delay:0.5,
        opacity:0,
    })
    
    t1.from(".navbar-options a",{
        y:-30,
        duration:0.3,
        opacity:0,
        stagger:0.1,
    })
    
    t1.from(".navbar-options li",{
        y:-30,
        duration:0.3,
        opacity:0,
        stagger:0.3,
    })
    t1.from(".navbar-options i",{
        y:-30,
        duration:0.3,
        opacity:0,
        stagger:0.3,
    })
    t1.from(".quantity",{
        y:-30,
        duration:0.3,
        opacity:0,
        stagger:0.3,
    })
    
    gsap.to("#navbar",{
        backgroundColor: "#000",
        duration: 0.5,
        height: "70px",
        scrollTrigger: {
            trigger: "#navbar",
            scroller: "body",
            start: "top -10%",
            end: "top -11",
            scrub: true,
        }
    });
    
    gsap.to("#navbar h1", {
        color: "#ffffff", 
        duration: 0.5,
        scrollTrigger: {
            trigger: "#navbar h1",
            scroller: "body",
            start: "top -10%",
            end: "top -11",
            scrub: true,
        }
    });
    
    gsap.to("#navbar a", {
        color: "#ffffff", 
        duration: 0.5,
        scrollTrigger: {
            trigger: "#navbar a",
            scroller: "body",
            start: "top -10%",
            end: "top -11",
            scrub: true,
        }
    });
    
    gsap.to(".icons i", {
        color: "#ffffff", 
        duration: 0.5,
        scrollTrigger: {
            trigger: ".icons i",
            scroller: "body",
            start: "top -10%",
            end: "top -11",
            scrub: true,
        }
    });
 

//---------------hacker's effect----------------------
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let headings = document.querySelectorAll(".headings");

// Iterate over each heading
headings.forEach((line) => {
    let interval;  
    let dataValue = line.dataset.value;  // Store the original text from data attribute

    // Mouseover event: Start changing the text continuously
    line.addEventListener("mouseover", (event) => {
        clearInterval(interval);  
        interval = setInterval(() => {
            event.target.innerText = event.target.innerText.split("")
                .map(() => letters[Math.floor(Math.random() * 26)])
                .join("");
        }, 60); 
    });

    // Mouseleave event: Stop changing the text and reset to original
    line.addEventListener("mouseleave", () => {
        clearInterval(interval); 
        line.innerText = dataValue;
    });
});

gsap.utils.toArray(".container").forEach(container => {
    gsap.from(container,{
        scale: 0.8,
        opacity  : 0,
        duration: 1,
        scrollTrigger:{
            trigger:container,
            // markers :true,
            scroller:"body",
            start :"top 75%",
            end: "top 5%",
            toggleActions: "play reverse play reverse", 
        }
    })
})

gsap.utils.toArray(".card").forEach(card => {
gsap.from(card,{
    scale:0.5,
    x:100,
    opacity: 0,
    duration :1,
    stagger:0.5,
    scrollTrigger:{
        // markers:"true",
        trigger:card,
        scroller:"body",
        start :"top 75%",
        end: "top 5%",
        toggleActions: "play reverse play reverse", 

    }
})
})
gsap.utils.toArray(".headings").forEach(headings=>{
    gsap.from(headings,{
        x :-500,
        opacity : 0,
        duration:1,
        scrollTrigger:{
            trigger:headings,
            scroller:"body",
            start :"top 60%",
            end :"top 5%",
            toggleActions: "play reverse play reverse", 
        }
    })
})


// Select all arrows
const arrows = document.querySelectorAll('.arrow');

// Add event listeners to all arrows
arrows.forEach(arrow => {
    arrow.addEventListener('click', () => {
        const targetSelector = arrow.getAttribute('data-target');
        const container = document.querySelector(targetSelector);

        if (arrow.classList.contains('left-arrow')) {
            console.log("Left button clicked");
            container.scrollBy({
                left: -290, // Adjust the scroll amount
                behavior: 'smooth'
            });
        } else if (arrow.classList.contains('right-arrow')) {
            console.log("Right button clicked");
            container.scrollBy({
                left: 290, // Adjust the scroll amount
                behavior: 'smooth'
            });
        }
    });
});






let quantity = document.querySelector(".quantity");
let cart_btn = document.querySelectorAll(".cart-btn");

// Retrieve the count value from sessionStorage
let count = parseInt(sessionStorage.getItem('number')) || 0; // Set count to 0 if it does not exist
if (quantity) {
    quantity.innerText = count;
}

// Display the initial count value on the page
if (quantity) {
    quantity.innerText = count;
}

// Retrieve existing cart items from sessionStorage or initialize an empty array
let cartItems = JSON.parse(sessionStorage.getItem('cartItems')) || [];

// Update the count when the button is clicked in the cards
cart_btn.forEach(cartbtn => {
    cartbtn.addEventListener("click", (event) => {
        // Prevent the default form submission behavior (if inside a form)
        event.preventDefault();

        let btn = cartbtn.closest(".cart-btn");
        btn.innerText="Added to Cart";

        // Select the parent card element of the clicked button
        let product = cartbtn.closest(".card");

        // Retrieve product details from the specific elements inside the card
        let prodImg = product.querySelector(".card-img").getAttribute("src");
        let prodName = product.querySelector("h4").innerText;
        // let prodId = product.querySelector(".prod-id").innerText;
        let prodPrice = product.querySelector(".price").innerText;

        // console.log(prodId);
        console.log(prodPrice);
        console.log(prodName);

        // Create an object with the product details
        let prodObj = {
            // Id: prodId,
            Name: prodName,
            image: prodImg,
            price: prodPrice,
        };
        console.log(prodObj);

        let isProductInCart = cartItems.some(item=> item.Name === prodName && item.price === prodPrice);

        if(!isProductInCart){
            count++;
        
            // Update the count on the page
            if (quantity) {
                quantity.innerText = count;
            }
                // Update the count in sessionStorage
        sessionStorage.setItem('number', count);

        

            cartItems.push(prodObj);
                 // Update the cart items in sessionStorage
        sessionStorage.setItem('cartItems', JSON.stringify(cartItems));
        // flyingAnimation(cartbtn);
        }

        // Add the new product object to the cart items array
      

   

    
    });
});

let cart = document.querySelector(".bag");

cart.addEventListener("click", () => {
    window.location.href = "cart.html";
});

// funtion for flying animation 
function flyingAnimation(cartbtn) {
    let shopping_cart = document.querySelector(".fa-cart-shopping");
    
    // Ensure we're targeting the correct product image
    let target_parent = cartbtn.closest(".card");
    let target_img = target_parent.querySelector("img");

    let flying_img = target_img.cloneNode();
    flying_img.classList.add("flying-img");
    flying_img.style.zIndex = "100";

    target_parent.appendChild(flying_img);

    const img_pos = flying_img.getBoundingClientRect();
    const cart_pos = shopping_cart.getBoundingClientRect();

    let data = {
        left: cart_pos.left - (cart_pos.width / 2 + img_pos.left + img_pos.width / 2),
        top: cart_pos.top - img_pos.top,
    };

    // Properly add distances and format values
    flying_img.style.cssText = `
        --left: ${(data.left + 50).toFixed(2)}px;  /* Add 50px to left */
        --bottom: ${(data.top - 80).toFixed(2)}px; /* Add 60px to top */
        z-index: 1000;
    `;

    // Listen for animation end and remove the flying image
    flying_img.addEventListener('animationend', () => {
        flying_img.remove();
    });
}
