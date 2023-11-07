function showProductDetails(name, kategoria, id, cena_netto) {
    productInfo.innerHTML = `
        <h3>${name}</h3>
        <p><strong>kategoria:</strong> ${kategoria}</p>
        <p><strong>id:</strong> ${id}</p>
        <p><strong>cena_netto:</strong> ${cena_netto}</p>
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

