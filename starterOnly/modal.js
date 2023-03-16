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

// clear error messages
function clearErrorMessages(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}

function checkFirstName() {
  const firstName = document.querySelector("#firstName"); // Get firstname
  const firstNameError = document.getElementById("firstName-error"); // Get firstname error

  clearErrorMessages(firstNameError);

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

  clearErrorMessages(lastNameError);

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

  clearErrorMessages(emailError);

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
  const currentDate = new Date();

  const errorMessage = document.createElement("p");
  const birthDateError = document.getElementById("birthdate-error");

  clearErrorMessages(birthDateError);

  if (!birthDate.value) {
    errorMessage.textContent = "Vous devez entrer votre date de naissance";
    birthDateError.appendChild(errorMessage);
    return false;
  } else {
    const birthDateObj = new Date(birthDate.value);

    if (birthDateObj > currentDate) {
      errorMessage.textContent =
        "La date de naissance ne peut pas être supérieure à aujourd'hui";
      birthDateError.appendChild(errorMessage);
      return false;
    } else {
      birthDateError.innerHTML = "";
      return true;
    }
  }
}

function checkQuantity() {
  const quantity = document.querySelector("#quantity"); // Get quantity tournaments
  const quantityError = document.getElementById("quantity-error");

  clearErrorMessages(quantityError);

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

  clearErrorMessages(locationError);

  let checkedLocation = false;
  for (let i = 0; i < userLocation.length; i++) {
    if (userLocation[i].checked) {
      checkedLocation = true;
      locationError.innerHTML = "";
      console.log("Ville choisie", userLocation[i].value);
      return true;
    }
  }
  if (!checkedLocation) {
    const errorMessage = document.createElement("p");
    errorMessage.textContent = "Vous devez choisir une option";
    locationError.appendChild(errorMessage);
    return false;
  }
}

function checkCredentials() {
  const checkbox1 = document.querySelector("#checkbox1"); // Get conditions checkbox
  const credentialsError = document.getElementById("credential-error");

  clearErrorMessages(credentialsError);

  if (checkbox1.checked === false) {
    const errorMessage = document.createElement("p");
    errorMessage.textContent =
      "Vous devez vérifier que vous acceptez les termes et conditions.";
    credentialsError.appendChild(errorMessage);
    return false;
  } else if (checkbox1.checked === true) {
    console.log("Conditions acceptées");
    credentialsError.innerHTML = "";
    return true;
  }
}

function checkNewsletters() {
  const checkboxNewslatter = document.querySelector("#checkbox2"); // Checkbox newsletters
  if (checkboxNewslatter.checked === true) {
    console.log("Vous êtes inscrit à la newsletter");
    return true;
  } else {
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
    const closeFormBtn = document.createElement("button");
    closeFormBtn.classList.add("close-validation");
    validationText.textContent = "Merci pour votre inscription";
    closeFormBtn.textContent = "Fermer";
    closeFormBtn.addEventListener("click", closeModal);
    messageValidation.appendChild(validationText);
    messageValidation.appendChild(closeFormBtn);
  }
});
