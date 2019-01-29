

    function validateForm() {
        var name = document.forms["myForm"]["Name"].value;
        var phone = document.forms["myForm"]["Phone"].value;
        var message = document.forms["myForm"]["Message"].value;
        var y = document.getElementById('number').value;
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
            window.alert("Email format not correct");
            return false;
        }
        

        callAJAX();
   
}



function callAJAX(){
    var xhttp = new XMLHttpRequest();
    var id_name = document.getElementById('id_name');
    var data = {a:id_name.value};
    xhttp.open("POST", "/api");
    xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhttp.send(JSON.stringify(data));
    xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("demo").innerHTML =
      this.responseText;
    }

}
}


function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

funtion validatePhone(phone){
    if(NaN(phone))
    return false;
}


