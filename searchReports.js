// Data - Sample reports
const reports = [
    { Nazwa: "Sprzedaż X.2023", Kategoria: "Sprzedaż" },
    { Nazwa: "Ceny II kwartał 2023", Kategoria: "Towary" },
    { Nazwa: "Analiza trendów sprzedaży", Kategoria: "Sprzedaż" },
    { Nazwa: "Ankieta zadowolenia klientów", Kategoria: "Ankiety" },
    { Nazwa: "Wynik finansowy 2022", Kategoria: "Finanse" },
    { Nazwa: "Stany magazynowe na koniec 2022", Kategoria: "Towary" },
    
];

// Function to perform search and display results
function performSearch() {
    const searchInput = document.getElementById('searchProductInput').value.toLowerCase();
    const searchResultsContainer = document.getElementById('searchResults');
    searchResultsContainer.innerHTML = ''; // Clear previous results

    const reportResults = reports.filter(report =>
        report.Nazwa.toLowerCase().includes(searchInput) 
    );

    reportResults.forEach(result => {
        const resultElement = document.createElement('div');
        resultElement.classList.add('col-md-6', 'mb-2');
        resultElement.innerHTML = `<div class="card" onclick="showProductDetails('${result.Nazwa}', '${result.Kategoria}', '${result.description}')">
                                        <div class="card-body">
                                            <h5 class="card-title">${result.Nazwa}</h5>
                                            <p class="card-text">${result.Kategoria ? result.Kategoria : result.role}</p>
                                        </div>
                                    </div>`;
        searchResultsContainer.appendChild(resultElement);
    });
}

// Event listener for search input
document.getElementById('searchProductInput').addEventListener('input', performSearch);
