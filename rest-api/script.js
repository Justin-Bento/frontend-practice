const mainApp = document.querySelector("#app");

// Creating a new HTML Elements
const summary = document.createElement("p");

fetch("https://dummyjson.com/products/1")
  .then((res) => res.json())
  .then((req) => (mainApp.textContent = req.title))
  .catch((error) => console.error("Error fetching product:", error));
