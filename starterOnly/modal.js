function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const modalBody = document.querySelector(".modal-body");
const formData = document.querySelectorAll(".formData");

const closeBtn = document.querySelectorAll(".close"); // Get close modal button

// Forms inputs
const form = document.getElementById("form"); // Get form

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
closeBtn[0].addEventListener("click", closeModal); // Close modal event on click

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// Close modal form
function closeModal() {
  modalbg.style.display = "none";
}

// Verification
function checkFirstName() {
  const firstName = document.querySelector("#firstName"); // Get firstname
  const firstNameError = document.getElementById("firstName-error"); // Get firstname error

  if (firstName.value.length < 2) {
    const errorMessage = document.createElement("p");
    errorMessage.textContent =
      "Veuillez entrer 2 caractères ou plus pour le champ du prénom";
    firstNameError.appendChild(errorMessage);
    return false;
  } else {
    firstNameError.innerHTML = "";
    return true;
  }
}

function checkLastName() {
  const lastName = document.querySelector("#lastName"); // Get lastname
  const lastNameError = document.getElementById("lastName-error");

  if (lastName.value.length < 2) {
    const errorMessage = document.createElement("p");
    errorMessage.textContent =
      "Veuillez entrer 2 caractères ou plus pour le champ du nom";
    lastNameError.appendChild(errorMessage);
    return false;
  } else {
    lastNameError.innerHTML = "";
    return true;
  }
}

function checkEmail() {
  const email = document.querySelector("#email"); // Get email
  const emailError = document.getElementById("email-error"); // Get email error
  const emailRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; // Email regex verification

  if (!emailRegex.test(email.value)) {
    const errorMessage = document.createElement("p");
    errorMessage.textContent = "Veuillez entrer une adresse email valide";
    emailError.appendChild(errorMessage);
    return false;
  } else {
    console.log("Email valide");
    return true;
  }
}

function checkBirthDate() {
  const birthDate = document.querySelector("#birthdate"); // Get birthdate
  const birthDateError = document.getElementById("birthdate-error");

  if (!birthDate.value) {
    const errorMessage = document.createElement("p");
    errorMessage.textContent = "Vous devez entrer votre date de naissance";
    birthDateError.appendChild(errorMessage);
    return false;
  } else {
    birthDateError.innerHTML = "";
    return true;
  }
}

function checkQuantity() {
  const quantity = document.querySelector("#quantity"); // Get quantity tournaments
  const quantityError = document.getElementById("quantity-error");

  if (quantity.value < 0 || quantity.value === "" || isNaN(quantity.value)) {
    const errorMessage = document.createElement("p");
    errorMessage.textContent = "Vous devez entrer un nombre";
    quantityError.appendChild(errorMessage);
    return false;
  } else {
    quantityError.innerHTML = "";
    return true;
  }
}

function checkLocation() {
  const userLocation = document.querySelectorAll(
    '.checkbox-input[name="location"]'
  ); // Get user city
  const locationError = document.getElementById("location-error");

  let checkedLocation = false;
  for (let i = 0; i < userLocation.length; i++) {
    if (userLocation[i].checked) {
      checkedLocation = true;
      console.log("Ville choisie", userLocation[i].value);
      return true;
    }
  }
  if (!checkedLocation) {
    const errorMessage = document.createElement("p");
    errorMessage.textContent = "Vous devez choisir une ville";
    locationError.appendChild(errorMessage);
    return false;
  }
}

function checkCredentials() {
  const checkbox1 = document.querySelector("#checkbox1"); // Get conditions checkbox

  if (checkbox1.checked === false) {
    console.log("Veillez accepter les conditions");
    return false;
  } else if (checkbox1.checked === true) {
    console.log("Conditions acceptées");
    return true;
  }
}

function checkNewsletters() {
  const checkboxNewslatter = document.querySelector("#checkbox2"); // Checkbox newsletters
  if (checkboxNewslatter.checked === true) {
    console.log("Vous êtes inscrit à la newsletter");
    return true;
  }
}

// Form inputs validation
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const messageValidation = document.getElementById("message"); // Validation form message

  const allInputs =
    checkFirstName() &&
    checkLastName() &&
    checkEmail() &&
    checkBirthDate() &&
    checkQuantity() &&
    checkLocation() &&
    checkCredentials() &&
    checkNewsletters();

  if (allInputs) {
    form.style.display = "none";
    const validationText = document.createElement("p");
    validationText.textContent = "Merci ! Votre réservation a été reçue.";
    validationText.style.fontSize = "1rem";
    messageValidation.appendChild(validationText);

    console.log("Formulaire envoyé");
  }
});
