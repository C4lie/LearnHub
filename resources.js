document.addEventListener('DOMContentLoaded', function () {
  const searchInput = document.getElementById('searchInput');
  const filterButton = document.getElementById('filterButton');
  const resourcesGrid = document.getElementById('resourcesGrid');

  // Fetch resource data from JSON file
  fetch('resources.json')
    .then((response) => response.json())
    .then((data) => {
      displayResources(data.resources); // Display all resources initially
      // Event listener for search input
      searchInput.addEventListener('input', function () {
        const searchTerm = searchInput.value.toLowerCase();
        const filteredResources = data.resources.filter((resource) => {
          return resource.title.toLowerCase().includes(searchTerm);
        });
        displayResources(filteredResources); // Display filtered resources
      });
    })
    .catch((error) => console.error('Error fetching resources:', error));

  // Function to display resources in the grid
  function displayResources(resources) {
    resourcesGrid.innerHTML = ''; // Clear previous resources
    resources.forEach((resource) => {
      const resourceItem = document.createElement('li');
      resourceItem.classList.add('resource');
      resourceItem.innerHTML = `
        <h3>${resource.title}</h3>
        <p>${resource.description}</p>
        <a href="${resource.link}" target="_blank">View Resource</a>
      `;
      resourcesGrid.appendChild(resourceItem);
    });
  }

  // Event listener for filter button (example)
  filterButton.addEventListener('click', function () {
    // Implement filter functionality here
    alert('Filter button clicked!');
  });
});
