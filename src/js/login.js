document.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem("user")) {
      window.location.href = "index.html";
      return;
    }
  
    const form = document.getElementById("loginForm");
    if (!form) return;
  
    form.addEventListener("submit", (e) => {
      e.preventDefault();
  
      const email = document.getElementById("email").value.trim();
      const password = document.getElementById("password").value.trim();
  
      if (!email || !password) {
        alert("Please enter both email and password");
        return;
      }
  
      const user = {
        name: email.split("@")[0],
        email: email,
      };
  
      localStorage.setItem("user", JSON.stringify(user));
  
      window.location.href = "index.html";
    });
  });