const form = document.getElementById("registrationForm");
const message = document.getElementById("message");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  message.textContent = "Thank you, " + name + "! Your demo registration has been submitted.";
  form.reset();
});
