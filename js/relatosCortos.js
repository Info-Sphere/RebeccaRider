// Adding click event listener to all links
document.querySelectorAll('.interactive-list a').forEach(link => {
    link.addEventListener('click', function(event) {
        // Add "clicked" class to the parent list item
        const parentLi = link.closest('li');
        parentLi.classList.add('clicked');

        // Wait for the animation to finish before navigating
        setTimeout(() => {
            // Allow normal link behavior (navigate to the page)
            window.location.href = link.href;
        }, 500); // Wait for 500ms (adjust as necessary for your animation)
        
        // Prevent default action (no immediate navigation)
        event.preventDefault();
    });
});
