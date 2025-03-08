document.addEventListener('DOMContentLoaded', () => {
    // Select all sections within the main content area
    const sections = document.querySelectorAll('main .content section');
    
    sections.forEach(section => {
        // Locate the header element (assumed to be the first <h2> in each section)
        const header = section.querySelector('h2');
        if (header) {
            // Change cursor style to indicate it's clickable
            header.style.cursor = 'pointer';
            
            header.addEventListener('click', () => {
                // Toggle the display of all sibling elements (the content) in the section
                Array.from(section.children)
                    .filter(child => child !== header)
                    .forEach(child => {
                        child.style.display = (child.style.display === 'none') ? 'block' : 'none';
                    });
            });
        }
    });
});