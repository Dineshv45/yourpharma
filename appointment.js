var crsr= document.querySelector("#cursor");

document.addEventListener("mousemove",function(dets){
    crsr.style.transform = `translate(${dets.x}px, ${dets.y+10}px)`;
})

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
    t1.from("#main", {
        opacity:0,
        duration: 1.5,
        ease: "elastic.out(1, 0.3)",
        scale: 0.5,
        transformOrigin: "50% 50%", // Set transform origin to center
    });
    



//------------hiding other options based on choosed option------------------
let city = document.querySelector("#city-select");

//hiding initially
let hydhptl = document.querySelector("#Hyderabad-hospitals");
let chenhptl = document.querySelector("#Chennai-hospitals");
let mumhptl = document.querySelector("#Mumbai-hospitals");
let benhptl = document.querySelector("#Bangalore-hospitals");
let delhptl = document.querySelector("#Delhi-hospitals");

let hospitals = [ chenhptl, mumhptl, benhptl, delhptl];
hospitals.forEach(hospital=>{
    hospital.style.display="none";
    
})
hydhptl.disabled=true;


let hyd1 = document.querySelector("#Homeocare");
let hyd2 = document.querySelector("#Yashoda");
let hyd3 = document.querySelector("#KIMS");
let chen1 = document.querySelector("#SIMS");
let chen2 = document.querySelector("#Apollo");
let chen3 = document.querySelector("#Frontier");
let mum1 = document.querySelector("#Lilavati");
let mum2 = document.querySelector("#Bombay ");
let mum3 = document.querySelector("#Kokilaben");
let ben1 = document.querySelector("#Fortis");
let ben2 = document.querySelector("#Manipal");
let ben3 = document.querySelector("#Ramaiah");
let del1 = document.querySelector("#Indraprastha");
let del2 = document.querySelector("#Primus");
let del3 = document.querySelector("#Max");

let doctors = [hyd2,hyd3,chen1,chen2,chen3,mum1,mum2,mum3,ben1,ben2,ben3,del1,del2,del3];
doctors.forEach(doctor=>{
    doctor.style.display="none"
  
})
hyd1.disabled=true;

