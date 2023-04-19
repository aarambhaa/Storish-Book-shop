function validateEmail() {
    
    let val = document.getElementById("email").value;

     if (val === "") {
        document.getElementById("confirmation").textContent = "Please Enter an email id";
     } else {
        document.getElementById("confirmation").textContent = "You have been subscribed with the email " +
        document.getElementById("email").value;
      
     }
}

/*email-confirmation*/ 

/*email-confirmation-end*/ 
