/*
Name: Alexa Schubeck
Date created: 02/05/25
Date last edited: 04/11/25
Version: 1.3
Description: Homework 3 Javascript file
*/

//JavaScript code to display today's date
const d = new Date();
let text = d.toLocaleDateString();
document.getElementById("today").innerHTML = text;

//JavaScript code to display a pain scale slider
let slider = document.getElementById("range");
let output = document.getElementById("range-slider");
output.innerHTML = slider.value;

slider.oninput = function ()
{
    output.innerHTML = this.value;
};
//Edit to validate first name ************************
function validateMini() {
    let mini = document.getElementById("mini").value;
    const namePattern = /^[A-Z]+$/;

    mini = mini.toUpperCase();
    document.getElementById("mini").value = mini;

    if (!mini.match(namePattern)) {
        document.getElementById("mini-error").innerHTML = 
        "Middle initial must be a single uppercase letter";
        return false;
    } else {
        document.getElementById("mini-error").innerHTML = "";
        return true;
    }
}

//validate middle initial (CHECK VARIABLE NAME)***************
function validateMini() {
    let mini = document.getElementById("mini").value;
    const namePattern = /^[A-Z]+$/;

    mini = mini.toUpperCase();
    document.getElementById("mini").value = mini;

    if (!mini.match(namePattern)) {
        document.getElementById("mini-error").innerHTML = 
        "Middle initial must be a single uppercase letter";
        return false;
    } else {
        document.getElementById("mini-error").innerHTML = "";
        return true;
    }
}
//Edit to validate last name**************
function validateMini() {
    let mini = document.getElementById("mini").value;
    const namePattern = /^[A-Z]+$/;

    mini = mini.toUpperCase();
    document.getElementById("mini").value = mini;

    if (!mini.match(namePattern)) {
        document.getElementById("mini-error").innerHTML = 
        "Middle initial must be a single uppercase letter";
        return false;
    } else {
        document.getElementById("mini-error").innerHTML = "";
        return true;
    }
}
//Javascript Validation for Patient Date of Birth
function validateDOB(){
    dob = document.getElementById("dob");
    let date = new Date(dob.value);
    let maxDate = new Date().setFullYear(new Date().getFullYear() - 120);

//New features: Maximum age limit for DOB
    if(date > maxDate)
    {
        alert("Invalid Date of Birth.").innerHTML =
        "Date of Birth cannot be in the future";
        dob.value = "";
        return false;
    }
    else if (date < new Date(maxDate))
    {
        document.getElementById("dob-error").innerHTML =
        "Date of Birth may not exceed 120 years in the past."
        dob.value = "";
        return false;
    }
    else
    {
        document.getElementById("dob-error").innerHTML = "";
        return true;
    }
}
//Javascript Social Security Number Validation
function validateSSN()
{
    const ssn = document.getElementById("SSN").value;
    const ssnR = /^[0-9]{3}-?[0-9]{2}-?[0-9]{4}$/;

    if(!ssnR.test(ssn))
    {
        document.getElementById("SSN-error").innerHTML =
        "Invalid SSN, please re-enter.";
        return false;
    }
    else
    {
        document.getElementById("SSN-error").innerHTML ="";
        return true;
    }
}  

//City Validation

function validateCity() {
    city = document.getElementById("city").value.trim();

    if (!city) {
        document.getElementById("city-error").innerHTML = "City can't be blank";
        return false;
    } else {
        document.getElementById("city-error").innerHTML = "";
        return true;
    }
}

//JavaScript Zip Code Validation 
function validateZip()
{
    const zipInput = document.getElementById("zip");
    let zip = zipInput.value.replace(/[^\d-]/g,"");

    if(!zip)
    {
        document.getElementById("zip-error").innerHTML =
        "Invalid Zip Code, please re-enter.";
        return false;
    }
//Allows for full 9 digit zip if available
    if(zip.length > 5)
    {
        zip = zip.slice(0,5) + "-" + zip.slice(5,9);
    }
    else
    {
        zip = zip.slice(0,5);
    }
    zipInput.value = zip;
    document.getElementById("zip-error").innerHTML = "";
    return true;
}
//JavaScript Email Validation
//And then add a code that checks an email entered by the user. If it:
//1. Is blank - it displays that it cannot be blank.
//2. Does not match the pattern - it asks to enter a valid email address.
//3. Is correct - returns true.//
function validateEmail()
{
    const email = document.getElementById("email").value;
    var emailR = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if(!emailR.test(email))
    {
        document.getElementById("email-error").innerHTML =
        "Invalid email address, please re-enter.";
        return false;
    }
    else
    {
        document.getElementById("email-error").innerHTML = "";
        return true;
    }
}
//JavaScript Phone Number Validation
//PHone number format entered by patient needs to look like this:
//123-456-7890
//CANNOT be left blank
function validatePhone()
{
    const phone = document.getElementById("tel").value;
    const phoneR = /^\d{3}-?\d{3}-?\d{4}$/;

    if(!phoneR.test(phone))
    {
        document.getElementById("tel-error").innerHTML =
        "Invalid phone number, please re-enter";
        return false;
    }
    else
    {
        document.getElementById("tel-error").innerHTML = "";
        return true;
    }
}

