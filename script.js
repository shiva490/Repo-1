var email = document.forms["form"]["email"];
var pass = document.forms["form"]["password"];

var email_error = document.getElementById("email_error");

var pass_error = document.getElementById("pass_error");

function validation(event) {
  event.preventDefault(); // Prevent the default form submission

  if (email_error.style.display === "none") {
    email_error.style.display = "block";
  } else {
    email_error.style.display = "none";
  }
}
