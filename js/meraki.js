

 // Crear una instancia de VisitCounter
 const counter = new VisitCounter();
// Parse paramaters
var base_grant_url = decodeURIComponent("https://n298.network-auth.com/splash/grant");
var user_continue_url = decodeURIComponent("https://www.google.com/");

// Print Meraki provided paramaters for Debugging State
console.log("user_continue_url: " +user_continue_url);
console.log("base_grant_url: " +base_grant_url);



// Form Submit handler. 
document.getElementById('loginForm').onsubmit= function(e){
    e.preventDefault(); //prevents default form submission process to allow login and validation
    //login();

    // Incrementar el contador de visitas y redireccionar si es necesario
    counter.increment();
    counter.redirectToSurvey();
    console.log(counter.getvisits());
}

// ******************
// Login to Meraki by redirecting client to the base_grant_url 
// 
// The logingUrl will add a continue_url parameter for a final client
// redirect to their intended site. 
// (you could override this url to send the user to a home page)
// ****************** 
function authUser(){

    var loginUrl = base_grant_url;
    if(user_continue_url !== "undefined"){
        loginUrl += "?continue_url="+user_continue_url;
    }
    console.log("Logging in... ",loginUrl);
    // redirect browser to meraki auth URL.
    window.location.href = loginUrl;
}

// Button handler function to store the form data and login. 
function login(){
    // send the data somewhere like a database
    var data = {};
    data.name = document.getElementById("name").value;
    data.email = document.getElementById("email").value;
    alert("Hello "+data.name +"\n"+"Thanks for providing your email: "+data.email);
    console.log("Storing data to db...", data);

    // Complete Login
    authUser();
}

// Helper function to parse URL
function GetURLParameter(sParam)
{
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++) 
    {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam) 
        {
            return sParameterName[1];
        }
    }
}

