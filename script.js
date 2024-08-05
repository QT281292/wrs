document.addEventListener("DOMContentLoaded", function() {
    const products = [
        { name: "Sản phẩm 1", price: "$10" },
        { name: "Sản phẩm 2", price: "$20" },
        { name: "Sản phẩm 3", price: "$30" }
    ];

    const productList = document.getElementById("product-list");
    products.forEach(product => {
        const productDiv = document.createElement("div");
        productDiv.innerHTML = `<h3>${product.name}</h3><p>${product.price}</p>`;
        productList.appendChild(productDiv);
    });
});
