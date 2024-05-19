const template = `
<ul>
<li> 123 </li>
<li> 123 </li>
<li> 123 </li>
</ul>
`
export default function lentaPage(data) {
    if (true) return template
    const productDiv = document.createElement("div");
    productDiv.classList.add("product");
    productDiv.id = data.id;

    const productName = document.createElement("h3");
    productName.textContent = data.name;
    productDiv.appendChild(productName);

    const productImage = document.createElement("img");
    productImage.src = data.image;
    productImage.alt = data.name;
    productDiv.appendChild(productImage);

    const productDescription = document.createElement("p");
    productDescription.classList.add("description");
    productDescription.textContent = data.description;
    productDiv.appendChild(productDescription);

    const productPrice = document.createElement("p");
    productPrice.classList.add("price");
    productPrice.textContent = data.price + " USD";
    productDiv.appendChild(productPrice);

    const productCategory = document.createElement("p");
    productCategory.classList.add("category");
    productCategory.textContent = "Category: " + data.category;
    productDiv.appendChild(productCategory);

    const productBrand = document.createElement("p");
    productBrand.classList.add("brand");
    productBrand.textContent = "Brand: " + data.brand;
    productDiv.appendChild(productBrand);

    const productRating = document.createElement("p");
    productRating.classList.add("rating");
    productRating.textContent = "Rating: " + data.rating;
    productDiv.appendChild(productRating);

    return productDiv.outerHTML;
}