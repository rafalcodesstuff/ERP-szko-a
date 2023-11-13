// Data - Sample reports
const reports = [
    { 
        Nazwa: 'Sprzedaż X.2023', 
        Kategoria: 'Sprzedaż', 
        Ilosc: 73, 
        ZmianyCen: 8, 
        Trendy: 57 
    },
    { 
        Nazwa: 'Ceny II kwartał 2023', 
        Kategoria: 'Towary', 
        Ilosc: 94, 
        ZmianyCen: 41, 
        Trendy: 29 
    },
    { 
        Nazwa: 'Analiza trendów sprzedaży', 
        Kategoria: 'Sprzedaż', 
        Ilosc: 12, 
        ZmianyCen: 95, 
        Trendy: 86 
    },
    { 
        Nazwa: 'Ankieta zadowolenia klientów', 
        Kategoria: 'Ankiety', 
        Ilosc: 68, 
        ZmianyCen: 24, 
        Trendy: 46 
    },
    { 
        Nazwa: 'Wynik finansowy 2022', 
        Kategoria: 'Finanse', 
        Ilosc: 17, 
        ZmianyCen: 39, 
        Trendy: 64 
    },
    { 
        Nazwa: 'Stany magazynowe na koniec 2022', 
        Kategoria: 'Towary', 
        Ilosc: 53, 
        ZmianyCen: 88, 
        Trendy: 2 
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
        resultElement.innerHTML = `<div class="card" onclick="showReportDetails('${result.Nazwa}', '${result.Kategoria}', '${result.Ilosc}', '${result.ZmianyCen}', '${result.Trendy}')">
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

function showReportDetails(name, category, amount, price, trend) {
    productInfo.innerHTML = `
        <div class="card">
            <div class="card-body">
                <h3 class="card-title">${name}</h3>
                <p><strong>Kategoria:</strong> ${category}</p>
                <p><strong>Ilość sprzedaży w danym miesiącu:</strong> ${amount}</p>
                <p><strong>Zmiany cen towarów:</strong> ${price}</p>
                <p><strong>Trendy sprzedaży:</strong> ${trend}</p>
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
