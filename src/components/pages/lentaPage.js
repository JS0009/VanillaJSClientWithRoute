export default function lentaPage(id, name, price, description, category, brand, rating, image) {
    const productDiv = document.createElement("div");
    productDiv.classList.add("product");
    productDiv.id = id;

    const productName = document.createElement("h3");
    productName.textContent = name;
    productDiv.appendChild(productName);

    const productImage = document.createElement("img");
    productImage.src = image;
    productImage.alt = name;
    productDiv.appendChild(productImage);

    const productDescription = document.createElement("p");
    productDescription.classList.add("description");
    productDescription.textContent = description;
    productDiv.appendChild(productDescription);

    const productPrice = document.createElement("p");
    productPrice.classList.add("price");
    productPrice.textContent = price + " USD";
    productDiv.appendChild(productPrice);

    const productCategory = document.createElement("p");
    productCategory.classList.add("category");
    productCategory.textContent = "Category: " + category;
    productDiv.appendChild(productCategory);

    const productBrand = document.createElement("p");
    productBrand.classList.add("brand");
    productBrand.textContent = "Brand: " + brand;
    productDiv.appendChild(productBrand);

    const productRating = document.createElement("p");
    productRating.classList.add("rating");
    productRating.textContent = "Rating: " + rating;
    productDiv.appendChild(productRating);

    return productDiv.outerHTML;
}