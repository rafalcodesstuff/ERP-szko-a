// Data - Sample reports
const reports = [
    { 
        Nazwa: 'Sprzedaż X.2023', 
        Kategoria: 'Sprzedaż', 
    },
    { 
        Nazwa: 'Ceny II kwartał 2023', 
        Kategoria: 'Towary', 
    },
    { 
        Nazwa: 'Analiza trendów sprzedaży', 
        Kategoria: 'Sprzedaż', 
    },
    { 
        Nazwa: 'Ankieta zadowolenia klientów', 
        Kategoria: 'Ankiety', 
    },
    { 
        Nazwa: 'Wynik finansowy 2022', 
        Kategoria: 'Finanse', 
    },
    { 
        Nazwa: 'Stany magazynowe na koniec 2022', 
        Kategoria: 'Towary', 
    }
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
        resultElement.innerHTML = `<div class="card" onclick="showReportDetails('${result.Nazwa}', '${result.Kategoria}')">
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
// onclick='(function(){document.getElementById("download-warning").classList.toggle("d-none d-md-block");})()'>

function showReportDetails(name, category) {
    productInfo.innerHTML = `
        <div class="card">
            <div class="card-body">
                <h3 class="card-title">${name}</h3>
                <p><strong>Kategoria:</strong> ${category}</p>
                <button type="button" class="btn btn-secondary" 
                    onclick='(()=>{document.getElementById("download-warning").style.display = "block";})()'>
                    Pobierz Raport
                </button>
                <div id="download-warning" class="alert alert-info mt-3" role="alert" style="display:none">
                    To jest przykład pobierania
                </div>
            </div>
        </div>
    `;

    productDetails.style.display = 'block';
}