//Validate EVERYTHING- this enables (or disables) the submit button depending on if the use inputs valid data or not
function validateEverything() {
    let valid = true;

    if (!validateFname()) {
        valid = false;
    }
    if (!validateMini()) {
        valid = false;
    }
    if (!validateLname()) {
        valid = false;
    }
    if (!validateDob()) {
        valid = false;
    }
    if (!validateSsn()) {
        valid = false;
    }
    if (!validateAddress1()) {
        valid = false;
    }
    if (!validateCity()) {
        valid = false;
    }
    if (!validateZcode()) {
        valid = false;
    }
    if (!validateEmail()) {
        valid = false;
    }
    if (!validatePhone()) {
        valid = false;
    }
    if (!validateUid()) {
        valid = false;
    }
    if (!validatePword()) {
        valid = false;
    }
    if (!confirmPword()) {
        valid = false;
    }
     if (valid) {
         document.getElementById("submit").disabled = false;
     } else{
        showAlert();
     }
 }
//JavaScript User ID Validation
//New features: Min & Max character, converts UID to lowercase
function validateUid()
{
    uid = document.getElementById("uid").value.toLowerCase(0);
    document.getElementById("uid").value = uid;

    if (uid.length == 0)
    {
        document.getElementById("uid-error").innerHTML =
        "User ID cannot be left blank";
        return false;
    }
    if (!isNaN(uid.charAt(0)))
    {
        document.getElementById("uid-error").innerHTML =
        "User ID cannot begin with a number";
        return false;
    }
    let regex = /^[a-z0-9_-]+$/;
    if (!regex.test(uid))
    {
        document.getElementById("uid-error").innerHTML =
        "User ID can only contain letters, numbers, underscores, & dashes";
        return false;
    }
    else if (uid.length < 5)
    {
        document.getElementById("uid-error").innerHTML =
        "User ID must contain a minimum of 5 characters";
        return false;
    }
    else if (uid.length > 30)
    {
        document.getElementById("uid-error").innerHTML =
        "User ID cannot contain more than 30 characters";
        return false;
    }
    else
    {
        document.getElementById("uid-error").innerHTML = "";
        return true;
    }
}   
//JavaScript Password Validation 1
if (!pword.match(/[a-z]/)) errorMessage.push("Must contain at least one lowercase letter");
if (!pword.match(/[A-Z]/)) errorMessage.push("Must contain at least one uppercase letter");
if (!pword.match(/[0-9]/)) errorMessage.push("Must contain at least one number");
if (!pword.match(/[!\@#\$%&*\-_\\.+\(\)]/)) errorMessage.push("Must contain at least one special character");


//Javascript Confirm Password Validation
//check variable names and make sure they match html
function confirmPword() {
    pword1 = document.getElementById("pword").value;
    pword2 = document.getElementById("con_pword").value;

    if (pword1 !== pword2) {
        document.getElementById("pword2-error").innerHTML = 
        "Passwords don't match";
        return false;
    } else {
        document.getElementById("pword2-error").innerHTML = 
        "Passwords match";
        return true;
    }
}
//JavaScript Review Button Implementation
function reviewInput() {
    var formcontent = document.getElementById("signup");
    var formoutput = "<table class='output'><th colspan = '3'> Review Your Information:</th>";
    for (let i = 0; i < formcontent.length; i++) {
        if (formcontent.elements[i].value !== "") {
            switch (formcontent.elements[i].type) {
                case "checkbox":
                    if (formcontent.elements[i].checked) {
                        formoutput += `<tr><td align='right'>${formcontent.elements[i].name}</td><td>&#x2713;</td></tr>`;
                    }
                    break;
                case "radio":
                    if (formcontent.elements[i].checked) {
                        formoutput += `<tr><td align='right'>${formcontent.elements[i].name}</td><td>${formcontent.elements[i].value}</td></tr>`;
                    }
                    break;
                default:
                    formoutput += `<tr><td align='right'>${formcontent.elements[i].name}</td><td>${formcontent.elements[i].value}</td></tr>`;
            }
        }
    }
    formoutput += "</table>";
    document.getElementById("showInput").innerHTML = formoutput;
}
//Remove review data
function removeReview() {
    document.getElementById("showInput").innerHTML = "";
}

function showAlert() {
    var alertBox = document.getElementById("alert-box");
    var closeAlert = document.getElementById("close-alert");

    alertBox.style.display = "block";
    closeAlert.onclick = function() {
        alertBox.style.display = "none";
    };
}
