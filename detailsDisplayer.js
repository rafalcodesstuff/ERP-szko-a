function showProductDetails(name, category, description) {
    productInfo.innerHTML = `
        <h3>${name}</h3>
        <p><strong>Category:</strong> ${category}</p>
        <p><strong>Description:</strong> ${description}</p>
    `;

    productDetails.style.display = 'block';
}

function showDocumentDetails(name, category, description) {
    productInfo.innerHTML = `
        <h3>${name}</h3>
        <p><strong>Category:</strong> ${category}</p>
        <p><strong>Description:</strong> ${description}</p>
    `;

    productDetails.style.display = 'block';
}

