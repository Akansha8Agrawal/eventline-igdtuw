document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
      e.preventDefault(); // Stops the form from refreshing the page

      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;

      // Simple username & password check
      if (username === "admin" && password === "admin123") {
        window.location.href = "dashboard.html"; // Go to admin page
      } else {
        alert("Invalid login. Try again.");
      }
    });
  }
});
