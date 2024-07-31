const product = document.querySelector(".product-container");

async function getProduct() {
  try {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();

    data.forEach((info) => {
      const card = document.createElement("div");
      card.classList.add("product-card");

      let img = document.createElement("img");
      let h3 = document.createElement("h3");
      let h4 = document.createElement("h4");
      let h5 = document.createElement("h5");

      img.src = info.image;
      h3.innerHTML = info.title;
      h4.innerHTML = `Category: ${info.category}`;
      h5.innerHTML = `Price: $${info.price}`;

      card.appendChild(img);
      card.appendChild(h3);
      card.appendChild(h4);
      card.appendChild(h5);

      product.appendChild(card);
    });
  } catch (error) {
    console.error(error.message);
  }
}

getProduct();
