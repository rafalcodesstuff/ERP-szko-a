// Data - Sample products and people
const documents = [
    {
        Nazwa: "Faktura VAT 401/2023",
        Numer: "401/2023",
        Data: "12.08.2023",
        Klient: "Małgorzata Kowalska",
        Kwota: "681,49zł"
    },
    {
        Nazwa: "Faktura VAT 248/2023",
        Numer: "248/2023",
        Data: "29.02.2023",
        Klient: "Tomasz Szymański",
        Kwota: "648,58zł"
    },
    {
        Nazwa: "Faktura VAT 671/2023",
        Numer: "671/2023",
        Data: "11.10.2023",
        Klient: "Piotr Dąbrowski",
        Kwota: "216,57zł"
    },
    {
        Nazwa: "Faktura VAT 28/2023",
        Numer: "28/D/2023",
        Data: "5.01.2023",
        Klient: "Anna Kowalczyk",
        Kwota: "796,85zł"
    },
    {
        Nazwa: "Faktura VAT 520/2023",
        Numer: "520/2023",
        Data: "30.09.2023",
        Klient: "Joanna Kowalski",
        Kwota: "752,99zł"
    },
    {
        Nazwa: "Faktura VAT 1012/2023",
        Numer: "1012/2023",
        Data: "13.11.2023",
        Klient: "Marcin Lewandowski",
        Kwota: "324,25zł"
    }
];


// Function to perform search and display results
function performSearch() {
    const searchInput = document.getElementById('searchProductInput').value.toLowerCase();
    const searchResultsContainer = document.getElementById('searchResults');
    searchResultsContainer.innerHTML = ''; // Clear previous results

    // Search through products
    const productResults = documents.filter(doc =>
        doc.Nazwa.toLowerCase().includes(searchInput) 
    );

    productResults.forEach(result => {
        const resultElement = document.createElement('div');
        resultElement.classList.add('col-md-12', 'mb-2');
        resultElement.innerHTML = `<div class="card" onclick="showDocumentDetails('${result.Nazwa}', '${result.Numer}', '${result.Data}', '${result.Klient}', '${result.Kwota}')">
                                        <div class="card-body">
                                            <span class="card-text"><b>${result.Nazwa}</b></span>
                                            <span class="card-text">  |  </span>
                                            <span class="card-text">${result.Numer ? result.Numer : result.role}</span>
                                        </div>
                                    </div>`;
        searchResultsContainer.appendChild(resultElement);
    });
}

// Event listener for search input
document.getElementById('searchProductInput').addEventListener('input', performSearch);

function showDocumentDetails(name, number, date, client, Kwoty) {
    productInfo.innerHTML = `
        <div class="card">
            <div class="card-body">
                <h3 class="card-title">${name}</h3>
                <p><strong>Numer faktury:</strong> ${number}</p>
                <p><strong>Data wystawienia:</strong> ${date}</p>
                <p><strong>Klient:</strong> ${client}</p>
                <p><strong>Kwota:</strong> ${Kwoty}</p>
                <button type="button" class="btn btn-secondary" 
                    onclick='(()=>{document.getElementById("download-warning").style.display = "block";})()'>
                    Pobierz Fakturę
                </button>
                <div id="download-warning" class="alert alert-info mt-3" role="alert" style="display:none">
                    To jest przykład pobierania
                </div>
            </div>
        </div>
    `;

    productDetails.style.display = 'block';
}
