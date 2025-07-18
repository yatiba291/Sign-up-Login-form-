document.getElementById("signupForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const firstName = document.getElementById("firstname").value.trim();
  const lastName = document.getElementById("lastname").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmpassword").value;
  const errorEl = document.getElementById("signupError");

  if (!firstName || !lastName || !email || !password || !confirmPassword) {
    errorEl.textContent = "All fields are required.";
    console.log(errorEl);
    return;
  }

  if (password !== confirmPassword) {
    errorEl.textContent = "Passwords do not match.";
    console.log(errorEl);
    return;
  }

  if (password <= 10) {
    errorEl.textContent = "Passwords do not match.";
    return;
  }
  window.location.href = "login.html";
});
