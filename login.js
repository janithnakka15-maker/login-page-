const loginForm = document.querySelector("#login-form");
const message = document.querySelector("#message");
const loginEmail = "nakkashane18@gmail.com";
const loginPassword = "Shane@123";

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(loginForm);
  const email = String(formData.get("email")).trim();
  const password = String(formData.get("password"));

  if (
    email.toLowerCase() !== loginEmail.toLowerCase() ||
    password !== loginPassword
  ) {
    message.textContent = "Invalid email or password";
    message.className = "message error";
    return;
  }

  sessionStorage.setItem("loggedInUser", JSON.stringify({ name: "Shane" }));
  message.textContent = "Login Successful";
  message.className = "message success";
  window.setTimeout(() => {
    window.location.href = "welcome.html";
  }, 500);
});
