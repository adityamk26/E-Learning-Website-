document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
  
    searchInput.addEventListener('input', function() {
      const query = this.value.toLowerCase();
      // Here, you would typically fetch autocomplete suggestions from an API
      // For demonstration, let's assume we have a static list of course names
  
      const courses = ['Web Development', 'JavaScript Basics', 'Advanced CSS', 'React for Beginners'];
      const suggestions = courses.filter(course => course.toLowerCase().includes(query));
      
      // Display suggestions (this part would involve updating the UI with the suggestions)
      console.log(suggestions);
    });
  });
  