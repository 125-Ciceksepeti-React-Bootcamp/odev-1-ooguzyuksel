window.addEventListener("DOMContentLoaded", remover);

//TODO:Element Selectors
const submitButton = document.querySelector(".form-submit-btn");
const mainModal = document.querySelector(".bg-modal");
const modalInfo = document.querySelector(".form-info-modal");
const modalButton = document.querySelector(".modal-close-button");

//TODO:Input Selectors
const companyInput = document.querySelector("#company");
const titleInput = document.querySelector("#title");
const firstNameInput = document.querySelector("#firstName");
const lastNameInput = document.querySelector("#lastName");
const mailInput = document.querySelector("#mail");
const phoneInput = document.querySelector("#phone");
const textareaInput = document.querySelector("#message");
const radioInput = document.getElementsByName("radioCheck");

//TODO:Creating Element
const modalSubInfo = document.createElement("div");

// TODO:Event Listeners
modalButton.addEventListener("click", visibilityHandler);

// navSearch.addEventListener("keyup", onChangeHandler);
submitButton.addEventListener("click", submitHandler);

function remover() {
  mainModal.classList.add("invisibile");
}

function visibilityHandler() {
  mainModal.classList.add("invisibile");
}

function submitHandler(e) {
  e.preventDefault();

  let radVal;

  radioValue = radioInput.forEach((item) => {
    if (item.checked) {
      item.checked = false;
      radVal = item.value;
    }
  });

  modalSubInfo.innerHTML = `<ul>
  <li>Company: ${companyInput.value}</li>
  <li>Title: ${titleInput.value}</li>
  <li>First Name: ${firstNameInput.value}</li>
  <li>Last Name: ${lastNameInput.value}</li>
  <li>E-Mail: ${mailInput.value}</li>
  <li>Info: ${radVal}</li>
  <li>Phone: ${phoneInput.value}</li>
  <li>Message: ${textareaInput.value}</li>
  </ul>`;

  if (
    companyInput.value === "" ||
    titleInput.value === "" ||
    firstNameInput.value === "" ||
    lastNameInput.value === "" ||
    mailInput.value === "" ||
    phoneInput.value === "" ||
    textareaInput.value === ""
  ) {
    modalSubInfo.innerHTML = `<h1 class="blob"> Attention! <br> All fields should be completed </h1>`;
  } else {
    companyInput.value = "";
    titleInput.value = "";
    firstNameInput.value = "";
    lastNameInput.value = "";
    mailInput.value = "";
    phoneInput.value = "";
    textareaInput.value = "";
  }

  modalInfo.appendChild(modalSubInfo);
  mainModal.classList.remove("invisibile");
}

modalSubInfo.innerHTML = "";
