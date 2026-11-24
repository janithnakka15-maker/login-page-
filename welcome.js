const welcomeMessage = document.querySelector("#welcome-message");
const logoutButton = document.querySelector("#logout-button");
let loggedInUser;

try {
  loggedInUser = JSON.parse(sessionStorage.getItem("loggedInUser"));
} catch {
  loggedInUser = null;
}

if (!loggedInUser || typeof loggedInUser.name !== "string") {
  window.location.replace("index.html");
} else {
  welcomeMessage.textContent = `Welcome, ${loggedInUser.name}!`;
}

logoutButton.addEventListener("click", () => {
  sessionStorage.removeItem("loggedInUser");
  window.location.href = "index.html";
});
