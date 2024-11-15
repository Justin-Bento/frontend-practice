const mainApp = document.querySelector("#app");

fetch("https://dummyjson.com/products")
  .then((res) => res.json())
  .then((data) => {
    // Iterate through the first 12 products
    data.products.slice(0, 12).forEach((product) => {
      // Create a card container for each product
      const card = document.createElement("div");
      card.classList.add("product-card"); // Optional: add a class for styling

      // Create a heading for the product title
      const heading = document.createElement("h2");
      heading.textContent = product.title; // Set the title text

      // Create a paragraph for the product description
      const para = document.createElement("p");
      para.textContent = product.description; // Set the description text

      // Append the heading and paragraph to the card
      card.appendChild(heading);
      card.appendChild(para);

      // Append the card to the main container
      mainApp.appendChild(card);
    });
  })
  .catch((error) => console.error("Error fetching products:", error));
