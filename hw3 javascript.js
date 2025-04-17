/*
Name: Alexa Schubeck
Date created: 02/05/25
Date last edited: 04/11/25
Version: 1.3
Description: Homework 3 Javascript file
*/

// Display today's date
const d = new Date();
document.getElementById("today").innerHTML = d.toLocaleDateString();

// Pain scale slider
const slider = document.getElementById("range");
const output = document.getElementById("range-slider");
output.innerHTML = slider.value;

slider.oninput = function () {
    output.innerHTML = this.value;
};

// Validate First Name
function validateFname() {
    const fname = document.getElementById("fname");
    const error = document.getElementById("fname-error");
    const regex = /^[A-Za-z'-]{1,30}$/;

    if (!regex.test(fname.value)) {
        error.textContent = "Invalid first name. Only letters, apostrophes, and dashes are allowed.";
        fname.style.borderColor = "red";
        return false;
    } else {
        error.textContent = "";
        fname.style.borderColor = "green";
        return true;
    }
}

// Validate Middle Initial
function validateMname() {
    const mini = document.getElementById("mname");
    const error = document.getElementById("mname-error");
    const regex = /^[A-Za-z]?$/;

    if (!regex.test(mini.value)) {
        error.textContent = "Middle initial must be a single letter or blank.";
        mini.style.borderColor = "red";
        return false;
    } else {
        error.textContent = "";
        mini.style.borderColor = "green";
        return true;
    }
}

// Validate Last Name
function validateLname() {
    const lname = document.getElementById("lname");
    const error = document.getElementById("lname-error");
    const regex = /^[A-Za-z'-]{1,30}$/;

    if (!regex.test(lname.value)) {
        error.textContent = "Invalid last name. Only letters, apostrophes, and dashes are allowed.";
        lname.style.borderColor = "red";
        return false;
    } else {
        error.textContent = "";
        lname.style.borderColor = "green";
        return true;
    }
}

// Validate Date of Birth
function validateDob() {
    const dob = document.getElementById("dob");
    const error = document.getElementById("dob-error");
    const dobValue = new Date(dob.value);
    const today = new Date();
    const minDate = new Date(today.getFullYear() - 120, today.getMonth(), today.getDate());

    if (!dob.value) {
        error.textContent = "Date of Birth is required.";
        dob.style.borderColor = "red";
        return false;
    } else if (dobValue > today) {
        error.textContent = "Date of Birth cannot be in the future.";
        dob.style.borderColor = "red";
        return false;
    } else if (dobValue < minDate) {
        error.textContent = "Date of Birth cannot be more than 120 years ago.";
        dob.style.borderColor = "red";
        return false;
    } else {
        error.textContent = "";
        dob.style.borderColor = "green";
        return true;
    }
}

// Validate Social Security Number
function validateSSN() {
    const ssn = document.getElementById("SSN");
    const error = document.getElementById("SSN-error");
    const regex = /^\d{3}-\d{2}-\d{4}$/;

    if (!regex.test(ssn.value)) {
        error.textContent = "Invalid SSN. Format must be XXX-XX-XXXX.";
        ssn.style.borderColor = "red";
        return false;
    } else {
        error.textContent = "";
        ssn.style.borderColor = "green";
        return true;
    }
}

// Automatically format SSN as the user types
function formatSSN() {
    const ssn = document.getElementById("SSN");
    let value = ssn.value.replace(/\D/g, ""); // Remove non-digit characters

    if (value.length > 3 && value.length <= 5) {
        value = value.replace(/^(\d{3})(\d{0,2})/, "$1-$2");
    } else if (value.length > 5) {
        value = value.replace(/^(\d{3})(\d{2})(\d{0,4})/, "$1-$2-$3");
    }

    ssn.value = value;
}

//City Validation

function validateCity() {
    const city = document.getElementById("city").value.trim();
    const cityError = document.getElementById("city-error");

    if (!city) {
        cityError.textContent = "City is required.";
        cityError.style.color = "red";
        return false;
    } else {
        cityError.textContent = ""; // Clear error message
        return true;
    }
}

//JavaScript Zip Code Validation 
function validateZip() {
    const zip = document.getElementById("zip").value.trim();
    const zipError = document.getElementById("zip-error");
    const regex = /^\d{5}(-\d{4})?$/; // Matches 5-digit or 9-digit zip codes

    if (!zip) {
        zipError.textContent = "Zip Code is required.";
        zipError.style.color = "red";
        return false;
    } else if (!regex.test(zip)) {
        zipError.textContent = "Invalid Zip Code. Format must be XXXXX or XXXXX-XXXX.";
        zipError.style.color = "red";
        return false;
    } else {
        zipError.textContent = ""; // Clear error message
        return true;
    }
}

// Validate Email
function validateEmail() {
    const email = document.getElementById("email").value;
    const error = document.getElementById("email-error");
    const emailR = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (!emailR.test(email)) {
        error.textContent = "Invalid email address, please re-enter.";
        return false;
    } else {
        error.textContent = ""; // Clear error message
        return true;
    }
}

// Validate Phone Number
function validatePhone() {
    const phone = document.getElementById("tel").value;
    const error = document.getElementById("tel-error");
    const phoneR = /^\d{3}-?\d{3}-?\d{4}$/; // Regex for phone number format

    if (!phoneR.test(phone)) {
        error.textContent = "Invalid phone number. Format must be XXX-XXX-XXXX.";
        return false;
    } else {
        error.textContent = ""; // Clear error message
        return true;
    }
}

//Validate EVERYTHING- this enables (or disables) the submit button depending on if the use inputs valid data or not
function validateEverything() {
    let valid = true;

    if (!validateFname()) valid = false;
    if (!validateMname()) valid = false;
    if (!validateLname()) valid = false;
    if (!validateDob()) valid = false;
    if (!validateSSN()) valid = false;
    if (!validateEmail()) valid = false;
    if (!validatePhone()) valid = false;
    if (!validateCity()) valid = false; // Validate City
    if (!validateLname()) valid = false; // Validate State
    if (!validateDob()) valid = false; // Validate Zip Code
    if (!validateSSN()) valid = false;
    if (!validateEmail()) valid = false;se;
    if (!validatePhone()) valid = false;
    if (!validateCity()) valid = false; // Validate City
    if (!validateState()) valid = false; // Validate State;
    if (!validateZip()) valid = false; // Validate Zip Code
    if (!validateUid()) valid = false;
    if (!validatePassword()) valid = false;
    if (!confirmPword()) valid = false;
//New features: Min & Max character, converts UID to lowercase
    const submitButton = document.getElementById("submit");
    submitButton.disabled = !valid;ById("uid").value.trim(); // Get the User ID and trim whitespace
}   const error = document.getElementById("uid-error");

//JavaScript User ID Validationempty
//New features: Min & Max character, converts UID to lowercase
function validateUid() {
    const uid = document.getElementById("uid").value.trim();
    const error = document.getElementById("uid-error");

    if (uid.length === 0) {
        error.textContent = "User ID cannot be left blank.";
        return false;
    }

    if (!isNaN(uid.charAt(0))) {
        error.textContent = "User ID cannot begin with a number.";
        return false;
    }

    const regex = /^[a-zA-Z0-9_-]+$/;
    if (!regex.test(uid)) {
        error.textContent = "User ID can only contain letters, numbers, underscores, and dashes.";
        return false;
    }

    if (uid.length < 5 || uid.length > 30) {
        error.textContent = "User ID must be between 5 and 30 characters.";
        return false;
    }

    error.textContent = ""; // Clear error message
    return true;
}

//JavaScript Password Validation 1
function validatePassword() {
    const pword = document.getElementById("pword").value; // Get the password
    const error = document.getElementById("pword-error"); // Error message container
    const errorMessages = []; // Array to store error messages

    // Check for at least one lowercase letter
    if (!pword.match(/[a-z]/)) {
        errorMessages.push("Must contain at least one lowercase letter.");
    }

    // Check for at least one uppercase letter
    if (!pword.match(/[A-Z]/)) {
        errorMessages.push("Must contain at least one uppercase letter.");
    }

    // Check for at least one number
    if (!pword.match(/[0-9]/)) {
        errorMessages.push("Must contain at least one number.");
    }

    // Check for at least one special character
    if (!pword.match(/[!\@#\$%&*\-_\\.+\(\)]/)) {
        errorMessages.push("Must contain at least one special character.");
    }

    // Check the length of the password
    if (pword.length < 8) {
        errorMessages.push("Password must be at least 8 characters long.");
    }

    // Display error messages or clear them if valid
    if (errorMessages.length > 0) {
        error.textContent = errorMessages.join(" ");
        return false;
    } else {
        error.textContent = ""; // Clear error message
        return true;
    }
}

//Javascript Confirm Password Validation
//check variable names and make sure they match html
function confirmPword() {
    const pword1 = document.getElementById("pword").value; // Get the password
    const pword2 = document.getElementById("con_pword").value; // Get the confirmation password
    const error = document.getElementById("pword2-error"); // Error message container

    // Check if passwords match
    if (pword1 !== pword2) {
        error.textContent = "Passwords don't match.";
        return false;
    } else {
        error.textContent = "Passwords match.";
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

// Choose State of Residence!
const states = [
    "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", 
    "Delaware", "District of Columbia", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", 
    "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", 
    "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", 
    "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", 
    "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", 
    "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", 
    "West Virginia", "Wisconsin", "Wyoming"
];

function populateStates() {
    const stateSelect = document.getElementById("state");
    states.forEach(state => {
        const option = document.createElement("option");
        option.value = state;
        option.textContent = state;
        stateSelect.appendChild(option);
    });
}

const countries = [
    "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", 
    "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", 
    "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", 
    "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia", 
    "Cameroon", "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia",  
    "Comoros", "Congo (Congo-Brazzaville)", "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czechia", 
    "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", 
    "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini (fmr. Swaziland)", "Ethiopia", "Fiji", 
    "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", 
    "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Holy See", "Honduras", "Hungary", 
    "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", 
    "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Korea (North)", "Korea (South)", 
    "Kosovo", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", 
    "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Madagascar", "Malawi", "Malaysia", 
    "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", 
    "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", 
    "Myanmar (formerly Burma)", "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", 
    "Nicaragua", "Niger", "Nigeria", "North Macedonia", "Norway", "Oman", "Pakistan", "Palau", 
    "Palestine State", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", 
    "Portugal", "Qatar", "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", 
    "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", 
    "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", 
    "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Sudan", "Spain", "Sri Lanka", 
    "Sudan", "Suriname", "Sweden", "Switzerland", "Syria", "Tajikistan", "Tanzania", "Thailand", 
    "Timor-Leste", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", 
    "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States of America", 
    "Uruguay", "Uzbekistan", "Vanuatu", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"
];

function populateCountries() {
    const countrySelect = document.getElementById("country");
    countries.forEach(country => {
        const option = document.createElement("option");
        option.value = country;
        option.textContent = country;
        countrySelect.appendChild(option);
    });
}

// Call the function to populate the states when the page loads
window.onload = function() {
    populateStates(); // Populate states
    populateCountries(); // Populate countries
};

// I found this API at Zippopotam.us to help make address entry more user frendly :))
function autoFillCityState() {
    const zip = document.getElementById("zip").value;
    const cityField = document.getElementById("city");
    const stateField = document.getElementById("state");
    const error = document.getElementById("zip-error");

    if (zip.length === 5) {
        fetch(`https://api.zippopotam.us/us/${zip}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error("Invalid Zip Code");
                }
                return response.json();
            })
            .then(data => {
                cityField.value = data.places[0]["place name"];
                stateField.value = data.places[0]["state"];
                error.textContent = ""; // Clear error
            })
            .catch(() => {
                error.textContent = "Invalid Zip Code. Please enter a valid one.";
                cityField.value = "";
                stateField.value = "";
            });
    }
}

function validateGender() {
    const genderError = document.getElementById("gender-error");
    const genderInputs = document.getElementsByName("gender");
    let isSelected = false;

    // Check if any gender radio button is selected
    for (const input of genderInputs) {
        if (input.checked) {
            isSelected = true;
            break;
        }
    }

    if (!isSelected) {
        genderError.textContent = "Please select a gender.";
        genderError.style.color = "red";
        return false;
    } else {
        genderError.textContent = ""; // Clear the error message
        return true;
    }
}

function validateState() {
    const state = document.getElementById("state").value;
    const stateError = document.getElementById("state-error");

    if (!state) {
        stateError.textContent = "State is required.";
        stateError.style.color = "red";
        return false;
    } else {
        stateError.textContent = ""; // Clear error message
        return true;
    }
}

document.getElementById("footer-button").textContent = "Click Me";
