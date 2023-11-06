// Data - Sample products and people
const people = [
    { name: "John Doe", role: "Manager" },
    { name: "Jane Smith", role: "Assistant" },
    { name: "Michael Johnson", role: "Supervisor" },
    // Add more people as needed
];

// Function to perform search and display results
function performSearch() {
    const searchInput = document.getElementById('searchPeopleInput').value.toLowerCase();
    const searchResultsContainer = document.getElementById('searchResults');
    searchResultsContainer.innerHTML = ''; // Clear previous results

    // Search through people
    const peopleResults = people.filter(person =>
        person.name.toLowerCase().includes(searchInput) || person.role.toLowerCase().includes(searchInput)
    );

    // Display search results
    const results = productResults.concat(peopleResults);
    results.forEach(result => {
        const resultElement = document.createElement('div');
        resultElement.classList.add('col-md-6', 'mb-2');
        resultElement.innerHTML = `<div class="card"><div class="card-body"><h5 class="card-title">${result.name}</h5><p class="card-text">${result.category ? result.category : result.role}</p></div></div>`;
        searchResultsContainer.appendChild(resultElement);
    });
}

// Event listener for search input
document.getElementById('searchInput').addEventListener('input', performSearch);