city.addEventListener("change",()=>{
    let cityName = city.value;
    hydhptl.disabled=false;
   
    if(cityName==='Hyderabad'){
        // console.log("hyderabad");
        hydhptl.style.display='block';

        mumhptl.style.display='none';
        chenhptl.style.display='none';
        benhptl.style.display='none';
        delhptl.style.display='none';
    }
    else if(cityName==='Mumbai'){
        console.log("mumbai");
        mumhptl.style.display='block';

        hydhptl.style.display='none';
        chenhptl.style.display='none';
        benhptl.style.display='none';
        delhptl.style.display='none';
    }
    else if(cityName==='Chennai'){
        console.log("chennai");
        chenhptl.style.display='block';

        hydhptl.style.display='none';
        mumhptl.style.display='none';
        benhptl.style.display='none';
        delhptl.style.display='none';
    }
    else if(cityName==='Bangalore'){
        benhptl.style.display='block';

        hydhptl.style.display='none';
        mumhptl.style.display='none';
        chenhptl.style.display='none';
        delhptl.style.display='none';
    }
    else{
        console.log("Delhi");
        delhptl.style.display='block';

        hydhptl.style.display='none';
        mumhptl.style.display='none';
        chenhptl.style.display='none';
        benhptl.style.display='none';
    }

    let hptlSelects = document.querySelectorAll("#hospital select");

    hptlSelects.forEach(select => {
        select.addEventListener("change", (event) => {
            hyd1.disabled=false;
            // console.log("Hospital dropdown changed");
            let hospital = event.target.options[event.target.selectedIndex].text;
            // console.log(hospital); 

            
if(hospital===hydhptl.querySelector('option[value="1"]').text){

    hyd1.style.display="block";
    let doctors = [hyd2,hyd3,chen1,chen2,chen3,mum1,mum2,mum3,ben1,ben2,ben3,del1,del2,del3];
    doctors.forEach(doctor=>{
        doctor.style.display="none"
    })
}
else if(hospital===hydhptl.querySelector('option[value="2"]').text){

    hyd2.style.display="block";
    let doctors = [hyd1,hyd3,chen1,chen2,chen3,mum1,mum2,mum3,ben1,ben2,ben3,del1,del2,del3];
    doctors.forEach(doctor=>{
        doctor.style.display="none"
    })
}
else if(hospital===hydhptl.querySelector('option[value="3"]').text){

    hyd3.style.display="block";
    let doctors = [hyd1,hyd2,chen1,chen2,chen3,mum1,mum2,mum3,ben1,ben2,ben3,del1,del2,del3];
    doctors.forEach(doctor=>{
        doctor.style.display="none"
    })
}
else if(hospital===chenhptl.querySelector('option[value="1"]').text){

    chen1.style.display="block";
    let doctors = [hyd1,hyd2,hyd3,chen2,chen3,mum1,mum2,mum3,ben1,ben2,ben3,del1,del2,del3];
    doctors.forEach(doctor=>{
        doctor.style.display="none"
    })
}
else if(hospital===chenhptl.querySelector('option[value="2"]').text){

    chen2.style.display="block";
    let doctors = [hyd1,hyd2,hyd3,chen1,chen3,mum1,mum2,mum3,ben1,ben2,ben3,del1,del2,del3];
    doctors.forEach(doctor=>{
        doctor.style.display="none"
    })
}
else if(hospital===chenhptl.querySelector('option[value="3"]').text){

    chen1.style.display="block";
    let doctors = [hyd1,hyd2,hyd3,chen1,chen2,mum1,mum2,mum3,ben1,ben2,ben3,del1,del2,del3];
    doctors.forEach(doctor=>{
        doctor.style.display="none"
    })
}
else if(hospital===mumhptl.querySelector('option[value="1"]').text){

    mum1.style.display="block";
    let doctors = [hyd1,hyd2,hyd3,chen1,chen2,chen3,mum2,mum3,ben1,ben2,ben3,del1,del2,del3];
    doctors.forEach(doctor=>{
        doctor.style.display="none"
    })
}
else if(hospital===mumhptl.querySelector('option[value="2"]').text){

    mum2.style.display="block";
    let doctors = [hyd1,hyd2,hyd3,chen1,chen2,chen3,mum1,mum3,ben1,ben2,ben3,del1,del2,del3];
    doctors.forEach(doctor=>{
        doctor.style.display="none"
    })
}
else if(hospital===mumhptl.querySelector('option[value="3"]').text){

    mum3.style.display="block";
    let doctors = [hyd1,hyd2,hyd3,chen1,chen2,chen3,mum1,mum2,ben1,ben2,ben3,del1,del2,del3];
    doctors.forEach(doctor=>{
        doctor.style.display="none"
    })
}
else if(hospital===benhptl.querySelector('option[value="1"]').text){

    ben1.style.display="block";
    let doctors = [hyd1,hyd2,hyd3,chen1,chen2,chen3,mum1,mum2,mum3,ben2,ben3,del1,del2,del3];
    doctors.forEach(doctor=>{
        doctor.style.display="none"
    })
}
else if(hospital===benhptl.querySelector('option[value="2"]').text){

    ben2.style.display="block";
    let doctors = [hyd1,hyd2,hyd3,chen1,chen2,chen3,mum1,mum2,mum3,ben1,ben3,del1,del2,del3];
    doctors.forEach(doctor=>{
        doctor.style.display="none"
    })
}
else if(hospital===benhptl.querySelector('option[value="3"]').text){

    ben3.style.display="block";
    let doctors = [hyd1,hyd2,hyd3,chen1,chen2,chen3,mum1,mum2,mum3,ben1,ben2,del1,del2,del3];
    doctors.forEach(doctor=>{
        doctor.style.display="none"
    })
}
else if(hospital===delhptl.querySelector('option[value="1"]').text){

    del1.style.display="block";
    let doctors = [hyd1,hyd2,hyd3,chen1,chen2,chen3,mum1,mum2,mum3,ben1,ben2,ben3,del2,del3];
    doctors.forEach(doctor=>{
        doctor.style.display="none"
    })
}
else if(hospital===delhptl.querySelector('option[value="2"]').text){

    del2.style.display="block";
    let doctors = [hyd1,hyd2,hyd3,chen1,chen2,chen3,mum1,mum2,mum3,ben1,ben2,ben3,del1,del3];
    doctors.forEach(doctor=>{
        doctor.style.display="none"
    })
}
else {

    del1.style.display="block";
    let doctors = [hyd1,hyd2,hyd3,chen1,chen2,chen3,mum1,mum2,mum3,ben1,ben2,ben3,del1,del2];
    doctors.forEach(doctor=>{
        doctor.style.display="none"
    })
}

        });
    });

});

