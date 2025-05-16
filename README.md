# 📬 JavaScript Email Form with Validation and Animation

This project is a simple **email form** built with **vanilla JavaScript**. It checks if the user has entered valid input before allowing them to send the form. When the form is submitted, a spinner and a fun mail animation are shown to simulate sending the email.

---

## ✅ What It Does

- Validates form fields (`email`, `subject`, `message`)
- Disables the **Send** button until all fields are valid
- Shows a **spinner** and then a **mail GIF** when the form is submitted
- Resets the form after submission or when clicking the **Reset** button

---

## 📂 Files You Need

- `index.html` – The form layout
- `script.js` – The main JavaScript file (included below)
- `img/mail.gif` – Animation shown after form submission
- `img/spinner.gif` – Loading spinner shown during sending

> Make sure the image paths match your folder structure.

---

## 🧠 How the JavaScript Works

- Selects form elements using `document.querySelector`
- Listens for user interactions (`blur`, `click`, `submit`)
- Validates that:
  - Fields are not empty
  - Email contains `@`
- When valid, enables the **Send** button
- On submit:
  - Shows spinner
  - Then shows mail GIF
  - Then resets the form

---

## 📜 JavaScript Code

```javascript
// Variables
const sendBtn = document.querySelector("#sendBtn"),
  email = document.querySelector("#email"),
  subject = document.querySelector("#subject"),
  message = document.querySelector("#message"),
  resetBtn = document.querySelector("#resetBtn"),
  form = document.querySelector("#email-form");

// Event Listeners
eventListeners();
function eventListeners() {
  document.addEventListener("DOMContentLoaded", appInit);
  email.addEventListener("blur", validateField);
  subject.addEventListener("blur", validateField);
  message.addEventListener("blur", validateField);
  resetBtn.addEventListener("click", resetForm);
  form.addEventListener("submit", submitForm);
}

// Functions
function appInit() {
  sendBtn.disabled = true;
}

function submitForm(e) {
  e.preventDefault();
  const spinner = document.getElementById("spinner");
  spinner.style.display = "block";

  const sendEmailImg = document.createElement("img");
  sendEmailImg.src = "../img/mail.gif";
  sendEmailImg.style.display = "block";

  setTimeout(function () {
    spinner.style.display = "none";
    const loaders = document.querySelector("#loaders");
    loaders.appendChild(sendEmailImg);

    setTimeout(function () {
      resetForm();
      sendEmailImg.remove();
    }, 3000);
  }, 2000);
}

function validateField() {
  validateLength(this);
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

function validateLength(field) {
  if (field.value.length > 0) {
    field.style.borderBottomColor = "green";
    field.classList.remove("error");
  } else {
    field.style.borderBottomColor = "red";
    field.classList.add("error");
  }
}

function validateEmail(email) {
  const emailText = email.value;
  if (emailText.includes("@")) {
    email.style.borderBottomColor = "green";
    email.classList.remove("error");
  } else {
    email.style.borderBottomColor = "red";
    email.classList.add("error");
  }
}

function resetForm() {
  form.reset();
}
