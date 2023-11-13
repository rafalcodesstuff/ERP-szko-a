function showProductDetails(name, kategoria, id, cena_netto,stan) {
    productInfo.innerHTML = `
        <h3>${name}</h3>
        <p><strong>kategoria:</strong> ${kategoria}</p>
        <p><strong>id:</strong> ${id}</p>
        <p><strong>cena netto:</strong> ${cena_netto}</p>
        <p><strong>stan magazynowy:</strong> ${stan}</p>
        <button type="button" class="btn btn-secondary" data-toggle="modal" data-target="#productModal">Edytuj Produkt</button>

        <!-- Modal -->
        <div class="modal fade" id="productModal" tabindex="-1" role="dialog" aria-labelledby="productModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="productModalLabel">Edycja ${name}</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form>
                        <div class="form-group">
                            <label for="productNameInput">Nazwa</label>
                            <input type="text" class="form-control" id="productNameInput" placeholder="${name}">
                        </div>
                        <div class="form-group">
                            <label for="productKategoriaInput">Kategoria</label>
                            <input type="text" class="form-control" id="productKategoriaInput" placeholder="${kategoria}">
                        </div>
                        <div class="form-group">
                            <label for="productIdInput">Id</label>
                            <input type="text" class="form-control" id="productIdInput" placeholder="${id}">
                        </div>
                        <div class="form-group">
                            <label for="productCenaInput">Cena Netto</label>
                            <input type="text" class="form-control" id="productCenaInput" placeholder="${cena_netto}">
                        </div>
                        <div class="form-group">
                            <label for="productStanInput">Stan Magazynowy</label>
                            <input type="text" class="form-control" id="productStanInput" placeholder="${stan}">
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Zamknij</button>
                    <button type="button" class="btn btn-primary">Zapisz Zmiany</button>
                </div>
                </div>
            </div>
        </div>
        `;
        
    productDetails.style.display = 'block';
}

function showDocumentDetails(name, category, description) {
    productInfo.innerHTML = `
        <h3>${name}</h3>
        <p><strong>Category:</strong> ${category}</p>
        <p><strong>Description:</strong> ${description}</p>
        <button type="button" class="btn btn-secondary">Pobierz Fakturę</button>
    `;

    productDetails.style.display = 'block';
}