//--------Bookings slots----------

let dates = [];
for (let i = 0; i < 31; i++) {
    dates[i] = i + 1;
}

let cal_body = document.querySelector("#cal-body");
cal_body.innerHTML = '';

dates.forEach(date => {
    let dateElement = document.createElement('span');
    dateElement.setAttribute("class", "date");
    dateElement.innerText = date;
    cal_body.appendChild(dateElement);
});

let previous_set = [];
function dateCalculator(){
    let random = [];
for (let i = 0; i < 12; i++) {
    random[i] = Math.floor(Math.random() * 31) + 1; // Corrected random range
}
console.log(random);

const difference = dates.filter((element) => random.includes(element));
console.log(difference);


//removes the previous set of dates; removes grey color
if(previous_set){
    previous_set.forEach(previous=>{
        previous.style.backgroundColor="white";
    })

}


difference.forEach(diff => {
    let dateElements = document.querySelectorAll('.date');
    dateElements.forEach(dates => {
        let date = parseInt(dates.innerText); 
        if (date === diff) {
            dates.style.backgroundColor = "grey"; 
            previous_set.push(dates)
        }
    });
});

let previous_date = null;
let dateElements = document.querySelectorAll(".date");
dateElements.forEach(date=>{

    //removes the color of previusly selected date
    date.addEventListener("click",()=>{  
        if(previous_date){
             previous_date.style.backgroundColor="white"
        }
        if (getComputedStyle(date).backgroundColor === "rgb(128, 128, 128)") {
            // console.log("ignore")
            return; 
        }
       
        date.style.backgroundColor="#39df8f";
        previous_date = date;
        calculateTimeSlot();
    })
 
})

}

// function to calculate time_slot
let previous_time = [];
function calculateTimeSlot(){
    let time_slots=[];

//removing previos time single green color
if(previous_time)
previous_time.forEach(time=>{
    time.style.backgroundColor="white";
})

time_slots = Array.from(document.querySelectorAll(".time"));
previous_time = [];

let random=[];
for(let i=0;i<2;i++){
    random[i] = Math.floor(Math.random() * 4);
}
console.log(random)
random.forEach(random =>{
    time_slots[random].style.backgroundColor="grey";
    previous_time.push(time_slots[random]); 
})
}


let previous_slot = null;
let time_slots= document.querySelectorAll(".time");
var Time="";
time_slots.forEach(slot => {
    slot.addEventListener("click", () => {
        if (previous_slot) {
            previous_slot.style.backgroundColor = "white";
        }
        if (getComputedStyle(slot).backgroundColor === "rgb(128, 128, 128)") {
            return; 
        }
        slot.style.backgroundColor = "#39df8f";
        previous_slot = slot;
        Time = slot.innerText;
    });
});



let times = document.querySelectorAll(".time");

let doctor_selection = document.querySelectorAll("#doctor select");
doctor_selection.forEach(doctor=>{
    doctor.addEventListener("change",()=>{
        dateCalculator();
        times.forEach(time=>{
            time.style.display="flex";
        })
    })
})

