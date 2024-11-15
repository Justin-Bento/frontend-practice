const mainApp = document.querySelector("#app");

// Create a new paragraph element
const para = document.createElement("p");

fetch("https://dummyjson.com/products/1")
  .then((res) => res.json())
  .then((req) => {
    // Set the product title as the main content of #app
    mainApp.textContent = req.title;

    // Update the paragraph with the product description
    const node = document.createTextNode(req.description); // Use the fetched description
    para.appendChild(node); // Add the text node to the paragraph
    // Append the paragraph after the product title
    mainApp.appendChild(para);
  })
  .catch((error) => console.error("Error fetching product:", error));
