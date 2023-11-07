// Data - Sample products and people
const documents = [
    { name: "Faktura A", category: "Category 1" },
    { name: "Faktura B", category: "Category 2" },
    { name: "Faktura C", category: "Category 1" },
    // Add more products as needed
];

// Function to perform search and display results
function performSearch() {
    const searchInput = document.getElementById('searchProductInput').value.toLowerCase();
    const searchResultsContainer = document.getElementById('searchResults');
    searchResultsContainer.innerHTML = ''; // Clear previous results

    // Search through products
    const productResults = documents.filter(doc =>
        doc.name.toLowerCase().includes(searchInput) 
    );

    productResults.forEach(result => {
        const resultElement = document.createElement('div');
        resultElement.classList.add('col-md-12', 'mb-2');
        resultElement.innerHTML = `<div class="card" onclick="showDocumentDetails('${result.name}', '${result.category}', '${result.description}')">
                                        <div class="card-body">
                                            <span class="card-text"><b>${result.name}</b></span>
                                            <span class="card-text">  |  </span>
                                            <span class="card-text">${result.category ? result.category : result.role}</span>
                                        </div>
                                    </div>`;
        searchResultsContainer.appendChild(resultElement);
    });
}

// Event listener for search input
document.getElementById('searchProductInput').addEventListener('input', performSearch);
