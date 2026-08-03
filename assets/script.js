  document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.querySelector(".hamburger-toggle");
    const sidebar = document.querySelector(".main-sidebar");

    toggleButton.addEventListener("click", function () {
      sidebar.classList.toggle("active");
      toggleButton.classList.toggle("invert");
    });
  });


  const toggleButton = document.getElementById('darkModeToggle');

  // Check saved preference
  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
      toggleButton.textContent = 'Light Mode';
  } else {
    toggleButton.textContent = 'Dark Mode';
  }

  toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    // Save preference
    if (document.body.classList.contains('dark-mode')) {
      localStorage.setItem('theme', 'dark');
      toggleButton.textContent = 'Light Mode';
    } else {
      localStorage.setItem('theme', 'light');
      toggleButton.textContent = 'Dark Mode';
    }
  });
