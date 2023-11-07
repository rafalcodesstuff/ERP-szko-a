function showProductDetails(name, category, description) {
    productInfo.innerHTML = `
        <h3>${name}</h3>
        <p><strong>Kategoria:</strong> ${kategoria}</p>
        <p><strong>Opis:</strong> ${opis}</p>
        <p><strong>Id:</strong> ${id}</p>
        <p><strong>Cena:</strong> ${cena_netto}</p>
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

