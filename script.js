// Dynamic greeting based on time
document.addEventListener("DOMContentLoaded", () => {
  const hour = new Date().getHours();
  let greeting;

  if (hour < 12) {
    greeting = "Good Morning 🌅";
  } else if (hour < 18) {
    greeting = "Good Afternoon ☀️";
  } else {
    greeting = "Good Evening 🌙";
  }

  const greetElement = document.getElementById("greeting");
  if (greetElement) {
    greetElement.textContent = `${greeting}, welcome to my portfolio 👋`;
  }
});
