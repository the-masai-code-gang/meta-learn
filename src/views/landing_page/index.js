const modal_container = document.querySelector(".modal-container");
var showModal = document.querySelector(".showModal");
function showLogIn() {
  modal_container.classList.add("showModal");
}
function closeModal() {
  modal_container.classList.remove("showModal");
}

const signInModal = document.querySelector(".signInModal");
const signInModalContainer = document.querySelector(".modal-sign-in");

function showSignUp() {
  signInModalContainer.classList.add("signInModal");
}

function closeModalsignIn() {
  signInModalContainer.classList.remove("signInModal");
}
function signUp() {
  closeModalsignIn();
  showLogIn();
}
function logIn() {
  window.location.href = "./indexAfterLogin.html";
}
function redirect(path){
  window.location.href = path;
}