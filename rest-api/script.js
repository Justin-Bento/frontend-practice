fetch("https://dummyjson.com/products/1")
  .then((res) => res.json())
  .then(
    (req) =>
      (document.querySelector("#app").textContent = req.title)
      // ...
  );