let book_btn = document.querySelector("#book"); 
let form = document.querySelector("#form");
let selection_field = document.querySelector("#selection");


//-----------selection elements---------------
let citySelect = document.querySelector("#city-select");
var hospitalSelect ="";
var dctrselect = "";

let hptlSelects = document.querySelectorAll("#hospital select");
hptlSelects.forEach(select => {
    select.addEventListener("change", (event) => {
        let hospital = event.target.options[event.target.selectedIndex].text;
        hospitalSelect = hospital;  // Update global variable
        // console.log(`Selected Hospital: ${hospitalSelect}`);
    });
});

let doctorSelect = document.querySelectorAll("#doctor select");
doctorSelect.forEach(select => {
    select.addEventListener("change", (event) => {
        let doctor = event.target.options[event.target.selectedIndex].text;
        dctrselect = doctor;  
        // console.log(`Selected Doctor: ${dctrselect}`);  
    });
});


var Date="";
let slot_dates = document.querySelectorAll(".date");
slot_dates.forEach(date=>{
    date.addEventListener("click",()=>{
        Date = date.innerText;
    })
})


console.log(dctrselect);

//------------form elements------------------------
let selected_city= document.querySelector("#city-name");
let selected_hospital = document.querySelector("#hospital-name");
let selected_doctor = document.querySelector("#doctor-name");
let select_date = document.querySelector("#select-date");
let select_time = document.querySelector("#select-time");

var chosenCity="";
book_btn.addEventListener("click", () => {
    if(Date==="" || Time===""){
        alert("Please, select both Date and Time before proceeding.");
    }
    else{
         // Get the selected values
     chosenCity = citySelect.options[citySelect.selectedIndex].text;

     // Update the form with the selected values
     selected_city.innerText = chosenCity;      
     selected_hospital.innerText = hospitalSelect;
     selected_doctor.innerText = dctrselect;
     select_date.innerText = Date;
     select_time.innerText = Time;    
 
    
 
     // Display the form
     form.style.display = "flex";  
     selection_field.style.opacity = "0";
 
     gsap.from("#form", { 
         x: -500,
         duration: 0.5,
         scale: 0.2,      
     });
    }
   
});

// Close button functionality
let close_btn = document.querySelector("#close-btn");
close_btn.addEventListener("click",()=>{    
    gsap.to("#form", { 
        x: -500,
        duration: 0.5,
        scale: 0.2,   
        onComplete: function() {
            form.style.display = "none";  
            selection_field.style.opacity = "1";   
        }
    });
});


//Sending the booking email
    document.addEventListener("DOMContentLoaded", () => {
        let slot_btn = document.querySelector("#slot-book");
        slot_btn.addEventListener("click", (event) => {
            event.preventDefault();
    
            const email = document.getElementById("email-input").value;
            const name = document.getElementById("name-input").value;
    
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            let errorMessages = [];
    
            if (!emailRegex.test(email)) {
                errorMessages.push('Please enter a valid email.');
            }
            if (name.trim() === '') {
                errorMessages.push('Name is required.');
            }
    
            if (errorMessages.length > 0) {
                alert(errorMessages.join('\n'));
                return;
            }
    
            const bookingDetails = {
                email: email,
                name: name,
                city: chosenCity, // Ensure this is defined
                Hospital: hospitalSelect, // Ensure this is defined
                Doctor: dctrselect, // Ensure this is defined
                date: Date, // Use lowercase to avoid confusion with Date object
                time: Time, // Use lowercase
            };
    
            fetch('http://localhost:3000/send-booking-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(bookingDetails),
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    alert('Booking Successful! Confirmation email has been sent!');
                } else {
                    alert('Error sending email! ' + data.message);
                }
            })
            .catch((error) => {
                console.error('Error:', error);
                alert('There was an error processing your booking.');
            });
        });
    });





