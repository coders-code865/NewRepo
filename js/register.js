const regNameEl = document.querySelector(".regName");
const regEmailEl = document.querySelector(".regEmail");
const regPasswordEl = document.querySelector(".regPassword");
const regCreateAccountEl = document.querySelector(".regCreateAccount");

regCreateAccountEl.addEventListener("click", async () => {
  const name = regNameEl.value;
  const email = regEmailEl.value;
  const password = regPasswordEl.value;

  try {
    await fetch("/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    });
  } catch (error) {
    console.log("⛔ There was an error trying to register.");
  }
});
