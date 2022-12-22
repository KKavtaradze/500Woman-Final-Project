// burger bar
let burgerBar = document.getElementById("burgerBarID");
let navigation = document.getElementById("navigationID");
burgerBar.addEventListener("click", function () {
  navigation.classList.toggle("navDrop");
  burgerBar.classList.toggle("barMove");
});

// form
let registrationForm = document.getElementById("registrationForm");

registrationForm.addEventListener("submit", function (event) {
  event.preventDefault();
  let errors = {};

  // username validation
  let usernameValue = document.getElementById("usernamefield").value;
  if ((usernameValue == "") & (usernameValue.length < 2)) {
    errors.username =
      "The input should be longer than 2 letters.";
  }

  let passwordValue = document.getElementById("passwordfield").value;
  let passwordRepeat = document.getElementById("passwordRepeat").value;

  if (passwordValue != passwordRepeat) {
    errors.passwordRepeat = "Passwords do not match, try again.";
  }

  if (passwordValue.length < 8) {
    errors.passwordValue = "Passwords do not match";
  }

  let termsCheckbox = document.getElementById("agreeTerms").checked;

  if (!termsCheckbox) {
    errors.agreeTerms = "Please agree Terms and Conditions";
  }

  console.log(errors);
  document.querySelectorAll(".error-text").forEach((item) => {
    item.innerText = " ";
  });

  for (let key in errors) {
    let spanText = document.getElementById("error_" + key);

    if (spanText) {
      spanText.innerText = errors[key];
    }
  }

  if (Object.keys(errors).length == 0) {
    registrationForm.submit();
  }
});

let password = document.getElementById("passwordfield");
let eyeicon = document.getElementById("eyeIcon");

eyeicon.addEventListener("click", function () {
  if (password.type == "password") {
    password.setAttribute("type", "text");
    eyeicon.classList.remove("fa-eye-slash");
    eyeicon.classList.add("fa-eye");
  } else {
    password.setAttribute("type", "password");
    eyeicon.classList.remove("fa-eye");
    eyeicon.classList.add("fa-eye-slash");
  }
});
