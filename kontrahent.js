// Data - Sample products and people
const Kontrahents = [
    { nazwa: "Jasne Światła", Kategoria: "Klient", NIP: "104-247-57-19" },
    { nazwa: "Tomasz Kasztan", Kategoria: "Dostawca", NIP: "488-719-75-36" },
    { nazwa: "Michał Anioł", Kategoria: "Klient", NIP: "285-352-69-31" },
];

// Function to perform search and display results
function performSearch() {
    const searchInput = document.getElementById('searchProductInput').value.toLowerCase();
    const searchResultsContainer = document.getElementById('searchResults');
    searchResultsContainer.innerHTML = ''; // Clear previous results

    // Search through products
    const productResults = Kontrahents.filter(k =>
        k.nazwa.toLowerCase().includes(searchInput) 
    );

    productResults.forEach(result => {
        const resultElement = document.createElement('div');
        resultElement.classList.add('col-md-6', 'mb-2');
        resultElement.innerHTML = `<div class="card" onclick="showClientDetails('${result.nazwa}', '${result.Kategoria}', '${result.NIP}')">
                                        <div class="card-body">
                                            <h5 class="card-title">${result.nazwa}</h5>
                                            <p class="card-text">${result.Kategoria ? result.Kategoria : result.role}</p>
                                        </div>
                                    </div>`;
        searchResultsContainer.appendChild(resultElement);
    });
}

// Event listener for search input
document.getElementById('searchProductInput').addEventListener('input', performSearch);

function editEntry(name) {
    let client = Kontrahents.find(obj => obj.nazwa == name);
    console.log(client["nazwa"]);

    client["nazwa"] = document.getElementById("clientNameInput").value || client["nazwa"];
    client["Kategoria"] = document.getElementById("clientKategoriaInput").value || client["Kategoria"];
    client["NIP"] = document.getElementById("clientNIPInput").value || client["NIP"];

    document.getElementById("clientName").innerText = client["nazwa"];
    document.getElementById("clientKategoria").innerHTML = `<strong>Kategoria:</strong> ${client["Kategoria"]}`;
    document.getElementById("clientNIP").innerHTML = `<strong>NIP:</strong> ${client["NIP"]}`;

    performSearch(); // updates the search results
}

function showClientDetails(name, category, nip) {
    productInfo.innerHTML = `
        <div class="card">
            <div class="card-body">
                <h3 id="clientName" class="card-title">${name}</h3>
                <p id="clientKategoria"><strong>Kategoria:</strong> ${category}</p>
                <p id="clientNIP"><strong>NIP:</strong> ${nip}</p>
                <button type="button" class="btn btn-secondary" data-toggle="modal" data-target="#productModal">Edytuj Clienta</button>
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
                            <label for="clientNameInput">Nazwa</label>
                            <input type="text" class="form-control" id="clientNameInput" placeholder="${name}">
                        </div>
                        <div class="form-group">
                            <label for="clientKategoriaInput">Kategoria</label>
                            <input type="text" class="form-control" id="clientKategoriaInput" placeholder="${category}">
                        </div>
                        <div class="form-group">
                            <label for="clientNIPInput">Id</label>
                            <input type="text" class="form-control" id="clientNIPInput" placeholder="${nip}">
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Zamknij</button>
                    <button type="button" class="btn btn-primary" data-dismiss="modal" onclick="editEntry('${name}')">
                        Zapisz Zmiany
                    </button>
                </div>
                </div>
            </div>
        </div>
    `;

    productDetails.style.display = 'block';
}
