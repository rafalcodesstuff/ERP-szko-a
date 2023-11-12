// Data - Sample products and people
const Kontrahents = [
    { nazwa: "Kontrahent A", Kategoria: "Klient" },
    { nazwa: "Kontrahent B", Kategoria: "Dostawca" },
    { nazwa: "Kontrahent C", Kategoria: "Klient" },
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
        resultElement.innerHTML = `<div class="card" onclick="showProductDetails('${result.nazwa}', '${result.Kategoria}', '${result.description}')">
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
