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

// Form inputs validation

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const firstName = document.querySelector("#firstName"); // Get user firstname
  const lastName = document.querySelector("#lastName"); // Get user lastname
  const email = document.querySelector("#email"); // Get user email
  const emailRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; // Email regex verification

  const birthDate = document.querySelector("#birthdate"); // Get user birthdate
  const userLocation = document.querySelectorAll(
    '.checkbox-input[name="location"]'
  ); // Get user city
  const quantity = document.querySelector("#quantity"); // Get user quantity tournaments
  const checkbox1 = document.querySelector("#checkbox1"); // Get conditions checkbox
  const checkboxNewslatter = document.querySelector("#checkbox2"); // Checkbox newsletters

  // Error messages inputs
  const firstNameError = document.getElementById("firstName-error"); // Get error message for firstname
  const lastNameError = document.querySelectorAll("#lastName-error"); // Get error message for lastname
  const birthDateError = document.getElementById("birthdate-error"); // Get error message for birthdate

  const messageValidation = document.getElementById("message"); // Validation form message

  // Verify firstname input
  if (firstName.value.length < 2) {
    const errorMessage = document.createElement("p");
    errorMessage.textContent =
      "Veuillez entrer 2 caractères ou plus pour le champ du prénom";
    errorMessage.style.color = "red";
    errorMessage.style.fontSize = "0.8rem";
    firstNameError.appendChild(errorMessage);
    return false;
  } else {
    firstNameError.innerHTML = "";
  }
  // Verify lastname input
  if (lastName.value.length < 2) {
    lastNameError.innerHTML = "";
    const errorMessage = document.createElement("p");
    errorMessage.textContent =
      "Veuillez entrer 2 caractères ou plus pour le champ du nom";
    lastNameError.appendChild(errorMessage);
    console.log("Veuillez entrer 2 caractères ou plus pour le champ du nom");
    return false;
  } else {
    lastNameError.innerHTML = "";
  }
  // Verify email format
  if (!emailRegex.test(email.value)) {
    console.log("Un email valide est requis");
    console.log(email.value);
    return false;
  }

  // Verify birthdate input
  if (!birthDate.value) {
    const errorMessage = document.createElement("p");
    errorMessage.textContent = "Vous devez entrer votre date de naissance";
    errorMessage.style.color = "red";
    errorMessage.style.fontSize = "0.8rem";
    birthDateError.appendChild(errorMessage);

    console.log("Vous devez entrer votre date de naissance");
    return false;
  }

  // Verify tournaments
  if (quantity.value < 0 || quantity.value === "" || isNaN(quantity.value)) {
    console.log("Veillez saisir un nombre de tournois valide");
    return false;
  }

  // Location
  let checkedLocation = false;
  for (let i = 0; i < userLocation.length; i++) {
    if (userLocation[i].checked) {
      checkedLocation = true;
      console.log("Ville choisie", userLocation[i].value);
      break;
    }
  }
  if (!checkedLocation) {
    console.log("Veillez choisir une ville");
    return false;
  }

  // Check conditions
  if (checkbox1.checked === false) {
    console.log("Veillez accepter les conditions");
    return false;
  } else if (checkbox1.checked === true) {
    console.log("Conditions acceptées");
  }

  // Check input newsletters
  if (checkboxNewslatter.checked === true) {
    console.log("Vous êtes inscrit à la newsletter");
    return true;
  }

  // Send form
  console.log("Formulaire envoyé");

  form.style.display = "none";
  const validationText = document.createElement("p");
  validationText.textContent = "Merci ! Votre réservation a été reçue.";
  validationText.style.fontSize = "1rem";
  messageValidation.appendChild(validationText);
});
