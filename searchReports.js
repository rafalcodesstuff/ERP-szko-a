// Data - Sample reports
const reports = [
    { name: "Raport 1", category: "Category 1" },
    { name: "Raport 2", category: "Category 2" },
    { name: "Raport 3", category: "Category 1" },
    { name: "Raport 4", category: "Category 1" },
    { name: "Raport 5", category: "Category 2" },
    { name: "Raport 6", category: "Category 1" },
    { name: "Raport 7", category: "Category 1" },
    { name: "Raport 8", category: "Category 2" },
    { name: "Raport 9", category: "Category 1" },
];

// Function to perform search and display results
function performSearch() {
    const searchInput = document.getElementById('searchProductInput').value.toLowerCase();
    const searchResultsContainer = document.getElementById('searchResults');
    searchResultsContainer.innerHTML = ''; // Clear previous results

    const reportResults = reports.filter(report =>
        report.name.toLowerCase().includes(searchInput) 
    );

    reportResults.forEach(result => {
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
