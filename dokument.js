// Data - Sample products and people
const documents = [
    {
        Nazwa: "Sprzedaż X.2023",
        Numer: "401/A/2023",
        Data: "2023-16-13T12:34:56.789Z",
        Klient: "Małgorzata Kowalski",
        Pozycja: "6z03rhrz3c64er3",
        Kwota: 681
    },
    {
        Nazwa: "Ceny II kwartał 2023",
        Numer: "932/B/2023",
        Data: "2023-01-13T12:34:56.789Z",
        Klient: "Tomasz Szymański",
        Pozycja: "hlsduzvm01hz2an",
        Kwoty: 648
    },
    {
        Nazwa: "Analiza trendów sprzedaży",
        Numer: "671/C/2023",
        Data: "2023-11-13T12:34:56.789Z",
        Klient: "Piotr Dąbrowski",
        Pozycja: "52n25oz0h49q9pj",
        Kwoty: 216
    },
    {
        Nazwa: "Ankieta zadowolenia klientów",
        Numer: "28/D/2023",
        Data: "2023-22-13T12:34:56.789Z",
        Klient: "Anna Kowalczyk",
        Pozycja: "4qdr5idnhkkh7dk",
        Kwoty: 796
    },
    {
        Nazwa: "Wynik finansowy 2022",
        Numer: "520/E/2023",
        Data: "2023-28-13T12:34:56.789Z",
        Klient: "Joanna Kowalski",
        Pozycja: "f2al0afvktmmz4b",
        Kwoty: 882
    },
    {
        Nazwa: "Stany magazynowe na koniec 2022",
        Numer: "815/F/2023",
        Data: "2023-09-13T12:34:56.789Z",
        Klient: "Marcin Lewandowski",
        Pozycja: "qsk58fgryqll4k4",
        Kwoty: 324
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
        resultElement.innerHTML = `<div class="card" onclick="showDocumentDetails('${result.Nazwa}', '${result.Numer}', '${result.Data}', '${result.Klient}', '${result.Pozycja}', '${result.Kwoty}')">
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

function showDocumentDetails(name, number, date, client, position, amount) {
    productInfo.innerHTML = `
        <div class="card">
            <div class="card-body">
                <h3 class="card-title">${name}</h3>
                <p><strong>Numer faktury:</strong> ${number}</p>
                <p><strong>Data wystawienia:</strong> ${Date(date)}</p>
                <p><strong>Klient:</strong> ${client}</p>
                <p><strong>Pozycje na fakturze:</strong> ${position}</p>
                <p><strong>Kwoty:</strong> ${amount}</p>
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
