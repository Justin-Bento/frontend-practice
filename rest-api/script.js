const mainApp = document.querySelector("#app");

fetch("https://dummyjson.com/products/1")
  .then((res) => res.json())
  .then((req) => (mainApp.textContent = req.title))
  .catch((error) => console.error("Error fetching product:", error));
