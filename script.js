window.addEventListener("load", function() {
    const loader = document.querySelector("#pre-loader");
    const mainContent = document.querySelector("#main");
    const preText = document.querySelector("#pre-loader h1");
   

    // Simulate pre-loader duration
    setTimeout(function() {
        // Animate the loader moving off-screen
        gsap.to(loader, {
            duration: 0.7,
            y: -1000,
            onComplete: function() {
                loader.style.display = "none"; 
                mainContent.style.opacity = 1;
                startMainContentAnimations(); // Start main content animations
            }
        });
    }, 4000); // Wait 4 seconds for the loader to disappear
});




var crsr= document.querySelector("#cursor");

document.addEventListener("mousemove",function(dets){
    crsr.style.transform = `translate(${dets.x}px, ${dets.y}px)`;
})

let t1 = gsap.timeline();

function startMainContentAnimations(){

    t1.from("#main", {
        duration: 1.5,
        ease: "elastic.out(1, 0.3)",
        scale: 0.5,
        rotate: 10, 
        transformOrigin: "50% 50%", // Set transform origin to center
    });
    
    


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
    
    
    t1.from("#hero-section h1",{
        x:500,
        duration:0.3,
        opacity:0,
    })
    t1.from("#hero-section h2",{
        x:500,
        duration:0.5,
        opacity:0,
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
    
}



//---------------Playing a video on herosection----------------------
const headline = document.querySelector("#headline"); 
const videoContainer = document.querySelector(".video-container");
const video = document.querySelector("#hoverVideo");

// Show video and make it follow the cursor
headline.addEventListener("mouseover", () => {
    videoContainer.style.display = "block"; // Show the video container
    video.play(); // Play the video
});

// Update video position based on mouse movement
headline.addEventListener("mousemove", (event) => {
    // Calculate the position of the video container relative to the cursor
    const mouseX = event.pageX;
    const mouseY = event.pageY;
    

    // Offset the video slightly so it's centered around the cursor
    const offsetX = 100;
    const offsetY = 100;

    // Update the position of the video container
    videoContainer.style.left = `${mouseX - offsetX-650}px`;
    videoContainer.style.top = `${mouseY - offsetY-300}px`;
});

// Hide the video and stop it when the mouse leaves
headline.addEventListener("mouseleave", () => {
    videoContainer.style.display = "none"; 
    video.pause(); 
    // video.currentTime = 0; 
});




// -----------------hacker effect-------------------
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let line = document.querySelector("#line");
let dataValue = line.dataset.value; 
let interval; 

// Mouseover: Start changing the text continuously
line.addEventListener("mouseover", (event) => {
    interval = setInterval(() => {
        event.target.innerText = event.target.innerText.split("")
            .map(letter => letters[Math.floor(Math.random() * 26)])
            .join("");
    },60); 
});

// Mouseleave: Stop changing the text
line.addEventListener("mouseleave", () => {
    clearInterval(interval);
    line.innerText = dataValue
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

gsap.from(".card",{
    scale:0.5,
    x:100,
    opacity: 0,
    duration :1,
    stagger:0.2,
    scrollTrigger:{
        // markers:"true",
        trigger:".card",
        scroller:"body",
        start:"top 70%",
        end: "top 40%",
        scrub :2
    }
})

let hideBtn = document.querySelector("#hide-btn");
let page4 = document.querySelector("#page4");
let box1 = document.querySelector("#box1");
let box2 = document.querySelector("#box2");
const img1 = document.querySelector(".img1");
const img2 = document.querySelector(".img2");
const para = document.querySelectorAll(".para");
let images = document.querySelector(".images");
let box = document.querySelector("#box");
let buttonText = document.querySelector("#button-text");

hideBtn.addEventListener("click", () => {
    if (hideBtn.innerText === "Explore Ideas") {
        // Expand page4 height
        gsap.to(page4, { height: "120vh", duration: 1 });

        // Animate images out
        gsap.to(img1, {
            x: -1000,
            y: 100,
            duration: 1.5,
            onComplete: () => {
                images.style.display = "none"; // Hide images after animation
            }
        });
        gsap.to(img2, {
            x: 1000,
            y: -100,
            duration: 1.5,
        });

        // Show boxes
        box1.style.display = "flex";
        box2.style.display = "flex";

        // Show paragraphs with animation
        para.forEach(para => {
            para.style.display = "block";
        });

        // Animate button text
        gsap.to(buttonText, {
            opacity: 0,
            duration: 0.5,
            onComplete: () => {
                buttonText.innerText = "Hide Ideas"; // Change text
                gsap.to(buttonText, { opacity: 1, duration: 0.3 }); // Fade in
            }
        });

        // Adjust layout
        box.style.gap = "0px";
    } else {
        // Collapse page4 height
        gsap.to(page4, { height: "100vh", duration: 1 });

        // Show images again
        images.style.display = "block"; // Set to flex for better alignment

        // Animate images back into position
        gsap.from(img1, {
            x: -1000,
            y: 100,
            duration: 0.5,
            onComplete: () => {
                gsap.to(img1, { x: 20, y: -20, duration: 0.5 }); // Move img1 back to original position
            }
        });
        gsap.from(img2, {
            x: 1000,
            y: -100,
            duration: 0.5,
            onComplete: () => {
                gsap.to(img2, { x: 0, y: 0, duration: 0.5 }); // Move img2 back to original position
            }
        });

        // Hide boxes
        box1.style.display = "none";
        box2.style.display = "none";

        para.forEach(para => {
            para.style.display = "none"; // Ensure paragraphs are displayed
        
        });

        // Animate button text
        gsap.to(buttonText, {
            opacity: 0,
            duration: 0.5,
            onComplete: () => {
                buttonText.innerText = "Explore Ideas"; // Change text
                gsap.to(buttonText, { opacity: 1, duration: 0.3 }); // Fade in
            }
        });

        // Adjust layout
        box.style.gap = "200px";
    }
});

let paragraphs = document.querySelectorAll(".para"); 
// Function to wrap each word in a <span>
function wrapWordsInSpan() {
    paragraphs.forEach(paragraph => {
        const words = paragraph.innerText.split(' ');
        paragraph.innerHTML = ''; // Clear current content

        words.forEach(word => {
            const span = document.createElement('span');
            span.innerText = word + ' '; // Add a space after each word
            span.style.transition = 'transform 0.3s'; // Transition for the hover effect
            span.classList.add('word'); // Optional: add a class for styling

            // Add hover effect
            span.addEventListener('mouseenter', () => {
                gsap.to(span, { y: -15, duration: 0.1 }); // Move up on hover
            });
            span.addEventListener('mouseleave', () => {
                gsap.to(span, { y: 0, duration: 0.1 }); // Return to original position
            });

            paragraph.appendChild(span); // Append span to the paragraph
        });
    });
}

// Call the function to wrap words when the script loads
wrapWordsInSpan();




let profile = document.querySelector("#profile");
let details = document.querySelector("#details"); 

profile.addEventListener("mouseover", () => {
    details.style.display = "flex"; // Show details
    details.style.opacity = "1"; // Ensure it's visible
});

profile.addEventListener("mouseout", () => {
    details.style.opacity = "0"; // Hide details
    details.style.display = "none"; // Ensure it's hidden
});

// adding to cart-----------

let quantity = document.querySelector(".quantity");
let cart_btn = document.querySelectorAll(".cart-btn");

let count = parseInt(sessionStorage.getItem('number')) || 0;
   if (quantity) {
            quantity.innerText = count;
        }


// let cartItems=[];
 let cartItems= JSON.parse(sessionStorage.getItem('cartItems')) || [];


cart_btn.forEach(cartbtn => {
    cartbtn.addEventListener("click", (event) => {
        event.preventDefault(); // Prevents default button behavior
        console.log("button clicked");
        let btn = cartbtn.closest(".cart-btn");
        btn.innerText="Added to Cart";
      


        let product = cartbtn.closest(".card");

        let prodImg = product.querySelector(".card-img").getAttribute('src');
        let prodName = product.querySelector("h4").innerText;
        let prodPrice = product.querySelector(".price").innerText;

        let prodObj={
            Name : prodName,
            image: prodImg,
            price: prodPrice,
        };
        console.log(prodObj);

        let isProductInCart = cartItems.some(item => item.Name === prodName && item.price === prodPrice);

        if(!isProductInCart){
            count++;
         
        
            // Update the count on the index page
            if (quantity) {
                quantity.innerText = count;
            }

            // Store the count in sessionStorage
            sessionStorage.setItem('number', count);

            cartItems.push(prodObj);
            sessionStorage.setItem('cartItems',JSON.stringify(cartItems));
            flyingAnimation(cartbtn);
        }



    });
});


let gotomed = document.querySelector("#gotomedicines");

gotomed.addEventListener("click",()=>{
    window.location.href = "medicines.html";
})

let cart = document.querySelector('.bag');

cart.addEventListener("click", ()=>{
    window.location.href="cart.html"
})

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
        --bottom: ${(data.top - 75).toFixed(2)}px; /* Add 60px to top */
        z-index: 1000;
    `;

    // Listen for animation end and remove the flying image
    flying_img.addEventListener('animationend', () => {
        flying_img.remove();
    });
}

// //------------------page4 image flying effect----------------
// let box_img1 = document.querySelector(".box-img1");

// // Function to move the image with the mouse
// function moveImageWithMouse(event) {
//     // Get the mouse's coordinates
//     let x = event.clientX;
//     let y = event.clientY;

//     // Get the bounding rectangle of box1
//     let rect = box1.getBoundingClientRect();
//     let x_lower = rect.left;
//     let x_upper = rect.right;
//     let y_lower = rect.top;
//     let y_upper = rect.bottom;

//     // Center the image under the mouse cursor
//     let imgX = x - box_img1.offsetWidth / 2 -150;
//     let imgY = y - box_img1.offsetHeight / 2 -150;

//     // Constrain the position within box1
//     imgX = Math.max(x_lower, Math.min(imgX, x_upper - box_img1.offsetWidth));
//     imgY = Math.max(y_lower, Math.min(imgY, y_upper - box_img1.offsetHeight));

//     // Apply the constrained position
//     box_img1.style.transform = `translate(${imgX}px, ${imgY}px)`; // Fixed template literals
//     box_img1.style.position = "absolute";  // Ensure the image moves freely
//     box_img1.style.pointerEvents = "none"; // Prevents image blocking mouse events
// }

// // Track mouse movement only when hovering over box1
// box1.addEventListener("mouseenter", function() {
//     box1.addEventListener("mousemove", moveImageWithMouse); // Start tracking mouse movement
// });

// // Stop tracking and reset when mouse leaves box1
// box1.addEventListener("mouseleave", function () {
//     // Optionally, reset image position if desired
//     box_img1.style.transform = 'translate(0, 0)'; // This resets the image position to (0,0) or can set to its original position
//     box1.removeEventListener("mousemove", moveImageWithMouse); // Stop tracking movement
// });


// const loader = document.querySelector("#pre-loader");

// window.addEventListener("load", function() {
//     // Hide the preloader once the page is fully loaded
//     loader.style.display = "none";
// });

