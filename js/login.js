document.getElementById("login").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const errorEl = document.getElementById("error");

  if (!email || !password) {
    errorEl.textContent = "All fields are required.";
    return;
  }

  // Simulate success and redirect to Home Page
  window.location.href = "home.html";
});
