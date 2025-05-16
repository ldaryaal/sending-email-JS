//variables
const sendBtn = document.querySelector("#sendBtn"),
      email = document.querySelector('#email'),
      subject = document.querySelector('#subject'),
      message = document.querySelector('#message')



//eventListeners
eventListeners()
function eventListeners() {
    //app initialization
    document.addEventListener("DOMContentLoaded", appInit)

    //validating fields
    email.addEventListener("blur", validateField)
    subject.addEventListener("blur", validateField)
    message.addEventListener("blur", validateField)
    
}

//functions
function appInit() {
    //disabled send button on load
    sendBtn.disabled = true
    
}

//validating field of form
function validateField() {
    // console.log(this)

    validateLength(this)
     
}

//validate length of fields
function validateLength(field) {
    
    if (field.value.length > 0 ){
        // console.log("true")
        field.style.borderBottomColor = "green"
        field.classList.remove("error")
    } else {
        // console.log("false")
        field.style.borderBottomColor = "red"
        field.classList.add("error")
    }

    
}

