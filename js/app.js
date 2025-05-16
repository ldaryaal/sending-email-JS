//variables
const sendBtn = document.querySelector("#sendBtn")



//eventListeners
eventListeners()
function eventListeners() {
    //app initialization
    document.addEventListener("DOMContentLoaded", appInit)
    
}

//functions
function appInit() {

    sendBtn.disabled = true
    
}
