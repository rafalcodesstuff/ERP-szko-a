// Data - Sample products and people
const Kontrahents = [
    { name: "Kontrahent A", category: "Category 1" },
    { name: "Kontrahent B", category: "Category 2" },
    { name: "Kontrahent C", category: "Category 1" },
    // Add more products as needed
];

// Function to perform search and display results
function performSearch() {
    const searchInput = document.getElementById('searchProductInput').value.toLowerCase();
    const searchResultsContainer = document.getElementById('searchResults');
    searchResultsContainer.innerHTML = ''; // Clear previous results

    // Search through products
    const productResults = Kontrahents.filter(k =>
        k.name.toLowerCase().includes(searchInput) 
    );

    productResults.forEach(result => {
        const resultElement = document.createElement('div');
        resultElement.classList.add('col-md-6', 'mb-2');
        resultElement.innerHTML = `<div class="card" onclick="showProductDetails('${result.name}', '${result.category}', '${result.description}')">
                                        <div class="card-body">
                                            <h5 class="card-title">${result.name}</h5>
                                            <p class="card-text">${result.category ? result.category : result.role}</p>
                                        </div>
                                    </div>`;
        searchResultsContainer.appendChild(resultElement);
    });
}

// Event listener for search input
document.getElementById('searchProductInput').addEventListener('input', performSearch);
