const firstname = document.getElementById("first-name");
const lastname = document.getElementById("last-name");
const emailEl = document.getElementById("email");
const queryType = document.getElementById("querytype");
const message = document.getElementById("message-text");
const check = document.getElementById("terms");
const consent = document.getElementById("consent");
const form = document.getElementById("contact-form");
const submitButton = document.getElementById("submit-button");
const queryType1 = document.getElementById("general");
const queryType2 = document.getElementById("support");
let isValid = true;

submitButton.addEventListener("click", function (event) {
  event.preventDefault();

  if (firstname.value === "") {
    isValid = false;
    firstname.style.borderColor = "red";
    const error = document.getElementById("first-name-error");
    error.style.display = "block";
  } else {
    firstname.style.borderColor = "";
    const error = document.getElementById("first-name-error");
    error.style.display = "none";
    isValid = true;
  }
  if (lastname.value === "") {
    isValid = false;
    lastname.style.borderColor = "red";
    const error = document.getElementById("last-name-error");
    error.style.display = "block";
  } else {
    lastname.style.borderColor = "";
    const error = document.getElementById("last-name-error");
    error.style.display = "none";
    isValid = true;
  }
  if (emailEl.value === "") {
    isValid = false;
    emailEl.style.borderColor = "red";
    const error = document.getElementById("email-error");
    error.style.display = "block";
  } else if (!emailEl.checkValidity()) {
    isValid = false;
    emailEl.style.borderColor = "red";
    const error = document.getElementById("email-error");
    error.style.display = "block";
  } else {
    emailEl.style.borderColor = "";
    const error = document.getElementById("email-error");
    error.style.display = "none";
    isValid = true;
  }
   list = [queryType1, queryType2];
  if (list.some((radio) => radio.checked)) {
    const error = document.getElementById("query-error");
    error.style.display = "none";
    isValid = true;
  } else {
    const error = document.getElementById("query-error");
    error.style.display = "block";
    isValid = false;
  }
  if (message.value === "") {
    isValid = false;
    message.style.borderColor = "red";
    const error = document.getElementById("message-error");
    error.style.display = "block";
  } else {
    message.style.borderColor = "";
    const error = document.getElementById("message-error");
    error.style.display = "none";
    isValid = true;
  }
  if (!check.checked) {
    isValid = false;

    const error = document.getElementById("terms-error");
    error.style.display = "block";
  } else {
    const error = document.getElementById("terms-error");
    error.style.display = "none";
    isValid = true;
  }
 

  if (isValid) {
    showToast();
  }
});

function showToast() {
  if (isValid) {
    const toast = document.getElementById("toast");
    toast.style.display = "block";
    setTimeout(function () {
      toast.style.display = "none";
      form.reset();
    }, 3000);
  }
}