document.addEventListener('DOMContentLoaded', function () {
  const searchInput = document.getElementById('searchInput');
  const filterButton = document.getElementById('filterButton');
  const coursesGrid = document.getElementById('coursesGrid');

  // Fetch course data from JSON file
  fetch('courses.json')
    .then((response) => response.json())
    .then((data) => {
      displayCourses(data); // Display all courses initially

      // Event listener for search input
      searchInput.addEventListener('input', function () {
        const searchTerm = searchInput.value.toLowerCase();
        const filteredCourses = data.filter((course) => {
          return course.title.toLowerCase().includes(searchTerm);
        });
        displayCourses(filteredCourses); // Display filtered courses
      });

      // Event listener for filter button
      filterButton.addEventListener('click', function () {
        // Implement filter functionality here if needed
        // For now, we can simply reload all courses
        displayCourses(data);
      });
    })
    .catch((error) => console.error('Error fetching courses:', error));

  // Function to display courses in the grid
  function displayCourses(courses) {
    coursesGrid.innerHTML = ''; // Clear previous courses
    courses.forEach((course) => {
      const courseItem = document.createElement('li');
      courseItem.classList.add('course');
      courseItem.innerHTML = `
        <h3>${course.title}</h3>
        <p>${course.description}</p>
        <a href="${course.link}" target="_blank">View Course</a>
      `;
      coursesGrid.appendChild(courseItem);
    });
  }
});
