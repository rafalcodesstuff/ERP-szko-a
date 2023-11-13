// Data - Sample products and people
const products = [
    { nazwa: "Żarówka LED Philips 10W E27", kategoria: "Żarówki LED", id:"159789", cena_netto: 12.00, stan: 75 },
    { nazwa: "Pasek LED RGB 2m", kategoria: "Paski LED", id:"587963", cena_netto: 105.70, stan: 15 },
    { nazwa: "Oprawa żarówki E14", kategoria: "Oprawy", id:"100987", cena_netto: 5.80, stan: 289 },
    { nazwa: "Kinkiet Classic", kategoria: "Kinkiety", id:"189456", cena_netto: 250.00, stan: 6 },
    { nazwa: "Lampa zewnętrzna z czuknikiem ruchu", kategoria: "Oświetlenie zewnętrzne", id:"859674", cena_netto: 136.70, stan: 34 },
    { nazwa: "Żarówka przemysłowa Warta 60W", kategoria: "Żarówki klasyczne", id:"185444", cena_netto: 3.50, stan: 255 },
    { nazwa: "Lampa stołowa Modern", kategoria: "Lampy stołowe", id:"033358", cena_netto: 340.00, stan: 5 },
    { nazwa: "Lampka na biurko", kategoria: "Biuro", id:"213755", cena_netto: 53.50, stan: 45 },
    { nazwa: "Żarówka LED Lethe 8W", kategoria: "Żarówki LED", id:"147563", cena_netto: 8.99, stan: 167 },
    // Add more products as needed
];

var productId;

// Function to perform search and display results
function performSearch() {
    const searchInput = document.getElementById('searchProductInput').value.toLowerCase();
    const searchResultsContainer = document.getElementById('searchResults');
    searchResultsContainer.innerHTML = ''; // Clear previous results

    // Search through products
    const productResults = products.filter(product =>
        product.nazwa.toLowerCase().includes(searchInput) 
    );

    productResults.forEach(result => {
        const resultElement = document.createElement('div');
        resultElement.classList.add('col-md-6', 'mb-2');
        resultElement.innerHTML = `<div class="card" onclick="showProductDetails('${result.nazwa}', '${result.kategoria}', '${result.id}','${result.cena_netto}','${result.stan}')">
                                        <div class="card-body">
                                            <h5 class="card-title">${result.nazwa}</h5>
                                            <p class="card-text">${result.kategoria ? result.kategoria : result.role}</p>
                                        </div>
                                    </div>`;
        searchResultsContainer.appendChild(resultElement);
    });
}

// Event listener for search input
document.getElementById('searchProductInput').addEventListener('input', performSearch);

function editEntry(id) {
    let product = products.find(obj => obj.id == id);

    product["nazwa"] = document.getElementById("productNameInput").value || product["nazwa"];
    product["kategoria"] = document.getElementById("productKategoriaInput").value || product["kategoria"];
    product["id"] = document.getElementById("productIdInput").value || product["id"];
    product["cena_netto"] = document.getElementById("productCenaInput").value || product["cena_netto"];
    product["stan"] = document.getElementById("productStanInput").value || product["stan"];

    document.getElementById("productName").innerText = product["nazwa"];
    document.getElementById("productCategory").innerHTML = `<strong>kategoria:</strong> ${product["kategoria"]}`;
    document.getElementById("productId").innerHTML = `<strong>id:</strong> ${product["id"]}`;
    document.getElementById("productPrice").innerHTML = `<strong>cena netto:</strong> ${product["cena_netto"].toString().replace(".", ",")}zł`;
    document.getElementById("productAmount").innerHTML = `<strong>stan magazynowy:</strong> ${product["stan"]}`;

    performSearch(); // updates the search results
}

function showProductDetails(name, kategoria, id, cena_netto,stan) {
    productInfo.innerHTML = `
        <div class="card">
            <div class="card-body">
                <h3 id="productName" class="card-title">${name}</h3>
                <p id="productCategory"><strong>kategoria:</strong> ${kategoria}</p>
                <p id="productId"><strong>id:</strong> ${id}</p>
                <p id="productPrice"><strong>cena netto:</strong> ${cena_netto.toString().replace(".", ",")}zł</p>
                <p id="productAmount"><strong>stan magazynowy:</strong> ${stan} sztuk</p>
                <button type="button" class="btn btn-secondary" data-toggle="modal" data-target="#productModal">Edytuj Produkt</button>
            </div>
        </div>

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
                            <label for="productCenaInput">Cena Netto (zł) </label>
                            <input type="text" class="form-control" id="productCenaInput" placeholder="${cena_netto}">
                        </div>
                        <div class="form-group">
                            <label for="productStanInput">Stan Magazynowy (sztuki) </label>
                            <input type="text" class="form-control" id="productStanInput" placeholder="${stan}">
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Zamknij</button>
                    <button type="button" class="btn btn-primary" data-dismiss="modal" onclick="editEntry(${id})">
                        Zapisz Zmiany
                    </button>
                </div>
                </div>
            </div>
        </div>
        `;
        
    productDetails.style.display = 'block';
}
