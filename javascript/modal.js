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

// clear error messages
function clearErrorMessages(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}

function checkFirstName() {
  const firstName = document.querySelector("#firstName");
  const formData = firstName.closest(".formData");

  // Clear error messages
  formData.setAttribute("data-error-visible", false);

  if (firstName.value.length < 2) {
    const errorMessage =
      "Veuillez entrer 2 caractères ou plus pour le champ du prénom";
    formData.setAttribute("data-error", errorMessage);
    formData.setAttribute("data-error-visible", true);
    return false;
  } else {
    return true;
  }
}

function checkLastName() {
  const lastName = document.querySelector("#lastName"); // Get lastname
  const formData = lastName.closest(".formData");

  formData.setAttribute("data-error-visible", false);

  if (lastName.value.length < 2) {
    const errorMessage =
      "Veuillez entrer 2 caractères ou plus pour le champ du nom";
    formData.setAttribute("data-error", errorMessage);
    formData.setAttribute("data-error-visible", true);
    return false;
  } else {
    return true;
  }
}

function checkEmail() {
  const email = document.querySelector("#email"); // Get email
  const formData = email.closest(".formData");
  const emailRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; // Email regex verification

  formData.setAttribute("data-error-visible", false);

  if (!emailRegex.test(email.value)) {
    const errorMessage = "Veuillez entrer une adresse email valide";
    formData.setAttribute("data-error", errorMessage);
    formData.setAttribute("data-error-visible", true);
    return false;
  } else {
    return true;
  }
}

function checkBirthDate() {
  const birthDate = document.querySelector("#birthdate"); // Get birthdate
  const currentDate = new Date();
  const formData = birthDate.closest(".formData");

  formData.setAttribute("data-error-visible", false);

  if (!birthDate.value) {
    const errorMessage = "Vous devez entrer votre date de naissance";
    formData.setAttribute("data-error", errorMessage);
    formData.setAttribute("data-error-visible", true);
    return false;
  } else {
    const birthDateObj = new Date(birthDate.value);

    if (birthDateObj > currentDate) {
      const errorMessage =
        "La date de naissance ne peut pas être supérieure à aujourd'hui";
      formData.setAttribute("data-error", errorMessage);
      formData.setAttribute("data-error-visible", true);
      return false;
    } else {
      return true;
    }
  }
}

function checkQuantity() {
  const quantity = document.querySelector("#quantity"); // Get quantity tournaments
  const formData = quantity.closest(".formData");

  formData.setAttribute("data-error-visible", false);

  if (quantity.value < 0 || quantity.value === "" || isNaN(quantity.value)) {
    const errorMessage = "Vous devez entrer un nombre";
    formData.setAttribute("data-error", errorMessage);
    formData.setAttribute("data-error-visible", true);
    return false;
  } else {
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
