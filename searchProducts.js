// Data - Sample products and people
const products = [
    { nazwa: "Żarówka LED Philips 10W E27", kategoria: "Żarówki LED", id:"159789", cena_netto:"12,00zł" },
    { nazwa: "Pasek LED RGB 2m", kategoria: "Paski LED", id:"587963", cena_netto:"105,70zł" },
    { nazwa: "Oprawa żarówki E14", kategoria: "Oprawy", id:"100987", cena_netto:"5,80" },
    { nazwa: "Kinkiet Classic", kategoria: "Kinkiety", id:"189456", cena_netto:"250,00" },
    { nazwa: "Lampa zewnętrzna z czuknikiem ruchu", kategoria: "Oświetlenie zewnętrzne", id:"859674", cena_netto:"136,70" },
    { nazwa: "Żarówka przemysłowa Warta 60W", kategoria: "Żarówki klasyczne", id:"185444", cena_netto:"3,50" },
    { nazwa: "Lampa stołowa Modren", kategoria: "Lampy stołowe", id:"033358", cena_netto:"340,00" },
    { nazwa: "Lampka na biurko", kategoria: "Biuro", id:"213755", cena_netto:"53,50" },
    { nazwa: "Żarówka LED Lethe 8W", kategoria: "Żarówki LED", id:"147563", cena_netto:"8,99" },
    // Add more products as needed
];

// Function to perform search and display results
function performSearch() {
    const searchInput = document.getElementById('searchProductInput').value.toLowerCase();
    const searchResultsContainer = document.getElementById('searchResults');
    searchResultsContainer.innerHTML = ''; // Clear previous results

    // Search through products
    const productResults = products.filter(product =>
        product.name.toLowerCase().includes(searchInput) 
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
