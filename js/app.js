$(document).ready(function(){
    $(".mobile_menu").on("click", function(){
        $(this).toggleClass("clicked");
    }); 
    $(".mobile_menu").on("click", function(){
        $(".menu").slideToggle();  
    }); 
	
});

function validateForm()
{
    var fullname = document.forms["buyForm"]["fullname"].value;
    var place = document.forms["buyForm"]["address"].value;
    var mail = document.forms["buyForm"]["email"].value;
    var phone = document.forms["buyForm"]["tel"].value;
    if (fullname == "" )
    {
        alert("Name can't be empty")
        return false;
    }
    if (! /^[a-zA-Z ]+$/.test(fullname))
    {
        alert("Name must be valid!")
        return false;
    }
    if (place == "")
    {
        alert("Address can't be empty!")
        return false;
    }
    if (mail == "")
    {
        alert("Email can't be empty!")
        return false;
    }
    if (! /\S+@\S+\.\S+/.test(mail))
    {
        alert("Email must be valid!")
        return false;
    }
    if (phone == "")
    {
        alert("Phone can't be empty!")
        return false;
    }
    if (!(/^[\d ]+$/).test(phone) || phone.match(/\d/g).length<9)
    {
        alert("Phone number must be valid!");
        return false;
    }
    alert("Order succsesful")
}