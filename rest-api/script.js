const mainApp = document.querySelector("#app");

// Create a new heading element and paragraph element
const heading = document.createElement("h2");
const para = document.createElement("p");

fetch("https://dummyjson.com/products/1")
  .then((res) => res.json())
  .then((req) => {
    // Update the heading with the product title
    const headingNode = document.createTextNode(req.title); // Use the fetched title
    heading.appendChild(headingNode); // Add the title text to the heading
    mainApp.appendChild(heading); // Append the heading to the mainApp

    // Update the paragraph with the product description
    const node = document.createTextNode(req.description); // Use the fetched description
    para.appendChild(node); // Add the description text to the paragraph
    mainApp.appendChild(para); // Append the paragraph to the mainApp
  })
  .catch((error) => console.error("Error fetching product:", error));
