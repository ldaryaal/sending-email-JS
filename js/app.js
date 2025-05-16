//variables
const sendBtn = document.querySelector("#sendBtn"),
  email = document.querySelector("#email"),
  subject = document.querySelector("#subject"),
  message = document.querySelector("#message"),
  resetBtn = document.querySelector("#resetBtn"),
  form = document.querySelector("#email-form");

//eventListeners
eventListeners();
function eventListeners() {
  //app initialization
  document.addEventListener("DOMContentLoaded", appInit);

  //validating fields
  email.addEventListener("blur", validateField);
  subject.addEventListener("blur", validateField);
  message.addEventListener("blur", validateField);
  //reset all fields
  resetBtn.addEventListener("click", resetForm);

  //submit & show gif as a successful submit
  form.addEventListener("submit", submitForm);
}

//functions
function appInit() {
  //disabled send button on load
  sendBtn.disabled = true;
}

function submitForm(e) {
  e.preventDefault();

  //show the spinner
  const spinner = document.getElementById("spinner");
  spinner.style.display = "block";

  //make second spinner
  const sendEmailImg = document.createElement("img");
  sendEmailImg.src = "../img/mail.gif";
  sendEmailImg.style.display = "block";
  // console.log(sendEmailImg)

  //show the image after spinner
  setTimeout(function () {
    //hide the first spinner
    spinner.style.display = "none";

    //append img to HTML
    const loaders = document.querySelector("#loaders");
    loaders.appendChild(sendEmailImg);

    //reset form & remove gifs
    setTimeout(function () {
      resetForm();
      sendEmailImg.remove();
    }, 3000);
  }, 2000);
}
//validating field of form
function validateField() {
  // console.log(this)

  validateLength(this);

  // validate email field
  if (this.type === "email") {
    validateEmail(this);
  }

  let error = document.querySelectorAll(".error");
  if (email.value !== "" && subject.value !== "" && message.value !== "") {
    if (error.length === 0) {
      sendBtn.disabled = false;
    }
  }
}

//validate length of fields
function validateLength(field) {
  if (field.value.length > 0) {
    // console.log("true")
    field.style.borderBottomColor = "green";
    field.classList.remove("error");
  } else {
    // console.log("false")
    field.style.borderBottomColor = "red";
    field.classList.add("error");
  }
}

//validate email field contains @ or not
function validateEmail(email) {
  // console.log(email)
  const emailText = email.value;
  if (emailText.includes("@")) {
    // console.log("true")
    email.style.borderBottomColor = "green";
    email.classList.remove("error");
  } else {
    // console.log("false")
    email.style.borderBottomColor = "red";
    email.classList.add("error");
  }
}

// reset form with button
function resetForm() {
  form.reset();
}
