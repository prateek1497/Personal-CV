function ReadMoreText(){
    var dots = document.getElementById("readmore-dots");
    var moreText = document.getElementById("more-text");
    var btnText = document.getElementById("readmore-button");
    console.log("Button was Pressed");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more"; 
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less"; 
        moreText.style.display = "inline";
  }
}

    function validateForm() {
       // e.preventDefault();
        console.log("Hello")
        var name = document.getElementById("id_name").value;
        var phone = document.forms["myForm"]["Phone"].value;
        var message = document.forms["myForm"]["Message"].value;
        var y = document.getElementById('id_number').value;
        var email = document.forms["myForm"]["Email"].value;

        if(name == "" || phone == "" || message == "") {
            //console.log('Erororororoororror');
            window.alert("Details not filled out completely");
            return false;
        }
        if(!validateEmail(email)){
            window.alert("Email format not correct");
            return false;
        }
            
        if(!validatePhone(phone)){
            window.alert("Phone format not correct");
            return false;
        }

        
callAJAX();
   
}



function callAJAX(){
    var xhttp = new XMLHttpRequest();
    var id_name = document.getElementById('id_name');
    var id_email = document.getElementById('id_email');
    var id_number = document.getElementById('id_number');
    var id_message = document.getElementById('id_message');
    
    var data = {"a":id_name.value,"b":id_email.value,"c":id_number.value,"d":id_message.value};
    console.log(data);

    xhttp.open("POST", "/api");
    xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhttp.send(JSON.stringify(data));
    xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("demo").innerHTML =
      this.responseText;
    }
    myForm.reset();

}
}


function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function validatePhone(inputtxt) {
    var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if(inputtxt.match(phoneno)) {
      return true;
    }
    else {
      
      return false;
    }
  }




let slideIndex = 0;
let prev_slide = -1;
let slides;
let dots;

function showSlides() {
    if (slideIndex > slides.length - 1) { slideIndex = 0 }
    if (prev_slide > -1) {
        slides[prev_slide].style.display = "none";
        dots[prev_slide].className = dots[prev_slide].className.replace(" active", "");
    }

    slides[slideIndex].style.display = "block";
    dots[slideIndex].className += " active";
    prev_slide = slideIndex;
    slideIndex++;
}


function Carousel(singlegrid, allgrids) {
    slides = document.getElementsByClassName(singlegrid);
    if (slides.length > 1) {
        var db = document.createElement("div");
        db.classList.add("alldots");
        document.getElementsByClassName(allgrids)[0].appendChild(db);

        for (let j = 0; j < slides.length; j++) {
            var d = document.createElement("span");
            d.classList.add("dot");
            db.appendChild(d);
        }

        dots = document.getElementsByClassName("dot");
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        Interval = setInterval(showSlides, 2000);
        
    }
}
let Interval;
window.onload = function() {
    Carousel("image-review-box", "slideshow-container");
}







